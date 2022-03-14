import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import SceondLogin from './components/SceondLogin';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import SecondPage from './components/SecondPage';

test("input in page", () => {
    render(<App />);
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
});


test("button in page", () => {
    render(<App />);
    const input = screen.getByTestId("Button");
    expect(input).toBeInTheDocument();
});

test("button in disable", () => {
    render(<App />);
    const input = screen.getByTestId("Button");
    expect(input).toHaveAttribute('disabled');
});

test("input field value", () => {
    render(<App />);
    const input = screen.getByTestId("Button");
    expect(input).toHaveValue("");
});

test("button active", async () => {
    render(<App />);
    const input = screen.getByTestId("input");
    const button = screen.getByTestId("Button");
    fireEvent.change(input, { target: { value: "india" } })
    expect(button).toBeEnabled();
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByTestId("sceondLogin")).toBeInTheDocument());
    expect(screen.getByTestId("sceondLogin")).toBeInTheDocument();
    const ButtonLogin = screen.getByTestId("ButtonLogin");
    fireEvent.click(ButtonLogin);
    //     await waitFor(() => screen.getByTestId("sceondPage")).toBeInTheDocument());
    // expect(screen.getByTestId("sceondPage")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId("sceondPage")).toBeInTheDocument());
    expect(screen.getByTestId("sceondPage")).toBeInTheDocument();
    const ButtonPage = screen.getByTestId("Button2");
    fireEvent.click(ButtonPage)
    await waitFor(() => expect(screen.getByTestId("input")).toBeInTheDocument());
    expect(screen.getByTestId("input")).toBeInTheDocument();
});

const Navigate = () => {
    return (<BrowserRouter>
        <SceondLogin />
    </BrowserRouter>)
}

// test("button navigate", async () => {
//     render(<App />);
//     render(<Navigate />);
//     const button = screen.getByTestId("Button");
//     fireEvent.click(button)
//     const link = screen.getByTestId("sceondLogin")
//     expect(link).toBeInTheDocument()
// });

const NavigateTosecond = () => {
    return (<BrowserRouter>
        <SecondPage />
    </BrowserRouter>)
}

test("button sceond  navigate", async () => {
    render(<NavigateTosecond />);
    const button = screen.getByTestId("Button2");
    expect(button).toBeInTheDocument()
});

test("button click  navigate", async () => {
    render(<NavigateTosecond />);
    const button = screen.getByTestId("Button2");
    expect(button).toBeInTheDocument()
});
// test("button click  navigate to frist page", async () => {
//     render(<App />);
//     render(<NavigateTosecond />);
//     const button = screen.getByTestId("Button2");
//     fireEvent.click(button)
//     const input = screen.getByTestId("input");
//     expect(input).toBeInTheDocument()
// });
