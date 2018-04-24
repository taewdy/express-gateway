module.exports = function (client) {
  const baseUrl = '/apps/';
  return {
    create (userId, app) {
      app.userId = userId;
      return client
        .post(baseUrl, app)
        .then(res => res.data);
    },
    update (appId, app) {
      return client
        .put(`${baseUrl}${encodeURIComponent(appId)}`, app)
        .then(res => res.data);
    },
    activate (id) {
      return client
        .put(`${baseUrl}${encodeURIComponent(id)}/status`, { status: true })
        .then(res => res.data);
    },

    deactivate (id) {
      return client
        .put(`${baseUrl}${encodeURIComponent(id)}/status`, { status: false })
        .then(res => res.data);
    },

    info (id) {
      return client
        .get(`${baseUrl}${encodeURIComponent(id)}`)
        .then(res => res.data);
    },

    list (params) {
      return client
        .get(baseUrl, { params })
        .then(res => res.data);
    },

    remove (id) {
      return client
        .delete(`${baseUrl}${encodeURIComponent(id)}`)
        .then(res => res.data);
    }

  };
};
