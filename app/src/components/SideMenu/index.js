import React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SideMenu = () => (
  <div className="SideMenu">
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="push"
        width="thin"
        direction="left"
        visible={this.props.visible}
        icon="labeled"
        vertical
        inverted
      >
        <Link to="/">
          <Menu.Item name="home">
            <Icon name="home" />
                  Home
          </Menu.Item>
        </Link>
        <Link to="/dashboard">
          <Menu.Item name="tasks">
            <Icon name="tasks" />
                    Dashboards
          </Menu.Item>
        </Link>
        <Link to="/reminder">
          <Menu.Item name="sticky note outline">
            <Icon name="sticky note outline" />
                Reminder
          </Menu.Item>
        </Link>
      </Sidebar>
    </Sidebar.Pushable>
  </div>
);


export default SideMenu;
