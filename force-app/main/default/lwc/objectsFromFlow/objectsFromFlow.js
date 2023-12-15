import { LightningElement, track, api } from 'lwc';
import { FlowAttributeChangeEvent} from 'lightning/flowSupport';


export default class ObjectsFromFlow extends LightningElement {
   
    @track _contacts = [];
    
    set contacts(contacts = []) {
        this._contacts = [...contacts]; //copy the contacts 
    }
    @api
    get contacts() {
        return this._contacts;
    }

     get items(){
      let contactEmailArray =  this._contacts.map((currItem) => {
          return {
            type: 'icon',
             label: 'currItem.Email',
             name: 'currItem.Email',
             iconName: 'standard:contact',
             alternativeText: 'Contact Email',
           }
      });
         return contactEmailArray;
     }
    

}