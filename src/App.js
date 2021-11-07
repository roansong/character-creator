import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import Highlight from './components/Highlight';

function App() {
  return (
    <>
      <Highlight />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
