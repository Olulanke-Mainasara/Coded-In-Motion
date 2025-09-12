import {defineField, defineType} from 'sanity'

export const priceType = defineType({
  name: 'pricingCategory',
  title: 'Pricing Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'priceTypes',
      title: 'Price Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'typeTitle',
              title: 'Type Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({name: 'duration', title: 'Duration', type: 'string'}),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
