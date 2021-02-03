import React from 'react';
import Header from './Components/Header';
import StockTicker from 'src/components/StockTicker';
import CommentsGridPage from 'src/components/CommentsGridPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <StockTicker />
      <CommentsGridPage />
    </div>
  );
};

export default App;
