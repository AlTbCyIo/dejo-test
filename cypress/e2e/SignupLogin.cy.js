/// <reference types="cypress" />

describe("Signup and Login", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Test Valid Signup", () => {
    cy.visit("https://leyktm8qxl89jr6-test19.adb.eu-frankfurt-1.oraclecloudapps.com/ords/r/dejank/pis/login_desktop?tz=1:00");
    cy.url().should("include", "dejank");
    cy.get("[placeholder='Korisničko ime']").type("pusibrks92@gmail.com");
    cy.get("[placeholder='lozinka']").type("Svjetlana123*");
    cy.get("[type='checkbox']").check();
    cy.get("button").contains("Prijavite se").click();
    //cy.reload(); //sa ovim stranica se ne ucitava dok manuelno uspjeva

    cy.get("#P99999_GODINA_lov_btn").invoke("removeAttr", "hidden");
    cy.get("#P99999_GODINA_lov_btn").click();
    cy.contains("2023").click();

    cy.get("#P99999_PREDUZECE_lov_btn").invoke("removeAttr", "hidden");
    cy.get("#P99999_PREDUZECE_lov_btn").click();
    cy.contains("SD LOG D.O.O.").click();

    cy.get("button").contains("Nastavite").click();

    //Koraci za loguout
    cy.get("#L54803978719965551").click();
    cy.get("#menu_L54803978719965551_9i").contains("Odjava").click();
  });
});



