import Ember from 'ember';

export default Ember.Component.extend({
    classNames:'reducer',
    init(){
        this._super(...arguments);
        console.log('...');
        let newStyle = document.createElement('style');
        document.head.appendChild(newStyle);

        let newStyleSheet = newStyle.sheet;
        newStyleSheet.insertRule("@keyframes getsmaller{from {width: 100%;}to {width: 0%;}}" , newStyleSheet.cssRules.length);


        let ms = this.get('ms');
        console.log(`ms:${ms}`);
        newStyleSheet.insertRule(".reducer {height: 5px;bottom: 0px;left: 0px;border-radius: inherit; width:0%;               animation-duration: "+ ms +"s;               animation-name: getsmaller;               animation-timing-function: linear;             background-color: rgb(6, 216, 1);}" , newStyleSheet.cssRules.length);
    }
});
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule