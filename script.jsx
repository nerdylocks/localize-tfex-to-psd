var doc = app.activeDocument;

/*******ENTER STRINGS HERE*************/
var to_rename = prompt("Which layer do you want to localize?", "");
var getStrings = prompt("Enter translated strings:", '');
/*******ENTER STRINGS HERE*************/
var langs = eval("(" + getStrings + ")");
var Name = app.activeDocument.name.replace(/\.[^\.]+$/, '');

var textLayer = doc.artLayers.getByName(to_rename);
if(app.documents.length != 0){  
    for (var langKey in langs) {
        var to_dup = textLayer.duplicate();
        to_dup.name += "-" + langKey;
        to_dup.textItem.contents = langs[langKey];
        to_dup.name = to_dup.name.replace(" copy", "");
    }
}
function renameLayer(objectRef) {
    var theRegEx = new RegExp(/(\s*copy\s*\d*)+$/);
    if (theRegEx.test(objectRef.name)) {
        // save state of layer (visible or invisible)
        var layerVisible = objectRef.visible;
        var indexNumber = 0;

        indexnumber = objectRef.name.indexOf("_" + langArr[i]);
        objectRef.name = objectRef.name.substr(0,indexnumber);
        objectRef.visible = layerVisible;
    }
    return 0;
}
