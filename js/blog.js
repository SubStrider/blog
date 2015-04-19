$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("xYN5Dh6T0xgGJ2rKYB8r507W0edQyCBeo5Yu78Vw", "LSc93ybWKyVfP9nF3c1pfJe9Tf0R4DQtyCxM4J8L");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});