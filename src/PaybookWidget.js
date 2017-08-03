import React, { Component } from 'react';

class PaybookWidget extends Component {
  constructor(props){
    super(props);
    this.init = this.init.bind(this);
  }

  init(){
      const w=window;
      const d=document;
      const s='script';
      const id='sync-widget';
      const r = 'syncWidget';

      w[r]={};
      w[r]=w[r]||function(){w[r].q=w[r].q||[].push(arguments)};
      var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";
      if(!d.getElementById(id)){
          js=d.createElement(s);
          js.id=id;
          js.src=p+"://www.paybook.com/sync/widget.js";
          fjs.parentNode.insertBefore(js,fjs);
      }
      window.syncWidget.options = Object.assign({}, this.props.options);
  }

  componentDidMount(){
      this.init();
  }

  render() {
    return(
      <div id={this.props.options.baseDiv} />
    );
  }
}

export default PaybookWidget;
