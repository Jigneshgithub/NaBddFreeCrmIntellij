Feature: Free Crm Application testing

  @SmokeTest @RegressionTest
  Scenario: Login with correct username and password
    Given This is a valid Login test

  @RegressionTest
  Scenario: Login with incorrect username and password
    Given This is a invalid Login test

  @RegressionTest
  Scenario: Create a contact
    Given This is a contact test case

  @SmokeTest
  Scenario: Create a deal
    Given This is a deal test case

  @RegressionTest
  Scenario: Create a task
    Given This is a task test case

  @SmokeTest
  Scenario: Create a case
    Given This is a case test case

  @RegressionTest
  Scenario: Verify left panel link
    Given Clicking on left panel link

  @SmokeTest
  Scenario: Search a deal
    Given This is a search deal test

  @End2End @RegressionTest
  Scenario: Search a contact
    Given This is a search contact test

  @End2End @RegressionTest
  Scenario: Search a task
    Given This is a search task test

  @End2End @RegressionTest
  Scenario: Search a case
    Given This is a search case test

  @SmokeTest @End2End
  Scenario: Search a deal
    Given This is a search deal test

  @SmokeTest @RegressionTest
  Scenario: Search a call
    Given This is a search call test

  @End2End @RegressionTest
  Scenario: Search a email
    Given This is a search email test

  @SmokeTest @RegressionTest @End2End
  Scenario: Search a docs
    Given This is a search docs test

  @SmokeTest @End2End
  Scenario: Search a forms
    Given This is a search forms test

  @SmokeTest @RegressionTest
  Scenario: Validate a report
    Given This is a report test

  @SmokeTest @RegressionTest
  Scenario: Application logout
    Given This is a logout test