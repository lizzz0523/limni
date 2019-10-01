import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feeds: [
      {
        id: 1,
        coverUrl: require('./assets/universe.jpeg'),
        faceUrl: require('./assets/face4.jpeg'),
        subscribers: 930,
        posts: [
          {
            id: 1,
            faceUrl: require('./assets/face1.jpeg'),
            name: 'Dean McGuire',
            date: new Date(),
            content:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            id: 2,
            faceUrl: require('./assets/face2.jpeg'),
            name: 'Sue Fletcher',
            date: new Date(),
            content:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          }
        ],
        goal: [99, 100, 80, 100, 60, 10, 100],
        used: [150, 260, 260, 420, 220, 360],
        time: [10, 70, 40, 90, 20, 90],

        totalView: 999,
        totalLike: 150,
        totalComment: 25
      },
      {
        id: 2,
        coverUrl: require('./assets/canyon.jpeg'),
        faceUrl: require('./assets/face3.jpeg'),
        subscribers: 930,
        posts: [
          {
            id: 1,
            faceUrl: require('./assets/face1.jpeg'),
            name: 'Dean McGuire',
            date: new Date(),
            content:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            id: 2,
            faceUrl: require('./assets/face2.jpeg'),
            name: 'Sue Fletcher',
            date: new Date(),
            content:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          }
        ],
        goal: [99, 100, 80, 100, 60, 10, 100],
        used: [150, 260, 260, 420, 220, 360],
        time: [10, 70, 40, 90, 20, 90],

        totalView: 999,
        totalLike: 150,
        totalComment: 25
      },
      {
        id: 3,
        coverUrl: require('./assets/airport.jpeg'),
        faceUrl: require('./assets/face2.jpeg'),
        subscribers: 930,
        posts: [
          {
            id: 1,
            faceUrl: require('./assets/face1.jpeg'),
            name: 'Dean McGuire',
            date: new Date(),
            content:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          },
          {
            id: 2,
            faceUrl: require('./assets/face2.jpeg'),
            name: 'Sue Fletcher',
            date: new Date(),
            content:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          }
        ],
        goal: [99, 100, 80, 100, 60, 10, 100],
        used: [150, 260, 260, 420, 220, 360],
        time: [10, 70, 40, 90, 20, 90],

        totalView: 999,
        totalLike: 150,
        totalComment: 25
      }
    ],

    selected: null,
    unselect: null
  },
  mutations: {
    selectFeed (state, selected) {
      state.unselect = null
      state.selected = selected
    },
    unselectFeed (state) {
      state.unselect = state.selected
      state.selected = null
    }
  },
  actions: {}
})
