# Workmotion Frontend Challenge

## How to install

Used node v16.17.0 and npm v8.15.0 for the implementation, in a terminal just run `npm install`.

## How to run

Open a terminal and run `npm run start`. Navigating to `http://localhost:3000` should display the employee list.

## Other npm scripts

-   compile: runs typescript compilation in both client and server folder
-   lint: runs eslint in both client and server folders
-   start-client: starts the client application only
-   start-server: starts the server application only

## Context

Workmotion (www.workmotion.com) is a global HR platform enabling companies to hire & onboard their employees internationally, at the push of a button. It is our mission to create opportunities for anyone to work from anywhere. As work is becoming even more global and remote, there has never been a bigger chance to build a truly global HR-tech company.

As a part of our frontend engineering team, you will be responsible for building our core platform frontend

## Task

We're currently developing an employees managment system.

The employee have four different states including the following

-   ADDED
-   IN-CHECK
-   APPROVED
-   ACTIVE
-   INACTIVE

Your task is to build a frontend application using React / Typescript including the following features.

-   A simple UI listing the employees
    The application need to use an API endpoint to retrieve the employee's list, Unfortunately the API endpoint isn't developed yet, We recommend using a tool to mock your API with the following specification :

    -   GET /employees/
    -   POST /employees/
    -   PATCH /employees/{employee_id}

-   In Every employee row, there should be a component as per the provided picture which will be used to display the current state of this employee and by clicking on another state e.g. APPROVED , it should persist that change to this given employee.

![Employee's states](./states.png)

## Submitting your solution

1. Create a private GitHub repo
2. Add your solution containing a `README.ME` for setup instructions to the repo.
3. Invite the GitHub user `WorkMotionRecruiting` as a collaborator to the repo
