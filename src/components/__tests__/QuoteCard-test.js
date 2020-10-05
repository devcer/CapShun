import * as React from 'react';
import renderer from 'react-test-renderer';
import { captions } from '../../constants/MockData';

import QuoteCard from '../QuoteCard';
describe('<QuoteCard />', () => {
  it('has 4 children', () => {
    var tree;
    captions.forEach((item) => {
      tree = renderer.create(<QuoteCard key={item.id} quote={item} />).toJSON();
      expect(tree.children.length).toBe(4);
    });
  });
  test('renders correctly', () => {
    let item = captions[0];
    let tree = renderer
      .create(<QuoteCard key={item.id} quote={item} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
