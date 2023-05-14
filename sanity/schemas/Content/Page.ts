export default {
    name: 'pages',
    type: 'document',
    title: 'Pages',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options:{
          source: 'title',
        }
      },
      {
        name: "pageBuilder",
        type: "array",
        title: "Page Builder",
        of: [{type: 'hero'},{type: 'feature'},{type:'testimonials'}]
      },
    ]
  }