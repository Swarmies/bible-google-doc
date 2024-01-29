// Create a custom menu in the active document, with a single menu item.
function setUp() {
  var ui = DocumentApp.getUi();
  var menu = ui.createMenu("Bible Script Menu");
  menu.addItem("Show alert", "showAlert");
  menu.addItem("Show prompt", "showPrompt");
  menu.addItem("Show dialog", "showDialog");

  var subMenu = ui.createMenu("Sub menu");
  subMenu.addItem("Show alert again", "showAlert");
  menu.addSubMenu(subMenu);

  // get the selected text
  var selection = DocumentApp.getActiveDocument().getSelection();
  // get the text elements from the selection
  var textElements = selection.getRangeElements();
  // get the first element
  var textElement = textElements[0];
  console.log(textElement.getElement().asText().getText());

  showAlert(textElement.getElement().asText().getText());

  menu.addToUi();
}

// DocumentApp.getUi().alert("Hello, world!");

// var doc = DocumentApp.getActiveDocument();
// var body = doc.getBody();
// var text = body.editAsText();
// // add test at the end of the document
// text.appendText("test");
// // add test at the beginning of the document
// text.insertText(0, "test\n");
// create a manu for theis application

function showAlert(msg) {
  var ui = DocumentApp.getUi();
  ui.alert(msg, ui.ButtonSet.OK);
}

function showPrompt() {
  var ui = DocumentApp.getUi();
  var result = ui.prompt(
    "This is a prompt",
    "Please input some text:",
    ui.ButtonSet.OK_CANCEL
  );
  if (result.getSelectedButton() == ui.Button.OK) {
    ui.alert("The result is: " + result.getResponseText());
  }
}

function showDialog() {
  var ui = DocumentApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile("Dialog")
    .setWidth(250)
    .setHeight(100);
  ui.showModalDialog(html, "This is a dialog");
}
