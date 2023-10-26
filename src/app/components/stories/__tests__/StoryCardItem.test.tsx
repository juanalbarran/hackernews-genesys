import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { StoryCardItem } from "../StoryCardItem";

describe('<StoryCardItem/>', () => {

  const value: string = 'Hola Mundo'

  it('should contain the text: Hola Mundo', () => {
    const component = render(<StoryCardItem type={'user'} value={value}/>);
    expect(component.getByText(value)).toHaveTextContent('Hola Mundo');
  });
});