module.exports = {
	"type": process.env.DB_TYPE,
	"host": process.env.DB_HOST,
	"port": 5432,
	"username": process.env.DB_USERNAME,
	"password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
  "migrations": [
		"./src/shared/infra/typeorm/migrations/*.ts"
	],
	"cli": {
		"migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}
