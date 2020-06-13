import axios from 'axios'

export const register = newUser => {
  let form_data = new FormData();
  // console.log('image ', newUser.image);
    form_data.append('image', newUser.image);
    form_data.append('name', newUser.name);
    form_data.append('email', newUser.email);
    form_data.append('password', newUser.password);
    return axios.post('users/register', form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then(response => {
        let {errs} = response.data;
        if(errs && errs.length) {
          console.log(errs);
        }else {
          console.log('Registed');
        }
        return response.data;
      }).catch(err => {
        console.log(err)
      })
  // return axios
  //   .post('users/register', {
  //     name: newUser.name,
  //     email: newUser.email,
  //     password: newUser.password,
  //     image: newUser.image
  //   })
    
}

export const updateUser = user => {
  let form_data = new FormData();
  // console.log('image ', newUser.image);
  form_data.append('id', user.id);
  if(user.image){
    form_data.append('image', user.image);
  }
  if(user.name){
    form_data.append('name', user.name);
  }
  if(user.password){
    form_data.append('password', user.password);
  }    
    return axios.put('users/update', form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then(response => {
        let {errs} = response.data;
        if(errs && errs.length) {
          console.log(errs);
        }else {
          localStorage.setItem('usertoken', response.data)
        }
        return response.data;
      })
      .catch(err => {
        console.log(err)
      })
  // return axios
  //   .post('users/register', {
  //     name: newUser.name,
  //     email: newUser.email,
  //     password: newUser.password,
  //     image: newUser.image
  //   })
    
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      let {errs} = response.data;
      if(errs && errs.length) {
        console.log(errs);
      }else {
        localStorage.setItem('usertoken', response.data)
      }
      return response.data;
    })
    .catch(err => {
      console.log(err)
    })
}