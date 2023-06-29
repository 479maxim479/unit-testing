import sortingCharacters from '../properties';

const sorted = [
	{ name: 'мечник', health: 10 },
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
];

const testing = [
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
	{ name: 'мечник', health: 10 },
];

const result = sortingCharacters(sorted)

test('check sorting characters', () => {
  expect(result).toEqual(testing);
});