import { LightningElement, api, track} from 'lwc';
import MyTom from '@salesforce/resourceUrl/Tom';
import MyJerry from '@salesforce/resourceUrl/Jerry';

export default class IfElseDemo extends LightningElement {
@api staticResourceName;

TomImage = MyTom;
JerryImage = MyJerry;
@track Tom = true;
@track Jerry = false;
@track showJerry;
@track showtom;
handleshowjerry(event){
    this.showJerry = true;
    this.showtom = false;
    this.tom = false;
    this.Jerry= true;
}
handleshowtom(event){
    this.showJerry = false;
    this.showtom = true;
    this.Jerry= false;
    this.tom = true;
}

}