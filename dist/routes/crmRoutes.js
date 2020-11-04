"use strict";
// /lib/routes/crmRoutes.ts
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const crmController_1 = require("../controllers/crmController");
const Validate = __importStar(require("../utilities/validators/contactValidator"));
var contactController = new crmController_1.ContactController();
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'Hello World'
            });
        });
        // Contact
        app.route('/contact')
            // GET endpoint
            .get(contactController.getAllContacts)
            // POST endpoint
            .post(Validate.AddSchema, contactController.addNewContact);
        // get a specific contact
        app.route('/contact/:contactId')
            .get(contactController.getContactWithID)
            .put((req, res) => {
            // Update a contact
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            });
        })
            .delete((req, res) => {
            // Delete a contact
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map