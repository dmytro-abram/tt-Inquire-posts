import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => (
  <>
    <Link
        className="buttonHeader"
        exact
        to="/"
        activeClassName="is-active"
      >
        Home
    </Link>

      <Link
        className="buttonHeader"
        exact
        to="/post-add"
        activeClassName="is-active"
      >
        Add Post
      </Link>
  </>
);