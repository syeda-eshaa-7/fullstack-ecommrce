// lib/sanity.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'your_project_id', // Replace with your Sanity project ID
  dataset: 'production', // Use the dataset you created
  useCdn: true, // Use the CDN for faster fetching
});
