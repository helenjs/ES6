'use strict';

class Device{
    constructor(name, mark){
        this._mark = mark;
        this._name = name;
        this._state = false;
    }
    turnOn(){
        this._state = true;
    }
    turnOff(){
        this._state = false;
    }
    toString(){
        let state = this._state? 'turn on' : 'turn off';
        return "Device " + this._name + ',mark ' + this._mark + ' ' + state;
    }
}
/*
* TV constructor
*/
class Tv extends Device{
    constructor(name, mark, volumeModule, soundModule){
        super(name, mark);
        this._volumeModule = volumeModule;
        this._soundModule = soundModule;
        this._wifiStatus = false;
    }
    get volume(){
        return this._volumeModule.range;
    }
    volumePrev(){
        return this._volumeModule.rangePrev();
    }
    volumeNext(){
        return this._volumeModule.rangeNext();
    }
    get sound(){
        return this._soundModule.range;
    }
    soundPrev(){
        return this._soundModule.rangePrev();
    }
    soundNext(){
        return this._soundModule.rangeNext();
    }
    wifiOn(){
        this._wifiStatus = true;
        return this._wifiStatus;
    }
    wifiOff(){
        this._wifiStatus = false;
        return this._wifiStatus;
    }
}

/*
* Radio constructor
*/
class Radio extends Device{
    constructor(name, mark, volumeModule){
        super(name, mark);
        this._volumeModule = volumeModule;
    }
    get volume(){
        return this._volumeModule.range;
    }
    volumePrev(){
        return this._volumeModule.rangePrev();
    }
    volumeNext(){
        return this._volumeModule.rangeNext();
    }
}

class Fridge extends Device{
    constructor(name, mark, tempModule){
        super(name, mark);
        this._tempModule = tempModule;
    }
    get temp(){
        return this._tempModule.range;
    }
    tempPrev(){
        return this._tempModule.rangePrev();
    }
    tempNext(){
        return this._tempModule.rangeNext();
    }
}

class RangeModule{
    constructor(range = '', minValue, maxValue){
        let DEFAULTRANGE = 1;
        this._minValue = minValue;
        this._maxValue = maxValue;
        this._range = (!range) ? DEFAULTRANGE:range;
    }
    get range(){
        return this._range;
    }
    rangePrev(){
        if(this._range > this._minValue){
            return this._range = --this._range;
        }
        else{
            return this._range = this._maxValue;
        }
    }
    rangeNext(){
        if (this._range < this._maxValue){
            return this._range = ++this._range;
        }
        else{
            return this._range = this._minValue;
        }
    }
    
}



let volumeTV1 = new RangeModule(5, 1, 10);
let soundTV1 = new RangeModule(20, 1, 50);
let tv = new Tv('tv','Samsung', volumeTV1, soundTV1);
tv.turnOn();

console.log(tv.toString());
console.log(tv.volume);
console.log('next' + tv.volumeNext());
console.log('next' + tv.volumeNext());
console.log('next' + tv.volumeNext());
console.log(tv.volume);
console.log('prev ' + tv.volumePrev());
console.log(tv.volume);
console.log(tv.wifiOn());
console.log(' ');



let tempFr = new RangeModule(5, 1, 8);
let fr = new Fridge('fridge','Samsung', tempFr);
fr.turnOn();


console.log(fr.toString());
console.log('current temp' + fr.temp);
console.log('next' + fr.tempNext());
console.log('next' + fr.tempNext());
console.log('next' + fr.tempNext());
console.log(fr.temp);
console.log('prev ' + fr.tempPrev());
console.log(fr.temp);
