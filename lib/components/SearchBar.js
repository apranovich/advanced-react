import React from 'react';
//import debounce from 'lodash.debounce';
import withStore from './storeProvider';

class SearchBar extends React.PureComponent {
  
  state = {
    searchTerm: ''
  };

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.props.store.setSearchTerm(this.state.searchTerm);
    });
  }
  
  render() {
    return (
      <input 
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default withStore()(SearchBar);