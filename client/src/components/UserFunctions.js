import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      image: newUser.image
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}