Feature: Free Crm Create Contacts


  #  Data table method or Test Data Method without header
  Scenario: Free CRM Create a new deal scenario
    Given user is already on login page
    When title of login page is Free Crm
    Then user enters the username and password
      | batchautomation | Test@12345 |
    Then user clicks on login button
    Then user is on home page
    Then user moves to new deal page
    Then user enters deals details
      | test deal | 1000 | 50 | 10 |
    Then close the browser
