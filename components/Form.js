import React, { Component, PropTypes } from 'react'
import Button from './Button'
import TextInput from './TextInput'
import { connect } from 'react-redux';
import * as actions from '../actions'

class Form extends Component {

  constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.fieldUpdated = this.fieldUpdated.bind(this);
      this.resetForm = this.resetForm.bind(this);
  }

  submitForm(){
      this.props.dispatch({ type: actions.USER_SUBMITTED_FORM });
  }

  fieldUpdated(fieldName, fieldValue){
      this.props.dispatch({ type: actions.FORM_DATA_UPDATED, fieldName: fieldName, fieldValue: fieldValue });
  }

  resetForm(){
      this.props.dispatch({ type: actions.RESET_FORM });
  }

  render() {
    return (
      <div>
        <TextInput value={this.props.formData.username} labelName="Username" fieldName="username" fieldUpdatedHandler={this.fieldUpdated} />
        <TextInput value={this.props.formData.firstName} labelName="First name" fieldName="firstName" fieldUpdatedHandler={this.fieldUpdated} />
        <TextInput value={this.props.formData.surname} labelName="Surname" fieldName="surname" fieldUpdatedHandler={this.fieldUpdated} />
        <Button handleOnClick={this.submitForm} buttonLabel="Submit"/>
        <Button handleOnClick={this.resetForm} buttonLabel="Reset"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { formData: state.formData };
};

export default connect(mapStateToProps)(Form);
