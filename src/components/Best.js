import React, {Component} from 'react'
import Jokes from './Jokes'
import axios from 'axios'


export default class Best extends Component {
  constructor() {
    super()
    this.state = {
      jokes: []
    }
    this.updateName = this.updateName.bind(this)
    this.deleteJokes = this.deleteJokes.bind(this)
    this.editNickname = this.editNickname.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/jokes')
      .then(res => {
        this.setState({
          jokes: res.data
        })
      })
  }

  updateName(id, body) {
    axios
      .put(`/api/jokes/${id}`, body)
      .then(res => {
        this.setState({
          jokes: res.data
        })
      })
  }

  deleteJokes(id) {
    axios
      .delete(`/api/jokes/${id}`)
      .then(res => {
        this.setState({
          jokes: res.data
        })
      })
  }
  editNickname(id, nickname){
    console.log(id, nickname)
    axios.put(`/api/jokes/${id}`, {
      name: nickname
    })
    .then(res => {
      console.log(res.data)
      this.setState({
    jokes: res.data
      }, () => {
        this.render()
      })
    })
  }

  render() {
    return (
      <div className="bestJokes">
        {this.state.jokes.map(el => (
          <Jokes 
            jokesObj={el} key={el.id} 
            updateNameFn={this.updateName}
            deleteFn={this.deleteJokes}
            editNickname={this.editNickname}
          />
        ))}
      </div>
    )
  }
}