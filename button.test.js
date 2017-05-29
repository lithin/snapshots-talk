import React from 'react';
import Button from './button';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Button', () => {
  it('renders button with text', () => {
    const result = shallow(<Button onClick={() => {}} type="primary">Hello</Button>);
    expect(toJson(result)).toMatchSnapshot();
  });

  it('renders button with text and icon', () => {
    const result = shallow(<Button iconSrc="icon.jpg" onClick={() => {}} type="primary">Hello</Button>);
    expect(toJson(result)).toMatchSnapshot();
  });
});
