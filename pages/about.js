import React from'react';
import Link from'next/link';


function About({ page, name }) {
  return (
    <section id="About">
      <h1>About {page}</h1>
      <p>My name is {name}</p>
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

export async function getStaticProps(ctx) {
  return {
    props: {
      page: 'page',
      name: 'John Serrano'
    }
  }
}

export default About
