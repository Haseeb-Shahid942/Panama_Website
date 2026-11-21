// Firebase messaging service worker placeholder
// This file prevents 404 errors for firebase-messaging-sw.js

console.log('Firebase messaging service worker loaded');

// Empty service worker to prevent 404 errors
self.addEventListener('install', function(event) {
  console.log('Service worker installing...');
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activating...');
});

self.addEventListener('fetch', function(event) {
  // Do nothing, just prevent errors
});