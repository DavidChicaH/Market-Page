> Market-page, a simpled web I made four years ago in my beginnings, I'll try to update this site to a professional web page.

> Me, almost a year ago.

# E-commerce website managing the Fake Store API 🛒

## Project Description 📄

This project is a simple e-commerce website that uses the Fake Store API to get the products and categories. The user can add products to the cart and remove them. The user can also filter the products by category. The user can also see the details of the product by clicking on the product card.

## Technologies Used 🛠️

- [Vite](https://vitejs.dev) as a build tool
- [React](https://react.dev) as library to build the UI
- [TypeScript](https://www.typescriptlang.org) as a language
- [React Router](https://reactrouter.com) to handle the routes
- [Tailwind](https://tailwindcss.com) as CSS framework
- [Axios](https://axios-http.com) to make the HTTP requests
- [React Icons](https://react-icons.github.io/react-icons/) to use icons

## Project environment 🚀

For request handling, storage, and data manipulation, I employed a stricter structure, using `Context API` for global state handling, and `React's native Reducer useReducer`.

## Project structure 📁

The project is structured in the following way:

- An actions folder, which contains the actions that are dispatched to the reducer.
- A components folder, which contains the components that are used in the project.
- A context folder, which contains the context that is used in the project.
- An interfaces folder, which contains the interfaces that are used in the project.
- A reducers folder, which contains the reducers that are used in the project.
- A routes folder, which contains the routes that are used in the project.

## Project setup 🛠️

- to run this project, first of all, clone this repository 😎:

```bash
git clone https://github.com/DavidChicaH/Market-Page.git
cd Market-Page
```

- Create a `.env` file in the root of the project with the following content:

```bash
VITE_PRODUCTS_URL="https://fakestoreapi.com/products/"
VITE_CATEGORIES_URL="https://fakestoreapi.com/products/categories/"
VITE_CATEGORY_URL="https://fakestoreapi.com/products/category/"
```

- Install the dependencies, and run the project 🚀:

```bash
npm install
npm run dev
```

## Project preview 📷:

![HomePage](https://github.com/DavidChicaH/Projects-Media/blob/main/Screenshot%202023-07-21%20111637.png?raw=true)
![ProductInfo](https://github.com/DavidChicaH/Projects-Media/blob/main/Screenshot%202023-07-21%20111701.png)
![Cart](https://github.com/DavidChicaH/Projects-Media/blob/main/Screenshot%202023-07-21%20111731.png)
