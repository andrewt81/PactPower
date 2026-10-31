import{migrate,pool}from'./db.mjs';try{await migrate();console.log('Migrations applied.')}finally{await pool.end()}
