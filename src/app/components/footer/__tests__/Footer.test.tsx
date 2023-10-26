import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from '..';

describe('Header tests', () => {
  
  it('should have HackerNews on it', () => {
    //arrange
    const component = render(<Footer />);
    //act 
    const textComponent = component.getByText('Made by Juan Jesus Albarran Rodriguez for a Genesys interview.');
    //assert
    expect(textComponent).toHaveTextContent('Made by Juan Jesus Albarran Rodriguez for a Genesys interview.');
  });

});