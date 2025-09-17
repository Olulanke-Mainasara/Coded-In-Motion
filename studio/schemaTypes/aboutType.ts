import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // Pricing section
    defineField({
      name: 'pricing',
      title: 'Pricing Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'pricing'}]}],
    }),

    // Testimonials section
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineField({
          name: 'testimonial',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
        }),
      ],
    }),
  ],
})
