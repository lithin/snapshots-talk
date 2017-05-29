import React from 'react';
import Panel from './panel';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Panel', () => {
  it('renders number, and three buttons', () => {
    const result = shallow(<Panel />);
    expect(toJson(result)).toMatchSnapshot();
  });

  it('updates the number when a button is clicked', () => {
    const result = mount(<Panel />);
    expect(result.find('span').text()).toEqual('0');

    result.find('button').first().simulate('click');

    expect(result.find('span').text()).toEqual('1');
  });
});
