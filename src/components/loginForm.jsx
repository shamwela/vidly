import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: {
      // username: '',
      password: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    console.log('Submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={this.handleChange}
              type="text"
              id="username"
              name="username"
              className="form-control"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={this.handleChange}
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
