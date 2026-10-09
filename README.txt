Hissab Nama — Windows / Android بنانے کا طریقہ
=============================================
اس فولڈر میں:
  index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png   <- ویب ایپ (PWA)
  main.js, package.json                                                  <- Windows (.exe) کے لیے
  android/                                                               <- Android (.apk) کے لیے

راستہ 1 (سب سے آسان، تجویز کردہ): اپنی ڈومین پر رکھ کر انسٹال
---------------------------------------------------------------
1) ویب ایپ کی پانچوں فائلیں (index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png)
   اپنی ڈومین (مثلاً https://app.naqvi.store/) پر ایک ہی فولڈر میں اپ لوڈ کریں۔ HTTPS لازمی ہے۔
2) Android پر Chrome میں وہ لنک کھولیں، Android بٹن دبائیں یا مینو سے "Install app" چنیں۔
3) Windows پر Chrome/Edge میں کھولیں، Windows بٹن دبائیں یا ایڈریس بار کا Install آئیکن دبائیں۔
اس سے ایپ آئیکن کے ساتھ انسٹال ہو جاتی ہے اور الگ ونڈو میں کھلتی ہے۔

راستہ 2: Windows کی اصل .exe فائل
---------------------------------
(Windows کمپیوٹر پر Node.js انسٹال ہونا چاہیے — nodejs.org)
1) اس فولڈر میں Command Prompt کھولیں۔
2) npm install
3) npm start        (پہلے ٹیسٹ کر لیں)
4) npm run build    (dist فولڈر میں Hissab Nama Setup .exe بن جائے گی)
5) وہ .exe اپنی ڈومین/ہوسٹنگ پر اپ لوڈ کریں، اور index.html میں
   const DL={win:'...',android:''}  میں اس کا لنک لکھ دیں۔ پھر Windows بٹن سیدھا فائل ڈاؤن لوڈ کرائے گا۔

راستہ 3: Android کی اصل .apk فائل
---------------------------------
(کمپیوٹر پر Node.js اور Android Studio چاہیے)
1) android فولڈر میں "www" نام کا فولڈر بنائیں اور اس میں index.html, manifest.webmanifest, icon-192.png, icon-512.png کاپی کریں۔
2) android فولڈر میں:  npm install
3) npx cap add android
4) npx cap sync
5) npx cap open android     (Android Studio کھلے گا) -> Build > Build APK(s)
6) بنی ہوئی .apk اپ لوڈ کریں اور DL={android:'...'} میں لنک لکھ دیں۔
نوٹ: APK کے اندر PDF/JPEG کی ڈاؤن لوڈ/شیئر ممکن ہے ٹھیک سے کام نہ کرے؛ اس کے لیے Capacitor کے Filesystem/Share پلگ اِن شامل کرنے پڑیں گے۔ راستہ 1 (Chrome سے انسٹال) میں یہ مسئلہ نہیں۔

ضروری باتیں
-----------
* PDF/JPEG بنانے کی libraries انٹرنیٹ سے لوڈ ہوتی ہیں، اس لیے یہ دونوں بٹن آف لائن نہیں چلیں گے۔
* ڈیٹا ہر ڈیوائس میں الگ رہتا ہے؛ نئی ڈیوائس پر منتقل کرنے کے لیے Backup فائل استعمال کریں۔
