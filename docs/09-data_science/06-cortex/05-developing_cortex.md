# Adding Cortex Features

Cortex is an open source analysis package. If you would like to contribute your own features, you may open a pull request.

### How to add a new feature:

0. Clone LAMP-cortex from source.

    ```bash
    git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex.git
    ```

1. Make sure you are on the master branch (and it is up to date). Create a new branch.
    <details>
    <summary>Github commands</summary>
    
        git checkout master
        git pull
        git checkout -b my_new_feature
    
    </details>
    
2. Write your code. 
3. Add your file to run_pylint.sh to make sure you are following the python style guidelines. Please include good comments and docstrings.
4. Add unit tests for your code to the /tests folder. Add your file to run_tests.sh to show code coverage.
5. Add any new dependencies to pyproject.toml (if applicable).
6. Push your code.
    <details>
    <summary>Github commands</summary>
    
        git add .
        git commit -m "i added a cool feature"
        git push -u origin my_new_feature
    
    </details>
    
7. When you are ready, create a pull request (PR). Assign yourself, and assign someone from our team as a reviewer. At least one person must review and approve your code for it to be merged into master.
    1. When we review your code, we will run the unittests, test any new features, and check code for style. We may suggest changes or additions that we feel improve the code or integration with Cortex.
    
8. Along with your PR to cortex, you must add documentation for your code. This is very important to allow others to understand how to use your code. 
    1. Your feature should be added as a new markdown file to the appropriate folder here: [https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/tree/master/docs/09-data_science/06-cortex](https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/tree/master/docs/09-data_science/06-cortex). Please follow the example structure of other files in the documentation. 
    2. Create a PR for your documentation. A Github action will run when new docs are edited to publish to [https://docs.lamp.digital/](https://docs.lamp.digital/).
9. Once the PR is merged, make sure you switch back to master and pull your changes. You can also delete the local copy of your branch if you wish.
    <details>
    <summary>Github commands</summary>
    
        git checkout master
        git pull
        git branch -d my_new_feature
    
    </details>
