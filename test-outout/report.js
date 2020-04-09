$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Free Crm Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#  Data table method or Test Data Method with header"
    }
  ],
  "line": 5,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deals details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal 1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal 2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal 3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 18044516400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 7499800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 295178300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4392572400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 12864100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 1985165200,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 10967889800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.close_the_browser()"
});
formatter.result({
  "duration": 740947400,
  "status": "passed"
});
});