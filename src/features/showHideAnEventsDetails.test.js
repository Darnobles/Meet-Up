import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
defineFeature(feature, test => { 

test('An event element is collapsed by default.', ({ given, when, then }) => {

    let CitySearchComponent;
    let NumberOfEventsComponent;
    given('user selected a city (e.g, "Berlin, Germany").', async () => {
        const user = userEvent.setup();
        CitySearchComponent = render(<CitySearch/>);

        const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];

        await user.click(BerlinGermanySuggestion);

    });

    when('the "number of events" element pops up.', () => {
        expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
    });

    then('the user types how many events he wants to show.', async () => {
        const user = userEvent.setup();
        NumberOfEventsComponent =render(<NumberOfEvents/>)

        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox, "123")

        expect(numberTextBox).toHaveValue("32123");

    });
});


test('User can expand an event to see details.', ({ given, when, then }) => {
    
    let AppDOM
    let EventComponent;
    given('events are shown on screen.', () => {
        AppDOM = render(<App />).container.firstChild;
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    when('the user clicks "show details" on one of the events.', async () => {
        const user = userEvent.setup();
        let EventComponent;
        await user.click(EventComponent.queryByText('show details'));

    });

    then('more details will show for that event.', () => {
        let EventComponent;
        expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();

    });
});


test('User can collapse and event to hide details.', ({ given, when, then }) => {
    
    let EventComponent;
    given('User clicked the "show details" on an event.', async () => {
        const user = userEvent.setup();
        let EventComponent;
        await user.click(EventComponent.queryByText('show details'));

    });

    when('details for that event opens the user can now click the "hide" details" button.', async () => {
        const user = userEvent.setup();
        let EventComponent;

        await user.click(EventComponent.queryByText('hide details'));
    });

    then('details will collapse.', async() => {
        const user = userEvent.setup();
        await user.click(EventComponent.queryByText('hide details'));
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();

    });
});
});