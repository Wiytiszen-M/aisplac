import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Mi Blog Studio',

  projectId: 'mehr72rv',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Posts')
              .child(
                S.documentTypeList('post')
                  .title('Posts')
                  .filter('_type == "post"')
                  .defaultOrdering([
                    { field: 'publishedAt', direction: 'desc' },
                  ])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['post'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
