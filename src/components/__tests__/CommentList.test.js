import React from "react";
import { mount } from "enzyme";

//Custom
import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  //wrapped.render() returns a "Cherrio Wrapper" (jQuery subset)
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
