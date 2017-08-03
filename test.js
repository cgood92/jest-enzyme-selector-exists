import jestEnzymeSelectorExists from "./index"

expect.extend(jestEnzymeSelectorExists)

// This mocks an enzyme wrapper, with only one method `exists`, as it's the only one we care about for this matcher
// Allow us to pass in if the selector should be false or true
const mockEynzmeSelector = exists => ({
  exists: () => exists,
})

// Basic
test("basic", () => expect(mockEynzmeSelector(true)).toExist())

// Should be true
test("should be true", () => {
  expect(mockEynzmeSelector(true)).toExist(true)
  expect(mockEynzmeSelector(true)).not.toExist(false)
})

// Should be false
test("should be false", () => {
  expect(mockEynzmeSelector(false)).toExist(false)
  expect(mockEynzmeSelector(false)).not.toExist()
  expect(mockEynzmeSelector(false)).not.toExist(true)
})
