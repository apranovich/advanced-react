import React from 'react';
import withStore from './storeProvider';

class Timestamp extends React.PureComponent {
  static displayTimestamp = timestamp => 
    timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  render() {
    return (
      <div>
        {this.props.timestamp}
      </div>
    );
  }
}

const extraProps = store => {
  return {
    timestamp: Timestamp.displayTimestamp(store.getState().timestamp)
  };
};

export default withStore(extraProps)(Timestamp);