import GoTrue from 'gotrue-js';

import './global.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function pageLoad() {
  // Instantiate the GoTrue auth client with an optional configuration
}

if (document.readyState === "complete" || document.readyState === "loaded") {
  pageLoad();
}

document.addEventListener("DOMContentLoaded", pageLoad(), false);