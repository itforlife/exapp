import React from 'react';
import Link from 'next/link';

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link href="/">
      <a style={{ fontSize: 20 }}>Go back to the homepage</a>
    </Link>
  </div>
)

export default SecondPage
