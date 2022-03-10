// import neo4j-driver
const neo4j = require('neo4j-driver');
// check node environment and set app config environment
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    // configure stuff here
    require('dotenv').config()
}

// import environment config server informations
const uri = process.env.SERVER_DATABASE_URL;
const user = process.env.SERVER_DATABASE_USERNAME;
const password = process.env.SERVER_DATABASE_PASSWORD || '';

// create instance of neo4j driver
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
// define an executeCypherQuery function
async function executeCypherQuery(statement, params = {}) {
    try {
        // try to create section connection with neo4j
        const session = driver.session();

        // return promise of session runnable method
        return await new Promise((resolve, reject) => {
            session.run(statement, params)
                /* .subscribe({
                    onKeys: keys => {
                        console.log(keys)
                    },
                    onNext: record => {
                        console.log(record);
                        resolve(record);
                    },
                    onCompleted: () => {
                        session.close(); // returns a Promise
                    },
                    onError: error => {
                        reject(error);
                    }
                }) */
                .then(result => {
                    /* console.log(result); */
                    return result;
                })
                .catch(error => {
                    reject(error);
                })
                .then((result1) => {
                    /* console.log(result1) */
                    session.close();
                    resolve(result1);
                });
        })

    } catch (error) {
        throw error;
    }
}
// export executeCypherQuery
module.exports = { executeCypherQuery };