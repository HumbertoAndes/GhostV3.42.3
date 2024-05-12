Feature: Automatizacion ghost pruebas E2E

@user1 @web
Scenario: Como admin de mi pagina quiero agregar post
  Given I navigate to page "https://ghost-u4ew.onrender.com/ghost/#/setup/one"
  When the Customer is logged into the ghost
  And the customer clicks on view site
  Then the view site is succesful