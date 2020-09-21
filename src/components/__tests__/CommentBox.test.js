import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  //mount has full dom, it requires a clean up. Not like shallow
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that users can type in", () => {
  //JS / DOM event, not React
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }, //Mock. Make sure we receive the event.target.value with this text
  });
});
