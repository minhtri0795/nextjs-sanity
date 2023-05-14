export default {
  name: 'feature',
  type: 'object',
  title: 'Feature',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Feature description',
    },
    {
      name: 'featureItems',
      type: 'array',
      title: 'Feature items',
      of: [
        { type: 'item'}
      ],
    },
  ],
}
