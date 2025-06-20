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
