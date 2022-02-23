import Link from "."
import { shallow } from 'enzyme'


test( 'Should renders without errors', () =>
{
    shallow(<Link />)
} )

test( 'Should renders a link', () =>
{
    const wrapper = shallow( <Link /> )
    expect(wrapper.find('a').length).toBe(1)
} )

test( 'Should return a link with href', () =>
{
    const wrapper = shallow( <Link to='https://google.com' /> )
    expect(wrapper.find('a').prop('href')).toBe('https://google.com')
} )

