import React from "react";

import { render } from "@testing-library/react";

import { TestComponent } from "./TestComponent";

describe("Test Component Component", () => {
    it("should render properly", () => {
        const { container } = render(<TestComponent />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
