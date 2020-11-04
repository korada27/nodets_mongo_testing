import mongoose from "mongoose";
const DB_URI = 'mongodb+srv://admin:admin@cluster0.xfyco.mongodb.net/dev';

export function connect(){
    return new Promise((resolve, reject) => {
    // mongoose.Promise = global.Promise;

    if (process.env.NODE_ENV === 'test') {
        console.log("Mock DB Connected");
        const Mockgoose = require('mockgoose').Mockgoose;
        const mockgoose = new Mockgoose(mongoose);
  
        mockgoose.prepareStorage()
          .then(() => {
            mongoose.connect(DB_URI,
              { useNewUrlParser: true, useCreateIndex: true })
              .then((res, err) => {
                if (err) return reject(err);
                // console.log("Test DB Connected");
                resolve();
              })
          })
    }else /* istanbul ignore next */ {
        console.log("Dev DB Connected");
        mongoose.connect(DB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((res, err) => {
            if (err) return reject(err);
            resolve();
          })
    }
})
}

export function close(){
    return mongoose.disconnect();
}