module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: 'public',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
	sidebar: [
      {
        title: 'Top readme',
        collapsable: false,
        children: [
          '/top/api'
        ]
      },
      {
        title: 'Email Overview',
        collapsable: false,
        children: [
          '/email/setting-up'
        ]
      }
    ]
  }
}

/*function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}*/