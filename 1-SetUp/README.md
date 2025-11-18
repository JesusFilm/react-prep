# First things first

## Get the tools (1hr)

We use [Visual Studio Code](https://code.visualstudio.com/) with the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension. This lets you use a [Docker container](https://docker.com/) as a full-featured development environment. A devcontainer.json file in Core tells VS Code how to access (or create) a development container with a well-defined tool and runtime stack.

To get started try the following:

1. Install [Visual Studio Code](https://code.visualstudio.com/)
1. Install [Docker Desktop](https://www.docker.com/get-started)
1. Start Docker Desktop
1. Start VS Code and add [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) Extension
1. Run `Dev-Containers: Clone Repository in Container Volume...` from the Command Palette (F1).
1. Pick GitHub (You'll need to authenticate with GitHub), then enter `JesusFilm/react-prep`, finally choose the `main` branch to clone.
1. The VS Code window (instance) will reload, clone the source code, and start building the dev container. A progress notification provides status updates.
1. After the build completes, VS Code will automatically connect to the container. You can now work with the repository source code in this independent environment as you would if you had cloned the code locally.

<details>
<summary>Common Issues</summary>

### VS Code fails to build container on Mac

```
docker-compose version --short
fork/exec /usr/local/bin/docker-compose-v1: bad CPU type in executable
```

1. Open Docker Desktop
1. Go to Settings -> General, and scroll down to the bottom
1. Tick 'Use Docker Compose V2'
1. Click 'Apply & Restart'
1. Go to VS code and run 'Rebuild Container'. The container should now build successfully

### Container is running slowly or crashing on Mac

1. Open Docker Desktop
1. Go to settings -> Resources -> Advanced
1. Set CPUs: 7, Memory: 12.00GB, Swap: 4GB
1. Click 'Apply & Restart'
</details>

## Github (30min)

[Why is version control important?](https://www.youtube.com/watch?v=uUuTYDg9XoI&ab_channel=CodemySchool)

1. Creating your own branch.

- Create a new branch by clicking on the current branch name, click `+ Create new branch...` and enter the name of your new branch as `[user-name]-main`

  You will be using this as your main branch, and it is where you will be pushing your changes to.

  ![branch](https://drive.google.com/uc?export=view&id=14bKh6_feK7b86DTt-zT_AlpOfM3Mikpr)

  _branches are what allows us to all work collaboratively_


2. Making your first commit.

- Create another new branch and call it `[user-name]-complete-first-task`

- Tick off the first task from the main [readme](../README.md) by making the following change

  ```
  - [x] 1. [Initial Set Up](/1-SetUp/README.md)
  ```

- Stage the change by going to `Source Control` and pressing the `+` next to the file you changed

  ![stage](https://lh6.googleusercontent.com/w1sIrrHabKcyRfZe2IKPgZS7IT5bkdrWDSSJsHEHaLrBWqX27zP0MXeg65SyPlAtHvU=w2400)

- Enter a commit message and press `Commit` button

  ![commit](https://lh4.googleusercontent.com/t3TWGzGr9mKa-GCa643hBKe4vzra0FFDZNMCFJMcNn4KfCYDKqxjPi6sTgDvbdfYRuM=w2400)

  _A good commit message is meaningful and concise. It's what others will use to see what you have done as well as to remind yourself of your work_

- Push the commit to remote. (It might ask you to publish the branch first, just click ok if it does)

  ![push](https://lh6.googleusercontent.com/-ojCbxhpX54_7lgQDCRIFJ-1Q6w8eFkP4laQUCe0lxGEQTUcv1QkxNUNbc_GlayBYRo=w2400)

- Create a new pull request (PR) on Github

  - Select your branch from the list of branches (you get to it by clicking on the button similar to the one below), and click `Create Pull Request`

    ![select branch](https://lh5.googleusercontent.com/UwMIYiBhEfGA5xRxO11vg4RMvBQCqxExWOZhLGq-0z1DLoNZU44fTUA26IRSPopObzA=w2400)

  - Make sure to select **your main branch** as the base branch. (`[user-name]-main`)

  - Click `Compare & pull request`

    ![compare and pull request](https://lh3.googleusercontent.com/d/17v845oLDfnMgsH3btRNk49UPidDjOGvj)

  - Click `Create pull request`

    ![create pull request](https://lh6.googleusercontent.com/h8NZUIqBl2-LMtfrWIh52KlTdlDKYWalIxvziIOknGFFn-68K1kVcmcZr-N2AkdfLec=w2400)

    _Depending on the teams your on, you may be required to fill in a description as well as the list on the right_

- Review and merge

  ![review and merge](https://lh3.googleusercontent.com/hICRLK6D6YSU0ajmFxgTuK9GwTvk8XAY3q2SvIF2wT6zcWzMYzp1_JY2kxq3JPEjiq8=w2400)

  _Have a look at the `Commits` tab and the `Files changed` tab, these are what your reviewers will be looking at when working on a part of a project_

Note: You can push changes straight to your main branch and don't have to raise a PR to make a change. But most projects you'll be a part of will require you to.

### Still confused?

Watch a [quick video](https://drive.google.com/file/d/1mFhsRM86VS_x_07V69HJH0_zTxyNniQL/view?usp=sharing) where Edmond:
- creates a branch 
- makes commits
- pushes the changes to remote (GitHub)
- creates a PR (pull request)
