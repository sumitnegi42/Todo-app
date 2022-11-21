import React from 'react'

function Header() {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  return (
    <div>
     <header style={headerStyle}>
     <h1  style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textTransform: "upperCase",
        textAlign: "center",
      }}>Todos</h1>
     </header>
    </div>
  )
}

export default Header