describe('Testes API GOREST - Cenários Negativos', () => {
  it('[CT13] POST - Criar usuário com status diferente de "active" ou "inactive"', () => {
    cy.post_user_other_status()
      .should((response) => {
        expect(response.status).to.eq(422)
        expect(response.body[0]).not.empty
        expect(response.body[0].field).to.include('status')
        expect(response.body[0].message).to.include("can't be blank")
      })
  })

  it('[CT14] DELETE - Excluir usuário com ID inexistente', () => {
    cy.del_user_other_id()
      .should((response) => {
        expect(response.status).to.eq(404)
        expect(response.body).not.empty
        expect(response.body.message).to.include('Resource not found')
      })
  })

  it('[CT15] POST - Criar usuário com email existente', () => {
    cy.section('setup')
    cy.post_other_user()
      .should((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).not.empty
      })

    cy.section('exec')
    cy.post_user_equal_email()
      .should((response) => {
        expect(response.status).to.eq(422)
        expect(response.body[0]).not.empty
        expect(response.body[0].field).to.include('email')
        expect(response.body[0].message).to.include('has already been taken')
      })

    cy.section('clean')
    cy.del_other_user()
      .should((response) => {
        expect(response.status).to.eq(204)
        expect(response.body).empty
      })
  })
})