import React from "react";

import { render } from "@testing-library/react";

import { Logo } from "./Logo";

describe("Logo Component", () => {
    it("should render properly", () => {
        const { container } = render(<Logo className="testClass" />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
