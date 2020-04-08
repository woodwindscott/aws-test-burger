# burger
Homework #14 - Handlebars - Eat-Da-Burger

# Resources
GitHub Repo - https://github.com/woodwindscott/burger

Deployed Version on Heroku: https://safe-forest-48898.herokuapp.com/

*********************************

# User Instructions

1. The application is pre-populated with three burger selections ready to be "devoured" on the left side of the screen. Simply click "Devour It" to move it to the right side of the screen where it's represented as having been eaten.

2. In the middle of the screen, enter the name of a burger that you would like to add to the left side of the screen and follow the instructions set out in Step 1

# Notes about the development process

## Technologies Used

1. Javascript
2. Node.js
3. Custom CSS
4. NPM Modules:

    * express
    * express-handlebars
    * mysql
    * multiple custom modules

## How the code is structured

This application follows the MVC framework. The public files containing the CSS, JavaScript and image files are in their own folder.  Handlebars and their related files are housed in the views folder.  burger.js is the only model for this assignment. The controllers folder holds burgers_controller.js which handles all of the routes.  The custom ORM and connection.js is stored in the config folder.  The schema and seed data are in their own db folder.  server.js is at the top level.

## Problems encountered

1. Trying to figure out the ORM and how it routes itself through burgers_controller.js, orm.js and burger.js was extremely confusing and took a while to figure out how to pass all of the data through each of the files to actually effect changes in the database.

2. In the beginning, I didn't have a app.js file to handle form click events from /index and route the data appropriately.  I was originally trying to do that in burger.js, but that wasn't working.  Once the new file was created, everything started to work properly.

# Future Development

The style of the page could be greatly improved...particularly with the use of more images.