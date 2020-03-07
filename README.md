A demo project to demonstrate memory leak when importing `mongodb-memory-server-core`

Related to issue [https://github.com/nodkz/mongodb-memory-server/issues/276#issuecomment-596066329](https://github.com/nodkz/mongodb-memory-server/issues/276#issuecomment-596066329)

Clone the repo 

Local run 
```
> npm install 
> npm run test 
```
In your editor repeatedly save `module1.js` to trigger a re-run of jest and you should see that heap memory increases with each run

Use docker
```
> docker-compose up --build
```
Saving a `module.js` should trigger a re-run of jest
