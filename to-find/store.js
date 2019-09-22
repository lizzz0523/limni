import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    cards: [
      {
        id: 2,
        title: 'Boston',
        coverUrl: require('./assets/boston.png'),
        location: {
          lat: 'North Lat 36',
          lng: 'East Lng 97'
        },
        address: 'La Crescenta-Montrose, CA91020 Glendale',
        postcode: 'NO. 7911847',
        star: 4,
        posts: [
          {
            id: 3,
            name: 'Amada Lin',
            faceUrl: require('./assets/face1.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          },
          {
            id: 4,
            name: 'Peter Allen',
            faceUrl: require('./assets/face2.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          }
        ],
        active: false
      },
      {
        id: 1,
        title: 'San Francisco',
        coverUrl: require('./assets/san_francisco.png'),
        location: {
          lat: 'North Lat 36',
          lng: 'East Lng 97'
        },
        address: 'La Crescenta-Montrose, CA91020 Glendale',
        postcode: 'NO. 7911847',
        star: 3,
        posts: [
          {
            id: 1,
            name: 'Amada Lin',
            faceUrl: require('./assets/face1.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          },
          {
            id: 2,
            name: 'Peter Allen',
            faceUrl: require('./assets/face2.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          }
        ],
        active: false
      },
      {
        id: 3,
        title: 'Washington',
        coverUrl: require('./assets/washington.png'),
        location: {
          lat: 'North Lat 36',
          lng: 'East Lng 97'
        },
        address: 'La Crescenta-Montrose, CA91020 Glendale',
        postcode: 'NO. 7911847',
        star: 4,
        posts: [
          {
            id: 5,
            name: 'Amada Lin',
            faceUrl: require('./assets/face1.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          },
          {
            id: 6,
            name: 'Peter Allen',
            faceUrl: require('./assets/face2.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          }
        ],
        active: false
      },
      {
        id: 4,
        title: 'New York',
        coverUrl: require('./assets/new_york.png'),
        location: {
          lat: 'North Lat 36',
          lng: 'East Lng 97'
        },
        address: 'La Crescenta-Montrose, CA91020 Glendale',
        postcode: 'NO. 7911847',
        star: 4,
        posts: [
          {
            id: 7,
            name: 'Amada Lin',
            faceUrl: require('./assets/face1.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          },
          {
            id: 8,
            name: 'Peter Allen',
            faceUrl: require('./assets/face2.png'),
            date: new Date(),
            content:
              'The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to'
          }
        ],
        active: false
      }
    ],

    selected: null,
    unselect: null
  },
  mutations: {
    toggleCard (state, { card }) {
      if (state.selected && state.selected.card === card) {
        return
      }
      card.active = !card.active
    },
    nextCard (state) {
      if (state.selected) {
        return
      }
      state.cards.forEach(card => {
        card.active = false
      })
      state.currentIndex++
    },
    prevCard (state) {
      if (state.selected) {
        return
      }
      state.cards.forEach(card => {
        card.active = false
      })
      state.currentIndex--
    },
    selectCard (state, selected) {
      state.unselect = null
      state.selected = selected
    },
    unselectCard (state) {
      state.unselect = state.selected
      state.selected = null
    }
  },
  actions: {}
})
