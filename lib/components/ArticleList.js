import React from 'react';
import Article from './Article';

export default class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article =>
          <Article
            key={article.id}
            article={article}
          />
        )}
      </div>
    );
  }
}
