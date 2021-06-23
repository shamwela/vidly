import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { username, password } = this.state.account;

    if (username.trim() === '') errors.username = 'Username is required.';
    if (password.trim() === '') errors.password = 'Password is required.';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Will call the server here
    console.log('Submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            error={errors.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
