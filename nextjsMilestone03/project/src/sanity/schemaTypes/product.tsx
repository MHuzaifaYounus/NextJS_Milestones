import { defineField, defineType } from "sanity";


export default defineType({
  name: 'product',
  type: 'document',
  title: 'Product Details',
  fields: [
    defineField(
      {
        name: 'id',
        type: 'number',
        title: 'ID',
      }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
    }),
    defineField({
      name: 'stock',
      type: 'number',
      title: 'Stock',
    }),
    defineField({
      name: 'isDiscont',
      type: 'boolean',
      title: 'Discount',
    }),
    defineField({
      name: 'discount',
      type: 'number',
      title: 'Discount in %',
      hidden: ({document}) => !document?.isDiscont

    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Product Image',
    }),
    defineField({
      name: 'rating',
      type: 'object',
      title: 'Rating',
      fields: [
        {
          name: 'rate',
          type: 'number',
          title: 'Rate',
        },
        {
          name: 'count',
          type: 'number',
          title: 'Count',
        },
      ],
    }),
  ]
})
