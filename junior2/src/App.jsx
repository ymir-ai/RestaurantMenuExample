import React from 'react';
import FirstPage from './components/FirstPage.jsx';
import ResolvedFirstPage from './components/Resolved/FirstPage.jsx';

const showResolved = false;

function getCurrentPage() {
  if (showResolved) {
    return <ResolvedFirstPage />;
  }

  return <FirstPage />;
}

function App() {
  return getCurrentPage();
}

export default App;
