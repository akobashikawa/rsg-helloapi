import React, { Component } from 'react';

class Tags extends Component {
  
  render() {
    return (
      <div>   
        <p>{this.props.items}</p>
      </div>
    );
  }
}

export default Tags;
