import React from "react";
import App from "../App";
import CommentBox from "../CommentBox";
import { shallow } from "enzyme";

it("show the comment box", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
