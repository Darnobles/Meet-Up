import { render } from '@testing-library/react';
import { getEvents } from '../api';
import Event from '../components/Event';

describe('<Event /> component', () => {

    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event />);
      });

    test("renders event title", () => {
       const EventComponent = render(<Event />).container.firstChild;
       expect(EventComponent.queryByText('#title')).toBeInTheDocument();

    });

    test("renders event start time", () => {
        expect(EventComponent.queryByText('#data-start-time')).toBeInTheDocument();
    });

    test("renders event location", () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test("renders event details button with the title (show details)", () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test("by default, event's details section should be hidden", () => {

    });

    test("shows the details section when the user clicks on the 'show details' button", async () => {

    });

    test("hides the details section when the user clicks on the 'hide details' button", () => {

    });
});