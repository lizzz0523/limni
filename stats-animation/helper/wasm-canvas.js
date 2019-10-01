export async function loadImageData (src, { width, height } = {}) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src + '?from=fetch'
    img.onerror = err => {
      img.onerror = img.onload = null
      reject(err)
    }
    img.onload = () => {
      img.onerror = img.onload = null
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')

      const wh = img.width / img.height > width / height
      const ow = wh ? (img.width * height) / img.height : width
      const oh = wh ? height : (img.height * width) / img.width
      const ot = wh ? 0 : (oh - height) / 2
      const ol = wh ? (ow - width) / 2 : 0

      ctx.drawImage(img, -ol, -ot, ow, oh)
      const data = ctx.getImageData(0, 0, width, height).data
      resolve({ data, width, height })
    }
  })
}

export async function createRenderer (canvas, url) {
  const ww = window.innerWidth
  const wh = window.innerHeight
  const pr = window.devicePixelRatio
  const { data, width, height } = await loadImageData(url, {
    width: (ww - 40) * pr,
    height: 240 * pr
  })
  const { instance } = await instanceRenderer()
  const inputLen = width * height * 4
  const input = instance.exports.create_buf(inputLen)

  canvas.width = ww * pr
  canvas.height = wh * pr
  canvas.style.width = `${ww}px`
  canvas.style.height = `${wh}px`
  const context = canvas.getContext('2d')

  const outputLen = canvas.width * canvas.height * 4
  const output = instance.exports.create_buf(outputLen)

  const inputBuf = new Uint8ClampedArray(
    instance.exports.memory.buffer,
    input,
    inputLen
  )
  inputBuf.set(data, 0)

  const left = 20 * pr
  const top = 104 * pr
  instance.exports.init(width, height, left, top, 60, 10)

  return function render (play) {
    instance.exports.render(
      input,
      output,
      canvas.width,
      canvas.height,
      width,
      height,
      left,
      top
    )
    instance.exports.update(canvas.width, canvas.height)

    const outputBuf = new Uint8ClampedArray(
      instance.exports.memory.buffer,
      output,
      outputLen
    )
    const outputData = new ImageData(outputBuf, canvas.width, canvas.height)

    const radius = 10 * pr
    const radiusFixed = (sx, sy, cx, cy, ex, ey, r = radius) => {
      ex = ex || sx + r
      ey = ey || sy + r
      cx = cx || sx
      cy = cy || sy
      for (let y = sy; y < ey; y++) {
        for (let x = sx; x < ex; x++) {
          if (distance(x, y, cx, cy) > r) {
            const ox = x + left
            const oy = y + top
            const o = (oy * canvas.width + ox) << 2
            outputBuf[o + 3] = 0
          }
        }
      }
    }
    radiusFixed(0, 0, radius, radius)
    radiusFixed(width - radius, 0, null, radius)
    radiusFixed(0, height - radius, radius, null)
    radiusFixed(width - radius, height - radius)

    context.putImageData(outputData, 0, 0)

    if (play) {
      requestAnimationFrame(render)
    }
  }
}

export async function instanceRenderer () {
  let memoryStates = new WeakMap()
  let instance = null
  function syncall (instance, n, args) {
    switch (n) {
      default:
        // console.log("Syscall " + n + " NYI.");
        break

      case /* brk */ 45:
        return 0

      case /* mmap2 */ 192:
        const memory = instance.exports.memory
        const requested = args[1]
        let memoryState = memoryStates.get(instance)
        if (!memoryState) {
          memoryState = {
            object: memory,
            currentPosition: memory.buffer.byteLength
          }
          memoryStates.set(instance, memoryState)
        }
        const position = memoryState.currentPosition
        if (position + requested > memory.buffer.byteLength) {
          const need = Math.ceil(
            (position + requested - memory.buffer.byteLength) / 65536
          )
          memory.grow(need)
        }
        memoryState.currentPosition += requested
        return position
    }
  }
  const response = await fetch('./main.wasm')
  const bytes = await response.arrayBuffer()
  const result = await WebAssembly.instantiate(bytes, {
    env: {
      __syscall0: function __syscall0 (n, ...args) {
        return syncall(instance, n, args)
      },
      __syscall1: function __syscall1 (n, ...args) {
        return syncall(instance, n, args)
      },
      __syscall2: function __syscall2 (n, ...args) {
        return syncall(instance, n, args)
      },
      __syscall3: function __syscall3 (n, ...args) {
        return syncall(instance, n, args)
      },
      __syscall4: function __syscall4 (n, ...args) {
        return syncall(instance, n, args)
      },
      __syscall6: function __syscall6 (n, ...args) {
        return syncall(instance, n, args)
      }
    }
  })
  instance = result.instance

  return result
}

export function distance (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
