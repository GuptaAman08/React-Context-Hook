import React from 'react';
import Navbar from './component/Navbar'
import Booklist from './component/Booklist'
import ThemeContextProvider from './contexts/ThemeContextProvider';
import ThemeToggle from './component/ThemeToggle';
import AuthContextProvider from './contexts/authContextProvider';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
