import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};
const dateDisplay = dateString => new Date(dateString).toDateString();

class Article extends React.PureComponent {
  render() {
    return (
      <div style={styles.article}>
        <div style={styles.title}>{this.props.article.title}</div>
        <div style={styles.date}>
          {dateDisplay(this.props.article.date)}
        </div>
        <div style={styles.author}>
          <a href={this.props.author.website}>
            {this.props.author.firstName} {this.props.author.lastName}
          </a>
        </div>
        <div style={styles.body}>{this.props.article.body}</div>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
  })
};

const extraProps = (store, props) => ({
  author: store.lookupAuthor(props.article.authorId)
});

export default storeProvider(extraProps)(Article);
