// import { TagIcon } from "@sanity/icons";
// import { defineField, defineType } from "sanity";

//  const categoryType = defineType({
//   name: "category",
//   title: "Category",
//   type: "document",
//   icon: TagIcon,
//   fields: [
//     defineField({
//       name: "title",
//       type: "string",
//     }),
//     defineField({
//       name: "slug",
//       type: "slug",
//       options: {
//         source: "title",
//       },
//     }),
//     defineField({
//       name: "description",
//       type: "text",
//     }),
//   ],
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "description",
//     },
//   },
// });

// export default categoryType



import { defineType } from "sanity";

 const categoryType = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        }
    ],
});



export default categoryType