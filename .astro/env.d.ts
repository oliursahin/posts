declare module 'astro:env/client' {
	
}

declare module 'astro:env/server' {
	export const NEWSLETTER_LOOPS_API: string;	


	export const getSecret: (key: string) => string | undefined;
}
