import React, { Component } from'react';
import Link from'next/link';

class About extends Component {
  static async getInitialProps(ctx) {
    return { name: 'page' }
  }

  render() {
    const { name } = this.props

    return (
      <section id="About">
        <h1>About {name}</h1>
        <Link href="/">
          <a>Ir a Home</a>
        </Link>
        <style jsx>{`
          h1 {
            color: #27ae60;
          }
          a {
            text-decoration: none;
            color: #2c3e50;
          }
        `}</style>
      </section>
    )
  }
}

export default About