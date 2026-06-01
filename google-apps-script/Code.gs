// Google Apps Script — deploy as Web App (Execute as: Me, Anyone access)
// Replace SHEET_ID, DRIVE_FOLDER_ID, TELEGRAM_TOKEN, TELEGRAM_CHAT_ID

var SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';
var DRIVE_FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID';
var TELEGRAM_TOKEN = 'YOUR_BOT_TOKEN';
var TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  // Save logo to Drive if provided
  var logoUrl = '';
  if (data.logoBase64 && data.logoBase64.startsWith('data:image')) {
    try {
      var match = data.logoBase64.match(/^data:image\/(\w+);base64,(.+)$/);
      var ext = match[1];
      var blob = Utilities.newBlob(Utilities.base64Decode(match[2]), 'image/' + ext, data.name + '-logo.' + ext);
      var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      logoUrl = file.getUrl();
    } catch (err) {
      logoUrl = 'upload-error';
    }
  }

  // Write to Sheet
  var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  sheet.appendRow([
    data.timestamp, data.name, data.contact, data.businessType,
    data.hasSite, data.instaLoss, data.competitor, data.whyNow,
    data.age, data.geo, data.income, data.hasLogo,
    data.color, data.vibe, data.goal, data.firstAction, logoUrl
  ]);

  // Send Telegram message
  var msg = '🔔 لید جدید!\n' +
    '👤 نام: ' + data.name + '\n' +
    '📱 تماس: ' + data.contact + '\n' +
    '🏢 کسب‌وکار: ' + data.businessType + '\n' +
    '🎯 هدف: ' + data.goal + '\n' +
    '🎨 رنگ: ' + data.color + '\n' +
    '💡 اولین اقدام: ' + data.firstAction + '\n' +
    '🖼️ لوگو: ' + (logoUrl || 'ندارد');

  UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg, parse_mode: 'HTML' })
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('OK');
}
