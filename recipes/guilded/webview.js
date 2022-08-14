module.exports = Ferdi => {
  const getMessages = () => {
    const directUnread = getDirectMessageCount();
    const indirectUnread = getIndirectMessageCount();
    Ferdi.setBadge(directUnread, indirectUnread);
  };


  const getDirectMessageCount = () => {
    let unread = 0;
    const notificationBadges = document.querySelectorAll('.NavV4SelectorRow-icon-container');
    if (notificationBadges?.length) {
      for(let i = 0; i < notificationBadges.length; i++) {
        const innerBadge = notificationBadges[i].querySelectorAll('.BadgeV2-count')[0];
        unread += Ferdi.safeParseInt(innerBadge?.textContent || '0');
      }
    }

    return unread;
  }

  const getIndirectMessageCount = () => {
    const notificationBadges = document.querySelectorAll('.NavV4SelectorRow-container-unread');
    return Ferdi.safeParseInt(notificationBadges?.length || '0');
  }


  window.addEventListener('beforeunload', async () => {
    Ferdi.clearStorageData(settings.id, {
      storages: [
        'appcache',
        'serviceworkers',
        'cachestorage',
        'websql',
        'indexdb',
      ],
    });
    Ferdi.releaseServiceWorkers();
  });

  Ferdi.loop(getMessages);

};
