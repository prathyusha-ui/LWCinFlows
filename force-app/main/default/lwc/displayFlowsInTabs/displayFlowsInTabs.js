import { LightningElement,api,wire } from 'lwc';
import ACCOUNT_RATING from "@salesforce/schema/Account.Rating";
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
export default class DisplayFlowsInTabs extends LightningElement {
    @api recordId;
    accRating;
    @wire(getRecord, {
        recordId: "$recordId",
        fields:[ACCOUNT_RATING]
    }) outputRecord({ data, error }) {
        if (data) {
            this.accRating = getFieldValue(data, ACCOUNT_RATING);
        }
        else if (error) {
            
        }
    }
    get isHotAccRating() {
        return this.accRating === "Hot" ? true : false;
    }
    get isWarmAccRating() {
        return this.accRating === "Warm" ? true : false;
    }
    get isColdAccRating() {
        return this.accRating === "Cold" ? true : false;
    }
    get inputVariables() {
        return [{
            name: "varAccRating", type: "String", value:this.accRating
        }];
    }

}