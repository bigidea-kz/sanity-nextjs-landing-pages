export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60119c247a05f6a4b80cd34a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kupjxcpp',
                  apiId: 'aa4e1862-15b4-4abf-9fbd-c4c4d6f4ff5c'
                },
                {
                  buildHookId: '60119c24e426f47d810369a1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8geo8gwa',
                  apiId: '65797674-ac26-497d-88c4-465682b11aa2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bigidea-kz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8geo8gwa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
