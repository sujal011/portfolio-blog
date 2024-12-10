import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions:['mdx','ts','tsx'],
  experimental:{
    mdxRs:true,
  },
  output:"export"
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
