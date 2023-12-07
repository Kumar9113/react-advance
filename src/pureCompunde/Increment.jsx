import React, { Component } from 'react'

export default class Increment extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
    }
    handel=()=>this.setState({count:0})
  render() {
    console.log("normla calll");
    return (
      <>
      <h1>Normal compound</h1><br></br>
      {this.state.count}
      <button onClick={this.handel}>Click button</button>

      </>
    )
  }
}
