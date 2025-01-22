// import { defineConfig } from 'sanity';
// import { deskTool } from 'sanity/desk';
// import { schema } from '@/sanity/schemaTypes';

// export default defineConfig({
//   name: 'default',
//   title: 'Your Project Name',
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   plugins: [deskTool()],
//   schema: { types: schema },
// });


// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from '@/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Your Project Name',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool()],
  schema: {
  // This references the document types defined
  },
});
