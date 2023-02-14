import sanityClient from '@sanity/client';
const client = sanityClient({
	projectId: '4lxm0vjb',
	dataset: 'production',
	apiVersion: '2021-10-21',
	token:
		'skqm9XS6noUZ19tfG15kVWgEXWHo48T2m7vDQM1550cBiMrTxITkVmgPMEtNHF0uDcRJURf5kXbBFDyLjnBYjEHlUnvCgBhzTYiv02la0SEVH2EOdrvKqOh8DriN6cVPIxcUxtl7l9QC2VTcguYrVmXvrf1bES4dehLNSrOY1gfxDHS4Slij',
	useCdn: false
});

export async function load({}) {
	const data = await client.fetch(`*[_type == "nailpolish"]`);

	if (data) {
		return {
			nailpolish: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
