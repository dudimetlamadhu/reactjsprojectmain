import React, { Component } from 'react'

export default class MyComponent extends Component {

  render() {
    return (
      <div><MyComponent name={this.props.name}/></div>
    )
  }
}
