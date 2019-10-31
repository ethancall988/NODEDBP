import React, { Component } from 'react'
import Axios from 'axios'

export default class Jokes extends Component {
  constructor() {
    super()
    this.state = {
      nickname: '',
      editToggle: false
    }
  }

  

  toggleEdit() {
    this.setState({
      editToggle: !this.state.editToggle
    })
    if (this.state.editToggle && this.state.nickname) {
      this.props.updateNameFn(this.props.jokesObj.id, {name: this.state.nickname})
    }
  }

  handleChange(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  render() {
    console.log("joke",this.props.jokesObj)
    return (
      <div className="jokes">
        <h3>{this.props.jokesObj.name}</h3>
        <h3>{this.props.jokesObj.joke}</h3>
        {this.state.editToggle ? (
          <div>
          <input
          value = {this.state.nickname}
          placeholder={this.props.jokesObj.name}
          onChange={e => this.handleChange(e)}
          />
          <button onClick={() => {
            this.toggleEdit()
            this.props.editNickname(this.props.jokesObj.id, this.state.nickname)}}>Submit</button>
          </div>
        ) : null}
        <button onClick={() => this.toggleEdit()}>name</button>
        <button onClick={() => this.props.deleteFn(this.props.jokesObj.id)}>delete</button>
      </div>
    )
  }
}
