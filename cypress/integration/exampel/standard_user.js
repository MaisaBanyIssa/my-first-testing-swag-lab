// describe("test the login with standard user",()=>{
//     it("user name and pass word are correct",()=>{
//         cy.wait(6000)
//         cy.visit("https://www.saucedemo.com/")
//         cy.get('[data-test="username"]').type("standard_user")
//         cy.get('[data-test="password"]').type("secret_sauce")
//         cy.get('[data-test="login-button"]').click()



//     })
// })
///<reference types="cypress"/>
describe("test the login with standard user",()=>{
    it("user name and pass word are correct",()=>{
        // beforeEach(() => {
        //     cy.clearAllCookies();
        //     cy.clearAllLocalStorage();
        //     cy.clearAllSessionStorage();
        //     cy.log('Cache and cookies cleared');
        //     cy.reload()
        // });
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

    })
})
