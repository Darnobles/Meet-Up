Feature: Specify Number of events
    Scenario: When user hasn't specified a number, 32 events are shown by default.
        Given "number of events" element box is displayed.
        When user does not enter a number.
        Then the number 32 will be displayed for the user.

    Scenario: User can change the number of events displayed.
        Given "number of events" element is displayed.
        When user types in the number of events he/she would like to see.
        Then that number of event will come up (if there are that many events in the selected city).