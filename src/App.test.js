// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CyberNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CyberNexus/i);
    expect(titleElement).toBeInTheDocument();
});
