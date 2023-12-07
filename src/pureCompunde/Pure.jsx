import React, {  PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
    }
    handel=()=>this.setState({count:this.state.count+1})
  render() {
    console.log("Pure Compund")
    return (
        <>
        <h1>Pure compound</h1><br></br>
        {this.state.count}
        <button onClick={this.handel}>Click button</button>
  
        </>
    )
  }
}
