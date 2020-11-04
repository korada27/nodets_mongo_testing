//   /lib/controllers/crmController.ts

import * as mongoose from 'mongoose';
import { ContactSchema } from '../db/models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    // Add/Save new Data
    public addNewContact(req: Request, res: Response) {
        let newConatct = new Contact(req.body);
        newConatct.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(contact);
            }
        })
    }

    public async getAllContacts(req: Request, res: Response) {

        let allContacts = await Contact.find({});
        console.log("Hello")
        res.send(allContacts);
    }

    //Get Single Contact Details
    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public async addAddress(req: Request, res: Response) {
        console.log(req.params.contactId);
        console.log(req.body);

        try{
            let addressAdd = await Contact.update(
                { _id: req.params.contactId },
                { $addToSet : { address:[req.body]}}
            );
        res.send(addressAdd)
        }catch(err){
            res.send(err)
        }
    }
}
