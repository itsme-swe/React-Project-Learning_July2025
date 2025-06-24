## Steps need to be followed in React Project

- Install **npm** :

      npm init

      npm install "package.json" file which is configuration for npm.

- Install bundler into our project. In our app we are using **parcel**

      npm install -D parcel

      # -D stands for Dev Dependency

- Install React and ReactDOM inside our App using npm instead of CDN Link

         npm install react

         npm install react-dom

Once **react** and **react-dom** install inside the App, import inside the **App.js**

            import React from "react";

            import ReactDOM from "react-dom/clients"

After importing make some changes inside **index.html** file:

            <script type="module" src="App.js"></script>

And then try to run the file using **npx -** npx is used to execute the installed packages.

            npx parcel index.html

            # Server running at http://localhost:1234

- Configure **App** for older browser versions, so need to make changes inside **package.json**

            / package.json

            "browserlist": [
                  "last 2 Chrome version",
                  "last 2 Firefox version"
            ]

- Update **"scripts"** inside **package.json** file -- It will help us to start our app by just typing **npm start** instead of npx parcel index.html

            ◽ package.json

            "scripts": {
                  "start": "parcel index.html",
                  "build": "parcel build index.html"
            }

- **React Function Component -** A Functional Component in React is a JavaScript function that returns JSX and follows React’s component conventions, allowing it to be used like a custom HTML tag "< MyComponent />".

            const HeadComponent = () => {
                  return <h1 className="head"> I am Functional Component </h1>
            }

            const root = ReactDOM.createRoot(document.getElementById("root")).render(
                  <>
                    < HeadComponent />
                  </>
            )

### Planing before building any app

1. We divided our app into major 3 components

- **Header Component**

  - Logo Component
  - Nav Bar Component

- **Body Component**

  - SearchBar Component
  - Restaurant Container
    - Restaurant Cards
      - Image of Food Item
      - Name of Restaurant
      - Star Rating
      - Cuisines
      - ETA

- **Footer Component**

  - Copyright
  - Links
  - Address of Company
  - Contact Us
