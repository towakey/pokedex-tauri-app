import { pokedex } from './assets/pokedex.json'

export const state = () => ({
  pokedex: pokedex,
})

export const getters = {
  getAll (state) {
    return state.pokedex
  }
}
