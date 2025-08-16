# Netlify Deployment Guide

## Prerequisites
- GitHub repository with your portfolio code
- Netlify account

## Deployment Steps

### 1. Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "New site from Git"

### 2. Connect Repository
1. Choose GitHub as your Git provider
2. Select your repository: `RohithGade0911/Temp_portfolio`
3. Select the main branch

### 3. Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 18 (automatically set in netlify.toml)

### 4. Deploy
1. Click "Deploy site"
2. Wait for the build to complete
3. Your site will be live at a Netlify URL

### 5. Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings

## Configuration Files

### netlify.toml
- Configures build settings
- Sets Node.js version
- Handles redirects for SPA routing
- Adds security headers

### next.config.ts
- Enables static export (`output: 'export'`)
- Configures image optimization for static hosting
- Sets trailing slashes for compatibility

## Troubleshooting

### Build Issues
- Ensure all dependencies are in package.json
- Check Node.js version compatibility
- Verify build command works locally

### Routing Issues
- Static export handles client-side routing
- All routes redirect to index.html
- Works with Next.js App Router

### Image Issues
- Images are unoptimized for static hosting
- Ensure all images are in the public folder
- Use relative paths for images

## Local Testing
```bash
npm run build
npm run start
```

Visit `http://localhost:3000` to test the production build locally.
