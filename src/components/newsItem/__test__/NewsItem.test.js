import {shallow, configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Container from '../NewsItem';


let wrapper;
configure({ adapter: new Adapter() });


const defaultProps = {
    title: "top headlines"
}

beforeEach( () => {
wrapper =shallow(
    <Container {...defaultProps}/>
  )
})

afterAll( () => {
    jest.clearAllMocks();
})

describe('<NewsItem/>', () => {

  it('SnapShot creation', () => {

    expect(toJson(wrapper)).toMatchSnapshot();

  })
})