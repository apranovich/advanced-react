import React from 'react';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
// import Perf from 'react-addons-perf';
import pickBy from 'lodash.pickby';

// if(typeof window !== 'undefined'){
//   window.Perf = Perf;
// }

class App extends React.PureComponent {
  static childContextTypes = {
    store: PropTypes.object
  };
  
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }
  
  state = this.appState();

  componentDidMount() {
    this.subscriberId = this.props.store.subscribe(
      () => { 
        this.setState(this.appState()); 
      }
    );
  //   setImmediate(() => {
  //     Perf.start();
  //   });
  //   setTimeout(() => {
  //     Perf.stop();
  //     Perf.printWasted();
  //   }, 5000);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriberId);
  }

  filterArticles = (articles, searchRegex) => 
    pickBy(articles, value => {
      return value.title.match(searchRegex) || value.body.match(searchRegex);
    });

  render() {
    let { articles, searchTerm } = this.state;
    const searchRegex = new RegExp(searchTerm, 'i');

    if(searchTerm) {
      articles = this.filterArticles(articles, searchRegex);
    }

    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
