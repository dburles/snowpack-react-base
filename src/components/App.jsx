import React, { Suspense } from 'react';

const Button = React.lazy(() => {
  return import('./Button.jsx');
});

const App = () => {
  return (
    <div css={{ color: 'teal' }}>
      <Suspense fallback="Loading...">
        Hello World! <Button>Press me</Button>
      </Suspense>
    </div>
  );
};

export default App;
