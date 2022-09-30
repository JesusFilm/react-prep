# Intro to React

componest always have a capital letter

<br />

# Paws for Effect

This exercise walks you through the basics of React development. By the end of it, you should have been exposed to:

1.  Creating simple components
2.  Using components inside other components
3.  Passing props to components
4.  Using JavaScript expressions inside JSX.
5.  Using `Array.map` to display a series of components.

<br />

## 1. Install

After navigating to this folder in your terminal:

```shell
npm i
npm start
```

![Spinning paw](/4-React/public/screenshots/paw.png)

<br />

## 2. The Project Structure

Take a look at `src/index.js`, this is the main "entry point" of our app.

From there have a look at `src/App.jsx`. This is the main file thats going to contain all our components. Kinda boring right, but I promise it'll get more exciting.

And now have a look at `src/components/Logo/Logo.jsx`, now's where we start seeing some action! You should see the code below:

```jsx
export function Logo() {
  return <img className="spinner" src="/images/paw.png" alt="spinner" />
}
```

You are looking at a functional react component! Instead of showing a web page in 1 file, we can render it in small "chunks" (or components). A component can contain other components, some of which can be repeated to build lists of items on the page.

<br />

## 3. The Dog component

### 3.1 Let's make a component now

In your editor, open the `src/components/Dog` directory, and make a new component called `Dog.jsx` there:

```jsx
export function Dog(props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}
```

Copy/paste will do for this one. Notice that it looks a lot like `App.jsx`, except there are a few extra tags and we're making use of _props_. The props come from what we would normally think of as 'attributes' on the component's tag in JSX:

```jsx
<Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
```

Here, `name`, `breed`, and `superpower` are _props_. The `Dog` component will receive them as a JavaScript object like so:

```js
const props = {
  name: 'Desdemona',
  breed: 'Bulldog',
  superpower: 'Heat vision'
}
```

When we refer to a prop in JSX we have to put it inside curly braces, like so:

```jsx
<span>{props.name}</span>
```

One last thing before we try out our component, mkae a file called `index.js`, also in the same folder (`src/components/Dog`) and paste the following in.

```js
export { Dog } from './Dog'
```

This just makes our component easier to be imported and used.

---

<br/>

### 3.2 Time to try it out

In `App.jsx`, import your new Dog component:

```js
import { Dog } from './components/Dog'
```

and add a Dog tag (use Desdemona, above if you like). The JSX returned should look something like this:

```jsx
<div className="container">
  <Logo />
  <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
</div>
```

You should see something like this in the browser:

![A Dog component](/4-React/public/screenshots/dog.png)

> Try adding more dogs, right underneath the first one. Notice what happens when you don't provide one of the values?

**_Congraduations, you just created and used your first react component!_**

<br />

## 4. The Subtitle component

Try it yourself. Define a component called `Subtitle` that takes just one prop, `text`, and wraps it in `<h2>` tags. Import it in the App component and use it like so:

```jsx
  <Logo />
  <Subtitle text='Canines using supercanine abilities for social good.' />
  <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
```

You should see something like this:

![Subtitle component](/4-React/public/screenshots/subtitle.png)

The `server/public/images` directory contains a few dog silhouettes. Try modifying the components to add an image for each `Dog`.

<br />

## 5. Moar components!

### 5.1 Now by yourself add 2 more dogs to your app component.

As developers we want to be efficent with our code. Adding a few more dogs may be no problem, but what if we want 10 more? What if 100 more? This is where all our javascript practise comes into use!

### 5.2 DogList

Create a new component called `DogList`, props for this component will will be an array of objects containing the data for a dog. Then using the [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) render each of the items in the array with the dog component.

<details>
<summary>Hint</summary>

Example of array being passed in

```jsx
const array = [
  {
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe'
  }
]
```

Using javascript in the `return` of the function

```jsx
return (
  <>
    {array.map((person) =>
      <Contact firstName={person.firstName} lastName={person.lastName}>
    )}
  <>
)
```

> Note
>
> - The empty angle brackets `<></>` is called a [fragment](https://reactjs.org/docs/fragments.html), it allows group components without adding unnecessary divs
> - After the fragment, the curly brackets `{}` tells the editor that you are now in "javascript land"

 </details>

 <br />

### 5.3 DogsArray

Now back in `App.jsx`, import your `DogList` component.

Create your array of dog objects and call it `DogsArray`, and pass it into your `DogList` component.

<br />

# Stretch

- Look into [Material UI](https://mui.com/material-ui/getting-started/overview/)
- Look into react [hooks](https://reactjs.org/docs/hooks-state.html)
