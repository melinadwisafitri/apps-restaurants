/* eslint-disable no-alert */
import { Workbox } from 'workbox-window';

const registerSW = () => {
  if ('serviceWorker' in navigator) {
    const workboc = new Workbox('../sw.js');
    workboc.addEventListener('installed', (e) => {
      if (e.isUpdate) {
        if (confirm('Do you reset/reload the workbox?')) {
          window.location.reload();
        }
      }
    });
    workboc.register();
  }
};

export default registerSW;
