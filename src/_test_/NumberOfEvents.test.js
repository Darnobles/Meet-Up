import { render } from '@testing-library/react';
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents/>)
    });

    test('component contains an element with the role of textbox', () => {
        expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
    });

    test('default value of input field is 32', () => {
        expect(NumberOfEventsComponent.length).toBe(32)
    });

    test('value changes when user types in textbox', () => {

    });

});