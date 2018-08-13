// import axios from 'axios'

// export const createUserRequest = (params) => () => axios.post('/users')
export const createUserRequest = ({ name }) => () => Promise.resolve({
  name,
  id: String(Math.random()),
})
