import React from 'react';
import Color from 'src/components/Color';
import CloseButton from 'src/components/CloseButton';

function App() {
  return (
    <div className="App">
     react color picker
        <Color/>
        <CloseButton onClick={() => console.log('click')}/>
    </div>
  );
}

export default App;
