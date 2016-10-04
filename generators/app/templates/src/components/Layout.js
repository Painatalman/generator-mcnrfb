import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

const Layout = (props) => {
  let path = props.location.pathname;
  let segment = path.split('/')[1] || 'root'; // for providing unique keys if needed

  return (
    <div>
      <Header></Header>
        {props.children}
      <Footer></Footer>
    </div>
  )
};

export default Layout;
