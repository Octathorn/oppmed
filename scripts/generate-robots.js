import fs from 'fs';
import path from 'path';

const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://oppmed.com/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /private/

# Allow important pages
Allow: /services
Allow: /contact
Allow: /careers

# Crawl delay (optional)
Crawl-delay: 1

# Google specific
User-agent: Googlebot
Allow: /

# Bing specific
User-agent: Bingbot
Allow: /

# Social media crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /`;

// Write robots.txt to public directory
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
console.log('Robots.txt generated successfully!');
