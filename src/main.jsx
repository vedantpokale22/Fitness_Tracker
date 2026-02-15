// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./Java.css";

// // Component shown when user is logged in
// function WelcomeUser() {
//   return <h1 className="user">Welcome User</h1>;
// }

// // Component shown when user is NOT logged in
// function WelcomeGuest() {
//   return <h1 className="guest">Welcome Guest</h1>;
// }

// // Conditional Rendering using Ternary Operator
// function UserGreeting({ isLoggedIn }) {
//   return isLoggedIn ? <WelcomeUser /> : <WelcomeGuest />;
// }   

// function Mobile(prop){
//     return <h2>This is a {prop.brand} mobile.</h2>;
// }
// // React 18 root
// const root = createRoot(document.getElementById("root"));
// root.render(

//     <>
//     <Mobile brand="Samsung" /> 
//    <UserGreeting isLoggedIn={true} />
//   <UserGreeting isLoggedIn={false} />
//     </>
// );


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const Greet = () => {
//   return <h1>Greet, This is the Functional Component</h1>;
// };

// createRoot(document.getElementById("root")).render(
//   <Greet />
// );

// class Welcome extends React.Component {
//   render() {
//     return <h1>Welcome, This is the Class Component</h1>;
//   }
// }

// function Hello() {
//   return <h2> This is hellow component</h2>
// }
// const Greet = () => {
//   return (
//   <><h1>Greet, This is the Functional Component</h1>
//   <Hello/>
//   </>
//   )
// };
// class Welcome extends React.Component {
//   render() {
//     return <h1>Welcome, This is the Class Component</h1>;
//   }
// }
// class Hellow extends React.Component {
//   render() {
//     <>
//     return <h2> greett</h2>;
//     <Welcome/>    </>
//   }
// }
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



