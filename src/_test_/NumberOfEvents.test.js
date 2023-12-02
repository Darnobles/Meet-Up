import { render } from '@testing-library/react';
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents/>);
    });

    test('renders number of events text input', () => {
        const numberTextBox =NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
        expect(numberTextBox).toHaveClass('number-of-events-input');
    });

    test('default value of input field is 32', async () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toHaveValue("32");
    });

    test('value changes when user types in textbox', async () => {
        const user = userEvent.setup();
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox, "123")

        expect(numberTextBox).toHaveValue("32123");

    });

});

describe('<NumberOfEvents /> integration', () => {

    test('user can change the number of events displayed', async () => {
        const user = userEvent.setup();
        const NumberOfEventsComponent = render(<NumberOfEvents />);
    
        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
        await user.click(cityTextBox);

        const NumberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
    })

});