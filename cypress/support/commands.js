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
    url: '/users/3708343',
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
      name: 'Sukanya Deshpande'
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
      email: 'deshpande_sukanya@crooks-crona.test'
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
      email: 'nat.ntt@teste.com.br',
      status: 'inactive'
    }
  }).then((response) => {
    Cypress.env('user_id', response.body.id)
  })
})

Cypress.Commands.add('put_user', () => {
  cy.api({
    method: 'PUT',
    url: `/users/${Cypress.env('user_id')}`,
    headers: {
      Authorization: Cypress.env('token')
    },
    body: {
      name: 'Natalia NTT DATA Brasil',
      gender: 'female',
      email: 'nat.ntt@teste.com.br',
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

Cypress.Commands.add('post_user_other_status', () => {
  cy.api({
    method: 'POST',
    url: '/users',
    failOnStatusCode: false,
    headers: {
      Authorization: Cypress.env('token')
    },
    body: {
      name: 'Natalia NTT',
      gender: 'female',
      email: 'nat.ntt5@teste.com.br',
      status: 'teste'
    }
  }).then((response) => {
    Cypress.env('user_id', response.body.id)
  })
})

Cypress.Commands.add('del_user_other_id', () => {
  cy.api({
    method: 'DELETE',
    url: '/users/999999',
    failOnStatusCode: false,
    headers: {
      Authorization: Cypress.env('token')
    },
  })
})

Cypress.Commands.add('post_other_user', () => {
  cy.api({
    method: 'POST',
    url: '/users',
    headers: {
      Authorization: Cypress.env('token')
    },
    body: {
      name: 'João NTT',
      gender: 'male',
      email: 'joao.ntt@teste.com.br',
      status: 'active'
    }
  }).then((response) => {
    Cypress.env('user_other_id', response.body.id)
  })
})

Cypress.Commands.add('post_user_equal_email', () => {
  cy.api({
    method: 'POST',
    url: '/users',
    failOnStatusCode: false,
    headers: {
      Authorization: Cypress.env('token')
    },
    body: {
      name: 'João NTT',
      gender: 'male',
      email: 'joao.ntt@teste.com.br',
      status: 'active'
    }
  })
})

Cypress.Commands.add('del_other_user', () => {
  cy.api({
    method: 'DELETE',
    url: `/users/${Cypress.env('user_other_id')}`,
    failOnStatusCode: false,
    headers: {
      Authorization: Cypress.env('token')
    },
  })
})