import { defineMiddleware } from 'astro:middleware';

// Simple middleware - let Astro handle most routing
export const onRequest = defineMiddleware(async (context, next) => {
  // Just pass through - trailing slash handling is done by Astro config
  // 404 page will be automatically served by the hosting platform
  return next();
});

