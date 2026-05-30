import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};


const withMDX = createMDX({
  options: {
    // Turbopack requires plugins to be referenced by name (string), not imported,
    // so that the loader options stay serializable.
    rehypePlugins: [
      [
        'rehype-pretty-code',
        {
          theme: 'one-dark-pro',
          // Keep our own background (neutral-950) instead of the theme's.
          keepBackground: false,
        },
      ],
    ],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
