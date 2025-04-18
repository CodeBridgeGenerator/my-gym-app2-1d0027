import React from "react";
import { render, screen } from "@testing-library/react";

import RenewallogsEditDialogComponent from "../RenewallogsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders renewallogs edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RenewallogsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("renewallogs-edit-dialog-component")).toBeInTheDocument();
});
