export const routesPath = {
  home: '/',
  about: '/about',
  career: '/career',
  platformEngineering: '/platform-engineering',
  applicationEngineering: '/application-engineering',
  salesforceCrm: '/salesforce-crm',
  cyberSecurity: '/cyber-security',
  aiAgents: '/ai-agents',
  blogs: '/blogs',
  blogById: '/blogs/:id',
  privacy: '/privacy',
  terms: '/terms'
}

export const elementIds = {
  home: "ds-home",
  about: "ds-about",
  services: "ds-services",
  contact: "ds-contact",
  career: "ds-career",
  blogs: "ds-blogs",
}

// Blog API configuration
// Set this to your local blog API when testing locally
export const blogApiConfig = {
  baseUrl: process.env.REACT_APP_BLOG_API_URL || 'http://localhost:8080',
  siteTag: process.env.REACT_APP_SITE_TAG || 'ds', // Tag to filter blogs for this site (lowercase, as admin normalizes to lowercase)
};

// Legacy URL (kept for reference)
export const blogsApiUrl = "https://workdesk.datasirpi.com/read-blogs";