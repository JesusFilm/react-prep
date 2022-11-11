# Use MUI to fill out the base components

[Watch this video](https://youtu.be/Xoz31I1FuiY)

[Import](https://mui.com/material-ui/getting-started/installation/) MUI into your project.

As you build out the components, import them into the `Main` component to see your changes.

As you build the components play around with the style and placements of each component. Try make it look like something you would want to use.

## Title

This should use a `typography` component from MUI to display the label. It should display some default text if no label is passed in.

## Form

This should have a `TextField` and `Button` component from MUI

## TaskCard

This component should display the name and the completed status of a task.

## Main

Import the array from `data.ts` and use it to render out a `TaskCard` for each task.

When react renders components with an array, each item needs to have a unique key.

```
npm i uuid
npm i @types/uuid
```

[How to use UUID](https://github.com/uuidjs/uuid#readme)
