import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5
        };
		this.incrementCount = this.incrementCount.bind(this)
    }
	
    incrementCount = () => {
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:
            this.setState({
                keyToChange: valueToChangeTo
            });
        */
		this.setState({
			count: this.state.count + 1
		});
		
    }
	
  
    render() {
        return (
            <div className="counter">
                /*TODO (Counter): display the value of count*/
				<h1>{this.state.count}</h1>
                /*TODO (Counter): add a button that calls incrementCount() when clicked*/
				<button className='increment' onClick={this.incrementCount}>Increment!</button>
            </div>
        );
    }
}

export default Counter;