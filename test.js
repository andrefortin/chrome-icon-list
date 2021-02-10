const chromeIconList = require('.');

describe('chrome icons', () => {
	test('chrome icons count', async () => {
		expect(chromeIconList().length).toBe(5);
	});
});
