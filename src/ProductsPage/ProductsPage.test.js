import { shallow } from "enzyme"
import ProductsPage from "."

test( 'Should renders without errors', () =>
{
    shallow(<ProductsPage />)
})