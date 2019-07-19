import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PostsList from './containers/PostsList';
import Post from './containers/Post';
import CreatePost from './containers/CreatePost';

import './App.css';
import { getPostsList } from './redux/actions/posts';

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  getPostsList: () => dispatch(getPostsList())
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { history } = this.props;
    console.log(this.props)

    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts/create">Add</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={PostsList} />
            <Route exact path="/posts/:id" component={Post} />
            <Route path="/posts/create" component={CreatePost} />
          </div>
        </Router>
    );
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
