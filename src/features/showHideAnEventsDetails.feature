Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given user selected a city (e.g, "Berlin, Germany").
        When the "number of events" element pops up.
        Then the user types how many events he wants to show.

    Scenario: User can expand an event to see details.
        Given events are shown on screen.
        When the user clicks "show details" on one of the events.
        Then more details will show for that event.

    Scenario: User can collapse and event to hide details.
        Given User clicked the "show details" on an event.
        When details for that event opens the user can now click the "hide" details" button.
        Then details will collapse.