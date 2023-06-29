import health from "../health";

test.each([
	[{ name: 'Маг', health: 60 }, 'healthy'],
  [{ name: 'Лучник', health: 35 }, 'wounded'],
  [{ name: 'Мечник', health: 10 }, 'critical'],
])('health level for %Unit', (person, expected) => {
	const result = health(person);
	expect(result).toBe(expected);
})