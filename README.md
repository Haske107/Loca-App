LOCA
===

### Location Location Location
#### A web application designed to help users share filming locations with their friends, post their own properties, and get everyone the permits they need!


INSTALL via Node.js command line interface
1) npm install -g @Angular/Cli@Latest //this globally installs angular command line interface
2) npm install -g nodemon //this globally installs the node.js file monitor
3) cd Loca-App // navigate to the app root folder
4) npm install // this reads the package.json file for the app dependencies and installs them
5) npm link // this connects the local version of angular-cli and the global one you installed earlier
6) ng serve // ng activates angular cli, serve builds the app and serves it to port 4200, this also restarts when you modify any files and save.
7) open a second terminal
8) cd Loca-App/Server //navigate to the backend dungeon
9) nodemon www // starts the server on port 3000, and restarts on any saved backend changes.
10) http://localhost:4200 in your browser


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
