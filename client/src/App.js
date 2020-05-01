import React, { Component } from 'react';
import './App.css';
import { getAllMoods } from './helper-functions/moodify-db-functions';
import MoodGrid from './components/MoodGrid';
import AvatarPage from './components/AvatarPage';

const initialState = {
  moods: [],
  currentMood: null,
  // audioFile: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    getAllMoods().then((moods) => this.setState({ moods: moods }));
  }

  onClick = (mood) => {
    this.setState({ currentMood: mood });
    window.location.hash = 'currentMood';
  };

  // sendAudio().then((audioFile) => this.setState({audioFile: audioFile}));

  render() {
    return (
      <div className='App'>
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
