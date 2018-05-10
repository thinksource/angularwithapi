# README

This project base on Angular 6.0.0. And it only client side with no server side. But the only client side can achieve the requirements.

# Before run

Run `npm install` to install requirement.

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


## Question 2.
BikeWise API is a free API, we have been advised that the API has been known not to be very
reliable.
Please describe (feel free to use diagrams) a solution you would recommend to give the best
user experience and prevent displaying errors to users.
We would like it to always provide a result, without relying on the BikeWise API being available.
How can you assure this?
In addition, please recommend the technologies you would select for this solution

## Answer 2:

we can put a cache inside ourselves server side. which also provide APIs.
Just like APIs cache, store in database or redis cache, If the failure of API request of BikeWise, the httpclient will send request to ourself APIs server.

Any sucessful request will also send to our cache sever to replace the APIs Cache server's old APIs result. The API cache only contain the last time result.


