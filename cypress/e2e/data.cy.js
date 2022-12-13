/* eslint-disable no-undef */

// describe('Visit', () => {
//   it('Passes', () => {
//     cy.viewport(1903, 929)
//     cy.visit('http://localhost:3000/data')
//   })
// })

// describe('api fetch', () => {
//   it('Passes', () => {
//     cy.viewport(1903, 929)
//     cy.visit('http://localhost:3000/data')

//     cy.request('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json').as('response')

//     cy.get('@response').should((response) => {
//       expect(response.status).to.eq(200)
//       expect(response.body).to.have.length(37)

//       for (let i = 0; i < 37; i++) {
//         expect(response.body[i]).to.have.property('pl_name')
//         expect(response.body[i]).to.have.property('releasedate')
//         expect(response.body[i]).to.have.property('pl_rade')
//       }

//       console.log("body", response.body)
//     })
//   })
// })

describe('test data order', () => {
  it('Check Latest', () => {
    cy.viewport(1903, 929)
    cy.visit('http://localhost:3000/data')

    cy.wait(1000)

    cy.get('.MuiDataGrid-cellContent').first().should( "have.text", "TOI-1268 b")
    cy.get('.MuiDataGrid-cellContent ').eq(3).should( "have.text", "2022-03-31")

  })

  it('Check filter and select', () => {
    cy.viewport(1903, 929)
    cy.visit('http://localhost:3000/data')

    cy.wait(1000)

    cy.get('.style_search__SB0uS').select('Planet Name')
    cy.get('[data-cy=filter]').type('GJ 3929 b')
    cy.get('.MuiDataGrid-cellContent').first().should( "have.text", "GJ 3929 b")

    cy.get('.MuiDataGrid-cellContent').first().click()

    cy.wait(800)
    cy.get('canvas').should('be.visible')
  })
})
