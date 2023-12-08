import { render } from '@testing-library/react';
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {

    let NumberWrapper;
    
    beforeAll(() => {
    NumberWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    });
    
    test('render number of events input', () => {
        expect(NumberWrapper.find('.event-number__input')).toHaveLength(1);
    });
    
    test('render 32 events when not specified by user', () => {
        expect(NumberWrapper.state('eventNumber')).toBe(32);
    });
    
    test('change event number when number input is changed', () => {
        const eventObject = { target: { value: 15 }};
        NumberWrapper.find('.event-number__input').simulate('change', eventObject);
    
        expect(NumberWrapper.state('eventNumber')).toBe(15);
    });
});

describe('<NumberOfEvents /> integration', () => {

    test('user can change the number of events displayed', async () => {
        const user = userEvent.setup();
        const NumberOfEventsComponent = render(<NumberOfEvents />);
        const AppDOM = AppComponent.container.firstChild;
    
        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
        await user.click(cityTextBox);

        const NumberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
    })

});