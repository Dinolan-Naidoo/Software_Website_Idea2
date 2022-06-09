const sql = require("mssql");
const config = {
    server : "localhost",
    port: 1433,
    user: "sample",
    password: "sample",
    database: "energy_usage",
}

sql.on('error', err => {
    console.log(err.message)
})

async function getDBUsers() {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request().query('select * from user_logins')
        console.log(result1)
        sql.close()
    } catch (error) {
        console.log(error.message)
        sql.close();
    }
}

getDBUsers();