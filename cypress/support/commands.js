Cypress.Commands.add('get_all_users', () => {
    cy.api({
        method: 'GET',
        url: '/users',
        headers: {
            Authorization: Cypress.env('token')
        }
    })
})

Cypress.Commands.add('get_user_filter_id', () => {
    cy.api({
        method: 'GET',
        url: '/users/3681821',
        headers: {
          Authorization: Cypress.env('token')
        }
    })
})

Cypress.Commands.add('get_user_filter_name', () => {
    cy.api({
        method: 'GET',
        url: '/users',
        headers: {
          Authorization: Cypress.env('token')
        },
        qs: {
          name: 'Nimit Mahajan'
        }
    })
})

Cypress.Commands.add('get_user_filter_email', () => {
    cy.api({
        method: 'GET',
        url: '/users',
        headers: {
          Authorization: Cypress.env('token')
        },
        qs: {
          email: 'nimit_mahajan@runolfsdottir.test'
        }
    })
})

Cypress.Commands.add('get_user_filter_gender', () => {
    cy.api({
        method: 'GET',
        url: '/users',
        headers: {
          Authorization: Cypress.env('token')
        },
        qs: {
          gender: 'female'
        }
    })
})

Cypress.Commands.add('get_user_filter_status', () => {
    cy.api({
        method: 'GET',
        url: '/users',
        headers: {
          Authorization: Cypress.env('token')
        },
        qs: {
          status: 'active'
        }
    })
})

Cypress.Commands.add('get_all_comments', () => {
    cy.api({
        method: 'GET',
        url: '/comments',
        headers: {
          Authorization: Cypress.env('token')
        }
    })
})

Cypress.Commands.add('get_all_posts', () => {
    cy.api({
        method: 'GET',
        url: '/posts',
        headers: {
          Authorization: Cypress.env('token')
        }
    })
})

Cypress.Commands.add('get_all_todos', () => {
    cy.api({
        method: 'GET',
        url: '/todos',
        headers: {
          Authorization: Cypress.env('token')
        },
    })
})

Cypress.Commands.add('post_user', () => {
    cy.api({
        method: 'POST',
        url: '/users',
        headers: {
          Authorization: Cypress.env('token')
        },
        body: {
          name: 'Natalia NTT',
          gender: 'female',
          email: 'nat.ntt2@teste.com.br',
          status: 'inactive'
        }
    }).then((response) => {
        Cypress.env('user_id', response.body.id)
    })
})

Cypress.Commands.add('del_user', () => {
    cy.api({
        method: 'DELETE',
        url: `/users/${Cypress.env('user_id')}`,
        headers: {
          Authorization: Cypress.env('token')
        },
    })
})