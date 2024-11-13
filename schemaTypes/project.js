import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      rows: 6,
    }),
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }]
    },
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
