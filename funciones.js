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
    let hoja = SpreadsheetApp.openById('1Q2dz67BOzarGu4YMYnxXH2Lv1P7XngkYewfPUgc1Dqs').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}