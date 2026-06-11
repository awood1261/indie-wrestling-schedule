import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App shell', () => {
  it('renders the header and weekly event section', () => {
    render(<App />);

    expect(screen.getByText('Find your next show')).toBeInTheDocument();
    expect(screen.getByText('Find independent wrestling events')).toBeInTheDocument();
    expect(screen.getByText('Rocky Mountain Pro')).toBeInTheDocument();
  });
});
