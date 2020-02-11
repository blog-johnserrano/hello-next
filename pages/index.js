import Header from '../components/Header'

function Home() {
  return (
    <section id="Home">
      <h1>Página principal</h1>      
      <Header />
      <p>Hello Next.js</p>
      <style jsx>{`
        h1 {
          color: #2980b9;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}

export default Home