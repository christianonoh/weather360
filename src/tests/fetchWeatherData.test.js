import fetchWeatherData from './__mocks__/fetchWeatherData';

describe('Weather must pass the test', () => {
  test('Fetch available animes must return data', () => {
    expect(fetchWeatherData()).toBeDefined();
  });
  test('Weather data returnend must have visibility property', () => {
    expect(fetchWeatherData()).toHaveProperty('visibility');
  });
  test('Name of city should be New Delhi', () => {
    expect(fetchWeatherData().name).toBe('New Delhi');
  });
});
