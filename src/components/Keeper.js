import React, {Component} from 'react'
import axios from 'axios'


export default class Keeper extends Component {
  constructor() {
    super()
    this.state = {
      joke: ''
      
    }
  }

  componentDidMount() {
    const randomJoke = Math.ceil(Math.random() * 151)
    
    axios
      .get(`https://geek-jokes.sameerkumar.website/api`)
      .then(res => {
        this.setState({
          joke: res.data 
        })
        console.log(res.data)
      })
  }

  skip() {
    this.componentDidMount()
  }

  
  keep() {
    axios
      .post('/api/Jokes', this.state)
      .then(res => {
        this.props.history.push('/')
      })
  }
  
  render() {
    return (
      <div>
        <h3>{this.state.joke}</h3>
        {/* <img src={this.state.img} alt={this.state} /> */}
        
        <button onClick={() => this.
          keep()}>Keep</button>
        <button onClick={() => this.skip()}>Skip</button>
      </div>
    )
  }
}