import React from 'react';
import ArticleList from '../ArticleList';

import { shallow } from 'enzyme';

describe('ArticleList', () => {

  const testProps = {
    articles: [
      { id: 'a' },
      { id: 'b' },
    ],
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });

});
