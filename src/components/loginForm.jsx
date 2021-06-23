import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Input from './common/input';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    // Will call the server here
    console.log('Submitted');
  };

  render() {
    const { data, errors } = this.state;

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            error={errors.password}
            onChange={this.handleChange}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
