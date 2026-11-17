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
  language: 'php' | 'javascript' | 'typescript' | 'bash' | 'json' | 'css' | 'html' | 'sql' | 'yaml';
  code: string;
  description: string;
  runContext?: string;
}

export interface AiErrorTranslation {
  errorSnippet: string;       // متن ارور انگلیسی متداول در Cursor / لاگ وردپرس
  explanationFa: string;      // ترجمه روان به زبان ساده که قضیه چیه
}

export interface HowToTestGuide {
  steps: string[];            // مراحل تست گام‌به‌گام در ۳۰ ثانیه
  expectedResult: string;     // نتیجه مورد انتظار در صورت کارکرد صحیح
  redFlags: string[];         // علائم تقلب یا توهم هوش مصنوعی (پرچم‌های قرمز)
}

export interface EncyclopediaTerm {
  id: string;                     // شناسه یکتای لاتین برای URL و انکر (مثال: 'transients-api')
  termEn: string;                 // عنوان استاندارد انگلیسی
  termFa: string;                 // عنوان یا ترجمه مصطلح فارسی
  category: TermCategory;         // حوزه تخصصی ۶ گانه
  level: DifficultyLevel;         // سطح سختی مفهوم
  phonetic: string;               // راهنمای تلفظ دقیق انگلیسی با خط فارسی
  tags: string[];                 // برچسب‌های ارتباطی و خوشه‌بندی
  
  // لایه‌های انسانی و استعاری و تفهیم سریع
  analogy: string;                // استعاره دنیای واقعی به زبان عامیانه (به زبان آدمیزاد)
  humanQuestion: string;          // این به چه دردی می‌خوره به زبان کاربر
  realPain: string;               // اگر ندانی چه فاجعه‌ای رخ میده (سناریوی تلخ واقعی)
  readingTimeMinutes: number;     // زمان تخمینی مطالعه (۱ الی ۲ دقیقه)
  sequenceOrder: number;          // شماره ترتیب یادگیری منطقی (۱ تا ۳۷)
  learningStation: LearningStation; // ایستگاه ۴ گانه مسیر آموزشی
  targetPersonas: UserPersona[];  // پرسوناهای مخاطب هدف
  isNoCodeFriendly: boolean;      // آیا برای فرد بدون دانش کدنویسی هم کاربردی است؟
  isCritical5?: boolean;          // آیا جزو ۵ اصطلاح مرگ‌وزندگی است؟
  isLanding24h?: boolean;         // آیا جزو مسیر لندینگ ۲۴ ساعته است؟
  isEcommerceEssential?: boolean; // آیا جزو مسیر فروشگاهی است؟
  commonAiError?: AiErrorTranslation; // ارور رایج هوش مصنوعی و ترجمه روان آن
  freelanceTip?: string;          // فوت کوزه‌گری فریلنسرها در مذاکره با کارفرما
  elevatorPitch: string;          // خلاصه طلایی تک‌جمله‌ای برای درک ۱۰ ثانیه‌ای
  beginnerTrap: string;           // تله مرگبار ۹۰ درصد تازه‌کارها
  asciiDiagram?: string;          // مینی‌دیاگرام متنی برای تجسم روند کار

  // لایه‌های پرامپت مهندسی‌شده ۵ لایه‌ای و دیباگ
  goldenPrompt: string;           // پرامپت جامع پیش‌فرض
  cursorPrompt: string;           // پرامپت ۵ لایه‌ای مخصوص Cursor Composer با ارجاعات @file
  claudePrompt: string;           // پرامپت ۵ لایه‌ای مخصوص Claude / Web ChatGPT
  universalPrompt?: string;       // پرامپت ۵ لایه‌ای عمومی سازگار با تمام هوش‌های مصنوعی (Universal)
  agentsMdRule?: string;          // بند اختصاصی و آماده جهت الصاق به فایل AGENTS.md پروژه
  debugPrompt: string;            // پرامپت نجات عیب‌یابی (اگر هوش مصنوعی ارور داد چی بگم؟)
  injectionTarget: string;        // محل دقیق قرارگیری کد (مثال: functions.php یا mu-plugins)
  
  // راستی‌آزمایی و تست
  howToTest: HowToTestGuide;      // راهنمای راستی‌آزمایی در ۳۰ ثانیه

  // لایه‌های محتوایی فنی
  shortDefinition: string;        // تعریف سریع و روشن در ۱ یا ۲ جمله
  deepExplanation: string;        // تحلیل عمیق سازوکار در وردپرس و سناریوهای واقعی
  vibeCodingImpact: string;       // نگاه اختصاصی وایب‌کدینگ: خطاهای رایج AI و عواقب ندانستن
  codeSnippet?: CodeSnippet;      // نمونه کد اعتبارسنجی‌شده یا دستور خط فرمان
  
  // روابط، پیش‌نیازها و سریال
  prerequisiteTermIds?: string[]; // شناسه‌های اصطلاحات پیش‌نیاز برای درک بهتر
  seriesEpisodeUrl?: string;      // لینک مستقیم به قسمت متناظر در سریال فاکتور داداش
  seriesEpisodeLabel?: string;    // عنوان بخش یا تایم‌استمپ ویدیو در سریال
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

// ── تعاریف سامانه گیمیفیکیشن و مأموریت یادگیری (گام دوم) ──

export interface QuizQuestion {
  id: string;
  termId: string;
  scenarioText: string;           // صورت مسئله سناریومحور در پروژه واقعی وردپرس
  codeSnippetPreview?: string;    // پیش‌نمایش کد برای دیباگ یا تشخیص خطا
  options: string[];              // ۴ گزینه پاسخ
  correctIndex: number;           // ایندکس پاسخ صحیح (۰ تا ۳)
  explanation: string;            // تحلیل خطای ادراکی و توضیح چرایی پاسخ درست
  remediationHint: string;        // راهنمایی فوری و تمثیل برای کسی که پاسخ غلط داد
}

export interface GamificationBadge {
  id: string;
  titleFa: string;
  titleEn: string;
  description: string;
  iconName: string;               // Sparkles | Shield | Zap | Crown | Terminal | Palette
  gradientColor: string;
  stageRequired: number;
}

export interface QuestStage {
  stageNumber: number;            // شماره مرحله ۱ تا ۱۲
  titleFa: string;                // عنوان ماجراجویانه مرحله
  subtitle: string;               // توضیح کوتاه ماموریت مرحله
  category: TermCategory;         // حوزه تخصصی
  termIds: string[];              // شناسه‌های اصطلاحات این مرحله
  checkpointQuiz: QuizQuestion[]; // ۲ سوال سناریومحور پایان مرحله
  badgeUnlocked?: GamificationBadge; // مدال پاداش پایان مرحله
}

export interface UserGamificationProfile {
  xp: number;
  level: number;
  rankTitle: string;
  streakDays: number;
  completedTermIds: string[];
  completedStageNumbers: number[];
  unlockedBadgeIds: string[];
  quizAttempts: Record<string, { attempts: number; passed: boolean }>;
}
