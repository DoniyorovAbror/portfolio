import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	html: { title: 'Portfolio' },
	plugins: [pluginReact()],
	output: {
	  distPath: {
		root: 'build',
	  },
	},
  });
