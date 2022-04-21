# Adding Cortex Features

Cortex is an open source analysis package. If you would like to contribute your own features, you may open a pull request.

### How to add a new feature:

0. Clone LAMP-cortex from source.

    ```bash
    git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex.git
    ```

1. Make sure you are on the master branch (and it is up to date). Create a new branch.
    <details>
<summary>Click to toggle contents of `code`</summary>
```
CODE!
```
</details>
```bash
    git checkout master
    git pull
    git checkout -b my_new_feature
    ```
    
2. Write your code. 
3. Add your file to run_pylint.sh to make sure you are following the style guidelines. Make sure to include good comments / docstrings!
4. Add unittests. Add your file to run_tests.sh to show code coverage.
5. Add any new dependencies to pyproject.toml (if applicable)
6. Push your code
    
    ```bash
    git add .
    git commit -m "i added a cool feature"
    git push -u origin my_new_feature
    ```
    
7. When you are happy with your code, create a pull request (PR). Assign yourself, and assign someone as a reviewer. At least one person must review and approve your code for it to be merged into master.
    1. For those reviewing code: run the unittests, test any new features, check code for style. It is important that you test code because by approving the PR you are certifying that the code works. Feel free to suggest additions / changes. When you are confident the code works, approve the PR.
8. Make sure you switch back to master and pull your changes. You can also delete the local copy of your branch if you wish.
    
    ```bash
    git checkout master
    git pull
    git branch -d my_new_feature
    ```
    
9. Add documentation for your code. This is very important as there are collaborators that use our code for their analysis. 
    1. This is where you edit the docs: [https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/tree/master/docs/09-data_science/06-cortex](https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/tree/master/docs/09-data_science/06-cortex)
    2. Feel free to create a branch or merge directly into master for minor changes. A Github action will run when new docs are edited to publish to [https://docs.lamp.digital/](https://docs.lamp.digital/).
