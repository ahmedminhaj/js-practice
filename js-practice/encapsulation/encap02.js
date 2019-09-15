let Hedgehog = (function () {
    let privateProps = new WeakMap();
    class Hedgehog {
        constructor(name) {
            this.name = name; 
            privateProps.set(this, { speed: 1000 }); 
        } 
        zoom() {
            console.log(this.name + " zooms with the speed of " + privateProps.get(this).speed + " miles per second");
        }
    }
    return Hedgehog;
})();

let sonic = new Hedgehog('Sonic');
console.log(sonic.zoom());