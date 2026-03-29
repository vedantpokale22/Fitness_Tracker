// import { Component } from "react";

// export default class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {favouritecolor: "red"};
//   }
// shouldComponentUpdate() {
//     return true;
//   }
//   changeColor = () => {
//     this.setState({ favouritecolor: "blue" });
//   }
//   render() { return (
//       <div>
//         <h1>My Favourite Color is {this.state.favouritecolor}</h1>
//         <button onClick={this.changeColor}>Change Color</button>
//       </div>
//     );
//   }
// }

// lifecycle methods
// import React, { Component } from "react";

// export default class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       favourateColor: "red",
//     };
//   }
//   render() {
//     return <div>My Favourate color is{this.state.favourateColor} </div>;
//   }
// }
// lifecycle methods
// import React, { Component } from "react";

// export default class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       favourateColor: "red",
//     };
//   }
//   static getDerivedStateFromProps(props, state) {
//     return { favourateColor: props.favcol };
//   }
//   render() {
//     return
//      <div>My Favourate color is{this.state.favourateColor} </div>;
//   }
// }
// lifecycle methods
// import React, { Component } from "react";

// export default class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       favourateColor: "red",
//     };
//   }
//   render() {
//     return <div>My Favourate color is{this.state.favourateColor} </div>;
//   }
// }
// lifecycle methods
// import React, { Component } from "react";

// export default class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       favourateColor: "red",
//     };
//   }
//   static getDerivedStateFromProps(props, state) {
//     return { favourateColor: props.favcol };
//   }
//   render() {
//     return
//      <div>My Favourate color is{this.state.favourateColor} </div>;
//   }
// }
import React, { Component } from "react";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favouritecolor: "red",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouritecolor: "YELLOW " });
    }, 3000);
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    document.getElementById("div1").innerHTML =
      "Before update,the favourite color was " + prevState.favouritecolor;
  };
  componentDidUpdate(prevProps, prevState) {
    document.getElementById("div2").innerHTML =
      "After update the favourite color is " + this.state.favouritecolor;
  }

  render() {
    return (
      <>
        <h1>My favourite color is {this.state.favouritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </>
    );
  }
}