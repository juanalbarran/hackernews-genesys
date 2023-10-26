import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Pagination from "../Pagination";

// Mock useRouter and searchParams:
jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn()
    }),
    useSearchParams: () => ({
      get: () => {}
    })
  }
})

describe('Pagination component', () => {

  it('should prev page and next page should be enabled', () => {
    const pagination = render(<Pagination hasNextPage={true} hasPrevPage={true} />);
    const prevPageElement = pagination.getByText('prev page');
    const nextPageElement = pagination.getByText('next page');
    expect(prevPageElement).toBeEnabled();
    expect(nextPageElement).toBeEnabled();
  });

  it('should prev page be enabled and next page should be disabled', () => {
    const pagination = render(<Pagination hasNextPage={false} hasPrevPage={true} />);
    const prevPageElement = pagination.getByText('prev page');
    const nextPageElement = pagination.getByText('next page');
    expect(prevPageElement).toBeEnabled();
    expect(nextPageElement).toBeDisabled();
  });

  it('should prev page be disabled and next page should be enabled', () => {
    const pagination = render(<Pagination hasNextPage={true} hasPrevPage={false} />);
    const prevPageElement = pagination.getByText('prev page');
    const nextPageElement = pagination.getByText('next page');
    expect(prevPageElement).toBeDisabled();
    expect(nextPageElement).toBeEnabled();
  });
});