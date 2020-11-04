// lib/server.ts

import app from "./app";
import * as db from './db/index';
const PORT = 3000;

db.connect()
    .then(()=>{
        app.listen(PORT, () => {
            console.log('Express server listening on port ' + PORT);
        })
    })
