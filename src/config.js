export const PORT = process.env.PORT || 3000;

// Database configuration
export const DB_HOST = process.env.MYSQLHOST || process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.MYSQLUSER || process.env.DB_USER || 'admin';
export const DB_PASSWORD = process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || 'admin';
export const DB_NAME = process.env.MYSQLDATABASE || process.env.DB_NAME || 'backend_modulo4';
export const DB_PORT = process.env.MYSQLPORT || process.env.DB_PORT || 3306;
