// import { defineType } from "sanity"

// export default defineType({

//     name: 'products',
//     title: 'Products',
//     type: 'document',
//     fields: [
//         {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//         },
//         {
//             title: 'Slug',
//             name: 'slug',
//             type: 'slug',
//             options: {
//               source: 'name',
//             }
          
//           },
//         {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         },
//         {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//         },
//         {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         },
//         {
//             name:"category",
//             title:"Category",
//             type: 'string',
//             options:{
//                 list:[
//                    {title: 'T-Shirt', value: 'tshirt'},
//                    {title: 'Short', value: 'short'}, 
//                    {title: 'Jeans', value: 'jeans'} ,
//                    {title: 'Hoddie', value: 'hoodie'} ,
//                    {title: 'Shirt', value: 'shirt'} ,
//                 ]
//             }
//         },
//         {
//             name:"discountPercent",
//             title:"Discount Percent",
//             type: 'number',
//         },
//         {
//             name:"new",
//             type: 'boolean',
//             title:"New",
//         },
//         {
//             name:"colors",
//             title:"Colors",
//             type: 'array',
//             of:[
//                 {type: 'string'}
//             ]
//         },
//         {
//             name:"sizes",
//             title:"Sizes",
//             type: 'array',
//             of:[
//                 {type: 'string'}
//             ]
//         },
        
//     ],
// })

 import { defineType } from "sanity"

 export default defineType(({
  name: 'products',
   title: 'Products',
   type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    },
    {
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: 'title', // Automatic slug based on title
        maxLength: 96,
      },
    },
  ],
}))