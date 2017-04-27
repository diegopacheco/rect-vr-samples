// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import * as OVRUI from 'ovrui';

function init(bundle, parent, options) {
  OVRUI.loadFont(
    '../static_assets/fonts/japanese.fnt',
    '../static_assets/fonts/japanese.png'
  ).then((font) => {
    // 'font' contains everything React VR needs to render <Text> elements with
    // your custom font.

    // Pass it to the boilerplate init code
    const vr = new VRInstance(bundle, 'World', parent, {
      font: font,
      ...options,
    });
    vr.render = function() {
      // Any custom behavior you want to perform on each frame goes here
    };
    vr.start();
  });
}

window.ReactVR = {init};
