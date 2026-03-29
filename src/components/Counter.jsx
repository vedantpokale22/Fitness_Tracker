import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    //Mounting phase
    componentDidMount() {
        console.log("Counter page mounted");
    }
    //Updating phase
    componentDidUpdate(prevProps, prevState) {
        if(prevState !==this.state.count)
        console.log("Counter updated"+this.state.count);
    }
        //Unmounting phase
    componentWillUnmount() {
        console.log("Leaving Counter page");
    }

    //Event handlers
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <h1>Counter page</h1>
                <h1>count: {this.state.count}</h1>
                <h2>Click the button to increment the counter</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}