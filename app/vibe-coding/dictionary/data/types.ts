export type TermCategory = 
  | 'vibe-ai'        // هوش مصنوعی و متودولوژی وایب‌کدینگ
  | 'ui-ux'          // طراحی، تجربه و رابط کاربری
  | 'frontend'       // فرانت‌اند مدرن، تیل‌ویند و گوتنبرگ
  | 'wp-core'        // هسته وردپرس، معماری بک‌اند و PHP
  | 'database-api'   // دیتابیس، کوئری‌ها و وب‌سرویس‌های REST
  | 'devops-server'; // سرور، هاست، دیپلوی، CLI و بهینه‌سازی

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type UserPersona = 'beginner' | 'designer' | 'founder' | 'developer';

export type LearningStation = 'station-1' | 'station-2' | 'station-3' | 'station-4';

export interface CodeSnippet {
  language: 'php' | 'javascript' | 'typescript' | 'bash' | 'json' | 'css' | 'html' | 'sql';
  code: string;
  description: string;
  runContext?: string;
}

export interface AiErrorTranslation {
  errorSnippet: string;       // متن ارور انگلیسی متداول در Cursor / لاگ وردپرس
  explanationFa: string;      // ترجمه روان به زبان ساده که قضیه چیه
}

export interface EncyclopediaTerm {
  id: string;                     // شناسه یکتای لاتین برای URL و انکر (مثال: 'transients-api')
  termEn: string;                 // عنوان استاندارد انگلیسی
  termFa: string;                 // عنوان یا ترجمه مصطلح فارسی
  category: TermCategory;         // حوزه تخصصی ۶ گانه
  level: DifficultyLevel;         // سطح سختی مفهوم
  phonetic?: string;              // راهنمای تلفظ انگلیسی با خط فارسی
  tags: string[];                 // برچسب‌های ارتباطی و خوشه‌بندی
  
  // لایه‌های انسانی و استعاری جدید
  analogy: string;                // استعاره دنیای واقعی به زبان عامیانه (به زبان آدمیزاد)
  humanQuestion: string;          // این به چه دردی می‌خوره به زبان کاربر
  realPain: string;               // اگر ندانی چه فاجعه‌ای رخ میده (سناریوی تلخ واقعی)
  readingTimeMinutes: number;     // زمان تخمینی مطالعه (۱ الی ۲ دقیقه)
  sequenceOrder: number;          // شماره ترتیب یادگیری منطقی (۱ تا ۳۶)
  learningStation: LearningStation; // ایستگاه ۴ گانه مسیر آموزشی
  targetPersonas: UserPersona[];  // پرسوناهای مخاطب هدف
  isNoCodeFriendly: boolean;      // آیا برای فرد بدون دانش کدنویسی هم کاربردی است؟
  isCritical5?: boolean;          // آیا جزو ۵ اصطلاح مرگ‌وزندگی است؟
  isLanding24h?: boolean;         // آیا جزو مسیر لندینگ ۲۴ ساعته است؟
  isEcommerceEssential?: boolean; // آیا جزو مسیر فروشگاهی است؟
  commonAiError?: AiErrorTranslation; // ارور رایج هوش مصنوعی و ترجمه روان آن
  freelanceTip?: string;          // فوت کوزه‌گری فریلنسرها در مذاکره با کارفرما

  // لایه‌های محتوایی فنی
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
