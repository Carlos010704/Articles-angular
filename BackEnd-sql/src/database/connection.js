import config from '../config';
import sql from 'mssql';

const dbConnection = {
    user: config.user,
    password: config.password,
    server: config.server,
    database: config.database,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }

}

export async function getConnection() {

const pool = await sql.connect(dbConnection);
sql.connect(dbConnection)
    .then(() => console.log('Conexión exitosa!'))
    .catch(() => console.log('Error al conectar!'))

return pool;
}

export {sql};

