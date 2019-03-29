const fs = require('fs');
const path = require('path');

module.exports = {

  "entry": {
    "styles": [
      "src/styles.scss"
    ]
  },
  "output": {
    "path": path.join(process.cwd(), "dist/widget/styles"),
    "filename": "[name].bundle.js",
    "chunkFilename": "[id].chunk.js",
    "crossOriginLoading": false
  }
};
