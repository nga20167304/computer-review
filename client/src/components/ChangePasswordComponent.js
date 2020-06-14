import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap'

class ChangePassword extends Component {
    constructor(props) {
      super(props)
  
      this.onChange = this.props.change;
      this.handleCancelChangePassword = this.props.cancel;
      this.handleSavePassword = this.props.save;
      
    }


    render() {
        return(
            <div>
                <div>
                    <label htmlFor="oldPassword">Old password: </label>
                    <input type="password" class="form-control" id="oldPassword" name="oldPassword" onChange={this.onChange} value={this.props.parentState.oldPassword}/>
                    <label htmlFor="newPassword">New password: </label>
                    <input type="password" class="form-control" id="newPassword" name="newPassword" onChange={this.onChange} value={this.props.parentState.newPassword}/>
                    <label htmlFor="confirmPassword">Confirm new password: </label>
                    <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" onChange={this.onChange} value={this.props.parentState.confirmPassword}/>
                </div>
                <div className="my-2">
                    <Button key={'saveBtn'} variant="outline-success" size="sm" onClick={this.handleSavePassword}>Save</Button>
                    {' '}
                    <Button key={'cancelBtn'} variant="outline-dark" size="sm" onClick={this.handleCancelChangePassword}>Cancel</Button>
                </div>
            </div>
        );
    }
}

export default ChangePassword