describe('Testando Meu PC.net', () => {

  it('Validando cadastro', () => {

    //Entrando no website escolhido meu pc net

    cy.visit('https://meupc.net/')

   

    //Esperando 1 segundo para executar as funções abaixo

    cy.wait(1000)

 

    //Clicando no notão de menu pela classe .navbar-burger

    cy.get('.navbar-burger').click()

 

    //cy.get('a[href="https://meupc.net/cadastro"]').click()

 
    // Clicando no botao de cadastro
    cy.wait(1000)

    cy

      .get('ul.menu-list')//pegando a ul com a classe .menu-list

      .children('li') //Pegando os filhos da url

      .children('a[href="https://meupc.net/cadastro"]')// Prgando o filho da li que tem o href com valor https://meupc.net/cadastro

      .click()

      //Preenchendo o campo nome do cadastro com o valor do Mike test

    cy.get('input[name="nome"]').type('mike Test')

  // preenchendo o campo email do cadastro com o valor fenix@exemplo

    cy.get('input[name="email"]').type('fenix@example.com')

   //Preenche com o campo senha do cadastro com valor teste123

    cy.get('input[placeholder="Defina uma senha"]').type('teste123')

   // clicando no checkbox de aceitar os termos 
    //cy.contains('Li e concordo com').click

    //cy.get('input[type="checkbox"]').check()//possivel erro

    cy.get('input[type="checkbox"]').check({force:true})

    // clicando no botao de cadastrar 

    cy.contains('Cadastrar-se').click()

    // Verificado se chegamos no final do cadastro
    cy.contains('Escolha seu nome de usuário').should('be.visible')

 

  })

})