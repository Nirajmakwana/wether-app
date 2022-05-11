import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';


describe('first', () => {
  test('renders learn react link', () => {
    render(<App />);
    const contry = screen.getByTestId("contry");
    expect(contry).toBeInTheDocument();
  });
  test('Button', () => {
    render(<App />);
    const btn = screen.getByTestId("btn");
    expect(btn).toBeInTheDocument();
  });
  test('Button active', () => {
    render(<App />);
    const contry = screen.getByTestId("contry");
    fireEvent.change(contry, { target: { value: "india" } })
    const btn = screen.getByTestId("btn");
    expect(btn).toBeEnabled()
  });
  test('Button Click', async () => {
    render(<App />);
    const contry = screen.getByTestId("contry");
    fireEvent.change(contry, { target: { value: "india" } })
    const btn = screen.getByTestId("btn");
    expect(btn).toBeEnabled()
    fireEvent.click(btn)
    await waitFor(() => {
      screen.getByTestId("second")
    })
    expect(screen.getByTestId("second")).toBeInTheDocument()
  });
  test('capital data', async () => {
    render(<App />);
    const btncap = screen.getByTestId("btncap")
    fireEvent.click(btncap)
    await waitFor(() => {
      screen.getByTestId("temp")
    })
    expect(screen.getByTestId("temp")).toBeInTheDocument()
  })

})
