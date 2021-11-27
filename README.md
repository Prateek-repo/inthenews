# Getting Started with the project

Download/Clone the file to your local environment.

Run yarn install

Make an account in NewsAPI and generate the API key.

Make one file named as '.env.local' in the root folder and write the API key using REACT_APP_NEWSAPIKEY="yourAPIKey", save it.

Run `yarn start` in the root file.

Go to: http://localhost:3000/ to interact with the App.

# Technologies used

**React v17.0.2**

**Bootstrap v5.1.x**

**News API**

# Features

## Search news categories

<div align = "center">
<img src='https://user-images.githubusercontent.com/63186643/143578990-6b9f6221-acf1-4589-9834-40e027a8ce26.PNG'/>
</div>

&nbsp;
&nbsp;
&nbsp;

![Capture](https://user-images.githubusercontent.com/63186643/143579291-4180bcf7-a34c-4b81-9f2e-9ee5edd30fed.PNG)

&nbsp;
&nbsp;
&nbsp;


## Search news by countires (up to 52 countries)

![Capture](https://user-images.githubusercontent.com/63186643/143579528-e036ee74-92ae-407a-8199-cec79d8583bf.PNG)

&nbsp;
&nbsp;
&nbsp;

![Capture](https://user-images.githubusercontent.com/63186643/143579884-9dc777d0-e081-44f4-b6ab-8e86d9072bcf.PNG)

&nbsp;
&nbsp;
&nbsp;


## Infinite Scroll in the news

![Screenshot (2296)](https://user-images.githubusercontent.com/63186643/143580515-ea384d19-d570-4ec7-8720-45b74c0d494d.png)

&nbsp;
&nbsp;
&nbsp;

## Dark mode

![Capture](https://user-images.githubusercontent.com/63186643/143580748-3afb2966-2c2b-4bb6-a1c9-44f209e73446.PNG)

&nbsp;
&nbsp;
&nbsp;

![Capture](https://user-images.githubusercontent.com/63186643/143580841-1c84c28e-466e-4f0a-8383-91ba1a60eaab.PNG)

&nbsp;
&nbsp;
&nbsp;

## Responsive Design


&nbsp;
&nbsp;
&nbsp;

<div align='center'>
  <img src='https://user-images.githubusercontent.com/63186643/143582738-86bce5be-bc77-4e7d-a60f-5646a8bf5de1.png' height='800' width='450'/>
  </div>
  
  &nbsp;
&nbsp;
&nbsp;
  
  <div align='center'>
  <img src='https://user-images.githubusercontent.com/63186643/143582749-7c4be6c6-2f54-499b-8c44-7331ba503420.png' height='450' width='800'/>
  </div>
  
  &nbsp;
&nbsp;
&nbsp;
  
  <div align='center'>
  <img src='https://user-images.githubusercontent.com/63186643/143582757-4cb245c9-53aa-4501-bef8-14ec2ca2569d.png'  height='950' width='650'/>
  </div>
  
  &nbsp;
&nbsp;
&nbsp;

  <div align='center'>
  <img src='https://user-images.githubusercontent.com/63186643/143582768-37220f92-bd3a-4dc8-a86e-aa0aacac815f.png' height='450' width='800'/>
  </div>

&nbsp;
&nbsp;
&nbsp;


# App Testing

## Installation

  ### As Dev Dependencies
  Jest and (configured babel.config.js file as well)
  
  Enzyme
  
  enzyme-to-json (for snapshot)
  
  identity-obj-proxy (to help to mock the .png, css files etc while testing + created a fileMock.js file + added jest ModuleNameMapper for this.)
  
  created babel.config.js file to solve 'jsx' issue  (https://stackoverflow.com/questions/63005011/support-for-the-experimental-syntax-jsx-isnt-currently-enabled')
  
 @wojtekmaj/enzyme-adapter-react-17 for adapter in react 17
 
 regenerator-runtime `yarn add regenerator-runtime --dev` to solve 
 Issue: `ReferenceError: regeneratorRuntime is not defined` in the files where I am using async await in the function + imported import 'core-js/stable'; 
import 'regenerator-runtime/runtime'; in setupTests.js file or just directly import it in the test case file you are facing issue.
 
 ### helpful VSCode extensions for testing
 
 Jest
 
 Jest Runner
 
 ### Useful testing link
  
  https://jestjs.io/docs/tutorial-react
  
  https://enzymejs.github.io/enzyme/docs/guides/jest.html
  
  https://stackoverflow.com/questions/55341289/configure-enzyme-to-json-with-jest
  
  https://stackoverflow.com/questions/63005011/support-for-the-experimental-syntax-jsx-isnt-currently-enabled
  
  https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined
  
  https://stackoverflow.com/questions/42535270/regeneratorruntime-is-not-defined-when-running-jest-test
  
  https://stackoverflow.com/questions/45867095/test-react-component-method-is-calling-function-pass-as-a-prop

