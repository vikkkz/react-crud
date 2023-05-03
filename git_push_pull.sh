#creating file in github and git pull done with it and redirected to hello.txt
if [ -d .git ]; then
	echo "this is not git repo"
else
git clone 
cd repo/
ls 
git fetch
git status 
cat sample > hello
git status hello
git add hello
git status 
git commit -m "hello added"
git status 
git push
