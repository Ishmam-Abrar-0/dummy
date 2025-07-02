# dummy



# Deployment
**Deploy AngularJS single page app on Netlify** with proper routing:
Create `_redirects` file:

`/*    /index.html   200`

For Apache servers, use `.htaccess`:
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule . /index.html [L]
```
