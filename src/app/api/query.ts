export const allProductsQuery = 
   `*[_type=="products"]{
  _id,
  name,
  description,
  price,
  "imageUrl" : image.asset->url,
  category,
  discountPercent,
  "isNew": new,
  colors,
  sizes
}`

