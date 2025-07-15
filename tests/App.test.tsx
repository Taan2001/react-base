import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import * as envUtils from '../src/utils/env';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders welcome text', () => {
    render(<App />);
    expect(screen.getByText(/welcome to chatboxdx/i)).toBeInTheDocument();
  });

  it('renders VITE_API_URL from env', () => {
    vi.spyOn(envUtils, 'getEnvVar').mockReturnValue('https://api.example.com');
    render(<App />);
    expect(screen.getByText('https://api.example.com')).toBeInTheDocument();
  });

  it('calls getEnvVar with correct key', () => {
    const spy = vi.spyOn(envUtils, 'getEnvVar').mockReturnValue('MOCK');
    render(<App />);
    expect(spy).toHaveBeenCalledWith('VITE_API_URL');
  });

  it('matches snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('has correct heading class (Tailwind)', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.className).toMatch(/text-2xl/);
    expect(heading.className).toMatch(/text-red-100/);
  });
});
