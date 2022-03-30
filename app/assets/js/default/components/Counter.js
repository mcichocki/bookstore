import React from "react";

class Counter extends React.Component {
    state = {
        counter: 0
    };

    increment = () => {
        this.setState({
           counter: this.state.counter+1
        });
    }
}

export default Counter;