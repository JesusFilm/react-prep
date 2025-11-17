# Use MUI to fill out the base components

[Watch this video](https://www.youtube.com/watch?v=FB-sKY63AWo)

[Import](https://mui.com/material-ui/getting-started/installation/) MUI into your project.

As you build out the components, import them into the `Main` component to see your changes.

As you build the components play around with the style and placements of each component. Try make it look like something you would want to use.

## Title

This should use a `Typography` component from MUI to display the label. It should display some default text if no label is passed in.

## Form

This should utilize the `TextField` and `Button` component from MUI.

## Timer

This component should display the name, the remaining time and the completed status of a timer.

## Main

Import the `timers` array from `data.ts` and use it to render out a `Timer` for each timer.

> [!IMPORTANT]
> When react renders components with an array, each item needs to have a unique key.
>
> ```
> npm i uuid
> npm i --save @types/uuid
> ```
> [How to use UUID](https://github.com/uuidjs/uuid#readme)
