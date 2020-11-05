"use strict";
//   /lib/controllers/crmController.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const mongoose = __importStar(require("mongoose"));
const crmModel_1 = require("../db/models/crmModel");
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
class ContactController {
    // Add/Save new Data
    addNewContact(req, res) {
        let newConatct = new Contact(req.body);
        newConatct.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(contact);
            }
        });
    }
    getAllContacts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let allContacts = yield Contact.find({});
            console.log("Hello");
            res.send(allContacts);
        });
    }
    //Get Single Contact Details
    getContactWithID(req, res) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    addAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.contactId);
            console.log(req.body);
            try {
                let addressAdd = yield Contact.update({ _id: req.params.contactId }, { $addToSet: { address: [req.body] } });
                res.send(addressAdd);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map