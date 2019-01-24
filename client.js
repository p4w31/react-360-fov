// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const myCylinderSurface = new Surface(
    2000, /* width */
    2000, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('TopLeftPanel', { /* initial props */ }),
    myCylinderSurface
  );

  r360.renderToSurface(
    r360.createRoot('TopCenterPanel', { /* initial props */ }),
    myCylinderSurface
  );

  r360.renderToSurface(
    r360.createRoot('TopRightPanel', { /* initial props */ }),
    myCylinderSurface
  );

  r360.renderToSurface(
    r360.createRoot('BottomRightPanel', { /* initial props */ }),
    myCylinderSurface
  );

  r360.renderToSurface(
    r360.createRoot('BottomLeftPanel', { /* initial props */ }),
    myCylinderSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};

