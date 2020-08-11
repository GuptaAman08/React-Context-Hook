import React from 'react';
import Navbar from './component/Navbar'
import Booklist from './component/Booklist'
import ThemeContextProvider from './contexts/ThemeContextProvider';
import ThemeToggle from './component/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
