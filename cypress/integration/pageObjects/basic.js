class Basic {

    openURL(url){
        return cy.visit(url)
    }

    modalWindow(){
        return cy.get('.modal')
    }

    closeModalWindowButton(){
        return cy.get('.modal__close')
    }
}