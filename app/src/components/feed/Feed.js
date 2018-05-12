import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

const NewsFeed = () => (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <Icon name='trophy' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
               You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='lab' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
               You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='rocket' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
               You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
);

export default NewsFeed;
