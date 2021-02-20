# msk_demos

git remote add origin <https://github.com/golyallsmsk/msk_demos.git>

git pull origin master

git checkout -b b1

git add .

git commit -m "First commit b1"

git push --set-upstream origin b1

Git Basic Commands
High-Level Porcelain Commands
git add
git push

git commit -a -m
git add .
git status --short
git add A
git status -s
git status
git diff
git diff --staged

git log
git log --oneline
git log --stat
git log --patch = full details

git reset --soft = moves to staging dir
git reset --mixed = moves to working dir
git reset --hard = deletes

git checkout -b new_branch = create new branch
git merge new_branch

git branch = list all branches
git checout b1 = change to b1 branch
git branch -m oldbranch newbranch = rename oldbranch to newbranch
git branch -d oldbranch = deletes oldbranch
If commit are not merged it throws error
git branch -D oldbranch = deletes old branch including commits

command line commands

copy con file1.txt = to create a new file
del file1.txt = to delete file1.txt
