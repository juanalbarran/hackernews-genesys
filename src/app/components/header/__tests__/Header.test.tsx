import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "..";

describe('Header tests', () => {
  beforeEach(() => {
    //arrange
    render(<Header />);
  });
  
  it('should have HackerNews on it', () => {
    //act & assert
    expect(screen.getByText('HackerNews')).toHaveTextContent('HackerNews');
  });

  it('should have contain the text: Welcome to this HackerNews clone :)', () => {
    //act & assert
    expect(screen.getByText('Welcome to this HackerNews clone :)')).toHaveTextContent('Welcome to this HackerNews clone :)');
  });

});