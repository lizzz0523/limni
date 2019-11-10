export async function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function filter (params, init = '') {
  return Object.keys(params).reduce((value, key) => {
    value += ` ${key}(${params[key]})`
    return value
  }, init)
}

export function blur (data, x, y, w, h) {
  let v = { r: 0, g: 0, b: 0, a: 0 }
  let n = 0

  for (let dy = -5; dy <= 5; dy++) {
    for (let dx = -5; dx <= 5; dx++) {
      const ry = y + dy
      const rx = x + dx
      if (rx < 0 || rx >= w || ry < 0 || ry >= h) {
        continue
      }
      const t = (ry * w + rx) * 4
      v.r += data[t + 0]
      v.g += data[t + 1]
      v.b += data[t + 2]
      v.a += data[t + 3]
      n++
    }
  }
  v.r /= n
  v.g /= n
  v.b /= n
  v.a /= n
  return v
}
