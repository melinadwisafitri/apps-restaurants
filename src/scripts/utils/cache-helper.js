import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(request) {
    const cache = await this._openCache();
    cache.addAll(request);
  },

  async deleteOldCache() {
    const cache = await caches.keys();
    cache.filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filter) => caches.delete(filter));
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchDataRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }
    await this._addCaches(request);
    return response;
  },

  async _addCaches(request) {
    const cache = await this._openCache();
    cache.add(request);
  },

  async validateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchDataRequest(request);
      return response;
    }
    return this._fetchDataRequest(request);
  },
};

export default CacheHelper;
