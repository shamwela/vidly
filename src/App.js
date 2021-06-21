import './App.css';
import Navbar from './components/navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import MovieDetails from './components/movieDetails';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/common/notFound';

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="content" className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
