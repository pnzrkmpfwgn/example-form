# example-form
After creating a mongoDB account and free-tier cluster. You can connect your application via connect option seen bellow. There will be an example code that can be used but there are several other ways to do it.
![image](https://github.com/pnzrkmpfwgn/example-form/assets/61189367/c0911ce7-b784-4e70-aa5c-22a4c978de07)
![image](https://github.com/pnzrkmpfwgn/example-form/assets/61189367/02d9d434-7633-4eac-b199-76858fe4aa91)
![image](https://github.com/pnzrkmpfwgn/example-form/assets/61189367/e795a562-94da-4aee-be89-1df19edfe19e)

In here your name (in this case kurtknispel9) should be written correctly and then after your password. This password is created in database access and it is not related to your account password.
Password options can be accessed here.
![image](https://github.com/pnzrkmpfwgn/example-form/assets/61189367/cef9e8f0-3d1e-496d-8d2a-8d0f7294fff6)
Here you can either edit or create new user
![image](https://github.com/pnzrkmpfwgn/example-form/assets/61189367/b2438d01-4042-4464-838b-441ad71637a2)
Here you can create a new password to be used in uri.

in order to use this example app in the root directory run
`npm install` 
then in /client/example-app directory run
`npm install`

in order to run these codes in directory open up a terminal and run
`node server`
if logs returns message about connecting to the database then it worked

in order to run the client side simply open up another terminal in the client/example-app and run `npm start`

Then you can visit local:3000 and see the example-form this app won't offer anything other than that. If you fill the form and send it you will see the sent data in your collection section in your mongodb cluster collections.
![image](https://github.com/pnzrkmpfwgn/example-form/assets/61189367/afb3d7ab-58d3-4c98-adfd-cefbd1482a53)

Don't forget to create '.env' file in your root directory and place your uri with correct user name and password otherwise the connection with your database will not be established.
i.e.
![image](https://github.com/pnzrkmpfwgn/example-form/assets/61189367/7694ed4c-0da5-4748-aff5-298094eed90f)
