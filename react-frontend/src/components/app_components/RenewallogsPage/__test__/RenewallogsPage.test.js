import React from "react";
import { render, screen } from "@testing-library/react";

import RenewallogsPage from "../RenewallogsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders renewallogs page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RenewallogsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("renewallogs-datatable")).toBeInTheDocument();
    expect(screen.getByRole("renewallogs-add-button")).toBeInTheDocument();
});
