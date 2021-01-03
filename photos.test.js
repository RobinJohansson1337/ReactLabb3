import { render, screen } from "@testing-library/react";
import photos from "./pages/photos";
import "@testing-library/jest-dom/extend-expect";
import Home from "./pages/index";

test("Check for Getting Started Text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Välkommen till labb3!")).toBeInTheDocument();
});

test("Photos", () => {
    const { getByText } = render(<Home />);
    expect(getByText("http://localhost:3000/photos för att titta på bilder")).toBeInTheDocument();
});

test("Users", () => {
    const { getByText } = render(<Home />);
    expect(getByText("http://localhost:3000/users för att titta på användare")).toBeInTheDocument();
});

test("SSR (photos)", () => {
    const { getByText } = render(<Home />);
    expect(getByText("http://localhost:3000/ssr för att titta på bilder (getServerSideProps)")).toBeInTheDocument();
});

test("Photos by id", () => {
    const { getByText } = render(<Home />);
    expect(getByText("http://localhost:3000/x för att titta på bilder där X är id (getServerSideProps)")).toBeInTheDocument();
});