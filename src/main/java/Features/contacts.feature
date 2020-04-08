Feature: Free Crm Create Contacts


#  with example keyword
  Scenario Outline: Free CRM Create a new contact scenario
    Given user is already on login page
    When title of login page is Free Crm
    Then user enters <username> and <password>
    Then user clicks on login button
    Then user is on home page
    Then user moves to new contact page
    Then user enters contact details <ftname> and <ltname> and <companyName>
    Then close the browser


    Examples:
      | username         | password   | ftname  | ltname   | companyName |
      | batchautomation  | Test@12345 | Aakash  | Patel   |  ABCXYZ     |
      | batchautomation  | Test@12345 | Ronak   | Waghela  |    XYZXYZX  |
      | batchautomation  | Test@12345 | sagar   | patel    |     AAAXYZX |