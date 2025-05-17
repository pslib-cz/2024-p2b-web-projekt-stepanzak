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
  base: "/2024-p2b-web-projekt-stepanzak/",
}
