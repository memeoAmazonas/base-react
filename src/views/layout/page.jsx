import React from 'react';

import Body from './body';
import Header from './header';
import Footer from './footer';

import '../../sass/views/layout.scss';

const Page = () => (
  <div className="page">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default Page;

