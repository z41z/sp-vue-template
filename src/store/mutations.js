const mutations = {
  reverseName: (state, payload) => {
    state.name = state.name.split("").reverse().join("")
  },
  changeName: (state, payload) => {
    state.name = payload
  }
}
module.exports.default = module.exports = mutations
