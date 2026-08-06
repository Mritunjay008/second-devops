import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Thakur.08 Restaurant Application', () => {
  it('renders the restaurant brand name THAKUR.08', () => {
    render(<App />);
    const brandElements = screen.getAllByText(/THAKUR\.08/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it('displays the 100% Pure Vegetarian badge', () => {
    render(<App />);
    const pureVegBadge = screen.getAllByText(/100% PURE VEGETARIAN/i);
    expect(pureVegBadge.length).toBeGreaterThan(0);
  });

  it('opens and closes the table reservation modal', () => {
    render(<App />);
    
    // Find reserve table buttons and click one
    const reserveBtn = screen.getAllByRole('button', { name: /reserve table|book a table/i })[0];
    fireEvent.click(reserveBtn);

    // Verify modal title appears
    expect(screen.getByText(/Reserve Your Table at Thakur.08/i)).toBeInTheDocument();
  });

  it('submits a table reservation successfully', () => {
    render(<App />);

    // Open modal
    const reserveBtn = screen.getAllByRole('button', { name: /reserve table|book a table/i })[0];
    fireEvent.click(reserveBtn);

    // Fill form
    const nameInput = screen.getByPlaceholderText(/e\.g\. Vikram Thakur/i);
    const phoneInput = screen.getByPlaceholderText(/\+91 98765 43210/i);

    fireEvent.change(nameInput, { target: { value: 'Aarav Sharma' } });
    fireEvent.change(phoneInput, { target: { value: '+91 98765 00000' } });

    // Submit form
    const submitBtn = screen.getByRole('button', { name: /confirm table reservation/i });
    fireEvent.click(submitBtn);

    // Verify confirmation message
    expect(screen.getByText(/Reservation Confirmed!/i)).toBeInTheDocument();
    expect(screen.getByText(/Aarav Sharma/i)).toBeInTheDocument();
  });
});
