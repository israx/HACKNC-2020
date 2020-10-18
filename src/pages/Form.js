import React from "react";
import Dialogue from "./Dialogue";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '', 
        email: '',
        subject: '',
        isOpen: false,
    };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubjectChange = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    handleAvailChange = (event) => {
        this.setState({
            avail: event.target.value
        })
    }

    handleAvailabilityChange = (event) => {
        this.setState( {
            availability: true
        })
    }

    toggleModal = (event) => {
        this.setState( {
            isOpen: !isOpen
        })
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        // change the isOpen
        // this.setState( {isOpen: !isOpen})
        // this.toggleModal;
        this.setState( {isOpen: !isOpen})

    }

    render() {
        return (
            <form>
                
                <Dialogue show={this.state.isOpen} onClose={this.toggleModal} >Thank you for your interest! We will get back to you via the email address provided within 24 hours.</Dialogue>
                
                <div>
                <label className="Join-text">Name: </label>
                <input 
                type="text" 

                placeholder = "name" 
                value={this.state.name} 
                onChange = {this.handleNameChange}/>
                <br></br>
                </div>
                
                <div>
                <label className="Join-text">Email: </label>
                <input 
                type="text" 
                placeholder = "email" 
                value={this.state.email}
                onChange = {this.handleEmailChange}/>
                <br></br>
                </div>

                <div>
                    <label className="Join-text">Subject: </label>
                    <select value = {this.state.subject} onChange={this.handleSubjectChange}>
                        <option value = "">Select</option>
                        <option value = "Mathematics">Mathematics</option>
                        <option value = "Science">Science</option>
                        <option value = "Art">Art</option>
                        <option value = "Geography">Geography</option>
                        <option value = "English">English</option>
                        <option value = "Spanish">Spanish</option>
                    </select>
                </div>

                {/* <div>
                    <input type="checkbox" value=
                </div> */}

                <div>
                    <label className="Join-text">Availability: </label>
                    <select value = {this.state.avail} onChange={this.handleAvailChange}>
                        <option value = "">Select</option>
                        <option value = "Mon">Monday</option>
                        <option value = "Tue">Tuesday</option>
                        <option value = "Wed">Wednesday</option>
                        <option value = "Thu">Thursday</option>
                        <option value = "Fri">Friday</option>
                        <option value = "Sat">Saturday</option>
                        <option value = "Sun">Sunday</option>
                    </select>
                    <br></br>
                </div>


                {/* <div>
                    <option value = 
                    <input type="checkbox" checked={this.state.available} onChange={this.handleAvailabilityChange}/>
                </div> */}


                <br></br>
                <button onClick={e=>this.onSubmit(e)}>Submit</button>
            </form>
        );
    }

}

export default Form;