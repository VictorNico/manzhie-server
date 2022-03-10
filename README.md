# manzhie-server
application de recuperation de données sur les trajets de transport au cameroun

## project structure

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
