import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import {API_KEY} from '../../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userData: [],
      userTracks: [],
      input: ''
    }
    this.users = [];
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData(input) {
    if (input) {
      axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${input}&api_key=${API_KEY}&format=json`)
      .then(data => {
           this.setState({
           userData: [...this.state.userData, data.data]
          });
       })
       .catch(err => {
         console.log(err);
       })
    }
  }

  getRecentTracks(input) {
    if (input) {
      axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=10&user=${input}&api_key=${API_KEY}&format=json`)
      .then(data => {
           this.setState({
           userTracks: [...this.state.userTracks, data.data]
          });
       })
       .catch(err => {
         console.log(err);
       })
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.users.includes(this.state.input)) {
      this.users.push(this.state.input);
      this.getUserData(this.state.input);
      this.getRecentTracks(this.state.input);
    }
  }

  render () {
    return (
    <div className='container'>
      <form>
      <input type='text' onChange={this.handleChange} placeholder='Enter last.fm username' autoFocus/>
      <button onClick={this.handleSubmit}>Submit</button>
      </form>
      {(this.state.userData.length) ? <List users={this.state.userData} tracks={this.state.userTracks} /> : ''}
    </div>)
  }
}

export default App;
