import React, { Component } from 'react'
import Hoc from './Hoc';

class Like extends Component {
    render() {
        return (
          <div>
           
            TotalLikes:{this.props.CountNumber} <br />
            <button onClick={this.props.handleCLick}>Like👍🏻</button>
          </div>
        );
      }
  
}
const EnhanceLike=Hoc(Like,5);
export default EnhanceLike;
