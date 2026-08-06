import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MenuShowcase from '../components/MenuShowcase';

describe('MenuShowcase Component', () => {
  it('renders menu items properly', () => {
    const mockSetPlate = vi.fn();
    render(<MenuShowcase plate={[]} setPlate={mockSetPlate} onOpenReservation={() => {}} />);

    expect(screen.getByText(/Thakur's Royal Shahi Thali/i)).toBeInTheDocument();
    expect(screen.getByText(/Paneer Tikka Angara/i)).toBeInTheDocument();
    expect(screen.getByText(/Dal Makhani Thakur Special/i)).toBeInTheDocument();
  });

  it('filters menu items when typing in the search bar', () => {
    const mockSetPlate = vi.fn();
    render(<MenuShowcase plate={[]} setPlate={mockSetPlate} onOpenReservation={() => {}} />);

    const searchInput = screen.getByPlaceholderText(/search paneer, thali, biryani/i);
    fireEvent.change(searchInput, { target: { value: 'Angara' } });

    expect(screen.getByText(/Paneer Tikka Angara/i)).toBeInTheDocument();
    expect(screen.queryByText(/Saffron Kesar Rasmalai/i)).not.toBeInTheDocument();
  });

  it('calls setPlate when clicking Add to Plate', () => {
    const mockSetPlate = vi.fn();
    render(<MenuShowcase plate={[]} setPlate={mockSetPlate} onOpenReservation={() => {}} />);

    const addButtons = screen.getAllByRole('button', { name: /add to plate/i });
    fireEvent.click(addButtons[0]);

    expect(mockSetPlate).toHaveBeenCalled();
  });
});
