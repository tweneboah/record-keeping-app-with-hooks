import React from 'react';
import RecordsDasboard from './components/Records/RecordsDasboard';
import Header from './components/Header/AppHeader';
import Footers from './components/Footer/Footers';


const App = () => {
  return (
    <>
      <Header />
      <RecordsDasboard />
      <Footers />
    </>
  );
}

export default App;
