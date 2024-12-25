import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from './mygreetingapp';
import GreetingElementwithProp from './mygreetingprops';
import AppColor from './Appbgcolor';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
    <GreetingElement/>
    
 <GreetingElementwithProp  msg="Hello guys.Today is begining of week i.e. Monday"/>
 <GreetingElementwithProp  msg="Hello guys.Today is Tuesday"/>
 <GreetingElementwithProp  msg="Hello guys.Today is Wednesday"/>
 <GreetingElementwithProp  msg="Hello guys.Today is Thursday"/>
 <GreetingElementwithProp  msg="Hello guys.Today is end of week i.e. Friday"/>
 <GreetingElementwithProp  msg="Hello guys.Today is weekend i.e. Saturday"/>
 <GreetingElementwithProp  msg="Hello guys.Today is weekend i.e. Sunday"/>
 <AppColor heading="This is first element" lbl="Name :" color="green"/>
 <AppColor heading="This is second element" lbl="Name :" color="blue"/>
 <AppColor heading="This is third  element" lbl="Name :" color="Yellow"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
