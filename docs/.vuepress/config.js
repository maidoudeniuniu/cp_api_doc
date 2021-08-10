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
        sidebar:[
            {
                title: '组件',   // 必要的
                path: '/comp/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [  
                    '/comp/map.md'
                ]
              },
        ],
        // sidebar:{
        //     "/comp/":[
        //         '/comp/', 
        //         '/comp/select.md',
        //         '/comp/map.md'
        //     ]
        // }
    },
    plugins:["demo-container"],
    markdown:{}
}