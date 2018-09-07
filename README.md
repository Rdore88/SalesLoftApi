# SalesLoft Development Interview Starter Kit

This application is a jumping off point for the SalesLoft Development Interview,
its designed to cut out boilerplate so you can get straight to coding.

Included in the package.

- Rails 5 Application
- Webpack Front-end build system
- React
- Redux

## Getting Started

### Running natively

1.) Make sure your ruby environment is at least 2.4.1
```
ruby --version
```
2.) Make sure your node version is above 8.5.0
```
node --version
```
3.) bundle install
```
gem install bundle
bundle install
```
4.) npm install
```
npm install
npm install webpack-dev-server -g
```
5.) Create and migrate Sqlite Databases
```
bundle exec rake db:create && bundle exec rake db:migrate
```
6.) Copy the .env.sample to .env and fill out the values
```
cp .env.sample .env
```
7.) Start the development server
```
bundle exec foreman start
```
8.) Navigate to localhost:5000

## Running Tests

### Backend Tests

Run the testing suite by being at the root level of the project and then Running
```
rspec
```

### Frontend testing

I am using a testing software called [cypress.io](https://www.cypress.io/). There are two ways to run the testing suite, either through the terminal or by opening the cypress runner. Both ways require the server to be running to work. To run it through the terminal simply run `npm run cypress:test` in the terminal.

The cypress runner is a GUI testing experience allowing you to see the state of the DOM as the tests are run. In order to open the cypress runner, run `npm run cypress:open` in the terminal. From there you can either choose to run a single file at a time or all of the files at once. 
