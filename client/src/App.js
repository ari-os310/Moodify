import React, { Component } from 'react';
import MoodGrid from './components/MoodGrid';
import { getAllMoods } from './helper-functions/moodify-db-functions';
import './App.css';
import AffirmationsList from './components/AffirmationsList';

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
        <AffirmationsList affirmations={this.state.affirmations} />
        {/* mood deets mood (single) = ...current mood => new component contains sub page 
        if !mood => 000*/}
      </div>
    );
  }
}

export default App;
