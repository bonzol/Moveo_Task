This app is a home task for MoveoGroup.
This is an Angular app, including JavaScript, HTML, CSS, TypeScript, Bootstrap and Angular Material.
The app uses https://randomuser.me/ free API, and https://www.mapbox.com/.

The app fetch endless random users, and features their data and location.

You can find the deployed app here:
https://moveotaskalon.netlify.app

Overall Description:

The app has a LayoutComponent, and inside it header, main and footer components.
The Header is a collapse navbar, and the footer has some text.
The Main component contains the main component, the Table!
The table can be sort by clicking the diffrent heads (name, email, gender and age).
You can send a mail to each use by clicking the email address.
Beneath the table there is a pagination control for page number. You can go to any page number (bigger then 0).
By clicking the user row you will redirect to the User Details page. 
The User Details component presents the data from the table, and additional info (state, city and street). also there is a map with a marker, corresponding to the coordinates of the user location.
The actual fetching accruing in the User Service, which is injected in the constructor components.

Task Instructions:

Create a page with a title “All users” with a table of users which will contain the following columns:
Picture (circled icon)
Full name (first letter of first name and last name)
Email (link to send the user new email)
Gender
Age

Table should have pagination control, synced with the api pagination:
Every page should fetch and contain 10 rows (max).
Add controls to move between pages

When clicking on a user row, move to another page with a title “User Details” and show the same data from the table, also show the user address on a map with a pin. Page url should contain the username.


General Notes:

Use this free API service to get all the data you need : https://randomuser.me/documentation
(pay attention to use a constant seed in order to get the same data)
** you should write the client side only! **

The pages should be created by using a design library as material design for example.
Make sure the pages is fully responsive.

Bonus:
Add sorters to table columns

# Moveo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
