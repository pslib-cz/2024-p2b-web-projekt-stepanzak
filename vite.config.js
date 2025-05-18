import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
  plugins: [
    vituum({
      pages: {
        normalizeBasePath: true
      },
      imports: {
        paths: ['./src/styles/*/**', './src/scripts/*/**']
      }
    }),
    nunjucks()
  ],
}
