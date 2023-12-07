import React, { Component } from 'react'
import Hoc from './Hoc';

 class Comment extends Component {
    render() {
        return (
          <div>
            Total Comments : {this.props.CountNumber} <br />
            <button onClick={this.props.handleCLick}>Add Comment!</button>
          </div>
        );
      }
}
const EnhanceComment=Hoc(Comment,10);
export default EnhanceComment;
