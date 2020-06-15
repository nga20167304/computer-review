import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    let validateErrs = [];
    for(let attr in user){
      if(!user[attr]){
        validateErrs.push(attr + ' is require!');
      }
    }
    if(validateErrs.length){
      console.log('login error: ' + validateErrs);
      this.setState({errors: validateErrs});
      return;
    }

    login(user).then(({errs}) => {
      if(errs && errs.length) {
        console.log('login error: ' + errs);
        this.setState({errors: errs});
        return;
      }else{
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    let alerts = this.state.errors.map((err, index) => <div key={index} className="alert alert-danger" role="alert"> {err} </div>);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {alerts}
            <form noValidate onSubmit={this.onSubmit} className="form-input">
              <h1>Sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login