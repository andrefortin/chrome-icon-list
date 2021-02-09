const test = require('ava');
const chromeIconList = require('.');

test('length of result array', t => {
	t.true(chromeIconList().length === 4);
});
