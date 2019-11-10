import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mine: {
      id: 0,
      name: 'liz.c',
      faceUrl: require('../assets/face.jpeg')
    },
    friends: [
      {
        id: 1,
        name: 'velo.sid',
        faceUrl: require('../assets/face1.jpeg')
      },
      {
        id: 2,
        name: 'chris.a',
        faceUrl: require('../assets/face2.jpeg')
      },
      {
        id: 3,
        name: 'de.nevilor',
        faceUrl: require('../assets/face3.jpeg')
      },
      {
        id: 4,
        name: 'zachreli',
        faceUrl: require('../assets/face4.jpeg')
      }
    ],
    feeds: [
      {
        id: 1,
        like: '2,234',
        content: 'Hi!! #neonphotoset',
        imageUrl: require('../assets/feed3.jpg'),
        author: {
          name: 'chris.a',
          faceUrl: require('../assets/face2.jpeg')
        },
        filter: {}
      },
      {
        id: 2,
        like: '2,234',
        content: 'Hi!! #neonphotoset',
        imageUrl: require('../assets/feed1.jpg'),
        author: {
          name: 'liz.c',
          faceUrl: require('../assets/face.jpeg')
        },
        filter: {
          brightness: 1.1,
          contrast: 1.1
        }
      },
      {
        id: 3,
        like: '2,234',
        content: 'Hi!! #neonphotoset',
        imageUrl: require('../assets/feed2.jpg'),
        author: {
          name: 'liz.c',
          faceUrl: require('../assets/face.jpeg')
        },
        filter: {}
      }
    ],
    filters: [
      {
        name: 'Normal',
        params: {}
      },
      {
        name: 'Clarendon',
        params: {
          brightness: 1.1,
          contrast: 1.1,
          saturate: 1.1,
          'hue-rotate': '-10deg'
        }
      },
      {
        name: 'Gingham',
        params: {
          brightness: 1.1,
          contrast: 0.7,
          saturate: 1.2,
          'hue-rotate': '-10deg'
        }
      },
      {
        name: 'Moon',
        params: {
          contrast: 1.07,
          grayscale: 1
        }
      }
    ],
    isCameraOpen: false
  },
  mutations: {
    toggleCamera (state) {
      state.isCameraOpen = !state.isCameraOpen
    },
    addFeed (state, feed) {
      feed.id = Math.floor(100 * Math.random())
      state.feeds = [feed, ...state.feeds]
    }
  },
  actions: {},
  modules: {}
})
