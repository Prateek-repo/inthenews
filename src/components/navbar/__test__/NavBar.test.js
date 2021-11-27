import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

import Container from "../NavBar";

configure({ adapter: new Adapter() });

describe("<NavBar/>", () => {
  let wrapper;

  const defaultProps = {
    setTheCountry: jest.fn(),
    darkMode: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Container {...defaultProps} />);
  });

  it("SnapShot creation", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("handling handleChange", () => {
    const componentInstance = wrapper.instance();
    componentInstance.handleChange("us");
    expect(componentInstance.state.selectedOption).toEqual("us");
  });

  it("handling darkModeEnable", () => {
    wrapper.setState({
      darkModeStatus: true,
    });
    const componentInstance = wrapper.instance();
    componentInstance.darkModeEnable();
    expect(componentInstance.state.darkModeStatus).toEqual(false);
  });

  it("handling handleChange prop call", () => {
    const componentInstance = wrapper.instance();
    componentInstance.handleChange("us");
    expect(defaultProps.setTheCountry).toHaveBeenCalledTimes(2);
  });

  it("handling darkModeEnable prop call", () => {
    const componentInstance = wrapper.instance();
    componentInstance.darkModeEnable();
    expect(defaultProps.darkMode).toHaveBeenCalledTimes(2);
  });
});
