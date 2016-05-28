import React, { Component, PropTypes } from 'react'

class TextInput extends Component {

  constructor(props) {
      super(props);
      this.fieldUpdated = this.fieldUpdated.bind(this);
  }

  fieldUpdated(e){
      this.props.fieldUpdatedHandler(e.target.name, e.target.value);
  }

  render() {
    return (<div>
              <div>
                <label>{this.props.labelName}</label>
              </div>
              <div>
                <input value={this.props.value} onChange={this.fieldUpdated} name={this.props.fieldName} type="text"/>
              </div>
            </div>)
  }
}

export default TextInput;
