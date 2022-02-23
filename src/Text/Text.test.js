import { mount, render } from 'enzyme'
import Text from "."


test( 'Should renders without errors', () =>
{
    render(<Text />)
} )

test( 'Should renders an a tag', () =>
{
    const wrapper = render( <Text /> )
    expect(wrapper.find('a').length).toBe(1)
} )
