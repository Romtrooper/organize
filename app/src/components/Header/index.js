import React, { Component } from 'react';

export default class Header extends Component {
  state = { activeItem: 'home' }

  render() {
    return (
      <header className="Header" />
    );
  }
}
