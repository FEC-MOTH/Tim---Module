# Shoedidas - Front End Project

This repository contains mocked examples of the Carousels and Product Details sections of an Adidas' product page as they appeared on December 2018. 

**Tech Stack**
React | Express | mySql | Amazon EC2 | Docker | Jest

All components shown in 10 seconds preview are fully modular microservices. They can be integrated with one another seamlessly.

## Demo of All Components Proxied Together
> http://54.146.229.91/

<img src="https://camo.githubusercontent.com/99505368247b99dc6091811a1ee009360ef70705/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6a6b5a6756414858744748665246754336352f67697068792e676966" alt="Quick Look" data-canonical-src="https://media.giphy.com/media/jkZgVAHXtGHfRFuC65/giphy.gif" width="400" height="400">

## Components rendered from this repo
> http://54.146.229.91:3002

## Local Installation
**IMPORTANT**\
As of December 2018, there are issues with npm packages. Components may not function correctly when run locally. 

## How to run file locally 
Please run the followings information:

```
npm install -- to install all dependencies
npm start - for server
npm run build - for webpack
```

Currently using Mysql server.\
You will need to set up mysql database prior to seeding the file.\
Since env is currently not being ignored, change the username and password for database manually to reflect your local database credential.A

Two ways of accessing the database to generate new table:\
first: you can create your own .env file and replace example string with your actual mysql information.\
sencond: you can replace it directly wihtin database.js.

Seedfile - Can mostly work if you use running shoes.

The function to seed data is currently commented out.\
Please pick what type of data you would like to seed into your db.\
Mix and match are recommended.\
npm run seed to upload fakeData.

my code will randomly sort get request data & grabs the first 50.
