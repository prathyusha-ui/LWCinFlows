import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class DisplayFlowConditionally extends LightningElement {
    @api recordId;
    accRating;
    @wire(getRecord, {
        recordId: "$recordId",
        fields: [ACCOUNT_RATING]
    }) outputFunction({ data, error }) {
        if (data) {
            this.accRating = getFieldValue(data, ACCOUNT_RATING);
            console.log("Account Rating", this.accRating);
        }
        else if (error) {
            console.log("Error While retrieving Record::", error);
        }
    }
    get isaccountRatingHot() {
        return this.accRating === "Hot" ? true : false;
    }

    get isaccountRatingWarm() {
        return this.accRating === "Warm" ? true : false;
    }

    get isaccountRatingCold() {
        return this.accRating === "Cold" ? true : false;
    }
    get inputVariables() {
        return [{
            name: "varAccRating", type: "String", value: this.accRating
        }];
    }
}