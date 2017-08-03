function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var propTypes = {
  token: PropTypes.string,
  theme: PropTypes.string
};

var defaultProps = {
  baseDiv: 'sync_container'
};

var PaybookWidget = function (_Component) {
  _inherits(PaybookWidget, _Component);

  function PaybookWidget(props) {
    _classCallCheck(this, PaybookWidget);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.init = _this.init.bind(_this);
    return _this;
  }

  PaybookWidget.prototype.init = function init() {
    var w = window;
    var d = document;
    var s = 'script';
    var id = 'sync-widget';
    var r = 'syncWidget';

    w[r] = {};
    w[r] = w[r] || function () {
      w[r].q = w[r].q || [].push(arguments);
    };
    var js,
        fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? "http" : "https";
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://www.paybook.com/sync/widget.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
    window.syncWidget.options = {
      token: this.props.token,
      theme: this.props.theme,
      baseDiv: this.props.baseDiv
    };
  };

  PaybookWidget.prototype.componentDidMount = function componentDidMount() {
    this.init();
  };

  PaybookWidget.prototype.render = function render() {
    return React.createElement('div', { id: this.props.baseDiv });
  };

  return PaybookWidget;
}(Component);

PaybookWidget.propTypes = propTypes;
PaybookWidget.defaultProps = defaultProps;
export default PaybookWidget;