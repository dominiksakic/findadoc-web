import "cypress-real-events";
import enUS from "../../i18n/locales/en.json";

describe(
    "Moderation dashboard",
    {
        env: {
            ENABLE_MODERATION_PANEL: true,
        },
    },
    () => {
        beforeEach(() => {}),
            context("Desktop resolution", () => {
                before(() => {
                    cy.viewport(1920, 1080);
                    cy.visit("/moderation");
                });

                it("shows mod dashboard left navbar buttons", () => {
                    cy.wait(500);

                    cy.get("[data-testid=mod-dashboard-leftnav-for-review]")
                        .should("exist")
                        .should(
                            "include.text",
                            enUS.modDashboardLeftNav.forReview
                        );

                    cy.get("[data-testid=mod-dashboard-leftnav-approved]")
                        .should("exist")
                        .should(
                            "include.text",
                            enUS.modDashboardLeftNav.approved
                        );

                    cy.get("[data-testid=mod-dashboard-leftnav-rejected]")
                        .should("exist")
                        .should(
                            "include.text",
                            enUS.modDashboardLeftNav.rejected
                        );
                });

                it("it shows the moderation top nav", () => {
                    // wait for the vue components to actually load
                    cy.wait(500);

                    cy.get(
                        '[data-testid="mod-submission-list-item-1"]'
                    ).click();
                    cy.get(
                        '[data-testid="mod-edit-submission-copy-submission-id"]'
                    ).click();

                    // check that the value copied to the clipboard is the same that's displayed
                    const clipboardResult = cy.window().then((win) => {
                        return win.navigator.clipboard.readText();
                    });

                    // the timeout is to give time for the clipboard to be read
                    clipboardResult.should("exist", 10000);
                });
            });
    }
);