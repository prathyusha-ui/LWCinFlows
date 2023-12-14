import { LightningElement, api } from 'lwc';
import {
    FlowAttributeChangeEvent,
    } from 'lightning/flowSupport';
export default class OutputScreen extends LightningElement {
    @api number1 = "";
    @api number2 = "";
    @api outputResult = "";

    clickHandler(event) {
        let name = event.target.name;
        if (name === "add") {
            this.outputResult = Number(this.number1) + Number(this.number2);
        }else if (name === "sub") {
            this.outputResult = Number(this.number1) - Number(this.number2);
        }else if (name === "mul") {
            this.outputResult = Number(this.number1) * Number(this.number2);
        }else if (name === "div") {
            this.outputResult = Number(this.number1) / Number(this.number2);
        }
        const attributeChangeEvent = new FlowAttributeChangeEvent(
            "outputResult",
            this.outputResult
        );
        this.dispatchEvent(attributeChangeEvent);
    }
    

}