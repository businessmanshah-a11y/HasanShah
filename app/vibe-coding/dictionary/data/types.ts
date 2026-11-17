export type TermCategory = 
  | 'vibe-ai'        // هوش مصنوعی و متودولوژی وایب‌کدینگ
  | 'ui-ux'          // طراحی، تجربه و رابط کاربری
  | 'frontend'       // فرانت‌اند مدرن، تیل‌ویند و گوتنبرگ
  | 'wp-core'        // هسته وردپرس، معماری بک‌اند و PHP
  | 'database-api'   // دیتابیس، کوئری‌ها و وب‌سرویس‌های REST
  | 'devops-server'; // سرور، هاست، دیپلوی، CLI و بهینه‌سازی

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface CodeSnippet {
  language: 'php' | 'javascript' | 'typescript' | 'bash' | 'json' | 'css' | 'html' | 'sql';
  code: string;
  description: string;
  runContext?: string; // مثلاً functions.php، wp-config.php، ترمینال سرور، block.json
}

export interface EncyclopediaTerm {
  id: string;                     // شناسه یکتای لاتین برای URL و انکر (مثال: 'transients-api')
  termEn: string;                 // عنوان استاندارد انگلیسی (مثال: 'Transients API')
  termFa: string;                 // عنوان یا ترجمه مصطلح فارسی (مثال: 'کش موقت دیتابیس / ترنزینت')
  category: TermCategory;         // حوزه تخصصی ۶ گانه
  level: DifficultyLevel;         // سطح سختی مفهوم
  phonetic?: string;              // راهنمای تلفظ انگلیسی با خط فارسی
  tags: string[];                 // برچسب‌های ارتباطی و خوشه‌بندی
  
  // لایه‌های محتوایی ۴ گانه
  shortDefinition: string;        // تعریف سریع و روشن در ۱ یا ۲ جمله
  deepExplanation: string;        // تحلیل عمیق سازوکار در وردپرس و سناریوهای واقعی
  vibeCodingImpact: string;       // نگاه اختصاصی وایب‌کدینگ: خطاهای رایج AI و عواقب ندانستن
  goldenPrompt: string;           // پرامپت مهندسی‌شده و آماده کپی برای Cursor یا Claude
  codeSnippet?: CodeSnippet;      // نمونه کد اعتبارسنجی‌شده یا دستور خط فرمان
  
  // روابط و سئو
  relatedTermIds: string[];       // شناسه‌های اصطلاحات هم‌خانواده
  seoKeywords: string[];          // واژگان جستجوی داخلی و مترادف‌ها
}

export interface CategoryMeta {
  id: TermCategory;
  titleFa: string;
  titleEn: string;
  description: string;
  iconName: string;
  badgeColor: string;
}
