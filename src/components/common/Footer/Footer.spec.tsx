import React from "react";

import { render } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer Component", () => {
    it("should render properly", () => {
        const { container } = render(<Footer />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
