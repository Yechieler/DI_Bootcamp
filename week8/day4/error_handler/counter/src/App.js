import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

import './App.css';

function App() {
  return (
    <>
      <ErrorBoundary>
      <Counter/>
      <Counter/>
      </ErrorBoundary>
     
    </>
  );
}

export default App;
