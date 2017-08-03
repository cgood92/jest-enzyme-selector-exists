# jest-enzyme-selector-exists

A custom matcher to be extended by Jest, to allow you to check existence of enzyme selectors

## To use

This package means nothing without having the depenedencies `enzyme` and `jest`.

#### Install this package

```
npm install jest-enzyme-selector-exists
```

#### Implement

If you have a `jest-setup.js` file, I suggest putting the following code in there.

If not, you can add the following code to the test file from which you are doing your assertions:

```js
import jestEnzymeSelectorExists from "./index"

expect.extend(jestEnzymeSelectorExists)
```

#### Assert

```js
const wrapper = shallow(<YourComponent />)

// h1 should exist
expect(wrapper.find('h1')).toExist()

// h2 should not exist
expect(wrapper.find('h2')).toExist(false)
expect(wrapper.find('h2')).not.toExist()
```
