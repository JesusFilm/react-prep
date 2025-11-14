# Use effect

[Watch this video](https://youtu.be/0ZJgIjIuY7U)

In your `Main` component, use `useEffect` to manage the counting down of timers.

To help you, here is some of the code you will need to include in your `useEffect`.

```
let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      setTimers(prevTimers =>
        prevTimers.map(timer => {
          if (!timer.isRunning) { // Do nothing if timer is done
            return timer;
          }

          const nextRemaining = Math.max(0, timer.remainingSeconds - 1);
          if (nextRemaining === timer.remainingSeconds) { // Do nothing if remaining seconds is the same
            return timer;
          }

          return {
            ...timer,
            remainingSeconds: nextRemaining,
            isRunning: nextRemaining > 0,
          };
        })
      );

      timeoutId = setTimeout(tick, 1000);
    };

    timeoutId = setTimeout(tick, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
```

> [!HINT]
> What might need to be in the dependency array?
