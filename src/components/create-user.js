import React, { Component } from "react";
import { Label, Form } from "reactstrap";
import axios from "axios";
class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: "",
        };
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        };
        console.log(user);
        this.setState({
            username: "",
        });
        axios
            .post("http://localhost:8080/users/add", user)
            .then((res) => console.log(res.data));
    }
    render() {
        return (
            <div className='m-5'>
                <h3>Create New User</h3>
                <Form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <Label>Username : </Label>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='submit'
                            value='Create User'
                            className='btn btn-primary'
                        />
                    </div>
                </Form>
            </div>
        );
    }
}

export default CreateUser;
