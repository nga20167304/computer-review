import React, {Component} from 'react';
import axios from 'axios'
import {Button, Table} from "react-bootstrap";

class QuanLyNguoiDung extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listUser: [],
            term: "",
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchingFor = (x, term) => {
        return term!==null & (x?.toLowerCase().includes(term.toLowerCase()));
    }

    searchHandler(event) {
        this.setState({term: event.target.value});
    }

    deleteUser = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`, null)
            .then(
                this.setState(pre => {
                    const newList = pre.listUser.filter(v => v.id !== id)
                    return {
                        ...pre,
                        listUser: newList
                    }
                })
            )
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/users`, null)
            .then(res => {
                console.log("res = " + res);
                console.log(res.data);
                this.setState({
                    listUser: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", width: '40rem', marginTop : '0.5rem', marginLeft: '45rem'}}>
                    <div className="input-group">
                        <input
                            name="keyword"
                            type="text"
                            className="form-control mb-2 searchbar"
                            placeholder="User's name or email..."
                            onChange={this.searchHandler}
                        />
                    </div>
                </div>
                <div  className="products justify-content-start" style={{paddingBottom: '0rem'}}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <td style={{width: '10rem', textAlign: 'center'}}>ID</td>
                            <td style={{width: '35rem', textAlign: 'center'}}>Name</td>
                            <td style={{width: '35rem', textAlign: 'center'}}>Email</td>
                            <td style={{width: '15rem', textAlign: 'center'}}>Role</td>
                            <td style={{textAlign: 'center'}}>
                                Delete
                            </td>

                        </tr>
                        </thead>
                    </Table>
                </div>
                <div  className="products justify-content-start" style={{paddingTop: '0.5rem'}}>
                    {
                        this.state.listUser
                            .filter((x) => this.searchingFor(x.name,this.state.term)||this.searchingFor(x.email,this.state.term))
                            .map((user) => {
                                return (
                                    <Table striped bordered hover>
                                        <tbody>
                                        <tr>
                                            <td style={{width: '10rem', textAlign: 'center'}}>{user.id}</td>
                                            <td style={{width: '35rem', textAlign: 'center'}}>{user.name}</td>
                                            <td style={{width: '35rem', textAlign: 'center'}}>{user.email}</td>
                                            <td style={{width: '15rem', textAlign: 'center'}}>{user.role}</td>
                                            <td style={{textAlign: 'center'}}>
                                                <Button style={{width: '6rem'}} onClick={()=>this.deleteUser(user.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>)
                            })}
                </div>
            </div>
        );
    }
}


export default QuanLyNguoiDung;


