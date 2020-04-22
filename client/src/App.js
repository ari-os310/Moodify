import React, { Component } from 'react';
import './App.css';
import { getAllMoods } from './helper-functions/moodify-db-functions';
import MoodGrid from './components/MoodGrid';
import AvatarPage from './components/AvatarPage';

const initialState = {
  moods: [],
  affirmations: [
    'Affirmation1',
    'Affirmation2Affirmation',
    'Affirmation3',
    'Affirmation4',
    'Affirmation5',
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    getAllMoods().then((moods) => this.setState({ moods: moods }));
  }

  render() {
    console.log(this.state.moods);
    return (
      <div className='App'>
        <MoodGrid moods={this.state.moods} />
        <AvatarPage affirmations={this.state.affirmations} />
        {/* mood deets mood (single) = ...current mood => new component contains sub page 
        if !mood => 000*/}
      </div>
    );
  }
}

export default App;
