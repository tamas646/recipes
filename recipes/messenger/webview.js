module.exports = Ferdi => {
  const getMessages = () => {
    let count = 0;

    const count_muted = false;

    /*
     * new notification counter by tamas646
     */
    let notif_indicators = document.querySelectorAll('span.x3nfvp2.xwnonoy.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x1kpxq89.xsmyaan.x972fbf.xcfux6l.x1qhh985.xm0m39n.x14yjl9h.xudhj91.x18nykt9.xww2gxu');
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
