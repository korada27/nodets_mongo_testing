// /lib/routes/crmRoutes.ts

import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";
import * as Validate from '../utilities/validators/contactValidator';

var contactController: ContactController = new ContactController();


export class Routes {

    public routes(app): void {

        // Smaple Hello world
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Hello World'
                })
            })

        // Create or Get Contacts
        app.route('/contact')
            .get(contactController.getAllContacts)
            .post(Validate.AddSchema, contactController.addNewContact);


        // Specific Contact Editing/Manipulating
        app.route('/contact/:contactId')
            .get(contactController.getContactWithID)
            .put((req: Request, res: Response) => {
                // Update a contact
                res.status(200).send({
                    message: 'PUT request successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a contact
                res.status(200).send({
                    message: 'DELETE request successfulll!!!!'
                })
            })

        //Add Address to Contacts 
        app.route('/contact/address/:contactId')
            .post(contactController.addAddress)
    }
}