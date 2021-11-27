import { render, screen } from '@testing-library/react';

import {shallow, configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Container from '../Spinner';



configure({ adapter: new Adapter() });

describe('<Spinner/>', () => {

  it('SnapShot creation', () => {
    const appSnap = shallow(
      <Container/>
    )
  
    expect(toJson(appSnap)).toMatchSnapshot();

  })
})