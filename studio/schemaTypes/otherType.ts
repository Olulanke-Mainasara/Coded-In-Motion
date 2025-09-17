import {defineField, defineType} from 'sanity'

export const otherType = defineType({
  name: 'others',
  title: 'Others',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
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
        defineField({
          name: 'video',
          title: 'Video',
          type: 'mux.video',
        }),
      ],
      // 🔒 Validation: must choose either image or video, not both
      validation: (rule) =>
        rule.custom((fields) => {
          if (fields?.image && fields?.video) {
            return 'Please provide either an image OR a video, not both.'
          }
          if (!fields?.image && !fields?.video) {
            return 'Please provide an image or a video.'
          }
          return true
        }),
    }),
  ],
})
