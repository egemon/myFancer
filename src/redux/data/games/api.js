import R from 'ramda'
import axios from 'axios'

export const createGameRequest = game => () => axios.post('https://myfancer.firebaseio.com/games.json', {
  game,
  date: Date.now(), // just to create real item in FB
})
  .then(resp => ({
    id: resp.data.name,
    players: [], // because we can't store empty field in FB
  }))


export const updateGameRequest = ({ id, update }) => () => Promise.resolve()
  .then(() => ({ id, update }))

// TODO: specify baseUrl
// TODO: specify namespace for collection
export const readGameRequest = params => () => axios.get('https://myfancer.firebaseio.com/games.json', { params })
  .then(R.pipe(
    R.path(['data']),
    R.toPairs(),
    R.map(([id, item]) => ({
      id,
      ...item,
    })),
  ))
