import { CgYinyang } from "react-icons/cg"

describe('App opens', () => {
    it('Opens the app!', () => {
        cy.visit(`http://localhost:3000/`)
    })
    it('Displays the title', () => {
        cy.contains('Elysia Honey')
    })    
    
describe('Nav menu', () => {
    describe('should have a nav button', () => {
        it('Shows the nav bar', () => {
            cy.get('[data-cy=nav-button]').click()
        })
        describe('should navigate to the Home Page', () => {
            it('Shows the Home Link', () => {
                cy.get('[data-cy=nav-link]').contains('Home').click()
                cy.url().should('include', '/')
            })
        })
    })
    describe('should navigate to the About Page', () => {
        it('Shows the nav bar', () => {
            cy.get('[data-cy=nav-button]').click()
        })

        it('Shows the About Link', () => {
            cy.get('[data-cy=nav-link]').contains('About').click()
            cy.url().should('include', '/about')
        })
    })
    describe('should navigate to the Pricing Page', () => {
        it('Shows the nav bar', () => {
            cy.get('[data-cy=nav-button]').click()
        })
        it('Shows the Pricing Link', () => {
            cy.get('[data-cy=nav-link]').contains('Pricing').click()
            cy.url().should('include', '/pricing')
        })
    })
    describe('should navigate to the My Story Page', () => {
        it('Shows the nav bar', () => {
            cy.get('[data-cy=nav-button]').click()
        })
        it('Shows the My Story Link', () => {
            cy.get('[data-cy=nav-link]').contains('My Story').click()
            cy.url().should('include', '/story')
        })
    })

})
})