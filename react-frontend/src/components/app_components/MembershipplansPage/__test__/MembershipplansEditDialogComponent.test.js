import React from "react";
import { render, screen } from "@testing-library/react";

import MembershipplansEditDialogComponent from "../MembershipplansEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders membershipplans edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MembershipplansEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("membershipplans-edit-dialog-component")).toBeInTheDocument();
});
