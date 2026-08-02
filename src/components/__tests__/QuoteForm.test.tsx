import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuoteForm from '../sections/QuoteForm';

describe('QuoteForm', () => {
  it('renders the form with all fields', () => {
    render(<QuoteForm />);
    
    expect(screen.getByText('Request a Quote')).toBeInTheDocument();
    expect(screen.getByText('Get a response within 2 hours')).toBeInTheDocument();
    expect(screen.getByLabelText('Service Required')).toBeInTheDocument();
    expect(screen.getByLabelText('Job Location')).toBeInTheDocument();
    expect(screen.getByLabelText('Mobile Number')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Request' })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    
    const submitButton = screen.getByRole('button', { name: 'Submit Request' });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Please select a service')).toBeInTheDocument();
      expect(screen.getByText('Location must be at least 3 characters')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid mobile number (04XX XXX XXX)')).toBeInTheDocument();
    });
  });

  it('shows success message after valid submission', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    
    const serviceSelect = screen.getByLabelText('Service Required');
    const locationInput = screen.getByLabelText('Job Location');
    const phoneInput = screen.getByLabelText('Mobile Number');
    const submitButton = screen.getByRole('button', { name: 'Submit Request' });
    
    await user.selectOptions(serviceSelect, 'hang-on');
    await user.type(locationInput, 'Brisbane South');
    await user.type(phoneInput, '0424 170 737');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Request Received')).toBeInTheDocument();
      expect(screen.getByText("We'll call you back within 2 hours.")).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
