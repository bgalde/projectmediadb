# ProjectMediaDB

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.
The full project, including modules that don't really belong in github (e.g. node_modules) are zipped up into the cmsc495_pmdb.zip.

## Development server

Run `ng serve -- host 0.0.0.0 --port 4434 --disable-host-check` for a dev server. Navigate to `http://projectmediadb.ddns.net:4434/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Node Server

Project MediaDB relies on a REST API to gather data from a database. In this project, we are using a Node.js server to serve the API. This Node.js server must be ran on the server that contains the database. To run the server, navigate to the `src/` directory, and execute `node server.js`. This should show the message `Server Started!`.

Currently, the project is running as a service on the server with the database. You should have no issues with navigating to the server in a web browser at `http://projectmediadb.ddns.net:4434`

## Further help 

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
