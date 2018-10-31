## git add:

```git add -p``` : the -p stands for patch, it let's you add things in patches and then prints out what you added on your command line so that you can see it.

* there will be options that show up with this git command.
* this is what they mean:
  * **s**: split [do this one first to split up the separate sections that you want to add]
  * **y**: yes
  * **n**: no

## git checkout:

#### This is a destructive command. If you use this, you will lose your work because you've told git to remove it completely.

* ```checkout``` removes changes from your file.
* ```checkout .``` is a command to remove all changes you've made to all files
* ```checkout app``` removes changes from the app directory
* ```checkout [file name]``` removes changes you made to a particular file.



## git rebase:

```git pull --rebase```  or ```git pull -r```  or ```git rebase [branch name]``

* If you have two branches and both have commits, —rebase puts the commits in the order in which they were made and then ammends to the branch in that order.


## revert a commit

##### But save the changes made to a file, just reset the staging:

```git reset --soft HEAD~1```

* reset your git repository to the stage it was in before you added that commit.

#### Namibia Torres
