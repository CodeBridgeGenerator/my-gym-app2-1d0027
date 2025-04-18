import React from "react";
import { render, screen } from "@testing-library/react";

import MembershipplansPage from "../MembershipplansPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders membershipplans page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MembershipplansPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("membershipplans-datatable")).toBeInTheDocument();
    expect(screen.getByRole("membershipplans-add-button")).toBeInTheDocument();
});
