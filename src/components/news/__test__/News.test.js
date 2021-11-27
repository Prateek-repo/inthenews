import { shallow } from "enzyme";
import "../../../setupTests";
import toJson from "enzyme-to-json";
import Container from "../News";
import fetchMock from "jest-fetch-mock";

describe("<News/>", () => {
  let wrapper;

  const defaultProps = {
    progressBar: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Container {...defaultProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("SnapShot creation", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("handling componentDidUpdate", () => {
    wrapper.setProps({
      category: "",
    });

    const prevProps = {
      country: "",
    };

    const componentInstance = wrapper.instance();
    jest.spyOn(componentInstance, "getTheNews");
    componentInstance.componentDidUpdate(prevProps);
    expect(componentInstance.getTheNews).toHaveBeenCalledTimes(1);
  });

  it("handling fetchMoreData", () => {
    wrapper.setState({
      page: 1,
    });

    const componentInstance = wrapper.instance();
    componentInstance.fetchMoreData();
    expect(componentInstance.state.page).toEqual(2);
  });

  it("Rendering the News Component successfully", () => {
    wrapper.setProps({
      darkMode: true,
      category: "",
    });
    wrapper.setState({
      loading: false,
    });
    expect(wrapper).toBeTruthy();
  });

  it("Return score", async () => {
    wrapper.setState({
      articles: [{ n: "" }, { n: "" }],
    });
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(
      JSON.stringify({
        result: [
          {
            title: "JSpace Rocket",
            description: "",
          },
        ],
      })
    );
    await wrapper.instance().getMoreNews();
    expect(wrapper.instance().state.loading).toEqual(false);
  });
});
