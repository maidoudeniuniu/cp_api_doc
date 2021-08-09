module.exports = {
    title: 'VuePress',
    description: 'Just playing around',
    base:"/",
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig:{
        nav:[
            {
                text:"首页",
                link:'/'
            },
            {
                text:"组件",
                link:'/comp/'
            }, 
        ],
        sidebar:{
            "/comp/":[
                '/comp/',
                '/comp/select.md'
            ]
        }
    },
    plugins:["demo-container"],
    markdown:{}
}