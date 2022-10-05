const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdi => {
  function getMessages() {
    let count = document.getElementsByClassName('bx-im-informer-num-digit')[0];
    Ferdi.setBadge(count ? Number.parseInt(count.innerHTML) : 0);
  }
  Ferdi.loop(getMessages);
};
