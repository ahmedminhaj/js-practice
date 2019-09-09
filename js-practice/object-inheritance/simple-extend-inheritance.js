var Person = Class.extend({
  init: function(isDancing){
    this.dancing = isDancing;
  },
  dance: function(){
    return this.dancing;
  }
});
 
var Ninja = Person.extend({
  init: function(){
    this._super( false );
  },
  dance: function(){
    return this._super();
  },
  swingSword: function(){
    return true;
  }
});
 
var p = new Person(true);
console.log(p.dance());
 
var n = new Ninja();
console.log(n.dance());
console.log(n.swingSword()); 