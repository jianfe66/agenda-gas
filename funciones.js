function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1DyTlqwVCeKIpSlT2d75F3yHXuMjVRCTcBrBHP3b-LqM').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}
