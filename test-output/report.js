$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free Crm Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  with example keyword"
    }
  ],
  "line": 5,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter \u003cftname\u003e and \u003cltname\u003e and \u003ccompanyName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "ftname",
        "ltname",
        "companyName"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "Aakash",
        "Patel",
        "ABCXYZ"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "Ronak",
        "Waghela",
        "XYZXYZX"
      ],
      "line": 19,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "sagar",
        "patel",
        "AAAXYZX"
      ],
      "line": 20,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters batchautomation and Test@12345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter Aakash and Patel and ABCXYZ",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 17161730900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 15008900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 12
    },
    {
      "val": "Test@12345",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 240523700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5614615700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8695600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2007595700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aakash",
      "offset": 11
    },
    {
      "val": "Patel",
      "offset": 22
    },
    {
      "val": "ABCXYZ",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 2270748000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 715091200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters batchautomation and Test@12345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter Ronak and Waghela and XYZXYZX",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 20169910800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 23757100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 12
    },
    {
      "val": "Test@12345",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 245031700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5571545100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6973600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1901927200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ronak",
      "offset": 11
    },
    {
      "val": "Waghela",
      "offset": 21
    },
    {
      "val": "XYZXYZX",
      "offset": 33
    }
  ],
  "location": "LoginStepDefinition.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 2285439400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 701104800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters batchautomation and Test@12345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter sagar and patel and AAAXYZX",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 15802874000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 6694700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 12
    },
    {
      "val": "Test@12345",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 241147300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6086212300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7350600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1928714100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sagar",
      "offset": 11
    },
    {
      "val": "patel",
      "offset": 21
    },
    {
      "val": "AAAXYZX",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 2213363500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 698334500,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free Crm Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  without example keywords"
    },
    {
      "line": 5,
      "value": "#  Scenario: Free Crm Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#    Given user is already on login page"
    },
    {
      "line": 7,
      "value": "#    When title of login page is Free Crm"
    },
    {
      "line": 8,
      "value": "#    Then user enters \"batchautomation\" and \"Test@12345\""
    },
    {
      "line": 9,
      "value": "#    Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#    Then user is on home page"
    },
    {
      "line": 12,
      "value": "#  with example keyword"
    }
  ],
  "line": 13,
  "name": "Free Crm Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "Tom",
        "Test@123"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Free Crm Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters batchautomation and Test@12345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 17805200300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 21802200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 12
    },
    {
      "val": "Test@12345",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 228350500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6119568100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8790300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 705465700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Free Crm Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters Tom and Test@123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 15968349700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 24005800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 12
    },
    {
      "val": "Test@123",
      "offset": 20
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 197328700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1239753800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 46705300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:72)\r\n\tat ✽.Then user is on home page(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});