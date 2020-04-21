import React, { Component } from 'react';
import MoodGrid from './components/MoodGrid';
import { getAllMoods } from './helper-functions/moodify-db-functions';
import './App.css';

const initialState = {
  name: '',
  greeting: '',
  moods: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    getAllMoods().then((moods) => this.setState({ moods: moods }));
  }

  
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then((response) => response.json())
      .then((state) => this.setState(state));
  };

  render() {
    console.log(this.state.moods)
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Enter your name: </label>
          <input
            id='name'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <p>{this.state.greeting}</p>
        <MoodGrid moods={this.state.moods} />
      </div>
    );
  }
}

export default App;
