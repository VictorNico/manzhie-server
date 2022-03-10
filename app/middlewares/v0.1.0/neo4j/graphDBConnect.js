const neo4j = require('neo4j-driver');
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    // configure stuff here
    require('dotenv').config()
}
//console.log(neo4j);
const uri = process.env.SERVER_DATABASE_URL;
const user = process.env.SERVER_DATABASE_USERNAME;
const password = process.env.SERVER_DATABASE_PASSWORD || '';
const database = process.env.SERVER_DATABASE || '';
//console.table({ uri, user, password, database })
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
//console.log(driver);
async function executeCypherQuery(statement, params = {}) {
    try {
        const session = driver.session();
        //console.log(session);
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
module.exports = { executeCypherQuery };