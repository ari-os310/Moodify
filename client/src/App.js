import React, { Component } from 'react';
import './App.css';
import {
  getAllMoods,
  getAllVoices,
} from './helper-functions/moodify-db-functions';
import MoodGrid from './components/MoodGrid';
import AvatarPage from './components/AvatarPage';
import NavBar from './components/NavBar';
// import Reset from './components/Reset';

const initialState = {
  moods: [],
  currentMood: null,
  voices: [],
  showMoods: true,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    getAllMoods().then((moods) => this.setState({ moods: moods }));
    getAllVoices().then((voices) => this.setState({ voices: voices }));
  }

  resetMoodState = () => {
    this.setState({ currentMood: null, showMoods: true });
    window.history.replaceState(null, null, ' ');
  };

  onClick = (mood) => {
    this.setState({ currentMood: mood, showMoods: false });
    window.location.hash = 'currentMood';
  };

  render() {
    return (
      <div className='App'>
        <NavBar voices={this.state.voices} />

        <div className={!this.state.showMoods ? 'hidden' : ''}>
          <MoodGrid moods={this.state.moods} onClick={this.onClick} />
        </div>

        <div id='currentMood'>
          {this.state.currentMood ? (
            <AvatarPage mood={this.state.currentMood} reset={this.resetMoodState} />
          ) : null}
        </div>

        {/* <div className='Reset'>
          <Reset reset={this.resetMoodState} />
        </div> */}
      </div>
    );
  }
}

export default App;
