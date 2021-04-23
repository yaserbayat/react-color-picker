import React from 'react';
import ColorOption from 'src/components/ColorOption';
import CloseButton from 'src/components/CloseButton';

function App() {
  return (
    <div className="App">
      <ColorOption isSelected bgColor="#edee" onSelect={color => console.log(color)} />
      <CloseButton onClick={() => console.log('click')} />
    </div>
  );
}

export default App;
