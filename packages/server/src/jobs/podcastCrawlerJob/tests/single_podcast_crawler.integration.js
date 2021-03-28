const PodcastCrawler = require('news-crawler')
const SourceConfig = require('../../../config/source-config.json')

jest.setTimeout(120000)

describe('podcast-crawler', () => {
	it('ToughTalk with Dil Bhusan podcast can be scraped', async () => {
		const source = SourceConfig.filter((s) => s.sourceId === 'dilbhusan')

		const podcasts = await PodcastCrawler(source, { headless: true, articleUrlLength: 3 })

		expect(podcasts.length).toBeGreaterThan(0)
	})

	it('MiliJuli Nepali podcast can be scraped', async () => {
		const source = SourceConfig.filter((s) => s.sourceId === 'bbcmedia')

		const podcasts = await PodcastCrawler(source, { headless: true, articleUrlLength: 3 })

		expect(podcasts.length).toBeGreaterThan(0)
	})

	it('Nepali Bahas podcast can be scraped', async () => {
		const source = SourceConfig.filter((s) => s.sourceId === 'NepaliRadioNetwork')

		const podcasts = await PodcastCrawler(source, { headless: true, articleUrlLength: 3 })

		expect(podcasts.length).toBeGreaterThan(0)
	})
})
