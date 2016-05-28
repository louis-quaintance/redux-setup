import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import Button from '../../../components/Button';

//js dom hack to get mount to work
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

describe('<Button />', () => {

  it('should shallow render a simple button', () => {
      const wrapper = shallow(<Button buttonLabel="Hello" />);
      const renderedOutput = wrapper.renderer.getRenderOutput();
      console.log(renderedOutput.props.children.props);
      expect(renderedOutput.type).toEqual('div');
      expect(renderedOutput.props.children.type).toEqual('button');
  });

  it('should mount a simple button', () => {
      var clickHandlerSpy = expect.createSpy()
      const wrapper = mount(<Button handleOnClick={clickHandlerSpy} buttonLabel="Hello" />);
      wrapper.find('button').simulate('click');
      expect(clickHandlerSpy).toHaveBeenCalledWith();
  });
});
