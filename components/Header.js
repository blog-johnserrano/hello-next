import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  color: '#2c3e50',
  textDecoration: 'none'
}

function Header() {
  return (
    <header id="Header">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </header>
  )
}

export default Header