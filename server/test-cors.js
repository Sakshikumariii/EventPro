// Quick test script to verify CORS is working
// Run: node test-cors.js

const https = require('https');

const backendUrl = 'https://eventpro-backend.onrender.com';

console.log('Testing CORS configuration...\n');

// Test OPTIONS request (preflight)
const options = {
  hostname: 'eventpro-backend.onrender.com',
  path: '/login',
  method: 'OPTIONS',
  headers: {
    'Origin': 'https://event-pro-8z18-git-main-sakshis-projects-8cf90f76.vercel.app',
    'Access-Control-Request-Method': 'POST',
    'Access-Control-Request-Headers': 'Content-Type'
  }
};

const req = https.request(options, (res) => {
  console.log('OPTIONS Request Status:', res.statusCode);
  console.log('CORS Headers:');
  console.log('  Access-Control-Allow-Origin:', res.headers['access-control-allow-origin']);
  console.log('  Access-Control-Allow-Methods:', res.headers['access-control-allow-methods']);
  console.log('  Access-Control-Allow-Headers:', res.headers['access-control-allow-headers']);
  console.log('  Access-Control-Allow-Credentials:', res.headers['access-control-allow-credentials']);
  
  if (res.statusCode === 200 && res.headers['access-control-allow-origin']) {
    console.log('\n✅ CORS is configured correctly!');
  } else {
    console.log('\n❌ CORS is NOT configured correctly!');
  }
});

req.on('error', (error) => {
  console.error('Error:', error.message);
  console.log('\n❌ Backend might not be running or accessible');
});

req.end();

