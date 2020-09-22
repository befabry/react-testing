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

//group it block together
describe("The text area", () => {
  //Executed in this block only
  beforeEach(() => {
    //JS / DOM event, not React
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }, //Mock. Make sure we receive the event.target.value with this text
    });
    //Force the component to rerender. (Render is asynchronous)
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("empties the textarea after submitting", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
