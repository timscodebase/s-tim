import sanityClient from '@sanity/client'

const client = sanityClient({
	projectId: 'kod60sys',
	dataset: 'production',
	useCdn: true,
})

export default client