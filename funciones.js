const HOJA = SpreadsheetApp.openById('1Q2dz67BOzarGu4YMYnxXH2Lv1P7XngkYewfPUgc1Dqs').getActiveSheet();

function doGet(datos)
{    
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos)
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

function insertarContacto(nombre, apellidos, correo, telf)
{
    HOJA.appendRow([nombre,apellidos,correo,telf]);
}

function borrarContacto(numFila)
{
    HOJA.deleteRow(numFila);
}