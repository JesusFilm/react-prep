# Intro to typescript

[Watch this video](https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia)

## Create typescript project

1. In your ternmail paste in the following command.

```
npx create-react-app my-app --template typescript
```

_Be sure to update the project name_

2. Remove the uneeded boilerplate code from `App.tsx`

   - Remove everything from between the header tags
   - Remove the css file import

## Make a data file

1. In the `src` folder create a file called `data.ts`
2. Create a interface called `task` with a 2 properties

   - `name` with type `string`
   - `completed` with type `boolean`

3. Create an **typed** array called tasks and fill it with 3 or more items

## Make some base components

In the `src` folder create a folder called `components`.

- For each new component you must create a new sub folder with the title of that compoennt.

- The contens of should have the component itself as well as a index file that exports the component.

- The component return type should be `ReactElement`

- At this point we're only creating the skeleton for the project, components can return an empty fragment.

1. Create a component called `Main`. It should take no props import this into `App.tsx` between the header tags.

2. Create a component called `Title`. It should take in an **optional** prop called `label` with type `string`

3. Create a component called `Form`. Props can be left blank for this for now.

4. Create a component called `TaskCard`, its props should be type `task` (from the data file)
