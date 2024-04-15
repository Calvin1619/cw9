import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: '', 
      selectedType: 'all' 
    };
  }

  handleDropdownSelect = (type) => {
    this.setState({ selectedType: type });
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    const { search, selectedType } = this.state;
	
    const itemName = item.name.toLowerCase();

    const isMatched = itemName.includes(search);

    const isTypeMatched = selectedType === 'all' || item.type === selectedType;

    return isMatched && isTypeMatched;
  }

  render(){
    return (
        <div className = "filter-list">
         
          /*TODO (FilteredList): Create a Dropdown Menu with three different menu options: Fruit, Vegetables, and All*/
          <h1>Produce Search</h1>
		  
        <DropdownButton id="typeDropdown" title="Type Selection" onSelect={this.handleDropdownSelect}>

          <Dropdown.Item eventKey="all">All</Dropdown.Item> <br />
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item> <br />
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item><br />
        </DropdownButton>
        <br />

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <br />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
