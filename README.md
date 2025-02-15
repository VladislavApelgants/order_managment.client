# Order Management Frontend

This project is a frontend application for order management, built using Vite and TypeScript.

## Features

- **Order Creation Form**: enter `userId`, `productId`, `quantity`, submit an order, and handle errors.
- **Orders Table**: displays a user's orders and updates after a successful order.

### **User and Product Lists**: included for easier application testing.

## Commands

- `npm run dev` — start the development server
- `npm run build` — build the project
- `npm run lint` — check code with ESLint
- `npm run preview` — preview the built project

## API

The frontend interacts with the **Order Management API**, which:
- Creates orders with balance and stock validation
- Retrieves user orders
- Uses transactions and request rate-limiting

## Tech Stack

- **Vite** — bundler
- **React 19** — UI library
- **TypeScript** — static typing
- **Formik + Yup** — form handling and validation
- **Axios** — HTTP client
- **React Toastify** — notifications
- **Date-fns** — date formatting
- **Clsx** — conditional classNames utility
- **ESLint** — linter  
