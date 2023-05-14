export default {
    name: 'testimonials',
    type: 'object',
    title: 'Testimonials',
    fields:[
        {
            name: 'summary',
            type: 'text',
            title: 'Summary'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position'
        },
        {
            name:'avatar',
            type:'image',
            title:'Avatar',
        }
    ]
}