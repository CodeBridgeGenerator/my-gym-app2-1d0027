import React from "react";
import { render, screen } from "@testing-library/react";

import PaymentsPage from "../PaymentsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders payments page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PaymentsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("payments-datatable")).toBeInTheDocument();
    expect(screen.getByRole("payments-add-button")).toBeInTheDocument();
});
