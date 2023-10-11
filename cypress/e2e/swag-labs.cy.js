    describe('Positive Test Case, URL is working, and Login directs user to the correct page.', () => {
        it('Visits site successfully and logs in as user with specified details', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.url().should('include', '/inventory.html');
        })
    })

    describe('UI Test case, Verify the visibility of important elements on the login page.', () => {
        it('Should have a username field.', () => {
            //Act
            cy.visit('https://www.saucedemo.com/');
            //Assert
            cy.get('[data-test="username"]').should('be.visible');
            })
        it('Should have a password field.', () => {
            //Act
            cy.visit('https://www.saucedemo.com/');
            //Assert
            cy.get('[data-test="password"]').should('be.visible');
        })
        it('Should have a visible submit button.', () => {
            //Act
            cy.visit('https://www.saucedemo.com/');
            //Assert
            cy.get('[data-test="login-button"]').should('be.visible');
        })
    })

    describe('Negative Test Case - Invalid Username', () => {
        it('Does not direct to the expected URL', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            cy.get('[data-test="username"]').type('wrong username')
            cy.get('[data-test="password"]').type('secret_sauce')
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.url().should('not.include', '/inventory.html');

        })
        it('Shows an error message ', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            cy.get('[data-test="username"]').type('wrong username')
            cy.get('[data-test="password"]').type('secret_sauce')
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.get('[data-test="error"]').should('exist')
        })
    })

    describe('Negative Test Case - Invalid Password', () => {
        it('Does not direct to the expected URL', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('wrong_password')
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.url().should('not.include', '/inventory.html');
        })
        it('Shows an error message ', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('wrong_password')
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.get('[data-test="error"]').should('exist')
        })
    })

    describe('Negative Test Case - Empty Username and Password', () => {
        it('Does not direct to the expected URL', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.url().should('not.include', '/inventory.html');
        })
        it('Displays an error message informing that details are required.', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.get('[data-test="error"]').should('exist').contains('required')  
        })
    })

    describe('Cookie Test Case - Saves user data', () => {
        it('Ensure the cookie saves data of the logged in user.', () => {
            //Arrange
            cy.visit('https://www.saucedemo.com/');
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            //Act
            cy.get('[data-test="login-button"]').click()
            //Assert
            cy.getCookie('session-username').should('have.property', 'value', 'standard_user')

        })
    })

