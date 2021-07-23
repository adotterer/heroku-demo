# Deploy an HTTP Server to Heroku

## In 9 easy steps

1. Go to [DashBoard](https://dashboard.heroku.com/apps) and under _New_ click _Create new app_ under _New_

![CREATE_NEW_APP](./assets/CREATE_NEW_APP.png)

2. Enter your App name and click _Create app_

![CREATE_NEW_APP](./assets/NAME_APP.png)

3. Under the _Deploy_ tab (should be redirected here) choose GitHub and connect your repo.

   <span style="color:red">**_WARNING_** DO NOT CHOOSE AN APP WITH A DATABASE</span>

![CHOOSE_REPO](./assets/CHOOSE_REPO.png)

4. After you connect you should see this. Then, enable Automatic Deploys (make sure you choose the branch you want to deploy-- probably master or main).

![CHOOSE_REPO](./assets/AUTOMATIC_DEPLOYS.png)

5. Go to the _Settings_ tab and click _Add buildpack_. Choose Nodejs and _Save Changes_

![BUILDPACK](./assets/BUILDPACK.png)
![CHOOSE_NODEJS](./assets/CHOOSE_NODEJS.png)

6. Open _View logs_ in _More_ so we can view the build of our app in the Heroku terminal and catch any potential errors (keep this tab open for the following steps)

![VIEW_LOGS](./assets/VIEW_LOGS.png)

7. Go to the Github repo on your local computer. Ensure that (1) you have a package.json file, and (2) node is running your server file in the _scripts_ portion of the package.json. You may have to add a start script yourself:

![SCRIPTS](./assets/SCRIPTS_START.png)

8. Now when you add, commit, and push to your Github repo you should see a new build begin in the Heroku terminal (it might take a few seconds to get started). Any potential errors will be in this terminal.

![APPLICATION_LOGS](./assets/APPLICATION_LOGS.png)

9. Go to your Heroku app (you can click _Open app_) and profit!

![HEROKU_SUCCESS](./assets/HEROKU_SUCCESS.png)
