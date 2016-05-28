import React, { Component, PropTypes } from 'react'

class Button extends Component {

  constructor(props) {
      super(props);
      this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
      this.props.handleOnClick();
  }

  render() {
    return (<div><button onClick={this.handleOnClick}>{this.props.buttonLabel}</button></div>)
  }
}

export default Button
