// =====================================================================
//  ONE-TIME SETUP  (see README.md, takes ~5 minutes, free, no card)
//  Paste your Firebase web-app config below. Leave databaseURL empty to
//  run in DEMO mode (only syncs between tabs on one device – good for a
//  quick look, not for a real game).
// =====================================================================
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDd8-MLHJP2ko4RfVKOLZ8j0dMacgVxd1c",
    authDomain: "impostor-irl-campus.firebaseapp.com",
    databaseURL: "https://impostor-irl-campus-default-rtdb.firebaseio.com",   // e.g. "https://your-project-default-rtdb.firebaseio.com"
    projectId: "impostor-irl-campus",
    appId: "1:576683044663:web:6ee49e1be19b605ba174b2"
  },

  // Changing this changes every task QR code (you would need to reprint).
  taskSalt: "CampusGame_7fK9mQ2vR8xL5pN3",

  tasksPerPlayer: 4,
  defaultImpostors: 2,   // host can change this in the lobby
  maxPlayers: 20
};
