import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MenuShowcase from '../components/MenuShowcase';

describe('MenuShowcase Component', () => {
  it('renders menu items properly', () => {
    const mockOnAddToPlate = vi.fn();
    render(<MenuShowcase plate={[]} onAddToPlate={mockOnAddToPlate} onOpenReservation={() => {}} />);

    expect(screen.getByText(/Thakur's Royal Shahi Thali/i)).toBeInTheDocument();
    expect(screen.getByText(/Paneer Tikka Angara/i)).toBeInTheDocument();
    expect(screen.getByText(/Dal Makhani Thakur Special/i)).toBeInTheDocument();
  });

  it('filters menu items when typing in the search bar', () => {
    const mockOnAddToPlate = vi.fn();
    render(<MenuShowcase plate={[]} onAddToPlate={mockOnAddToPlate} onOpenReservation={() => {}} />);

    const searchInput = screen.getByPlaceholderText(/search paneer, thali, biryani/i);
    fireEvent.change(searchInput, { target: { value: 'Angara' } });

    expect(screen.getByText(/Paneer Tikka Angara/i)).toBeInTheDocument();
    expect(screen.queryByText(/Saffron Kesar Rasmalai/i)).not.toBeInTheDocument();
  });

  it('calls onAddToPlate when clicking Add to Plate', () => {
    const mockOnAddToPlate = vi.fn();
    render(<MenuShowcase plate={[]} onAddToPlate={mockOnAddToPlate} onOpenReservation={() => {}} />);

    const addButtons = screen.getAllByRole('button', { name: /add to plate/i });
    fireEvent.click(addButtons[0]);

    expect(mockOnAddToPlate).toHaveBeenCalled();
  });
});
