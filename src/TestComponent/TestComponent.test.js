// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe("Test Component", () => {
  let props = {}
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TestComponent />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TestComponent");

    expect(component).toHaveTextContent("harvey was here");
  });
});
