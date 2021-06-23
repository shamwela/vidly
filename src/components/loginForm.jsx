import React, { Component } from 'react';

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" />
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
