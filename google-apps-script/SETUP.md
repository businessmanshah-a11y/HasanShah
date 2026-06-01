# Google Apps Script Setup

1. Go to https://script.google.com and create a new project
2. Paste the contents of Code.gs
3. Fill in the variables at the top:
   - SHEET_ID: from your Google Sheet URL (the long ID string)
   - DRIVE_FOLDER_ID: from your Google Drive folder URL
   - TELEGRAM_TOKEN: from @BotFather on Telegram
   - TELEGRAM_CHAT_ID: your personal chat ID (message @userinfobot)
4. Click Deploy → New deployment → Web App
5. Execute as: Me | Who has access: Anyone
6. Copy the Web App URL — you'll need it for submit.js
