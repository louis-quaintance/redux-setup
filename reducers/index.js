import * as actions from '../actions'

export default function formHandling(state = { formData: {} }, action) {

  switch (action.type) {

    case actions.FORM_INIT:

      return Object.assign({}, state, { });

    case actions.RESET_FORM:

      return Object.assign({}, state, { formData: { firstName: "", surname: "", username: "" } });

    case actions.USER_SUBMITTED_FORM:

      return Object.assign({}, state, { });

    case actions.FORM_DATA_UPDATED:

      let newFormData = Object.assign({}, state.formData, { [ action.fieldName ] : action.fieldValue} );

      return Object.assign({}, state, { formData : newFormData } );

    default:

      return state
  }
}
