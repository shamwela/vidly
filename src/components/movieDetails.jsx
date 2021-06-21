import React, { Component } from 'react';

class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.push('/movies');
  };

  render() {
    const { match } = this.props;

    return (
      <>
        <h1>Movie Form {match.params.id}</h1>
        <button onClick={this.handleSave} className="btn btn-primary">
          Save
        </button>
      </>
    );
  }
}

export default MovieDetails;
