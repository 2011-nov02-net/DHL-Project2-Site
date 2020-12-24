# DHL-Project2-Site
The front end repository for our Project 2 implementation

[![Build Status](https://dev.azure.com/2011-Revature-Project2/2011-Revature-Project2/_apis/build/status/2011-nov02-net.DHL-Project2-Site?branchName=master)](https://dev.azure.com/2011-Revature-Project2/2011-Revature-Project2/_build/latest?definitionId=3&branchName=master)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=2011-nov02-net_DHL-Project2-Site&metric=alert_status)](https://sonarcloud.io/dashboard?id=2011-nov02-net_DHL-Project2-Site)

Project Requirments: https://github.com/2011-nov02-net/trainer-code/wiki/Project-2-requirements

Course Portal

This is the Angular front end our Project 2. This is where the user to sign up, view their current enrollment, and add courses to their enrollment. It connects to our backend API which is located at https://github.com/2011-nov02-net/DHL-Project2. It uses Angular to maintain a single page website, where all components are loaded in and presented to the client as one page.

Technologies Used:

Front End
- Angular
- Angular Materials
- TypeScript
- HTML
- CSS

Other Tech
- Azure Cloud Services
  - App Service
- CI/CD
  - Azure DevOps Pipeline
- SonarCloud
- Azure Boards
- GitHub

Features:

- Student Sign Up
- Student Login
- View courses enrolled in
- View list of available courses
- Enroll in available course

To-do list:

- Have room reservations for each class
- Have a root user to add/edit/delete courses
- Allow authentication
- Allow multiple enrollments at the same time
- Instructors of the course to be able to grade
- Allow users to see their transcripts

Getting Started:

- git clone https://github.com/2011-nov02-net/DHL-Project2-Site
- cd into DHL-Project2-Site/DHL-Project2-Site

For Testing

- Ensure local copy of API is running (Found at https://github.com/2011-nov02-net/DHL-Project2)
- Ensure port is set correctly in enviroment.ts

- run npm install
- run npm install -g @angular/cli
- run ng serve --open

The program will now build the files and opens up the page in the browser

Usage:

- Student Usage
  - Click on Login
  - If you do not have an account, make one with the Signup Link
  - Login with email
  - Can now view courses that you are enrolled in
  - To add enrollments, click Enroll in the nav bar
  - Then it will present all courses that account is not enrolled in
  - Click Enroll to add enrollment to that course


License
This project uses the following license: MIT.

