# Deployment Fix Guide

## Issues Identified

1. **CORS Error**: Backend not allowing cross-origin requests from Vercel frontend
2. **404 Error**: Backend endpoint not found or not properly configured
3. **Missing Environment Variable**: Frontend doesn't have `VITE_API_URL` configured in Vercel

## Solutions Applied

### 1. Backend Server (Render.com) - FIXED ✅

The `server/server.js` file has been **completely rewritten** with:
- **OPTIONS request handler FIRST** - Catches all preflight requests before any other middleware
- CORS middleware configured to allow all origins
- CORS headers added to ALL responses as backup
- Proper middleware order to work with json-server-auth

**⚠️ CRITICAL ACTION REQUIRED:**
1. **Commit and push the updated `server/server.js` to your repository**
   ```bash
   git add server/server.js
   git commit -m "Fix CORS - handle OPTIONS requests first"
   git push
   ```

2. **MUST REDEPLOY your backend on Render.com:**
   - Go to Render.com dashboard
   - Find your backend service
   - Click **"Manual Deploy"** → **"Deploy latest commit"**
   - **WAIT for deployment to complete** (this is critical!)
   - Check the logs to verify server started successfully

3. **Verify CORS is working:**
   - After deployment, you can test with: `node server/test-cors.js`
   - Or check Render logs for "CORS enabled for all origins" message

### 2. Frontend (Vercel) - PARTIALLY FIXED

The `Events/src/services/api/axiosApi.js` has a fallback URL, but you still need to set the environment variable.

**ACTION REQUIRED:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://eventpro-backend.onrender.com`
   - **Environment:** Production, Preview, Development (select all)
4. **Redeploy your frontend** on Vercel

## Step-by-Step Deployment

### Backend Deployment (Render.com)

1. **Commit your changes:**
   ```bash
   git add server/server.js
   git commit -m "Fix CORS configuration for production"
   git push
   ```

2. **On Render.com:**
   - Go to your backend service dashboard
   - Click **Manual Deploy** → **Deploy latest commit**
   - Wait for deployment to complete
   - Check logs to ensure server starts without errors

### Frontend Deployment (Vercel)

1. **Set Environment Variable:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `VITE_API_URL` = `https://eventpro-backend.onrender.com`
   - Save

2. **Redeploy:**
   - Go to Deployments tab
   - Click the three dots on latest deployment → **Redeploy**
   - Or push a new commit to trigger auto-deploy

## Testing After Deployment

### Test Backend CORS (Before testing frontend):

1. **Quick Test:**
   ```bash
   cd server
   node test-cors.js
   ```
   Should show ✅ CORS is configured correctly

2. **Manual Test:**
   - Open browser console on any page
   - Run this command:
   ```javascript
   fetch('https://eventpro-backend.onrender.com/login', {
     method: 'OPTIONS',
     headers: { 'Origin': window.location.origin }
   }).then(r => console.log('CORS Headers:', r.headers.get('access-control-allow-origin')))
   ```
   - Should return your origin URL, not null

### Test Frontend:

1. **Check Backend:**
   - Visit: `https://eventpro-backend.onrender.com`
   - Should see JSON Server welcome page or API response

2. **Check Frontend:**
   - Visit your Vercel URL
   - Open browser console (F12)
   - **Clear console and refresh page**
   - Try logging in or signing up
   - Should NOT see CORS errors anymore

## Common Issues

### If CORS errors persist:
- Verify backend is redeployed with new code
- Check Render.com logs for errors
- Ensure backend URL is correct

### If 404 errors persist:
- Verify `json-server-auth` is properly installed on Render
- Check that `db.json` exists in the server directory
- Verify the backend service is running (check Render dashboard)

### If login still fails:
- Check browser console for specific error messages
- Verify backend is accessible: `https://eventpro-backend.onrender.com/login` (should return method not allowed for GET, but should work for POST)
- Check Render.com logs for backend errors

## Verification Checklist

- [ ] Backend `server.js` is updated and committed
- [ ] Backend is redeployed on Render.com
- [ ] Frontend environment variable `VITE_API_URL` is set in Vercel
- [ ] Frontend is redeployed on Vercel
- [ ] Backend is accessible (check Render dashboard)
- [ ] No CORS errors in browser console
- [ ] Login functionality works

## Need Help?

If issues persist after following these steps:
1. Check Render.com deployment logs
2. Check Vercel deployment logs
3. Check browser console for specific error messages
4. Verify both services are running and accessible

