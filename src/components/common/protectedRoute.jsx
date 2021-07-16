import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../../services/authService'

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // If the user is not logged in, redirect to the login page
        if (!auth.getCurrentUser()) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }

        // If the user is logged in, render the component
        if (Component) {
          return <Component {...props} />
        } else {
          render(props)
        }
      }}
    />
  )
}

export default ProtectedRoute
