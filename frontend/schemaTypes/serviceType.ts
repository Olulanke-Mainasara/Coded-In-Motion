import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Emoji or icon reference (optional)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'exampleMedia',
      title: 'Example Media',
      type: 'array',
      of: [
        {type: 'image', options: {hotspot: true}},
        {type: 'mux.video', name: 'video', title: 'Video'},
      ],
      description: 'Add an image or video showing an example of this service',
    }),
  ],
})
