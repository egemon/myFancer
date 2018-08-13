// import axios from 'axios'

// export const createGameRequest = () => axios.post('/games')
export const createGameRequest = game => () => Promise.resolve({
  ...game,
  id: String(Math.random()),
})

export const togglePlayerRequest = ({
  player,
  wasSelected,
}) => () => Promise.resolve({
  ...player,
  isSelected: !wasSelected,
})
