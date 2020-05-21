import React, { Component } from 'react';
import { getAllMoods, getAllVoices } from './moodify-db-helpers';
import './App.css';
import MoodGrid from './components/MoodGrid';
import AvatarPage from './components/AvatarPage';
import NavBar from './components/NavBar';

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
  };

  onClick = (mood) => {
    this.setState({ currentMood: mood, showMoods: false });
  };

  render() {
    return (
      <div className='App'>
        <NavBar voices={this.state.voices} />

        <div className={!this.state.showMoods ? 'hidden' : ''}>
          <MoodGrid moods={this.state.moods} onClick={this.onClick} />
        </div>

        <div>
          {this.state.currentMood ? (
            <AvatarPage
              mood={this.state.currentMood}
              reset={this.resetMoodState}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
