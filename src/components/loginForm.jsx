import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import { login } from '../services/authService'

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data
      const { data: jwt } = await login(username, password)
      localStorage.setItem('token', jwt)
      window.location = '/' // reload the window
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = error.response.data
        this.setState({ errors })
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    )
  }
}

export default LoginForm
