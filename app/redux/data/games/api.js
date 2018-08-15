// import axios from 'axios'

// export const createGameRequest = () => axios.post('/games')
export const createGameRequest = game => () => Promise.resolve({
  ...game,
  id: String(Math.random()),
})

// TODO: maybe we need to send empty body only in response that update is oK
export const updateGameRequest = game => () => Promise.resolve({
  ...game,
})

export const togglePlayerRequest = ({
  player,
  wasSelected,
}) => () => Promise.resolve({
  ...player,
  isSelected: !wasSelected,
})
