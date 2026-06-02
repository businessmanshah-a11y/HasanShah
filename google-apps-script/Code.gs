// Google Apps Script — deploy as Web App (Execute as: Me, Anyone access)

var SHEET_ID        = '1g4iY6uzawhTIuZfkQpBPwOF4dw9pLqkWkpTgTyIbV1Y';
var DRIVE_FOLDER_ID = '1cmmwk80uOziGi6Tydj3ojz5yNnNVVJbv';
var TELEGRAM_TOKEN  = '8848364278:AAFHElPLYL-jv8lBFWWXoCtnw6ntxFz8sIw';
var TELEGRAM_CHAT_ID = '6740351282';

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  // Save logo to Drive if provided
  var logoUrl = '';
  if (data.logoBase64 && data.logoBase64.indexOf('data:image') === 0) {
    try {
      var match = data.logoBase64.match(/^data:image\/(\w+);base64,(.+)$/);
      var ext = match[1];
      var blob = Utilities.newBlob(
        Utilities.base64Decode(match[2]),
        'image/' + ext,
        (data.name || 'logo') + '-logo.' + ext
      );
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
    data.timestamp,
    // Step 1
    data.name,
    data.contact,
    data.businessType,
    data.businessDescription,
    data.hasSite,
    data.siteUrl,
    // Step 2
    data.instagramLoss,
    data.competitorIncome,
    data.whyNow,
    // Step 3
    data.ageRange,
    data.audienceLocation,
    data.expectedIncome,
    // Step 4
    data.hasLogo,
    data.logoFileName,
    logoUrl,
    data.color,
    data.vibes,
    data.goal,
    data.firstAction
  ]);

  // Send Telegram message
  var siteInfo = data.siteUrl ? '\n🌐 سایت فعلی: ' + data.siteUrl : '';
  var msg =
    '🔔 لید جدید!\n' +
    '👤 نام: '          + (data.name           || '—') + '\n' +
    '📱 تماس: '         + (data.contact         || '—') + '\n' +
    '🏢 نوع کسب‌وکار: ' + (data.businessType    || '—') + '\n' +
    '📝 توضیح: '        + (data.businessDescription || '—') + '\n' +
    '🌍 سایت دارد؟ '    + (data.hasSite         || '—') + siteInfo + '\n' +
    '━━━━━━━━━━━━━━\n' +
    '📉 وابستگی اینستا: '+ (data.instagramLoss  || '—') + '\n' +
    '🔍 نقش سایت رقبا: '+ (data.competitorIncome|| '—') + '\n' +
    '💭 چرا الان: '      + (data.whyNow          || '—') + '\n' +
    '━━━━━━━━━━━━━━\n' +
    '🎂 رده سنی: '       + (data.ageRange        || '—') + '\n' +
    '📍 موقعیت مشتری: '  + (data.audienceLocation|| '—') + '\n' +
    '💰 انتظار فروش: '   + (data.expectedIncome  || '—') + '\n' +
    '━━━━━━━━━━━━━━\n' +
    '🖼 لوگو: '          + (data.hasLogo         || '—') + (logoUrl ? '\n🔗 فایل لوگو: ' + logoUrl : '') + '\n' +
    '🎨 رنگ: '           + (data.color           || '—') + '\n' +
    '✨ حس و حال: '       + (data.vibes           || '—') + '\n' +
    '🎯 هدف: '           + (data.goal            || '—') + '\n' +
    '💡 اولین اقدام: '   + (data.firstAction     || '—');

  UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg })
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Run once manually to create header row in Sheet
function setupHeaders() {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  sheet.getRange(1, 1, 1, 20).setValues([[
    'زمان', 'نام', 'تماس', 'نوع کسب‌وکار', 'توضیح کسب‌وکار',
    'سایت دارد؟', 'آدرس سایت',
    'وابستگی اینستاگرام', 'نقش سایت رقبا', 'چرا الان',
    'رده سنی', 'موقعیت مشتری', 'انتظار فروش',
    'لوگو', 'نام فایل لوگو', 'لینک لوگو در Drive', 'رنگ برند', 'حس و حال', 'هدف', 'اولین اقدام'
  ]]);
}

function doGet() {
  return ContentService.createTextOutput('OK');
}
