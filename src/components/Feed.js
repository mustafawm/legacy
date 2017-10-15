import React from 'react';
import { generate } from 'shortid';
import { arrayOf,  } from 'prop-types';
import FeedItem from './FeedItem';
import { ITEM_SHAPE } from '../CONSTANTS';

const Feed = ({ feeds }) => (
  <div>
    {feeds.map(item => <FeedItem key={generate()} feed={item} />)}
  </div>
);


Feed.propTypes = {
  feeds: arrayOf( ITEM_SHAPE ).isRequired
};

export default Feed;
