import React from 'react';
import ReactDom from 'react-dom';
import { Button, Label, Input, Form, FormGroup } from 'reactstrap';

//import axios from 'axios';
const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '/public/bundles/fosjsrouting/js/router.min.js';

Routing.setRoutingData(routes);

class Register extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: 'ff@wp.pl',
            password: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
            successMessage: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // because our form inputs' names are the same
    // as our state names, we can just use them as the state names
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
    });
    }

    handleSubmit(e) {
        e.preventDefault();

        $.ajax({
            url: Routing.generate('api_users'),
            type: 'POST',
            data: {
                "firstname": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "password": this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            },
            success: function(response) {
                this.setState({
                    firstNameError: response.firstNameError ? response.firstNameError : null,
                    lastNameError: response.lastNameError ? response.lastNameError : null,
                    emailError: response.emailError ? response.emailError : null,
                    passwordError: response.passwordError ? response.passwordError : null,
                    successMessage: response.success_message ? response.success_message : null,
                });
            }.bind(this),
            error: function(xhr) {
                console.log(`An error occured: ${xhr.status} ${xhr.statusText}`);
            }
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="firstName">
                        Imię
                    </Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Imię"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <small>{this.state.fullnameError}</small>
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">
                        Nazwisko
                    </Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Nazwisko"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <small>{this.state.fullnameError}</small>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Zarejestruj</Button>
                    <span className='text-success'>{this.state.successMessage}</span>
                </FormGroup>
            </Form>

            // <form onSubmit={this.handleSubmit}>
            //     <label htmlFor="fullname">Fullname</label>
            //     <input type="text" name='fullname' value={this.state.fullname} onChange={this.handleChange} id="fullname" placeholder="Fullname" />
            //     <small>{this.state.fullnameError}</small>
            //
            //     <label htmlFor="email">Email</label>
            //     <input type="email" name='email' value={this.state.email} onChange={this.handleChange} id="email" placeholder="Email" />
            //     <small>{this.state.emailError}</small>
            //
            //     <label htmlFor="password">Password</label>
            //     <input type="password" name='password' value={this.state.password} onChange={this.handleChange} id="password" placeholder="Password" />
            //     <small>{this.state.passwordError}</small>
            //
            //     <Button color="primary" type="submit">Zarejestruj</Button>
            //     <span className='text-success'>{this.state.successMessage}</span>
            // </form>
        );
    }
}

ReactDom.render(<Register />, document.getElementById('form'));