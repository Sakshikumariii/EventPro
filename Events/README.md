# EventPro - Event Management Application

A modern event management application built with React and Vite.

## Environment Setup

### Local Development

1. Create a `.env` file in the `Events` directory:
```env
VITE_API_URL=http://localhost:5000
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Production Deployment (Vercel)

**IMPORTANT:** You must configure the environment variable in Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add a new variable:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://eventpro-backend.onrender.com`
4. Redeploy your application

Without this environment variable, the app will use a fallback URL, but it's recommended to set it explicitly.

## Backend Setup

The backend server is configured with CORS to allow cross-origin requests. Make sure your backend is deployed and accessible at the URL specified in `VITE_API_URL`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
