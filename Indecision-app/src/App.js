// import without the ./ for 3rd party software added
// this is an npm module!
import React from 'react';
// Readig documentation for 3rd party resources can be important for knowing what you need to import.
// Grab default export before curly brackets, and it can be renamed to anything because its the default
// import subtractMethod, {square, add} from './utils.js'
import IndecisionApp from './components/IndecisionApp';

const App = () => {
  return (
    <div>
      <IndecisionApp options={['Hell\'s kitchen', 'Gotham']}/>
    </div>
  );
}


//  Put this into app to run the entire Indecision application
export default App;