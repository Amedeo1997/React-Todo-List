import React from 'react';

function Header() {
  const today = new Date().toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

  return (
    <header>
      <h1>{today}</h1>
    </header>
  );
}

export default Header;
