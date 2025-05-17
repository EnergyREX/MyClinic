import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact()
  ],
  source: {
    define: {
      'process.env.RSBUILD_BACKEND_URL': JSON.stringify(process.env.BACKEND_URL)
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      }
    ]
  }
});
