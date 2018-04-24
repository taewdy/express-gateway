module.exports = function (client) {
  const baseUrl = '/users/';
  return {
    create (user) {
      return client
        .post(baseUrl, user)
        .then(res => res.data);
    },
    update (id, user) {
      return client
        .put(`${baseUrl}${encodeURIComponent(id)}`, user)
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
        .del(`${baseUrl}${encodeURIComponent(id)}`)
        .then(res => res.data);
    }

  };
};
