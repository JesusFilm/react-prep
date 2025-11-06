# Intro to typescript

[Watch this video](https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia)

## Create typescript project

1. In your terminal paste in the following command.

```
npx create-next-app@latest
```

And use the following options

```
✔ What is your project named? … jfp-ts-test
✔ Would you like to use the recommended Next.js defaults? › No, customize settings
✔ Would you like to use TypeScript? … Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use React Compiler? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack? (recommended) … Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No
```

2. Remove the unneeded boilerplate code

   - Remove imports from `src/app/page.tsx`
   - Replace the entire `<Main> ... </Main>` tag,with `<>Hello World</>`
   - In `src/app/layout.tsx` remove the `global.css` import

3. Make the following new folders in `src`
   - `components` (The path should be `src/components`)
   - `libs` (The path should be `src/libs`)

## Make a data file

1. In the `libs` folder create a file called `data.ts`
2. Create a interface called `Task` with a 2 properties

   - `name` with type `string`
   - `completed` with type `boolean`

3. Create an **typed** array called tasks and fill it with 3 or more items

## Make some base components

Make the following components in the `components` folder

1. Create a component called `Main`. It should take no props and replace the `<>Hello World</>` in `pages.ts`.

2. Create a component called `Title`. It should take in an **optional** prop called `label` with type `string`

3. Create a component called `Form`. Props can be left blank for this for now.

4. Create a component called `TaskCard`, its props should be type `task` (from the data file)

> - For each new component you must create a new sub folder with the title of that component.
> - The contents of should have the component itself as well as a index file that exports the component.
>
> ```
> src
>   - components
>     - Main
>       - index.ts
>       - Main.tsx
> ```
>
> - The component return type should be `ReactElement`
> - At this point we're only creating the skeleton for the project, components can return an empty fragment.
