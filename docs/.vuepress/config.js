module.exports = {
    title: 'd11s',
    description: 'Devin Beeuwkes\' personal blog' ,
    theme: '@vuepress/theme-blog',
    themeConfig: {
        modifyBlogPluginOptions: (options) => {
            options.directories = [
                {
                    id: 'post',
                    dirname: '_posts',
                    path: '/articles/',
                    itemPermalink: '/article/:slug',
                    pagination: {
                        lengthPerPage: 10,
                    },
                },{
                    id: 'talk',
                    dirname: '_talks',
                    path: '/talks/',
                    itemPermalink: '/talk/:slug',
                    pagination: {
                        lengthPerPage: 5,
                        sorter: (prev, next) => {
                            const prevTime = new Date(prev.frontmatter.date).getTime()
                            const nextTime = new Date(next.frontmatter.date).getTime()
                            return prevTime - nextTime > 0 ? -1 : 1
                        },
                    },
                }
            ];

            return options;
        },
        nav: [
            {
                text: 'About',
                link: '/',
            },
            // {
            //     text: 'Blog',
            //     link: '/articles/',
            // },
            {
                text: 'Talks',
                link: '/talks/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/devin-beeuwkes-08b495105/',
                }, {
                    type: 'github',
                    link: 'https://github.com/DevinAlgolia',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/ItsDevinTheDev',
                },
            ],
        },
    },
}