# Verify Backend Deployment is Working

## Step 1: Check if Backend is Running

1. Open your browser and go to: `https://eventpro-backend.onrender.com`
2. You should see JSON Server's welcome page or API response
3. If you see an error, the backend is not running properly

## Step 2: Test CORS with Browser Console

1. Open your Vercel frontend: `https://event-pro-8z18-git-main-sakshis-projects-8cf90f76.vercel.app`
2. Open browser console (F12)
3. Run this command:

```javascript
fetch('https://eventpro-backend.onrender.com/login', {
  method: 'OPTIONS',
  headers: {
    'Origin': 'https://event-pro-8z18-git-main-sakshis-projects-8cf90f76.vercel.app',
    'Access-Control-Request-Method': 'POST',
    'Access-Control-Request-Headers': 'Content-Type'
  }
})
.then(response => {
  console.log('Status:', response.status);
  console.log('CORS Headers:', {
    'Access-Control-Allow-Origin': response.headers.get('access-control-allow-origin'),
    'Access-Control-Allow-Methods': response.headers.get('access-control-allow-methods'),
    'Access-Control-Allow-Headers': response.headers.get('access-control-allow-headers')
  });
})
.catch(error => console.error('Error:', error));
```

**Expected Result:**
- Status: 200
- `Access-Control-Allow-Origin` should show your Vercel URL (not null)
- If you see `null`, CORS is NOT working

## Step 3: Check Render.com Logs

1. Go to Render.com dashboard
2. Open your backend service
3. Click on "Logs" tab
4. Look for:
   - "Server is running on port XXXX"
   - "CORS enabled for all origins"
5. Check for any error messages

## Step 4: Verify Code is Deployed

1. In Render.com, check the "Events" tab
2. Make sure the latest deployment shows your recent commit
3. If not, you need to:
   - Push your code: `git push`
   - Manually trigger deployment in Render

## Common Issues:

### Backend shows old code:
- **Solution:** Make sure you committed and pushed `server/server.js`
- Then manually redeploy on Render

### CORS still not working after deployment:
- Check Render logs for errors
- Verify the server started successfully
- Try the browser console test above
- Make sure you're testing the deployed backend, not localhost

### Backend not accessible:
- Check Render dashboard - service might be sleeping
- Free tier services sleep after inactivity
- First request might take 30-60 seconds to wake up

