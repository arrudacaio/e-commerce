import * as path from 'path'
import moduleAlias from 'module-alias'

// In this directory, we back to root folder to import all files
const files = path.resolve(__dirname, '../..')

// We mapped alias to file path
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test')
})