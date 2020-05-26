import React, { Component } from "react";
import { Label, Form } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateExercise extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: [],
        };
    }
    componentDidMount() {
        axios.get("http://localhost:8080/users").then((res) => {
            if (res.data.length > 0) {
                this.setState({
                    users: res.data.map((user) => user.username),
                    username: res.data[0].username,
                });
            }
        });
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value,
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date,
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };
        console.log(exercise);
        axios
            .post("http://localhost:8080/exercises/add", exercise)
            .then((res) => console.log(res.data));
        window.location = "/";
    }
    render() {
        return (
            <div className='m-5'>
                <h3>Create New Exercise log</h3>
                <Form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <Label>Username : </Label>
                        <select
                            // ref='userInput'
                            required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {this.state.users.map((user) => {
                                return (
                                    <option value={user} key={user}>
                                        {user}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className='form-group'>
                        <Label>Description : </Label>
                        <input
                            type='text'
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            className='form-control'
                        />
                    </div>

                    <div className='form-group'>
                        <Label>Duration (in minutes) : </Label>
                        <input
                            type='text'
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <Label>Date (in minutes) : </Label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}></DatePicker>
                        </div>
                    </div>
                    <div className='form-group'>
                        <input
                            className='btn btn-primary'
                            type='submit'
                            value='Create Exercise Log'
                        />
                    </div>
                </Form>
            </div>
        );
    }
}

export default CreateExercise;
