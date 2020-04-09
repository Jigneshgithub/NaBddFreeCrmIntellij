Feature: Free Crm Create Contacts


#  Data table method or Test Data Method with header
  Scenario: Free CRM Create a new deal scenario
    Given user is already on login page
    When title of login page is Free Crm
    Then user enters the username and password
      | username        | password   |
      | batchautomation | Test@12345 |
    Then user clicks on login button
    Then user is on home page
    Then user moves to new deal page
    Then user enters deals details
      | title       | amount | probability | commission |
      | test deal 1 | 1000   | 50         | 10        |
      | test deal 2 | 2000   | 60         | 20        |
      | test deal 3 | 3000   | 70         | 30        |
    Then close the browser