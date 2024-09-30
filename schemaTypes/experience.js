import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobExperience',
  title: 'Job Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),defineField({
        name: 'location',  
        title: 'Location',
        type: 'string',  
      }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),  defineField({
        name: 'isPresent',  
        title: 'Currently Employed', 
        type: 'boolean',    
        options: {
          layout: 'checkbox',  
        },
      }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'projectLogos',
      title: 'Project Logos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})