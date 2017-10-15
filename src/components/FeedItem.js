import React from 'react';
import { ITEM_SHAPE } from '../CONSTANTS';

const FeedItem = ({ feed }) => (
  <div>
    <div className="row marketing">
      <div className="col-lg-12">
        <a href={feed.link}>
          <h4>{feed.title}</h4>
        </a>
        <p>{feed.description}</p>
      </div>
    </div>
  </div>
);


FeedItem.propTypes = {
  feed: ITEM_SHAPE.isRequired // eslint-disable-line
};

export default FeedItem;
