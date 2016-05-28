import expect from 'expect';
import formHandling from '../../../reducers';
import deepFreeze from 'deep-freeze';
import * as ActionTypes from '../../../actions';

describe('reducer tests', () => {

  it('should reset form state', () => {
    
    const stateBefore = { formData: { username: "username", firstName: "Louis", surname: "Q"}};
    const stateAfter = { formData: { username: "", firstName: "", surname: ""} };

    const action = {
      type: ActionTypes.RESET_FORM,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateAfter).toEqual(formHandling(stateBefore, action));
  });

});
