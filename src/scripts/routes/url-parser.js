const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const spliteUrl = this._urlSplit(url);
    return this._urlCombiner(spliteUrl);
  },

  parseActiveWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplit(url);
  },

  _urlSplit(url) {
    const urlSplit = url.split('/');
    return {
      resource: urlSplit[1] || null,
      id: urlSplit[2] || null,
      verb: urlSplit[3] || null,
    };
  },

  _urlCombiner(spliteUrl) {
    return (spliteUrl.resource ? `/${spliteUrl.resource}` : '/')
        + (spliteUrl.id ? '/:id' : '')
        + (spliteUrl.verb ? `/${spliteUrl.verb}` : '');
  },
};
export default UrlParser;
