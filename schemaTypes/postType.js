import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Type of post",
      description: "Pick the format of your post",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Video", value: "video" },
          { title: "Podcast", value: "podcast" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'images', // Field name
      title: 'Images', // Display name in Studio
      type: 'array', // Array type for multiple images
      of: [{ type: 'image' }], // Array of images
      options: {
        hotspot: true, // Enable image hotspot for cropping
      },}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})