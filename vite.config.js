import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import sources from './sources.js'

const input = {}

Object.keys(sources)
.forEach(name => {
  const src = sources[name];

  input[name] = path.resolve(__dirname, `src/${ src }`)
})

export default {
  build: {
    rollupOptions: {
        input,
        //external: ['vue'],
        output: {
            /*
            globals: {
                vue: 'Vue'
            },
            */
            entryFileNames: () => '[name].js',
            dir: './dist'
        }
        
    }
  },
  plugins: [
    createVuePlugin(/* options */)
  ],
}