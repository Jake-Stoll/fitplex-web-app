import React from 'react';
import { connect } from 'react-redux';
import simpleAction from './actions/simpleAction';
import './App.css';
// Import sample component
import Navbar from './components/Navbar/Navbar';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

const App = (props) => {
  const { user } = props;
  return user ? (
    <div className="App">
      <Navbar />
    </div>
  )
    :
    (
      <div>
        <Navbar />
        <p>Not Authenticated</p>
      </div>
    )
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
