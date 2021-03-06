# WarpLaneNgClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

The web client can be ran as a docker container. Run the start-web-client.sh script to build and run the web server using docker compose.

To run the commands below you first need to install node.js on your system and then install the packages required for this angular app by calling `npm install` from this directory. 

On Arch Linux, `npm` is available via pacman:

`sudo pacman -S npm`

Once packages are installed add angular to your path such that the generated instructions below work. The directory to add to your path relative to this directory is "node_modules/@angular/cli/bin" .

`export PATH='/path/to/warp-lane/warp-lane-ng-client/node_modules/@angular/cli/bin':$PATH`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
