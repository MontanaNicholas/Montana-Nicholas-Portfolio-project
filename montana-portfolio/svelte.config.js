import adapter from '@sveltejs/adapter-static';

// used to determine if we are using npm run dev
const dev = process.env.NODE_ENV === 'development';
const repoName = 'Montana-Nicholas-Portfolio-project'; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${Montana-Nicholas-Portfolio-project}`
		},
	}
};

export default config;