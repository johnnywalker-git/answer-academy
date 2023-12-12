
# Cypress Example

This project was designed to be an end-to-end test suite for the login of a user on an external site.

![App Screenshot](https://github.com/johnnywalker-git/answer-academy/blob/main/readme-img/overview.jpg?raw=true)

# Planning

Planning was a crucial step and I used pseudocode to help me understand what I did and didn't need to be testing for. I created a small use-case scenario spreadsheet to help me track my progress before I put 'pen to paper.'

![App Screenshot](https://github.com/johnnywalker-git/answer-academy/blob/main/readme-img/planning.jpg?raw=true)

# Writing tests

Having looked at the Cypress documentation and trying a very basic project, I was equipped to write what I needed to get the outcome.

I followed an 'Arrange. Act. Assert.' model as my previous knowledge from test-driven development had shown me, and this seemed to work well. 

This was my first experience of Cypress, and I am very impressed. It has some very distinct similarities to JEST which I have used in TDD for Node server application. Particularly in the syntax for outcome assertions.

I was also careful to make sure the test's failed for the right reasons before I got them to pass to ensure it was working as it should.

I particularly enjoyed traversing the DOM, and found the Cypress UI tool for selecting elements intuitive and fun to use. I also found methods to look at inner-text in elements to work out if an error message provided the user with the information they needed.

![App Screenshot](https://github.com/johnnywalker-git/answer-academy/blob/main/readme-img/test.jpg?raw=true)

# Cookie test

  Upon inspecting the login page in the browser tools, I wanted to see if any session storage had been built in to the application to save things like user data. I did manage to find a Cookie containing a 'user' type property, so decided to write a test for this in-case of any future deprecations in the application.


## Installation

Fork the project from the follwing repo:
https://github.com/johnnywalker-git/answer-academy

```bash
Run the following...
  npm install 
  npm test
```
    
## Future tests

There are a couple of tests I would like to have made that seemed outside the scope of the suite, but still want to mention...

 - Testing for SQL injection, making sure that characters like ';' are not allowed in the input fields.

 - Performace testing - making sure the site is up to speed for logging as user in, so as to not give a poor user experience, or promote any un-nomral behaviour such as re-submitting the form when it doesn't work quickly enough.

