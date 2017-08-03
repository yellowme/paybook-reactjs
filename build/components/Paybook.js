'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  options: _propTypes2.default.object
};

var defaultProps = {
  options: {}
};

var Paybook = function (_React$Component) {
  _inherits(Paybook, _React$Component);

  function Paybook(props) {
    _classCallCheck(this, Paybook);

    var _this = _possibleConstructorReturn(this, (Paybook.__proto__ || Object.getPrototypeOf(Paybook)).call(this, props));

    _this.init = _this.init.bind(_this);
    return _this;
  }

  _createClass(Paybook, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      var w = window;
      var d = document;
      var s = 'script';
      var id = 'sync-widget';
      var r = 'syncWidget';

      w[r] = {};
      w[r] = w[r] || function () {
        w[r].q = w[r].q || [].push(arguments);
      };
      var js = void 0,
          fjs = d.getElementsByTagName(s)[0],
          p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://www.paybook.com/sync/widget.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
      window.syncWidget.options = Object.assign({}, this.props.options);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: this.props.options.baseDiv });
    }
  }]);

  return Paybook;
}(_react2.default.Component);

Paybook.propTypes = propTypes;
Paybook.defaultProps = defaultProps;
exports.default = Paybook;