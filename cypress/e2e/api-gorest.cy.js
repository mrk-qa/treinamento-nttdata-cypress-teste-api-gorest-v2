describe('Testes API GOREST - Cenários Positivos', () => {
  it('[CT01] GET - Buscar todos os usuários', () => {
    cy.get_all_users()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
    })
  })

  it('[CT02] GET - Busca de usuário com filtro de ID', () => {
    cy.get_user_filter_id()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
    })
  })

  it('[CT03] GET - Busca de usuário com filtro de name', () => {
    cy.get_user_filter_name()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
      expect(response.body[0].name).to.include('Nimit Mahajan')
    })
  })

  it('[CT04] GET - Busca de usuário com filtro de email', () => {
    cy.get_user_filter_email()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
    })
  })

  it('[CT05] GET - Busca de usuário com filtro de gênero', () => {
    cy.get_user_filter_gender()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
    })
  })

  it('[CT06] GET - Busca de usuário com filtro de status', () => {
    cy.get_user_filter_status()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
    })
  })

  it('[CT07] GET - Buscar todos os comentários', () => {
    cy.get_all_comments()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'post_id', 'name', 'email', 'body')
    })
  })

  it('[CT08] GET - Buscar todos os posts', () => {
    cy.get_all_posts()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'user_id', 'title', 'body')
    })
  })

  it('[CT09] GET - Buscar todos os TO DOs', () => {
    cy.get_all_todos()
      .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty
      expect(response.body[0]).to.have.all.keys('id', 'user_id', 'title', 'due_on', 'status')
    })
  })

  it('[CT10] POST - Criar usuário', () => {
    cy.post_user()
      .should((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).not.empty
      expect(response.body).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
    })
  })

  it('[CT11] DELETE - Excluir usuário', () => {
    cy.del_user()
    .should((response) => {
      expect(response.status).to.eq(204)
      expect(response.body).empty
    })
  })
})