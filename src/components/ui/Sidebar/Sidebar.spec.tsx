import React from "react";

import { render } from "@testing-library/react";

import { Sidebar } from "./Sidebar";

describe("Sidebar Component", () => {
    it("should render properly", () => {
        const { container } = render(<Sidebar />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
