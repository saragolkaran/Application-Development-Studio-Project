const { Client } = require('pg');

const CONNECTION_STRiNG = "postgres://pqrnfkso:bC9LOmYjlcMmw8p6Hq7n417Q1hiqHR4I@satao.db.elephantsql.com:5432/pqrnfkso";


function connect() {
    const client = new Client({
        connectionString: CONNECTION_STRiNG,
    });
    client.connect();
    return client;
}

function resetTableBasic() {
    const client = connect();
    const query = `
    DROP TABLE IF EXISTS performance;
    CREATE TABLE performance (
        performanceId BIGINT UNIQUE NOT NULL,
        festivalId BIGINT NOT NULL,
        startTime TIME NOT NULL,
        endTime TIME NOT NULL
    );
    `;
    client.query(query, (err, res) => {
        console.log(err, res)
        client.end()
    });
}

function resetTableAdv(){
    const client = connect();
    const query = `
    DROP TABLE IF EXISTS performanceWithPopularity;
    CREATE TABLE performanceWithPopularity (
        performanceId BIGINT UNIQUE NOT NULL,
        festivalId BIGINT NOT NULL,
        startTime TIME NOT NULL,
        endTime TIME NOT NULL,
        popularity INT NOT NULL
    );
    `;
    client.query(query, (err, res) => {
        console.log(err, res)
        client.end()
    });
 
}

//basic insert
function insertPerformance(performances, callback) {
    let i = 1;
    const performanceTemplate = performances.map(performance => `($${i++}, $${i++}, $${i++}, $${i++})`).join(',');

    const values = performances.reduce((reduced, performance) => [...reduced, performance.performanceId,
    performance.festivalId,
    performance.startTime,
    performance.endTime], []);

    const query = ` INSERT INTO 
    performance( performanceId, festivalId, startTime, endTime)
     VALUES ${performanceTemplate};`;

    console.log(values, query)
    const client = connect();
    client.query(query, values, (err, result) => {
        callback(err, result);
        client.end();
    });
}

//adv insert
function insertPerformanceAdv(performanceWithPopularity, callback) {
    let i = 1;
    const performanceWithPopularityTemplate = performanceWithPopularity.map(performanceWithPopularity => `($${i++}, $${i++}, $${i++}, $${i++}, $${i++})`).join(',');
    const values = performanceWithPopularity.reduce((reduced, performanceWithPopularity) => [...reduced, performanceWithPopularity.performanceId,
    performanceWithPopularity.festivalId,
    performanceWithPopularity.startTime,
    performanceWithPopularity.endTime,
    performanceWithPopularity.popularity], []);

    const query = `INSERT INTO
    performanceWithPopularity(performanceId, festivalId, startTime, endTime, popularity)
    VALUES ${performanceWithPopularityTemplate};`;

    console.log(values, query)
    const client = connect();
    client.query(query,values, (err, result) => {
        callback(err, result);
        client.end();
    });
}

//basic get
function getPerformance(festivalId, startTime__gt, page = 0, pageSize = 10, callback) {
    let whereClause;
    let i = 1;
    const values = [];
    if (!festivalId && !startTime__gt) whereClause = '';
    else {
        whereClause = 'WHERE ';
        if (festivalId) {
            whereClause += `festivalId = $${i++} `;
            values.push(parseInt(festivalId));
        }
        if (startTime__gt) {
            whereClause += festivalId ? ` AND startTime >= $${i++}` : ` startTime >= $${i++}`;
            values.push(parseInt(startTime__gt));
        }

    }
    let limitOffsetClause = `LIMIT $${i++} OFFSET $${i++}`;
    values.push(parseInt(pageSize)); //limit = pagesize
    values.push(parseInt(page) * parseInt(pageSize)); // offset = page * pagesize
    const query = `SELECT * FROM performance ${whereClause} ${limitOffsetClause}`;
    //console.log(query);
    /*  console.log(query,values);
     callback(null, {ok : "ok"}); */

    const client = connect();
    client.query(query, values, function (err, { rows }) {
        client.end();
        callback(err, rows);
    });

}

//adv get
function getPerformanceAdv(festivalId, startTime__gt, endTime__gt, page = 0, pageSize = 10, callback) {
    let whereClause;
    let i = 1;
    const values = [];
    if (!festivalId && !startTime__gt && !endTime__gt) whereClause = '';
    else {
        whereClause = 'WHERE ';
        if (festivalId) {
            whereClause += `festivalId = $${i++} `;
            values.push(parseInt(festivalId));
        }
        if (startTime__gt) {
            whereClause += festivalId ? ` AND startTime >= $${i++}` : ` startTime >= $${i++}`;
            values.push(parseInt(startTime__gt));
        }
        if (endTime__gt){
            whereClause += (festivalId||startTime__gt) ? ` AND endTime < $${i++}` : ` endTime < $${i++}`;
            values.push(parseInt(endTime__gt));
        }

    }
    let limitOffsetClause = `LIMIT $${i++} OFFSET $${i++}`;
    values.push(parseInt(pageSize)); //limit = pagesize
    values.push(parseInt(page) * parseInt(pageSize)); // offset = page * pagesize
    const query = `SELECT * FROM performanceWithPopularity ${whereClause} ${limitOffsetClause}`;
    //console.log(query);
    /*  console.log(query,values);
     callback(null, {ok : "ok"}); */
    console.log(query,values)
    const client = connect();
    client.query(query, values, function (err, { rows }) {
        client.end();
        callback(err, rows);
    });

}

//basic result get
function getPerformanceForResult(festivalId, callback) {
    const client = connect();
    const query = `SELECT performanceId, startTime, endTime FROM performance WHERE festivalId = $1`;

    client.query(query, [festivalId], (err, result) => {
        client.end();
        if (err) return callback(err, result);
        const { rows } = result
        callback(err, rows);

    });
}

//adv result get
function getPerformanceAdvForResult(festivalId, callback) {
    const client = connect();
    const query = `SELECT performanceId, startTime, endTime, popularity FROM performanceWithPopularity WHERE festivalId = $1`;

    client.query(query, [festivalId], (err, result) => {
        client.end();
        if (err) return callback(err, result);
        const { rows } = result
        callback(err, rows);

    });
}

//test name
function resetTable(callback) {
    const query = `
    DROP TABLE IF EXISTS performance;
    DROP TABLE IF EXISTS performanceWithPopularity;

    CREATE TABLE performance (
        performanceId BIGINT UNIQUE NOT NULL,
        festivalId BIGINT NOT NULL,
        startTime TIME NOT NULL,
        endTime TIME NOT NULL
    );
    
    CREATE TABLE performanceWithPopularity (
        performanceId BIGINT UNIQUE NOT NULL,
        festivalId BIGINT NOT NULL,
        startTime TIME NOT NULL,
        endTime TIME NOT NULL,
        popularity INT NOT NULL
    );

    `;
    const client = connect();
    client.query(query, (error, result) => {
        client.end();
        callback(error, result);
    }); // !! Ensure that the callback is called !!
}


module.exports = {
    resetTableBasic,
    resetTableAdv,
    insertPerformance,
    insertPerformanceAdv,
    getPerformance,
    getPerformanceAdv,
    getPerformanceForResult,
    getPerformanceAdvForResult,
    resetTable
}