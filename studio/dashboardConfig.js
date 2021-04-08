export default {
  widgets: [
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
                  buildHookId: '606f57c34fa6240c88926c26',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bo9xc29g',
                  apiId: '765146ca-1f14-45e7-9afc-100b59b1f0bf'
                },
                {
                  buildHookId: '606f57c348e1ac0092eb8787',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t5oxgrbr',
                  apiId: '0379e5e7-52ed-4c75-949b-068f8114e4f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Juxsta/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t5oxgrbr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
