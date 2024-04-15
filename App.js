import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';

import FilteredList from './FilteredList';  

//TODO (FilteredList): create a produce list using the 'const' variable keyword
const produce = [    
{name: "Apple", type: "Fruit"},    
{name: "Pineapple", type: "Fruit"} ,    
{name: "Banana", type: "Fruit"},    
{name: "Pear", type: "Fruit"},    
{name: "Strawberry", type: "Fruit"},    
{name: "Orange", type: "Fruit"},    
{name: "Lettuce", type: "Vegetable"},    
{name: "Cucumber", type: "Vegetable"},    
{name: "Eggplant", type: "Vegetable"},    
{name: "Squash", type: "Vegetable"},    
{name: "Bell pepper", type: "Vegetable"},    
{name: "Onion", type: "Vegetable"},  
];  

class App extends Component {
    render() {
        return (
			<div className="App">
                /*TODO (HelloWorld): create an instance of the HelloWorld Component*/
				<HelloWorld name= {'[Calvin]'}/>
                /*TODO (Counter): create an instance of the Counter Component*/
				<Counter/>
            	/*TODO (FilteredList): create an instance of the FilteredList Component with a variable named items that takes in your produce list*/
				<FilteredList items= {produce}/>
            </div>
        );
    }
}

export default App;
