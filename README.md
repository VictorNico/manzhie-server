# manzhie-server
application de recuperation de données sur les trajets de transport au cameroun

## manzhie-server v0.1.0
### project structure

    .manzhie-server
    ├── app                                 # Application Logic entities
    │    ├── controllers                    # controllers entities
    │    │   └── v0.1.0                     # for version 0.1.0
    │    │       ├── journeys               # journeys controllers folder
    │    │       │   └── index.js           # based implementation
    │    │       └── resource               # resources controllers
    │    │            └── src.js            # based implementation
    │    ├── middlewares                    # middlewares entities
    │    │   └── v0.1.0                     # for version 0.1.0
    │    │       └── neo4j                  # for neo4j db
    │    │           ├── async.js           # middleware for asynchronuous process
    │    │           ├── error.js           # middleware for error trigger
    │    │           └── graphDBConnect.js  # middleware for DBMS connection and enhanced cypher queries
    │    ├── models                         # models entities
    │    │   └── v0.1.0                     # for version 0.1.0
    │    │       └── neo4j                  # for neo4j
    │    ├── routers                        # routers entities
    │    │   └── v0.1.0                     # for version 0.1.0
    │    │       └── neo4j                  # for neo4j
    │    │            └── journeys.js       # based implementation
    │    ├── startup                        # Startup entities
    │    │   ├── config.js                  # startup configuration environnement, not currently used
    │    │   ├── logging.js                 # startup error trigger definition
    │    │   └── routes.js                  # startup routes definition
    │    └── app.js                         # express creation based impelementation
    ├── data                                # data folder of the application
    │    ├── upload                         # for upload data
    │    └──index.json                      # json based example data
    ├── public                              # public folder for static rendering of express
    ├── .env                                # environment file
    ├── .gitignore                          # ignore files for remotes upload
    ├── Algorithms.md                       # natural algorithms for application process
    ├── LICENCE                             # LICENCE declaration
    ├── logfile                             # application log file for debugging
    ├── package.json                        # npm file
    ├── README.md                           # documentation file
    ├── server.js                           # entry point of the application
    └── uncaughtException.log               # application UncaughtException log file for enhanced debugging

### Tasks

* $\blue{server.js}$ entry server point file
  * [x] import protocole http and application setting importation
  * [x] check node environment and set app config environment
  * [x] define normalize port function  use parse port to good integer format
  * [x] normalied port from node environment config
  * [x] set application port
  * [x] definition of error handler method for server error
  * [x] create http instance server based on express app previously import
  * [x] set trigger error handler method to server
  * [x] define trigger listening address and port callback function
  * [x] import package express-list-endpoints of the server
  * [x] console print of express list endpoints as table
  * [x] launch server on normalized defined port
* $\blue{app/app.js}$ express app definition file
  * [x] import express
  * [x] create express app
  * [x] import body-parser
  * [x] For Parse Response Body when files has not send
  * [x] import connect-history-api-fallback
  * [x] use connect-history-api-fallback For Vue.js Url Hastag remove
  * [x] set app url manager context
  * [x] set static public directory
  * [x] enables cors
    * [x] define Allow-Origin
    * [x] define Allow-Headers
    * [x] define Allow-Methods
  * [x] define logging trigger actions
  * [x] use following routes in application
  * [x] define not found trigger
  * [x] export app
* $\blue{.env}$ environment config file
  * [x] set wanted use port constant as PORT
  * [x] set current node environment between development and production as NODE_ENV
  * [x] set server database username as SERVER_DATABASE_USERNAME
  * [x] set server database password as SERVER_DATABASE_PASSWORD
  * [x] set server database address listening as SERVER_DATABASE_URL
* $\blue{.gitignore}$ unwanted remote upload file or directory
  * [x] add node_modules
  * [x] add package-lock.json
  * [x] add .env*
  * [x] $\dot{...}$
* $\blue{Algorithms.js}$
* $\blue{startup/config.js}$
* $\blue{startup/logging.js}$ 
  * [x] import winston error logger
  * [x] import express async errors
  * [x] define errors trigger actions in a function
  * [x] export function
* $\blue{startup/routes.js}$
  * [x] import express
  * [x] import journeys routes
  * [x] import middleware error
  * [x] export function define app used
* $\blue{routers/v0.1.0/neo4j/journeys.js}$ journeys router
  * [x]  import express
  * [x]  create express router instance
  * [x]  import journeys controller
  * [x]  set route create with POST method access to create journeys
  * [x]  set route getAll with Post alternatively for GET fixing cannot GET of express handler
  * [x]  set route getAll with GET method acces to retrieve all journeys datas
  * [x]  set route get with POST alternatively for GET fixing cannot GET of express handler
  * [x]  set route get with GET method acces to retrieve specific place with link journeys datas
  * [x]  set route update/start/:start/type/:typeR/end/:end with PATCH method access to update a journeys informations
  * [x]  set route delete/start/:start/type/:typeR/end/:end with PATCH method access to delete a journeys informations
  * [x]  export router instance
* $\blue{middlewares/v0.1.0/neo4j/async.js}$
  * [x] define and export handler async function
* $\blue{middlewares/v0.1.0/neo4j/error.js}$
  * [x] import winston
  * [x] define request throwed function
  * [x] export thrower function
* $\blue{middlewares/v0.1.0/neo4j/graphDBConnect.js}$
  * [x]  check node environment and set app config environment
  * [x]  import environment config server informations
  * [x]  create instance of neo4j driver
  * [x]  define an executeCypherQuery function
    * [x]  try to create section connection with neo4j
    * [x]  return promise of session runnable method
  * [x]  export executeCypherQuery
* $\blue{controllers/v0.1.0/journeys/neo4j/index.js}$
  * [x] import graphDBConnect middle
  * [x] define formatResponse function
  * [x] define and export async create function
  * [x] define and export async getAll function
  * [x] define and export async get function
  * [x] define and export async update function
  * [x] define and export async delete function
* $\blue{controllers/v0.1.0/resource/src.js}$

### Scripts d'installation

**clone project**
* _https link_ 
```{bash}
git clone httpsUrl
```
* _ssh link_ 
```{bash}
git clone httpsUrl
```
* _github command_
```{bash}
gb rp repUrl
```
**change directory to clone directory**
```{bash}
cd manzhie-server
```
**install dependencies**
* _npm_
```{bash}
npm i
```
* _yarm_
```{bash}
yarm add
```
### Journeys data structure
```{javascript}
{
    "type": String, // trip type : marche|moto|voiture
    "duration": String, // trip duration
    "cost": Double, // trip cost
    "pothole": Boolean, // pothole presence
    "bottling": Boolean, // bottling presence
    "distance": String, // trip distance
    "startingPoint":{ // trip starting point node data
        "name": String
    },
    "arrivalPoint":{ // trip arrival point node data
        "name": String
    }
}
```
### Test routes
* _Postman_
    * first create five tab view
    * tab1 for journeys create request
        * set url as <http://address:port/api/v0.1.0/create>
        * set method POST
        * go to body and check raw
        * select json format at the right dropdown button
        * create json object of journeys data structure
        * then send request
    * tab2 for getAll journeys request
        * set url as <http://address:port/api/v0.1.0/getAll>
        * set method POST
        * then send request
    * tab3 for get journeys request
        * set url as <http://address:port/api/v0.1.0/get>
        * set method POST
        * go to body and check raw
        * select json format at the right dropdown button
        * create json object containing name place information
        * then send request
    * tab4 for update journeys request
        * set url as <http://address:port/api/v0.1.0/update/start/:start/type/:typeR/end/:end>
        * set method PATCH
        * go to body and check raw
        * select json format at the right dropdown button
        * create json object of journeys data structure information
        * go to params and set path variables
          * start
          * typeR
          * end
        * then send request
    * tab5 for update journeys request
        * set url as <http://address:port/api/v0.1.0/delete/start/:start/type/:typeR/end/:end>
        * set method DELETE
        * go to params and set path variables
          * start
          * typeR
          * end
        * then send request
