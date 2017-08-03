var React =  require('react');
import ReactDOM from 'react-dom';
import PaybookWidget from './src/PaybookWidget';

ReactDOM.render(
  <PaybookWidget options={{token:"*************", baseDiv: "sync_container", theme: "ligth"}} />,
  document.getElementById('app')
);
