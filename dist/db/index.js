"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URI = 'mongodb+srv://admin:admin@cluster0.xfyco.mongodb.net/dev';
function connect() {
    return new Promise((resolve, reject) => {
        // mongoose.Promise = global.Promise;
        if (process.env.NODE_ENV === 'test') {
            console.log("Mock DB Connected");
            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose_1.default);
            mockgoose.prepareStorage()
                .then(() => {
                mongoose_1.default.connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true })
                    .then((res, err) => {
                    if (err)
                        return reject(err);
                    // console.log("Test DB Connected");
                    resolve();
                });
            });
        }
        else /* istanbul ignore next */ {
            console.log("Dev DB Connected");
            mongoose_1.default.connect(DB_URI, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
                .then((res, err) => {
                if (err)
                    return reject(err);
                resolve();
            });
        }
    });
}
exports.connect = connect;
function close() {
    return mongoose_1.default.disconnect();
}
exports.close = close;
//# sourceMappingURL=index.js.map