# Unit tests

1. [Watch these videos](https://frontendmasters.com/courses/testing-practices-principles/)

> This involves needing an account to `Frontend Masters`, ask for access to this when you get here

2. Install the React Testing Library

```
npm install --save-dev @testing-library/react @types/jest
```

[React Testing library docs](https://testing-library.com/docs/react-testing-library/intro/)

3. Write at least one test for each of your components. Have a think about the purpose of that component, and try to test it.

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
