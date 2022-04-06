module.exports = Ferdi => {
  const getMessages = () => {
    let count = 0;

    const count_muted = false;

    /*
     * new notification counter by tamas646
     */
    let notif_indicators = document.querySelectorAll('span.pq6dq46d.is6700om.cyypbtt7.fwizqjfa.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz');
    if(count_muted) {
      count = notif_indicators.length;
    }
    else {
      notif_indicators.forEach(span => count += span.parentNode.parentNode.childNodes.length == 1);
    }

    /*
     * add count of message requests on top of notification counter
     */
    const messageRequestsElement = document.querySelector('._5nxf');
    if (messageRequestsElement) {
      count += Ferdi.safeParseInt(messageRequestsElement.textContent);
    }

    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  localStorage.setItem(
    '_cs_desktopNotifsEnabled',
    JSON.stringify({
      __t: Date.now(),
      __v: true,
    }),
  );

  if (typeof Ferdi.onNotify === 'function') {
    Ferdi.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title =
          ((notification.title.props || {}).content || [])[0] || 'Messenger';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body =
          (((notification.options.body || {}).props || {}).content || [])[0] ||
          '';
      }

      return notification;
    });
  }
};
