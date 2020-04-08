Feature: Free Crm Login Feature


#  without example keywords
#  Scenario: Free Crm Login Test Scenario
#    Given user is already on login page
#    When title of login page is Free Crm
#    Then user enters "batchautomation" and "Test@12345"
#    Then user clicks on login button
#    Then user is on home page

#  with example keyword
  Scenario Outline: Free Crm Login Test Scenario
    Given user is already on login page
    When title of login page is Free Crm
    Then user enters <username> and <password>
    Then user clicks on login button
    Then user is on home page
    Then close the browser


    Examples:
      | username        | password   |
      | batchautomation | Test@12345 |
      | Tom             | Test@123   |

#  Scenario: User is able to create new contact
#    Given user click on contact
#    When user mouse over on contacts link
#    Then user click on new contact link
#    Then user fill the ftname, ltname and comapany
#    Then user click on saveBtn
#    Then verify new contact created

