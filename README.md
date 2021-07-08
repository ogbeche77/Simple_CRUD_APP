# Project Name

> Simple Crud App

## Table of contents

- [General info](#general-info)
- [How to run the app](#How-to-run-the-app)

## General info

Project was built using ReactJS, Semantic-UI-React and CSS. Cypress was used for end to end testing. JSON server was used to obtain a fake REST-API

## How to run the app

1. Open a bash terminal or any other type of terminal and navigate to the project directory

2. Run:
   `npm install`,

   `npx json-server --watch data/data.json --port 8080` **to start the json server**,

   `npm start` **to start the react app**,

   `sass --watch App.scss:App.css`

3. Test:
   `npm run cypress:open`
