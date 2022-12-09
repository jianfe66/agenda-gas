const HOJA = SpreadsheetApp.openById('1DyTlqwVCeKIpSlT2d75F3yHXuMjVRCTcBrBHP3b-LqM').getActiveSheet();

function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellidos,correo,telf)
{
    HOJA.appendRow([nombre, apellidos,correo,telf]);
}

function borrarContacto(numFila)
{
    HOJA.deleteRow(numFila);
}
