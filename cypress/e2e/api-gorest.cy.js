describe('Testes API GOREST - Cenários Positivos', () => {
  it('[CT01] GET - Buscar todos os usuários', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer ' //token here
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT02] GET - Busca de usuário com filtro de ID', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/3614604',
      headers: {
        Authorization: 'Bearer ' //token here
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT03] GET - Busca de usuário com filtro de name', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer ' //token here
      },
      qs: {
        name: 'Jagmeet Varma'
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT04] GET - Busca de usuário com filtro de email', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer ' //token here
      },
      qs: {
        email: 'aditya_mukhopadhyay@hauck.example'
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT05] GET - Busca de usuário com filtro de gênero', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer ' //token here
      },
      qs: {
        gender: 'female'
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT06] GET - Busca de usuário com filtro de status', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer ' //token here
      },
      qs: {
        status: 'active'
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT07] GET - Buscar todos os comentários', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/comments',
      headers: {
        Authorization: 'Bearer ' //token here
      },
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT08] GET - Buscar todos os posts', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/posts',
      headers: {
        Authorization: 'Bearer ' //token here
      },
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })

  it('[CT09] GET - Buscar todos os TO DOs', () => {
    cy.api({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/todos',
      headers: {
        Authorization: 'Bearer ' //token here
      },
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
    })
  })
})