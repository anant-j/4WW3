Course Name: Web Computing and Web Systems \
Group Name: AK-4WW3 \
Member 1: Anant Jain, jaina17, 400110406 \
Member 2: Kuber Khanna, khannk1, 400121439

### Access the application here: https://4ww3.anant-j.com or http://3.23.29.177/


**Table of contents**
- [Part 3:](#part-3)
  - [Updates:](#updates)
  - [Pages:](#pages)
  - [Security Measures:](#security-measures)
  - [Additional Features:](#additional-features)
  - [Additional Notes:](#additional-notes)
  - [Sample .env file:](#sample-env-file)
- [Part 2:](#part-2)
  - [Updates:](#updates-1)
  - [Notable Features:](#notable-features)
  - [Additional Notes:](#additional-notes-1)
  - [Credentials](#credentials)
- [About](#about)
- [Folder Structure](#folder-structure)
- [How is it built and rendered](#how-is-it-built-and-rendered)
- [Running Locally](#running-locally)
- [Building for production](#building-for-production)
- [Additional Features](#additional-features-1)
- [Add On Tasks](#add-on-tasks)
- [Resources Used](#resources-used)
  - [Technologies Used](#technologies-used)
  - [Dev Environment](#dev-environment)
  - [Prod Environment](#prod-environment)
  - [Tutorials/Guidance](#tutorialsguidance)


## Part 3:
### Updates:
- Added [API](app/api/index.js) written in Node.js to enable server side functionality. Prior permission to use this instead of PHP was obtained from the professor.
- User Data, Restaurant Data and Reviews are stored in a [SQL server](https://remotemysql.com) in 3 separate tables. Look at [data model](datamodel.sql) for more details.
- Images uploaded with restaurants are stored in [Firebase Cloud Storage](app/api/firebaseStore.js).
- Common components such as navbar, footer, header are abstracted and reused in [core container](app/layouts/default.vue) to reduce redundancy. 
- Laitude and longitude is now fetched client side from Here.com's API when registering.
### Pages:
- **[Search](app/pages/index.vue) Form**: Users are now able to search for a restaurant from name, rating or locations.
- **[Results](app/pages/search.vue) Page**: Dynamically generated based on search query by obtaining data from database.
- **[Individual Object](app/pages/restaurant.vue) Page**: Dynamically generated based on data avaialble in cache or database.
- **[Add Object](app/pages/add.vue) Page**: Only logged in users can add objects. Both client side and server side validation has been implemented.
- **[User Registration](app/pages/register.vue)/[Login](app/pages/login.vue) Page**: Both client side and server side validation has been implemented. 

### Security Measures:
- **[Express Helmet](https://www.npmjs.com/package/helmet)**: Helmet has been used to secure our Express APIs by setting various HTTP headers.
- **[Bcrypt Password Hashing](https://www.npmjs.com/package/bcrypt)**: One way password hashing has been implemented to securely store passwords and never storing them as plaintext.
- **[Rate Limiting](https://www.npmjs.com/package/express-rate-limit)**: Rate Limiting has been implemented to prevent abuse and secure our API server against DOS attacks.
- **[JWT Tokens](https://www.npmjs.com/package/jsonwebtoken)**:JWT tokens are generated for each user at login, then stored client side. Each token is valid for 1 hour. This token is used to validate user identity when adding a restaurant or adding a review.
- **SQL Prepared Statements**: We have used SQL prepared statements to prevent against SQL injection attacks.
- **Sensitive data hidden**: Only the required user data is returned while fetching reviews for a restaurant. User's email is hidden.
  
### Additional Features:
- **Adding review**: Users can only add review if they are logged in.
- **Login Cache between Sessions**: Upon logging in or registering, the user's JWT token is stored in localstore which maintains user's login state between sessions.
- **Location and Image preview**: Both location and uploaded image can be previewed before adding a restaurant.
- **[Error Factory](app/mixins/errorFactory.js)**: A standard error manager for API error codes has been added in order to streamline error messages.
- **Image Size Limit**: A size limit of maximum 3 Mb per image for adding a restaurant has been implemented on both client side and server side (on Nginx otherwise HTTP error 413 will be returned)
  
### Additional Notes:
- Kindly refer to [Resources Used](#resources-used) section for citations.
- This application is not production ready. We take no responsibility or liability in relation to any loss or damage that you may incur, including damage to your software or hardware, arising from your use of this website.

### Sample .env file:
```
VUE_APP_GOOGLE_MAPS_API_KEY = ""
VUE_APP_HERE_API_KEY = ""
VUE_APP_SQL_HOST = "remotemysql.com"
VUE_APP_SQL_PORT = 3306
VUE_APP_SQL_USER = ""
VUE_APP_SQL_PASSWORD = ""
VUE_APP_SQL_DATABASE = ""
VUE_APP_JWT_SECRET = ""

VUE_APP_FIREBASE_APIKEY = ""
VUE_APP_FIREBASE_AUTHDOMAIN = ""
VUE_APP_FIREBASE_PROJECTID = ""
VUE_APP_FIREBASE_STORAGEBUCKET = ""
VUE_APP_FIREBASE_MESSAGINGSENDERID = ""
VUE_APP_FIREBASE_APPID = ""

```
---
## Part 2:

### Updates:

- Added more restaurants in the [vuex store](app/store/index.js).
- Used [VueGoogleMaps](https://www.npmjs.com/package/vue2-google-maps) component library to add Google Maps with custom markers on search page and individual restaurant page.
- Added Client Side JavaScript Form Validation on [User Login Page](app/pages/login.vue) and [User Registration Page](app/pages/register.vue)
- Added Client Side HTML Form Validation on [Object Submission Page](app/pages/add.vue)
- Added HTML5 Geolocation using browser's [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to show current location on [Map](app/components/Map.vue) and fill co-ordinates in Add Object, Registration Pages.
- Added address autocomplete/autofill on [Register User Page](app/pages/register.vue) using [Here API](https://www.here.com/platform/geocoding)

### Notable Features:

- When searching by location, moving the map will also update the list of restaurants dynamically (depending on what is in view on map)
- Hovering over a restaurant on the search result page will highlight it both on the map, as well as on the list.
- Clicking on a restaurant on the map will open up a small information panel, clicking on the button will lead to the restaurant page.
- On the individual object page, the map automatically adjusts focus based on current location and selected restaurant.
- SSL certificate has been added to the AWS deployment.

### Additional Notes:

- JavaScript files have been kept with their relevant vue files to reduce clutter and confusion. This is the official method indicated on Nuxt's documentation and prior permission was obtained from the professor for the same.
- HTML5 Geolocation does not work on unsecure links on some browsers. When running locally:
  - Please obtain relevant API keys (Google Maps and Here.com) and place them in a .env file within the app directory.
  - Browse served files on localhost instead of the default 127.0.0.1 URL.
- Form validation for adding a review has not been added, as it will be done server side during Part 3.
- Regex expressions for email validation in JavaScript has been borrowed from : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

### Credentials
- To run locally, please fill in the following credentials in .env file placed in root directory before [building](#building-for-production)
```
VUE_APP_GOOGLE_MAPS_API_KEY="KEY HERE(https://developers.google.com/maps/documentation/javascript/get-api-key)"
VUE_APP_HERE_API_KEY="KEY HERE(https://www.here.com/)"
```
## About

This web application has been developed for CS4WW3 Fall 2021 at McMaster University. \
This application enables the users to performs the following tasks:

- Search for a restaurant based on keywords or by ratings.
- View all restaurants based on search criteria.
- View ratings and reviews for selected restaurant.
- Login/Register using secure authentication (coming soon).
- Add restaurants to the database.
- Publish reviews for a particular restaurant

This application was built using HTML5, CSS, Vue.js and Nuxt.js. It is rendered Server Side using PM2 and Nginx.

## Folder Structure

This application is structured in the following format

- [app](app)

  - [assets](app/assets) : All static assets are stored here.

    - [bootstrap](app/assets/bootstrap) : The required configuration and files required to load Bootstrap v5.0 into the application.4WW3
    - [css/main.css](app/assets/css/main.css) : The external stylesheet utilized by the application in order to apply custom styles.

  - [components](app/components) : These components are small snippets of code that can be utilized multiple times within the application.

    - [Footer.vue](app/components/Footer.vue) : The standard footer which will be present in all pages.
    - [List.vue](app/components/List.vue) : This is the list of results that will be displayed when a user searches for a restaurant and views the results of that search.
    - [Map.vue](app/components/Map.vue) : A reusable component that will render the map on the screen based on the results of the search or restaurant selected. (As part of the requirements of A1, this component just displays a static image as a live dynamic map would require the use of JavaScript).
    - [Navbar.vue](app/components/Navbar.vue) : The standard navbar which will be present in all pages.
    - [Review.vue](app/components/Review.vue) : This is a reusable component that will be used to display the user's reviews for a particular restaurant.
    - [SubmitReview.vue](app/components/SubmitReview.vue) : A Bootstrap 5 Modal element, customized to enable the user to enter a restaurant's review. (Used in restaurant.vue)

  - [layouts](app/layouts):

    - [default.vue](app/layouts/default.vue) : This is the standard layout that aligns the components within the application in the desired format. This module is utilized so that the Navbar and Footer are only loaded once and present in all views with the same alignment to ensure design consistency and performance.

  - [mixins](app/mixins):

    - [geolocation.js](app/mixins/geolocation.js) : This JavaScript file contains the code used for geolocation via HTML5 browser's navigation API.
    - [mapControl.js](app/mixins/mapControl.js) : This file contains the code used by different components to find active pins and highlight/dehighlight pins on map.
    - [validations.js](app/mixins/validations.js) : This file contains all the code used for JavaScript client side validation.

  - [node_modules](app/node_modules): Used to save all downloaded packages from NPM.

  - [pages](app/pages):

    - [about.vue](app/pages/about.vue) : An about page stating the purpose of this application.
    - [add.vue](app/pages/add.vue) : This page enabled the users to add a new restaurant for reviews.
    - [index.vue](app/pages/index.vue) : This is the initial landing page and home page of the application. This page consists of a search area which enables the users to search for a restaurant by using either keywords or by average ratings.
    - [login.vue](app/pages/login.vue) : This page will be displayed to users if they try to add a review or add a restaurant while they are not logged in.
    - [register.vue](app/pages/register.vue) : If a user is not logged in and do not have an account, they will utilize this page to create an account.
    - [restaurant.vue](app/pages/restaurant.vue) : This page displays the information, images, location and reviews of the selected restaurant.
    - [search.vue](app/pages/search.vue) : This page will display the search results with multiple restaurants based on the provided keyword or average ratings.

  - [plugins/google-maps.js](app/plugins/google-maps.js): This file imports the **VueGoogleMaps** components library into Nuxt.

  - [static/favicon.png](app/static/favicon.png): This is the favicon used for the website. (Attributed: https://images.squarespace-cdn.com/content/v1/5935792bd1758ee3e38c4f46/1546466805757-90N3MXRSFFDTYAR9XJE0/dine-around-favicon.png?format=1000w)

  - [store/index.js](app/static/favicon.png): This is a common store used by the application to keep a track if dark mode is enabled or not, as well as restaurant's data. This store is based on [Vuex](https://vuex.vuejs.org/) which is being utilized by the [Nuxt.js](https://nuxtjs.org/) SSR application.

## How is it built and rendered

[Nuxt.js](https://nuxtjs.org/) provides us (the developers) an option to compile/build the project either as a static Client Side Rendered (CSR) application or as a Server Side Rendered application (SSR).

We have chosen to compile and render our application server side as it enables us to compute the Meta tags (required for Add On Task 1) on the fly which would not be possible with CSR since Twitter, Facebook and other Open Graph Protocol consumers do not execute JavaScript while fetching metadata.

- We have used PM2 as our Node process manager to maintain uptime once the Putty/SSH terminal session is disconnected, or if the server has to restart.
- Nginx as our reverse proxy to allow [the domain](https://4ww3.anant-j.com) to connect to the application and then issued a certificate via [Certbot](https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04).

This is how our site is deployed and rendered:

- An Amazon EC2 server instance has been provisioned on AWS.
- An Elastic IP has been mapped to this instance.
- Our domain has been pointed to this elastic IP.
- At the time of deployment, [the build script](app/deploy.sh) is run on EC2 instance which does the following:
  - Installs all the required dependencies (npm install)
  - Builds the application (npm run build)
  - Stops the existing deployment process (PM2 stop)
  - Start the PM2 process manager again with new files (PM2 Start)

## Running Locally

To run this application locally, follow these steps:

- Clone Repository
- Open the cloned repository in terminal/Bash shell/Powershell.
- Install [Node](https://nodejs.org/en/) and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if not already present on the system.
- `cd AK-4WW3/app`
- `npm install`
- `npm run dev`
- Notice the deployment link on the terminal and open in a browser.

## Building for production

To build for production, follow these steps:

- Clone Repository
- Open the cloned repository in terminal/Bash shell/Powershell.
- Install [Node](https://nodejs.org/en/), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if not already present on the system and PM2.
- `cd AK-4WW3/app`
- `npm install`
- `npm run build`
- `pm2 start npm -- start`
- Ensure PM2 is working by checking `pm2 log` and `pm2 status`
- Visit website and verify deployment
- Ensure Firewalls are enabled on server. Monitor usage carefully and scale accordingly.

## Additional Features

- Dark Mode and Light Mode is present in the application which can be toggled by the user.
- Validation is present such that users are only able to search by keywords or ratings (this might change in the future versions of this application).
- An option to upload a video is present when adding a restaurant.js
- Validation is present to ensure no future date is set as Date of Birth while registering a user, or while submitting a review.

## Add On Tasks

Add‐on task 1: Meta‐data and Microdata has been attempted via our application.

- Metadata fields have been added for Facebook's Open Graph Protocol.
- Metadata fields have been added for Twitter Cards.

---
## Resources Used

### Technologies Used

- HTML5
- Cascading Style Sheets (CSS)
- Vue.js : https://vuejs.org/
- Nuxt.js : https://nuxtjs.org/ with SSR
- FontAwesome: https://fontawesome.com/
- Bootstrap 5.0 : https://getbootstrap.com/docs/5.0/
- Nuxt FontAwesome: https://www.npmjs.com/package/nuxt-fontawesome
- Part 2: VueGoogleMaps: https://www.npmjs.com/package/vue2-google-maps
- Part 2: Here.com address autocomplete
- Part 3: Express-formidable: https://www.npmjs.com/package/express-formidable (server side: middleware) 
- Part 3: Jsonwebtoken: https://www.npmjs.com/package/jsonwebtoken (server side)
- Part 3: Firebase : https://www.npmjs.com/package/firebase (server side: image upload)
- Part 3: Mysql2 : https://www.npmjs.com/package/mysql2 (server side: data store)
- Part 3: Helmet : https://www.npmjs.com/package/helmet (server side: security)
- Part 3: Express-rate-limit : https://www.npmjs.com/package/express-rate-limit (server side: security)
- Part 3: Bycrypt : https://www.npmjs.com/package/bcrypt (server side: encryption)
  
### Dev Environment

- VsCode (IDE)
- VsCode Live Share (Pair Programming)
- EsLint (Linting)
- Vetur (Vue tooling extension for VsCode)
- Prettier (Formatting)
- GitLens (Git SCM)
- Windows 10, MacOs with Node.js version 16.19.1

### Prod Environment

- Amazon EC2 T2 Micro Instance running ubuntu-focal-20.04
- PM2 Node Process Manager
- Nginx Reverse Proxy
- SQL Server: https://remotemysql.com/
- Firebase Cloud Store: https://firebase.google.com

### Tutorials/Guidance

- [Setting up Nuxt on EC2/DigitalOcean](https://medium.com/codeartisan/how-to-run-nuxt-js-on-digitalocean-159fc558d2ab)
- [Vuex with Nuxt](https://nuxtjs.org/docs/directory-structure/store/)
- [Meta with Nuxt](https://nuxtjs.org/docs/features/meta-tags-seo/)
- [Adding Bootstrap to Nuxt App](https://stackoverflow.com/a/67038626)
  - Note: `fibers` has been excluded from the package.json and this application due to build issues with Windows 10.
    - Using this during build time can decrease build times by 50%. This should be considered when deploying this application in PROD environments.
- [Adding FontAwesome to Nuxt](https://www.npmjs.com/package/@nuxtjs/fontawesome)
- [Multiple Domains with Nginx](https://www.serverlab.ca/tutorials/linux/web-servers-linux/how-to-configure-multiple-domains-with-nginx-on-ubuntu/)
  - Had to modify Nginx configs to enable both Domain and IPs access to the node application.
- [Nuxt Middleware API](https://www.youtube.com/watch?v=KfqO-G7-Lsk)
  - Used for APIs
- [Firebase Storage](https://firebase.google.com/docs/storage/web/upload-files)