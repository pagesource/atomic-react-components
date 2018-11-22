## Husky

We used husky for customizing git hooks, which run automatically when specific events occur. There are client-side hooks which are triggered on actions such as committing or merging. Server-side hooks run in situations such as receiving push data from the client.

We used this to prevent developers from pushing inconsistent code on git repository. This runs automatically whenever we commit our code. It uses `.huskyrc` for hook rules. In this project husky checks for the Linting Issues, Flow issues and Unit Test cases.
