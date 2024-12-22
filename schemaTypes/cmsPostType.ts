import {defineField, defineType} from 'sanity'

export const cmsPostType = defineType({
    name: 'cms.post',
    title: 'CMS Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'caption',
            type: 'text',
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
    ],
})
