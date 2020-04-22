import React, { Component } from 'react';
import './App.css';
import { getAllMoods } from './helper-functions/moodify-db-functions';
import MoodGrid from './components/MoodGrid';
import AvatarPage from './components/AvatarPage';

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

  onClick = (mood) => {
    this.setState({ currentMood: mood });
  };

  render() {
    return (
      <div className='App'>
        <MoodGrid moods={this.state.moods} onClick={this.onClick} />
        {this.state.currentMood ? (
          <AvatarPage mood={this.state.currentMood} />
        ) : null}
      </div>
    );
  }
}

export default App;
