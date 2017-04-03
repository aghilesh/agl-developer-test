# AglDevTest

This Angular2 project consumes API serive hosted at 
http://agl-developer-test.azurewebsites.net/people.json

API service contains Pet and it's owners mapping.
Angular 2 component 'PetComponent'calls the API using 'PetService' which internally using Angular 'HttpModule'. 
PetComponent methods gropus 'Cats' data under owners gender like below 

##Sample output

	- Male
		Cat 1, 
		Cat 2
	- Female
		Cat 3 
		Cat 4

PetComponent template render the Cat names under each gender.
## Settting up the environment
    
    1. Checkout the repository
    2. npm install
	3. npm start
	
	Above will run the applicaiton in the URL `http://localhost:4200/` 
	and the unit test results in http://localhost:9876
		
	Open chrome browser by running `chrome.exe --disable-web-security --user-data-dir` in run prompt to avoid Cross Domain Issue.
	
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files. 
This command is not required if the above npm start is already running. 
This will load the application without unit testing.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

There are 12 tests written to test the AppComponent and PetComponent.
To test the data related items, follow the instructions in the PetService and PetComponent file which will load test data to the application. Comment the API calls. 
