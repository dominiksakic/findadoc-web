import enUS from '../../i18n/locales/en.json'

describe('About page', () => {
    context('Desktop resolution', () => {
        before(() => {
            cy.visit("/about")
            // This wait time is to give the page time to load from Prod when ran in CI.
            cy.wait(3000)
        })

        beforeEach(() => {
            // The resolution is in the beforeEach() instead of before() to
            // prevent Cypress from defaulting to other screen sizes between tests.
            cy.viewport(1920, 1080)
            cy.wait(500)
        })

        it('shows the desktop top nav', () => {
            cy.get('[data-testid="landscape-searchbar"]').should('exist').should('be.visible')
        })

        it('does not show the hamburger component', () => {
            cy.get('[data-testid="hamburger-menu-icon"]').should("not.be.visible")
        })

        it('has a heading', () => {
            cy.get('[data-testid="about-heading"]').contains(enUS.about.heading)
        })

        it('has a subheading', () => {
            cy.get('[data-testid="about-subheading"]').contains(enUS.about.subheading)
        })

        it('has an about paragraph', () => {
            cy.get('[data-testid="about-paragraph1"]').should('exist')
        })


        it('has members header container', () => {
            cy.get('[data-testid="members-header-container"]').should('have.class', 'justify-center items-center')
        })

        it('has members container', () => {
            cy.get('[data-testid="members-container"]').should('have.class', 'justify-center items-center')
        })

        it('shows member details', () => {
            cy.get('[data-testid="member-avatar"]').should('exist')
            cy.get('[data-testid="member-name"]').should('exist')
            cy.get('[data-testid="member-title"]').should('exist')
            cy.get('[data-testid="member-linkedin"]').should('exist')
            cy.get('[data-testid="member-github"').should('exist')
        })

        it('shows the footer without scrolling', () => {
            cy.get('[data-testid="footer"]').should('be.visible')
        })

    })

    context('Portrait mode', () => {
        before(() => {
            cy.visit('/about')
            // This wait time is to give the page time to load from Prod when ran in CI.
            cy.wait(3000)
        })

        beforeEach(() => {
            // The resolution is in the beforeEach() instead of before() to
            // prevent Cypress from defaulting to other screen sizes between tests.

            // An iPhone 5 screen resolution is used to test portrait mode.
            cy.viewport(640, 1136)
            cy.wait(500)
        })

        it('shows the hamburger component', () => {
            cy.get('[data-testid="hamburger-menu-icon"]').should('exist').should('be.visible')
        })

        it('does not show the landscape searchbar', () => {
            cy.get('[data-testid="landscape-searchbar"]').should("not.be.visible")
        })

        it('does not show the footer', () => {
            cy.get('[data-testid="footer"]').should('not.exist')
        })

        it('shows member details', () => {
            cy.get('[data-testid="member-avatar"]').should('exist')
            cy.get('[data-testid="member-name"]').should('exist')
            cy.get('[data-testid="member-title"]').should('exist')
            cy.get('[data-testid="member-linkedin"]').should('exist')
            cy.get('[data-testid="member-github"').should('exist')
        })

        it("Allows navigating to external links", () => {
            cy.get('[data-testid="member-linkedin"]')
                .first()
                .should("have.attr", "href")
                .and("include", "linkedin.com")
            cy.get('[data-testid="member-github"]')
                .first()
                .should("have.attr", "href")
                .and("include", "github.com")
        })
    })
})
