#!/usr/bin/env node

/**
 * Sitemap Generator for Datasirpi Website
 * Generates sitemap.xml with lastmod dates and all routes
 * 
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.datasirpi.com';

// Static routes with their priorities and change frequencies
const staticRoutes = [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/platform-engineering', priority: 0.9, changefreq: 'monthly' },
    { path: '/application-engineering', priority: 0.9, changefreq: 'monthly' },
    { path: '/salesforce-crm', priority: 0.9, changefreq: 'monthly' },
    { path: '/cyber-security', priority: 0.9, changefreq: 'monthly' },
    { path: '/ai-agents', priority: 0.9, changefreq: 'monthly' },
    { path: '/case-studies', priority: 0.8, changefreq: 'monthly' },
    { path: '/blogs', priority: 0.7, changefreq: 'weekly' },
    { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { path: '/terms', priority: 0.3, changefreq: 'yearly' }
];

// Case study IDs (these are dynamically generated routes)
const caseStudyIds = [
    'fintech-multicloud-ksa',
    'cybersecurity-soc-automation-usa',
    'equipment-management-uae',
    'kafka-migration-confluent-usa',
    'money-app-multicloud-uae',
    'alfresco-medical-billing-usa'
];

function getLastModDate() {
    return new Date().toISOString().split('T')[0];
}

function generateSitemapXml() {
    const lastmod = getLastModDate();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static routes
    staticRoutes.forEach(route => {
        xml += `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
    });

    // Add case study dynamic routes
    caseStudyIds.forEach(id => {
        xml += `  <url>
    <loc>${SITE_URL}/case-studies/${id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });

    xml += `</urlset>
`;

    return xml;
}

function main() {
    const sitemap = generateSitemapXml();
    const publicDir = path.join(__dirname, '..', 'public');
    const outputPath = path.join(publicDir, 'sitemap.xml');

    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log(`✓ Sitemap generated at: ${outputPath}`);
    console.log(`  - ${staticRoutes.length} static routes`);
    console.log(`  - ${caseStudyIds.length} case study routes`);
    console.log(`  - Total: ${staticRoutes.length + caseStudyIds.length} URLs`);
}

main();
