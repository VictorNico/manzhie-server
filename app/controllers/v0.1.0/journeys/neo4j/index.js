// import graphDBConnect middleware
const graphDBConnect = require('../../../../middlewares/v0.1.0/neo4j/graphDBConnect.js');
// define formatResponse function
function formatResponse(resultObj) {
    const result = [];
    if (resultObj.records.length > 0) {
        resultObj.records.map(record => {
            record._fields.forEach(_node => {
                result.push(_node);
                /* result.push(_node.properties); */
            })
        });
    }
    return result;
}
// define and export async create function
exports.create = async function(req, res) {
    /* console.log(req.body); */
    const {
        type,
        duration,
        cost,
        pothole,
        bottling,
        distance,
        startingPoint,
        arrivalPoint
    } = req.body;
    /* if (!type || !duration || !cost || cost < 0 || !pothole || !bottling || !distance || !startingPoint || !arrivalPoint) {
        return res.status(400).send('Invalid Inputs');
    } */

    const query = `CREATE (n:place {name:'${startingPoint.name}'})-[:DEPLACER {type:'${type}',duration:'${duration}',cost:${cost},pothole:${pothole},bottling:${bottling},distance:'${distance}'}]->(p:place {name:'${arrivalPoint.name}'})  RETURN n,p`;
    const params = {
        type,
        duration,
        cost,
        pothole,
        bottling,
        distance,
        startingPoint,
        arrivalPoint
    };
    /* console.log(params) */
    /* const resultObj = */
    graphDBConnect.executeCypherQuery(query, params).then(resultObj => {
        /* console.log(resultObj); */
        res.send(formatResponse(resultObj));
    });
    /* console.log(resultObj);
    const result = formatResponse(resultObj);
    res.send(result); */
};
// define and export async getAll function
exports.getAll = async function(req, res) {
    const query = 'MATCH (n)<-[r]->(p) RETURN n,r,p LIMIT 100';
    const params = {};
    graphDBConnect.executeCypherQuery(query, params).then(resultObj => {
        /* console.log(resultObj); */
        res.send(formatResponse(resultObj));
    });
};
// define and export async get function
exports.get = async function(req, res) {
    const { name } = req.body;
    const query = `MATCH (n:place {name: '${name}'})<-[r]->(p:place) RETURN n,r,p LIMIT 100`;
    const params = { name };
    graphDBConnect.executeCypherQuery(query, params).then(resultObj => {
        /* console.log(resultObj); */
        res.send(formatResponse(resultObj));
    });
};
// define and export async update function
exports.update = async function(req, res) {
    const { start, end, typeR } = req.params;
    const {
        type,
        duration,
        cost,
        pothole,
        bottling,
        distance,
        startingPoint,
        arrivalPoint
    } = req.body;
    let update = `n.name = '${startingPoint.name}', 
                    p.name = '${arrivalPoint.name}', 
                    r.type = '${type}',
                    r.duration = '${duration}',
                    r.cost = ${cost},
                    r.pothole = ${pothole},
                    r.bottling = ${bottling},
                    r.distance = ${distance}`;

    const query = `MATCH (n:place {name: '${start}'})<-[r {type:'${typeR}'}]->(p:place {name: '${end}'}) SET ${ update } RETURN n,r,p `;
    const params = {
        type,
        duration,
        cost,
        pothole,
        bottling,
        distance,
        startingPoint,
        arrivalPoint
    };
    graphDBConnect.executeCypherQuery(query, params).then(resultObj => {
        /* console.log(resultObj); */
        res.send(formatResponse(resultObj));
    });
};
// define and export async delete function
exports.delete = async function(req, res) {
    const { start, end, typeR } = req.params;

    const query = `MATCH (n:place {name: '${start}'})<-[r {type:'${typeR}'}]->(p:place {name: '${end}'}) DETACH DELETE n,r,p `;
    const params = {};
    graphDBConnect.executeCypherQuery(query, params).then(resultObj => {
        console.log(resultObj);
        res.send("succesful deletion");
    });
};