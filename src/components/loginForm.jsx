import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    console.log('Submitted');
  };

  handleChange = (event) => {
    const account = { ...this.state.account };
    account.username = event.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              type="text"
              id="username"
              className="form-control"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
