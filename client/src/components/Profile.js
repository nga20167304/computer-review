import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button} from 'react-bootstrap';
import { updateUser } from './UserFunctions';

import ChangePasswordComponent from './ChangePasswordComponent';

var md5 = require('md5');

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      email: '',
      image: '',
      errors: [],
      success: [],
      changeName: false,
      changePassword: false,
      newName: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    }

    this.onChange = this.onChange.bind(this);

    this.handleClickChangeImage = this.handleClickChangeImage.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleClickChangeName = this.handleClickChangeName.bind(this);
    this.handleCancelChangeName = this.handleCancelChangeName.bind(this);
    this.handleSaveName = this.handleSaveName.bind(this);
    this.handleClickChangePassword = this.handleClickChangePassword.bind(this);
    this.handleCancelChangePassword = this.handleCancelChangePassword.bind(this);
    this.handleSavePassword = this.handleSavePassword.bind(this);
    
  }

  componentDidMount() {
    const token = localStorage.usertoken
    if(!token){
      this.props.history.push(`/login`);
      return;
    }
    const decoded = jwt_decode(token)
    this.setState({
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      image: decoded.image,
      newName: decoded.name
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClickChangeImage(e) {
    document.getElementById('hiddenFileInput').click();
  }

  handleChangeImage(e) {
    e.preventDefault();
    let file = e.target.files[0];
    console.log(file);
    updateUser({id: this.state.id, image: file}).then(({errs}) => {
      if(errs && errs.length) {
        console.log('update error: ' + errs);
        this.setState({errors: errs});
        return;
      }else{
        const token = localStorage.usertoken
        if(!token){
          this.props.history.push(`/login`);
          return;
        }
        const decoded = jwt_decode(token)
        this.setState({
          image: decoded.image
        })
      }
    })
  }

  handleClickChangeName(e) {
    this.setState({changeName: true, success: [], errors: []});
  }

  handleCancelChangeName(e) {
    this.setState({changeName: false, newName: this.state.name, errors: []});
  }

  handleSaveName(e) {
    e.preventDefault();
    if(!this.state.newName.length) {
      this.setState({errors: ['Name not empty!']});
      return;
    }
    updateUser({id: this.state.id, name: this.state.newName}).then(({errs}) => {
      if(errs && errs.length) {
        console.log('update error: ' + errs);
        this.setState({errors: errs});
        return;
      }else{
        const token = localStorage.usertoken
        if(!token){
          this.props.history.push(`/login`);
          return;
        }
        const decoded = jwt_decode(token)
        this.setState({
          name: decoded.name,
          success: ['Change name successful!']
        })
        this.handleCancelChangeName(e);
      }
    })
  }

  handleClickChangePassword(e) {
    console.log(this.state.changePassword);
    this.setState({changePassword: true, oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      success: [], errors: []});
  }

  handleCancelChangePassword(e) {
    console.log(this.state.changePassword);
    this.setState({changePassword: false, oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      errors: []});
  }
  
  handleSavePassword(e) {
    e.preventDefault();
    const token = localStorage.usertoken
      if(!token){
        this.props.history.push(`/login`);
        return;
      }
    const decoded = jwt_decode(token)
    if(md5(this.state.oldPassword) !== decoded.password) {
      this.setState({errors: ['Old password is wrong!']});
      return;
    }
    if(!this.state.newPassword.length) {
      this.setState({errors: ['Password not empty!']});
      return;
    }
    if(this.state.newPassword !== this.state.confirmPassword) {
      this.setState({errors: ['Confirm password is wrong!']});
      return;
    }
    updateUser({id: this.state.id, password: this.state.newPassword}).then(({errs}) => {
      if(errs && errs.length) {
        console.log('update error: ' + errs);
        this.setState({errors: errs});
        return;
      }else{
        const token = localStorage.usertoken
        if(!token){
          this.props.history.push(`/login`);
          return;
        }
        this.setState({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
          success: ['Change password successful!']
        })
        this.handleCancelChangePassword(e);
      }
    })
  }

  render() {
    
    let alerts = this.state.errors.map((err, index) => <div key={index} className="alert alert-danger" role="alert"> {err} </div>);
    let success = this.state.success.map((err, index) => <div key={index} className="alert alert-success" role="alert"> {err} </div>);

    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
              <Button className="btn btn-default btn-circle"
              style={{border: "none", background: "none", borderRadius: "100%", width:"150px", height:"150px", padding:"0", margin:"0"}}
              onClick={this.handleClickChangeImage}
              >
                <Image width="100%" height="100%" src={this.state.image} alt="no img" roundedCircle/>
                <input type="file"
                      id="hiddenFileInput"
                      name="image"
                      onChange={this.handleChangeImage}
                      style={{display:'none'}} 
                />
              </Button>
            
            <table className="table col-md-6 mx-5">
              <tbody>
                {alerts.length ? <tr><td colSpan="2" style={{border: "none"}}>{alerts}</td></tr> : ''}
                {success.length ? <tr><td colSpan="2" style={{border: "none"}}>{success}</td></tr> : ''}
                <tr>
                  <td><b>Name</b></td>
                  <td>
                    {this.state.changeName ?
                      <input type="text" className="form-control my-2" name="newName" value={this.state.newName}
                      onChange={this.onChange}
                      >
                      </input> :
                      this.state.name
                    }
                    {this.state.changeName ?
                      [
                        <Button key={'saveBtn'} variant="outline-success" size="sm" onClick={this.handleSaveName}>Save</Button>,
                        ' ',
                        <Button key={'cancelBtn'} variant="outline-dark" size="sm" onClick={this.handleCancelChangeName}>Cancel</Button>
                      ] : 
                      <Button key={'changeBtn'} variant="link" size="sm" onClick={this.handleClickChangeName}>Change</Button>
                    }
                  </td>
                </tr>
                <tr>
                  <td><b>Email</b></td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  {this.state.changePassword ?
                    <td><ChangePasswordComponent cancel={this.handleCancelChangePassword} save={this.handleSavePassword} change={this.onChange} parentState={this.state}/></td>:
                    <td colSpan="2"><Button variant="link" style={{padding: "0"}} onClick={this.handleClickChangePassword}>Change password</Button></td>
                  }
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile