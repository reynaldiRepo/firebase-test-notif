// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAANXGKIdjuzB7ka32SwJD2vbFDkMBc_Hc",
  authDomain: "bosbas-6f7f2.firebaseapp.com",
  projectId: "bosbas-6f7f2",
  storageBucket: "bosbas-6f7f2.appspot.com",
  messagingSenderId: "538289962726",
  appId: "1:538289962726:web:72532f38b72811d0ca4527",
  measurementId: "G-8H020T68V6"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase)
// Retrieve Firebase Messaging obj

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
