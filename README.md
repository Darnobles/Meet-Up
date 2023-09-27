#Meet-Up App

_This application is designed to be a **progressive web application (PWA)** using **REACT** and following the **test-driven development (TDD)** technique to ensure the integrity and success of the app._

### User Stories: _using Gherkin syntax ("Given-When-Then)_

####Feature 1: Fliter Events By City

Scenario 1: User should wee a list of suggestions when they search for a city.
* Given: user hasn't searched for any city:
* When: the user opens the app;
* Then: the user should see a list of upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city.

* Given: the main page is open;
* When: user starts typing in the city textbox;
* Then: the user should receive a list of cities (suggestions) that match what they've typed.

Scenario 3: User can select a city from the suggested list.

* Given: user was typing "Berlin" in the city textbox and the list of suggested cities is showing; 
* When: the user selects a city (e.g., "Berlin, Germany") from list.
* Then: their city should be changed to that city (i.e., "Berlin, Germany") and the user should receive a list of upcoming events in that city.

####Feature 2: Show/Hide Event Details

Scenario 1: An event element is collapsed by default.

* Given: user selected a city (e.g, "Berlin, Germany").
* When: the "number of events" element pops up.
* Then: the user types how many events he wants to show.

Scenario 2: User can expand an event to see details.

* Given: events are shown on screen.
* When: the user clicks "show details" on one of the events.
* Then: more details will show for that event.

Scenario 3: User can collapse and event to hide details.

* Given: User clicked the "show details" on an event.
* When: details for that event opens the user can now click the "hide" details" button.
* Then: details will collapse.

####Feature 3: Specify Number of events

Scenario 1: When user hasn't specified a number, 32 events are shown by default.

* Given: "number of events" element box is displayed.
* When: user does not enter a number.
* Then: the number 32 will be displayed for the user.

Scenario 2: User can change the number of events displayed.

* Given: "number of events" element is displayed.
* When: user types in the number of events he/she would like to see.
* Then: that number of event will come up (if there are that many events in the selected city).

####Feature 4: Use the App When Offline

Scenario 1: Show cached data when there's no internet connection

* Given: user has no internet connection.
* When: user tries to access events.
* Then: app will how events from cached data.

Scenario 2: Show error when user changes search settings.

* Given: there is no internet connection.
* When: user tries to search for new information (e.g., city, number of events).
* Then: an error will show.

####Feature 5: Add an App Shortcut to the Home Screen

Scenario 1: User can install the meet app as a shortcut on their device home screen.

* Given: the user has the app open.
* When: user creates a shortcut.
* Then: it will be added to the home screen.

####Feature 6: Display Charts Visualizing Event Details

Scenario 1: Show a chart with the number of upcoming events in each city.

* Given: "number of events" box is displayed.
* When: user types how many events he/she would like to see.
* Then: chart visulizing event details will display.