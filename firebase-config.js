// firebase-config.js
// ضع هنا إعدادات Firebase الخاصة بك
// مثال:
// const firebaseConfig = {
//   apiKey: "AIza...",
//   authDomain: "your-project.firebaseapp.com",
//   databaseURL: "https://your-project-default-rtdb.firebaseio.com",
//   projectId: "your-project",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:123:web:abc"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDwzl7yzPUsRXZEZPHSM9JPulm-ixGzarY",
  authDomain: "text2-fa5ff.firebaseapp.com",
  databaseURL: "https://text2-fa5ff-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "text2-fa5ff",
  storageBucket: "text2-fa5ff.firebasestorage.app",
  messagingSenderId: "1:656073883381:web:9a83bda798f6cfe3600fbc",
  appId: "G-F5EE8D9Z28"
};

// initialize firebase
if (!window.firebase || !firebase.apps || firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();
