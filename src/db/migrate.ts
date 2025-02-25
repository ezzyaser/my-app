import { db } from ".";
import { migrate } from "drizzle-orm/neon-http/migrator"

const main = async () => {
    try {
        await migrate(db, {
            migrationsFolder: 'src/db/migrations'        
        })
        console.log('migration completed')
    } catch (error) {
        console.error("Error during miration: ", error)
        process.exit(1)
    }
}