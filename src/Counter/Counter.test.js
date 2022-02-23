import React from "react";
import { shallow, mount, render } from 'enzyme'
import Counter from ".";

test( 'Should renders without errors', () =>
{
    shallow(<Counter />)
} )

test( 'Should start in 0', () =>
{
    const wrapper = shallow( <Counter /> )
    expect(wrapper.instance().state.count).toBe(0)
} )

test( 'Should start to 1', () =>
{
    const wrapper = shallow( <Counter /> )
    wrapper.instance().handleChange( 'increment' )
    expect(wrapper.instance().state.count).toBe(1)
} )

test( 'Should change count to -1', () =>
{
    const wrapper = shallow( <Counter /> )
    wrapper.instance().handleChange( 'decrement' )
    expect(wrapper.instance().state.count).toBe(-1)
} )

test( 'Should call to increment when click on button', () =>
{
    const wrapper = mount( <Counter /> )
    wrapper.find('button').at(0).simulate( 'click' )
    expect(wrapper.instance().state.count).toBe(1)
} )

test( 'Should render count', () =>
{
    const wrapper = mount( <Counter /> )
    expect(wrapper.find('h1').text()).toBe('0')
} )