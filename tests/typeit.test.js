const typeit = require('../src/typeit');

test('it does stuff.', () => {

  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

  expect(sum(1, 2)).toBe(3);
});
