var React =  require('react');
import ReactDOM from 'react-dom';
import PaybookWidget from './src/PaybookWidget';

ReactDOM.render(
  <PaybookWidget
  	token='5ca60f3e2ac4967a15212143d1048af0'
  	theme='ligth'
  />,
  document.getElementById('app')
);
