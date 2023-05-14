function importPreset() {
    var file = new File;
    file = file.openDlg("Choose preset XML file", "Acceptable Files: *.xml");
    
    if (file !== null) {
        file.open('r');
        var xmlString = file.read();
        var myXml = new XML(xmlString);
        file.close();
        return myXml;
    } else {
        return -1;
    } 
}

function exportPreset(xmlDoc) {
    var file = new File("preset").saveDlg("Save swatches", "Acceptable Files: *.xml");
    
    if (file !== null) {
        file.open('w');
        file.encoding = "UTF-8";
        file.write(xmlDoc);
        file.close();
        return ("Success!");
    } else {
        return -1;
    }
}


function setForegroundHEX(hex) {
    app.foregroundColor.rgb.hexValue = hex;
}

function getForegroundHEX() {
    var hex = app.foregroundColor.rgb.hexValue;
    return hex;
}
