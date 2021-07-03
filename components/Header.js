import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <div>
      <Menu style={{ marginTop: '10px' }}>
        <Link route="/">
          <a className="item">
            <h4>Bazinga!</h4>
          </a>
        </Link>

        <Menu.Menu position="right">
          <Link route="/artworks/new">
            <a className="item">
              <Button
                floated="right"
                content="Register Artwork"
                icon="add circle"
                primary
              />
            </a>
          </Link>
        </Menu.Menu>
      </Menu>
      <br />
    </div>
  );
};