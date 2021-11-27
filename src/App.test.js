import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import LoadingBar from "react-top-loading-bar";

import App from "./App";

configure({ adapter: new Adapter() });

describe("<App/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("SnapShot creation", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("handling setProgress", () => {
    const componentInstance = wrapper.instance();
    componentInstance.setProgress(10);
    expect(componentInstance.state.progress).toEqual(10);
  });

  it("handling setCountry", () => {
    const componentInstance = wrapper.instance();
    componentInstance.setCountry("in");
    expect(componentInstance.state.country).toEqual("in");
  });

  it("handling darkModeEnable", () => {
    wrapper.setState({
      darkModeStatus: true,
    });
    const componentInstance = wrapper.instance();
    componentInstance.darkModeEnable();
    expect(componentInstance.state.darkModeStatus).toEqual(false);
  });

  it("should be handling LoadingBar", () => {
    wrapper.find(LoadingBar).props().onLoaderFinished();
    const componentInstance = wrapper.instance();
    expect(componentInstance.state.progress).toEqual(0);
  });
});
