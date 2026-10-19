# weblab5

This repository contains my solution for Web Lab 5. It is a simple product dashboard created with React and Vite.

## File organization

- `src/main.jsx`: Main entry point that renders the App component into the root element.
- `src/App.jsx`: Main application component that manages state for the input name and toggling the product list visibility.
- `src/components/Card.jsx`: Reusable layout component using the children prop for consistent styling.
- `src/components/Product.jsx`: Reusable component displaying a single product's title and price inside a Card.
- `src/components/ProductList.jsx`: Renders the list of products by mapping through the static product data array.

## Challenges faced

- Setting up the Card component with the children prop so it works as a generic wrapper without depending on the inner content.
- Managing the controlled text input state cleanly so the greeting updates as the user types.
- Toggling the button text dynamically between "Show Products" and "Hide Products" while conditionally rendering the ProductList.
