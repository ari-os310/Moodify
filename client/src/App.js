import React, { Component } from 'react';
import './App.css';
import { getAllMoods } from './helper-functions/moodify-db-functions';
import MoodGrid from './components/MoodGrid';
import AvatarPage from './components/AvatarPage';
import NavBar from './components/NavBar';
// import Reset from './components/Reset';

const initialState = {
  moods: [],
  currentMood: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    getAllMoods().then((moods) => this.setState({ moods: moods }));
  }

  resetMoodState = () => {
    this.setState({ currentMood: null });
  };

  onClick = (mood) => {
    this.setState({ currentMood: mood });
    window.location.hash = 'currentMood';
  };

  render() {
    return (
      <div className='App'>
        <NavBar />
        <MoodGrid moods={this.state.moods} onClick={this.onClick} />
        <div id='currentMood'>
          {this.state.currentMood ? (
            <AvatarPage mood={this.state.currentMood} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
