# Unit tests

1. Read and watch these resources

[React Testing library docs](https://testing-library.com/docs/react-testing-library/intro/)

[Watch up to and including video 8](https://youtu.be/T2sv8jXoP4s?si=RFAYAj98ufulkSf-)

2. Install the React Testing Library and Jest dependencies

```
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
```
```
npm install --save-dev jest jest-environment-jsdom @testing-library/jest-dom @types/jest
```

3. Add these files to the root of your project

- `jest.config.js`

```
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: '.*\\.spec\\.tsx?$',
};

export default createJestConfig(customJestConfig);
```

- `jest.setup.ts`

```
import '@testing-library/jest-dom';
```

4. Add this to `tsconfig.json` under `compilerOptions`

```
"types": ["jest", "node"],
```

5. Add this line to your scripts in `package.json`.

```
"test": "jest --config ./jest.config.js",
```

This will allow you to run your tests in your project using `npm run test`

6. Write at least one test for each of your components. Have a think about the purpose of that component, and try to test it.

The test file should be created in the same folder as the component

Folder Structure:

```
src
  - components
    - Main
      - index.ts
      - Main.tsx
      - Main.spec.tsx
```

Test file structure

```
describe('ComponentName', () => {
  it('should do something', () => {
    // Arrange
    // Assert
    // Act
  })
})
```
