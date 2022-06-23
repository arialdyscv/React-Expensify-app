import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
//react-test-renderer

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); //
    // // console.log(renderer.getRenderOutput())
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('Link.button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

