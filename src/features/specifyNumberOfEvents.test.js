import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
defineFeature(feature, test => {

    test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        
        let NumberOfEventsComponent;
        given('"number of events" element box is displayed.', () => {
            NumberOfEventsComponent = render(<NumberOfEvents/>)
            const numberTextBox =NumberOfEventsComponent.queryByRole('textbox');
            expect(numberTextBox).toBeInTheDocument();
            
        });

        when('user does not enter a number.', () => {
            NumberOfEventsComponent = render(<NumberOfEvents/>)
            const numberTextBox =NumberOfEventsComponent.queryByRole('textbox');
            expect(numberTextBox).toBeInTheDocument();
        });

        then('the number 32 will be displayed for the user.', () => {
            NumberOfEventsComponent = render(<NumberOfEvents/>)
            const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
            expect(numberTextBox).toHaveValue("32");

        });
    });


    test('User can change the number of events displayed.', ({ given, when, then }) => {
        
        let NumberOfEvents;
        given('"number of events" element is displayed.', () => {
            NumberOfEventsComponent = render(<NumberOfEvents/>)
            expect(numberTextBox).toHaveClass('number-of-events-input');
        });

        when('user types in the number of events he/she would like to see.', async () => {
            const user = userEvent.setup();
            const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
            await user.type(numberTextBox, "123")

            expect(numberTextBox).toHaveValue("32123");

        });

        then('that number of event will come up (if there are that many events in the selected city).', async () => {
            const user = userEvent.setup();
            const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
            await user.type(numberTextBox, "123")

        });
    });
    
});