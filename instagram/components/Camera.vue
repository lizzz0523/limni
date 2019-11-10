<template>
  <transition
    name="slide"
    @afterEnter="initCamera"
    @beforeLeave="destroyCamera"
  >
    <div
      class="camera"
      v-if="isCameraOpen"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <video ref="video" :style="currentFilter" autoplay playsinline />
      <canvas ref="canvas" v-show="isPreviewing" :style="currentFilter" />
      <div class="camera_mask" />
      <div class="camera_filter">
        <ul :style="{ width: `${filters.length * 100}%` }">
          <li
            v-for="(filter, index) in filters"
            :key="index"
            :class="{ camera_filter_current: index === currentIndex }"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            {{ filter.name }}
          </li>
        </ul>
      </div>
      <button
        class="camera_btn-cancel"
        v-show="isPreviewing"
        @click="resetCamera"
      >
        <i class="fa fa-chevron-left" />
      </button>
      <button
        class="camera_btn-save"
        v-show="isPreviewing"
        @click="savePicture"
      >
        <i class="fa fa-check" />
      </button>
      <button
        class="camera_btn-close"
        v-show="!isPreviewing"
        @click="toggleCamera"
      >
        <i class="fa fa-close" />
      </button>
      <button
        class="camera_btn-take"
        v-show="!isPreviewing"
        @click="takePicture"
      />
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { sleep, blur } from '../shared'

export default {
  data () {
    return {
      isPreviewing: false,
      currentIndex: 0
    }
  },
  computed: {
    ...mapState(['mine', 'filters', 'isCameraOpen']),
    currentFilter () {
      const filter = this.filters[this.currentIndex].params
      return {
        filter: Object.keys(filter).reduce((value, key) => {
          value += ` ${key}(${filter[key]})`
          return value
        }, '')
      }
    }
  },
  mounted () {
    this.touch = {}
  },
  methods: {
    ...mapMutations(['toggleCamera', 'addFeed']),
    nextFilter () {
      if (this.currentIndex < this.filters.length - 1) {
        this.currentIndex++
      }
    },
    prevFilter () {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    async initCamera () {
      if (this.stream) return

      const video = this.$refs.video
      video.width = window.innerWidth
      video.height = window.innerHeight

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      })
      this.stream = stream
      video.srcObject = stream
    },
    destroyCamera () {
      if (!this.stream) return

      this.$refs.video.srcObject = null
      this.stream.getTracks().forEach(track => {
        track.stop()
      })
      this.stream = null
    },
    savePicture () {
      const canvas = document.createElement('canvas')
      canvas.width = window.innerWidth
      canvas.height = window.innerWidth

      const ctx = canvas.getContext('2d')
      ctx.drawImage(
        this.$refs.canvas,
        0,
        160,
        canvas.width,
        canvas.width,
        0,
        0,
        canvas.width,
        canvas.width
      )
      const url = canvas.toDataURL()

      this.addFeed({
        like: '0',
        content: 'My #New-Ins',
        imageUrl: url,
        author: { ...this.mine },
        filter: { ...this.filters[this.currentIndex].params }
      })
      this.toggleCamera()
    },
    async takePicture () {
      const video = this.$refs.video
      this.drawImage(video, window.innerWidth, window.innerHeight)
      await sleep(300)
      this.destroyCamera()
    },
    async resetCamera () {
      this.initCamera()
      this.blurImage()
      await sleep(600)
      this.clearImage()
    },
    drawImage (image, width, height) {
      const canvas = this.$refs.canvas
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0, width, height)

      this.isPreviewing = true
    },
    blurImage () {
      const canvas = this.$refs.canvas

      const ctx = canvas.getContext('2d')
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

      const d = imgData.data
      const w = canvas.width
      const h = canvas.height

      const blurData = []
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          blurData.push(blur(d, x, y, w, h))
        }
      }
      for (let i = 0; i < blurData.length; i++) {
        d[i * 4 + 0] = blurData[i].r
        d[i * 4 + 1] = blurData[i].g
        d[i * 4 + 2] = blurData[i].b
        d[i * 4 + 3] = blurData[i].a
      }

      ctx.putImageData(imgData, 0, 0)
    },
    clearImage () {
      const canvas = this.$refs.canvas

      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      this.isPreviewing = false
    },
    handleTouchStart (evt) {
      this.touch.startX = evt.touches[0].clientX
      this.touch.endX = 0
    },
    handleTouchMove (evt) {
      this.touch.endX = evt.touches[0].clientX
    },
    handleTouchEnd () {
      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 10
      ) {
        return
      }
      if (this.touch.endX < this.touch.startX) {
        this.nextFilter()
      } else {
        this.prevFilter()
      }
    }
  }
}
</script>

<style>
.camera {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  width: 100vw;
  height: 100vh;
  background-color: black;
}
.camera video {
  display: block;
  width: 100vw;
  height: 100vh;
}
.camera canvas {
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  animation: fade-in 0.3s ease;
}
.camera_mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.camera_mask::before {
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 160px;
  background-color: rgba(0, 0, 0, 0.2);
}
.camera_mask::after {
  content: '';
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: calc(100vh - 100vw - 160px);
  background-color: rgba(0, 0, 0, 0.2);
}
.camera_filter {
  position: fixed;
  left: 50%;
  bottom: 50px;
  margin-left: -15vw;
  width: 30vw;
  color: white;
  font-size: 14px;
}
.camera_filter ul {
  display: flex;
}
.camera_filter li {
  flex: 1;
  text-align: center;
  opacity: 0.6;
  transition: all 0.6s ease;
}
li.camera_filter_current {
  font-weight: 600;
  opacity: 1;
}
.camera_btn-take {
  position: fixed;
  left: 50%;
  bottom: 100px;
  margin-left: -30px;
  border: 4px solid white;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background: none;
  outline: none;
}
.camera_btn-close {
  position: fixed;
  right: 20px;
  top: 20px;
  color: white;
  font-size: 20px;
  background: none;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
}
.camera_btn-save {
  position: fixed;
  right: 20px;
  bottom: 100px;
  color: white;
  font-size: 20px;
  background: none;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
}
.camera_btn-cancel {
  position: fixed;
  left: 20px;
  bottom: 100px;
  color: white;
  font-size: 20px;
  background: none;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
}
.slide-leave-to,
.slide-enter {
  transform: translateX(-100%);
}
.slide-leave,
.slide-enter-to {
  transform: translateX(0%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
