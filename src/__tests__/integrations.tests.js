import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
//Custom
import Root from "Root";
import App from "components/App";

let wrapped;

beforeEach(() => {
  moxios.install();

  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });

  //render the entire app
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

//Because of the axios-moxios request there's a delay, we use the done function
//Else it runs through the setTimeout (or moxios.wait()) without waiting
it("can fetch a list of components and display them", (done) => {
  wrapped.find(".fetch-comments").simulate("click");

  //moxios catch the request and gives a result back. But there is a small delay
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);

    //Jest now wait until it's done to assess the test results
    done();
  });
});
