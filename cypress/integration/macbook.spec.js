/// <reference types="cypress" />

describe('Get price for MacBook Air', () => {
  it('should have the same price for space grey', () => {
    cy.visit('https://www.kotsovolos.gr/computing/laptop-tablet-ipad/notebook-macbook-ultrabook/223231-apple-macbook-air-13-m1-8-core-16gb-512gb-8-core-gpu-space-gray')
      .get('h1')
      .should('contain', 'Apple MacBook Air 13 M1 8-Core/16GB/512GB/8-Core GPU Space Gray')
      .get('div.price')
      .should('contain', '1808.00')
  })

  it('should have the same price for gold', () => {
    cy.visit('https://www.kotsovolos.gr/computing/laptop-tablet-ipad/notebook-macbook-ultrabook/223233-apple-macbook-air-13-m1-8-core-16gb-512gb-8-core-gpu-gold?view=fromvariation')
      .get('h1')
      .should('contain', 'Apple MacBook Air 13 M1 8-Core/16GB/512GB/8-Core GPU Gold')
      .get('div.price')
      .should('contain', '1808.00')
  })

  it('should have the same price for silver', () => {
    cy.visit('https://www.kotsovolos.gr/computing/laptop-tablet-ipad/notebook-macbook-ultrabook/223232-apple-macbook-air-13-m1-8-core-16gb-512gb-8-core-gpu-silver?view=fromvariation')
      .get('h1')
      .should('contain', 'Apple MacBook Air 13 M1 8-Core/16GB/512GB/8-Core GPU Silver')
      .get('div.price')
      .should('contain', '1808.00')
  })
})
