import React from "react";
import { mount } from "enzyme";

//Custom
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  //mount has full dom, it requires a clean up. Not like shallow
  wrapped.unmount();
});

it("has a text area and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

//group "it blocks" together
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
