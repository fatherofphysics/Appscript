// Duplicate Entry Check in Google Form using appscript

let formID = ""; // add your formID 
let sheetID = ""; // add your sheetID

function myFuction(){

  let ss = SpreadsheetApp.openById(sheetID)
  let sheet = ss.getSheetByName('Form responses 1')
  let form = FormApp.openById(formID)

  let data = [...new Set(sheet.getDataRange().getDisplayValues().map(row=> row[2]))].join('|')
  let item = form.getItems().filter(item=>item.getTitle() == 'Mobile No.')[0].asTextItem()
  let pattern = `(${data})`
  let textval = FormApp.createTextValidation().setHelpText("Mobile No Already exists in database !!").requireTextDoesNotMatchPattern(pattern).build()
  item.setValidation(textval)
}
