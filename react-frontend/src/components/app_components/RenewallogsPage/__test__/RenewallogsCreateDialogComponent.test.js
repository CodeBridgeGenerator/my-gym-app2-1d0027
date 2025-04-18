import React from "react";
import { render, screen } from "@testing-library/react";

import RenewallogsCreateDialogComponent from "../RenewallogsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders renewallogs create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RenewallogsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("renewallogs-create-dialog-component")).toBeInTheDocument();
});
