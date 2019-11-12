const React = require('react');
const logo = require('./logo.svg');
// const BadgeIcon = require('@ml-demo/badgeicon');
// const { Truck } = require('@ml-demo/common');
require('./App.css');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { /*
          <div className="icon-container">
            <BadgeIcon square={'150px'} icon={Truck} />
          </div>
        */ }
        <p className="App-link">
          This is a test of the <strong>@ml-demo</strong> library.
        </p>
      </header>
    </div>
  );
}

export default App;
