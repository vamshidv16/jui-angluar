/**
 * Created by emasion on 2016-01-17.
 */

import {Directive} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {Vendor} from '../../vendor';
@Directive({  selector: 'jui-button, [jui-button]' })
export class JuiButton {
    juiObj: Object;
    constructor(private _element: ElementRef) {
        console.log(this._element);
        // jui create
        this.juiObj = new Vendor.JuiObject('ui.button', this._element);
    }
    onMousedown(event) {
        console.log(event, this._element);
    }
}


