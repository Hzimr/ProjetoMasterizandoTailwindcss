import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: '0.2fr 1fr min-content',
      },
      maxWidth: {
        app: '700px',
      },
      colors: {
        hitalo: '#8257e6',
      },
    },
  },
  plugins: [],
}
export default config
