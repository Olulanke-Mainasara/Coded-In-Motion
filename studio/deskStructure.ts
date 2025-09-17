import {StructureBuilder} from 'sanity/structure'

const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Singleton About Us
      S.listItem().title('About Us').child(
        S.editor().id('about').schemaType('about').documentId('about'), // Fixed singleton ID
      ),

      // Other document types (everything except "about")
      ...S.documentTypeListItems().filter(
        (listItem) => !['about'].includes(listItem.getId() ?? ''),
      ),
    ])

export default deskStructure
