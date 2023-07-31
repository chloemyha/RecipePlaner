## Application Description: 

This is a webapp where a user can search, create and store recipes. 
You will be able to search up recipes that you have created yourself or that other users have submitted.
Submit and save your own recipes passed down over generations or you were just given from a friend.  Include the name, description, ingredients and cooking directions for each recipe.
Have the ability to search your recipes based off of indredients you already own.

## Context
We are using a monorepo, meaning we store both the client and the server in the same repository. 

## Instructions:
In order to run the app, do the following steps:
1. Open a new terminal, then `cd` client, then `npm i` to install all client dependencies, then `npm start` 
2. Open a new terminal, then `cd` server, then`npm i` to install all server dependencies, then run `npm run seeds` to seed database.
3. After successfully seeding datbase, run `npm run dev` to start server instance

## Workflow:
Make sure you’re on master. Update your master to be most up-to-date before creating another branch. Your local history must be synced with GitHub’s master history (your local master is master, GitHub’s master is origin/master). `git checkout master`
You sync it with `git pull` (meaning to pull all new commits from origin/master to your master).
Use `git log` to make sure both master and origin/master are pointing to the same commit, which is also the same commit if you check on GitHub's. This is really important, because otherwise when you branch, you will need to sync your branch's history with origin/master, creating another unnecessary commit and most likely leading to a merge conflict.

You can branch now, using `git branch -m your-branch`
Make your changes and commit them into as many commits as you want (ideally one commit).
If you're doing a single-commit route, add new code and test, then git add . to stage all your changes to be committed. Commit all your files using  `git commit -m "your message" `(make sure to include the quotation marks). 
Before pushing, check your log using git log again to see your history. It should be origin/master + your commit. 
Once certain, push to be ready for pull request using `git push --set-upstream origin` ($your current branch) (replace the ($your current branch) with your branch name).
On Github, make a pull request and add other people to review your code. Once people approved it, you could merge it to master.

Side notes:
Let's say origin/master is 1->2->3, you're using that to build your code, you make commits 4x->5x.  But there's another person, who's one 1->2->3, making 4y->5y, and their code got merged before yours. Origin/master is now 1->2->3->4y->5y, but your history is 1->2->3. If you push your code now, it creates a merge conflict.
To update your history to be 1->2->3->4y->5y, you should rebase. 
To rebase, first you have to make sure you local master is synced.
If you still have pending changes that are not added and committed, use git stash to temporarily store your changes. 
Go back to master with git checkout master. Then update master with git pull. Your local master should be synced now. Double check with git log
Go back to your-branch now with git checkout your-branch. Rebase your branch's history with git rebase master. (Your files may be the same as the other person's, then a merge conflict is inevitable). 
Reapply your temp changes into the new history (1->2->3->4y->5y) with git stash apply
If you don't have temp changes, and you already had 4x->5x, at this point your history should be 1->2->3->4y->5y->4x->5x. You could safely push now

## MONGO DB GUIDE:
1. Open a terminal, cd server (if you are not in server), enter `mongosh` to start mongo server. 
2. To check what database you are using , enter `db`. 
3. Enter `use recipes` to access to our database
4. To find all recipes in our databse , enter `db.recipes.find().pretty()`
5. To insert many recipes, enter `db.recipes.insertMany([{recipe:"abc" },{recipe: "def" }])`
6. To insert one recipe, enter `db.recipes.insertOne({recipe: "abc" })`
