# Mastering the Basics (8hrs)

This section will help you do two things:

1. Re emphasis the javascript that you've been learning through "kata's"
2. Get used to writing code in vscode

<br/>

## 1. Kata

_Kata_ is a concept from martial arts meaning a sequence of moves composed into a _form_. Martial artists practice katas to build a "muscle-memory" for the basic moves. By practicing katas the artist hopes to make the basics of their art instinctual. When danger strikes the basics will be so familiar that they can respond without thinking.

![kata](https://49.media.tumblr.com/10c948900ec4276131e45047bb3846a4/tumblr_n3005tWnBf1s6my4qo1_500.gif)

Exercises in this section are empty functions (that you have to complete). There are pre written tests that go with each function. The tests are there for you to run to check if your solution is correct. You can also look at the tests before hand to get a feel for what you have to do.

<br/>

## 2. VS code

The following exercises are ran as a [nodeJs](https://nodejs.org/en/) project. The only thing you really need to know about it right now is that its what lets us run our javascript code in vscode.

<br/>

<details>
<summary>Navigating the folder structure</summary>

Have a look at your terminal and notice the title `react-prep`, this is your current working folder.

![react-prep](https://drive.google.com/uc?id=1ZEz2pNV66b4UfQb8lvLzmJTGrCn-UXCs)

We need to navigate to `3-JSKata` folder to be able to run the exercises. You can do this by pasting in the following command into your terminal:

```
cd 3-JSKata
```

![3-JSKata](https://drive.google.com/uc?id=1JmC27cwtVBh5qsg93qWZW7yKrAKu_d5O)
_Note: try pressing `tab` after typing a few letters_

> You can navigate your entire computer using the terminal! Checkout out some more terminal commands [here](https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/) if you're interested.

<br/>
</details>

<details>
<summary>Files and folders</summary>
Ok now that we're here we can almost start to work on the exercises. Apart from the exercise folders (1-objects-and-arrays, etc...) there's a few more that I want to briefly introduce to you.

<br/>
<h4><i>package.json</i></h4>
Contains information about the project, and also contains the list of dependencies used for the project. A dependency is simply a piece of code that some one else has written that you are using in the project (can also be called a "library")

<br/>
<h4><i>package-lock.json</i></h4>
Contains version history about the dependencies. A lot of libraries are ongoing projects, and over time these libraries will receive updates. These updates, while great, can introduce breaking changes to our code base. This file helps us to control what version we are using.

<br/>
<h4><i>node_modules</i></h4>
In your terminal run "npm install". After a short while you should now see this folder, it contains the actual code of the libraries you are using (plus all the background code you didn't know you were using).

<br/>
<h4><i>.gitignore</i></h4>
Have a look inside the node_modules folder. Notice that this folder is HUGE (it only gets bigger as your project gets bigger)! We don't want to store all that code in our GitHub repository, and thats where this file comes in. When we push our commits, this file tells git which files NOT to send to the remote.

<br/>
</details>

<br/>

## 3. One last thing

You may find yourself stuck on certain exercises, this is normal! One of the key ways developers debug their code is using console logging.

```js
const answer = 123
console.log(answer)
```

If things aren't working as you are expecting, `console.log` out the variables and different parts of your code. This will help you get a clearer idea of what your code is doing and where its going wrong.

## Exercises

- [ ] [Object and arrays](./1-objects-and-arrays/README.md) (2hrs)
- [ ] [Strings and numbers](./2-strings-and-numbers/README.md) (2hrs)
- [ ] [Data structures](./3-data-structures/README.md) (2hrs)
- [ ] [Types](./4-types/README.md) (2hrs)

<br />

## Stretch

- Finish any activity you haven't
<!-- Add a hard JS activity? -->

<br />

_These exercises are adapted from resources used by [Enspiral Dev Academy](https://devacademy.co.nz/?gclid=CjwKCAjw4c-ZBhAEEiwAZ105Re-c0454ENn1Hm-4VD-Z0JQEVPt1Ul30ODpbw2m26cHs-oi7_KEtihoCZNEQAvD_BwE) under the [ISC](https://opensource.org/licenses/ISC) license._
