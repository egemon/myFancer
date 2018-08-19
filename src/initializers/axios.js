import R from 'ramda'
import axios from 'axios'

export default function configureAxios() {
  axios.interceptors.request.use(R.tap(request => console.info(
    'REQUEST',
    `${request.method.toUpperCase()}: ${request.url}`,
    request.data,
    request.params,
  )))
  axios.interceptors.response.use(
    R.tap(response => console.info(
      'RESPONSE',
        `${response.request._method}: ${response.request._url}`, // eslint-disable-line
      response.status,
      response.data,
    )),
    (error) => {
      if (error.response) {
        console.info(
            `${error.response.request._method}: ${error.response.request._url}`, // eslint-disable-line
          'error',
          error.response.status,
          error.response.data,
        )
      } else {
        console.info(error.message)
      }
      throw error
    },
  )
}
