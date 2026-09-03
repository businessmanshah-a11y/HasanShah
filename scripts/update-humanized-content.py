# scripts/update-humanized-content.py
# -*- coding: utf-8 -*-
import re

# Load current file
file_path = "app/blog/articles/ai-image-to-video-article.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# =========================================================================
# 1. PERSIAN (FA) HUMANIZATION DATA
# =========================================================================
fa_cat_data = {
    "cat-01": {
        "title": "۳. دسته‌بندی ۰۱: رونمایی و جلوه‌های ویژه بصری هالیوودی (Reveal & VFX)",
        "lead": "سه ثانیه اول یک تیزر ویدیویی، سرنوشت فروش و جلب توجه مخاطب را رقم می‌زند. با این فرامین، پرده‌برداری از محصول را به یک رویداد بصری پرتعلیق بدل کنید.",
        "paragraphs": [
            "چه در حال رونمایی از یک ساعت مچی نفیس باشید و چه عطری دست‌ساز یا گجتی هوشمند، پدیده‌های فیزیکی پرتحرک—نظیر شکافتن مه غلیظ والومتریک، انفجار ترکش‌های کریستال، یا جریان روان طلای مذاب بر بدنه محصول—حس ارزش بالا و کیفیت اعلا را بی‌درنگ در ذهن بیننده تثبیت می‌کنند.",
            "برای اجرای این دستورات، تصویر استودیویی بدون پس‌زمینه سوژه را به همراه یکی از کدهای زیر در پرامپت قرار دهید تا موتور ویدیوساز ذرات و فیزیک سیالات را با دقت ۱۲۰ فریم بر ثانیه پردازش کند:"
        ]
    },
    "cat-02": {
        "title": "۴. دسته‌بندی ۰۲: بیلبوردهای سه‌بعدی و تبلیغات محیطی غول‌پیکر شهری (Outdoor 3D)",
        "lead": "تبلیغات خطای دید آنامورفیک در میدان تایمز و توکیو، پربازدیدترین ترندهای وایرال جهان هستند. اکنون می‌توانید سوژه خود را از قاب یک نمایشگر شهری به دنیای واقعی بیرون بکشید.",
        "paragraphs": [
            "برای کمپین‌های آگاهی از برند (Brand Awareness) یا تولید محتوای پربازدید اینستاگرامی، هیچ ابزاری به اندازه شبیه‌سازی یک بیلبورد غول‌پیکر خمیده در هوای بارانی شب کارساز نیست.",
            "با اعمال کدهای زیر، تصویر ثابت محصول درون یک نمایشگر عظیم شهری قرار گرفته و با شبیه‌سازی دقیق زاویه تابش نور خیابان، طوری به جلو گام برمی‌دارد که گویی شیشه ال‌ای‌دی را شکسته و وارد فضای واقعی خیابان شده است:"
        ]
    },
    "cat-03": {
        "title": "۵. دسته‌بندی ۰۳: روایت سینمایی، کادر آنامورفیک و گرید رنگی بلاک‌باسترها (Cinematic)",
        "lead": "تفاوت یک ویدیوی خام هوش مصنوعی با یک شاهکار سینمایی چند میلیون دلاری، در گرید رنگی (Color Grading)، نسبت عریض ۲.۳۹:۱ و نوسان نرم نور در قاب تصویر است.",
        "paragraphs": [
            "کارگردانان برتر سینما ساعت‌ها برای انتخاب نوع لنز و تنظیم گرین فیلم زمان صرف می‌کنند. کدهای این بخش به هوش مصنوعی فرمان می‌دهند تا اعوجاج اپتیکال لنزهای پاناویژن، خطوط نوری آبی‌رنگ کشیده و بافت ارگانیک فیلم‌های ۳۵ میلی‌متری را در تمام ثانیه‌های تیزر بازسازی کند.",
            "با انتخاب هر یک از سبک‌های زیر، اتمسفر دراماتیک و باوقار فیلم‌های شاخص سینما را به تبلیغات برند خود هدیه دهید:"
        ]
    },
    "cat-04": {
        "title": "۶. دسته‌بندی ۰۴: نورپردازی استودیویی، دمای کلوین و شرایط آب‌وهوایی دراماتیک (Lighting & Weather)",
        "lead": "نور، راوی احساسات پنهان بیننده است. بدون نورپردازی حرفه‌ای، حتی لوکس‌ترین محصولات نیز در نگاه خریدار مات، کدر و بی‌ارزش جلوه می‌کنند.",
        "paragraphs": [
            "تنظیم زاویه تابش پرتوهای خورشید در ساعت طلایی (Golden Hour)، انعکاس چراغ‌های نئونی شب بر آسفالت باران‌خورده، یا مه غلیظ استودیویی که کانتورهای محصول را برجسته می‌کند، هویت بصری اثر شما را دگرگون می‌سازد.",
            "کدهای این بخش با دقت میلی‌متری روی طیف دمای رنگ کلوین (از ۲۸۰۰ کلوین گرم پرتوهای غروب تا ۶۵۰۰ کلوین خنک صنعتی) کالیبره شده‌اند:"
        ]
    },
    "cat-05": {
        "title": "۷. دسته‌بندی ۰۵: کینماتیک لنز و حرکات مکانیکی دوربین فیلم‌برداری (Camera Movement)",
        "lead": "تکان‌های لرزان و حرکات تصادفی دوربین، بارزترین نقطه ضعف ویدیوهای آماتور هوش مصنوعی هستند. با این فرامین، لنز را به بازوی رباتیک فوق‌پایدار مجهز کنید.",
        "paragraphs": [
            "هنگامی که به جای جملات شلوغ، از دستور زبان مکانیکی سینما مانند چرخش ۳۶۰ درجه پیرامون سوژه (/OrbitShot)، پرواز نرم پهپاد بر فراز محصول (/DroneReveal) یا زوم سرگیجه‌آور هیچکاکی (/DollyZoom) استفاده می‌کنید، الگوریتم یک محور هندسی پایدار برای دوربین تعریف می‌کند.",
            "این کالیبراسیون حرکتی، خطای محو شدن (Ghosting) لبه‌های محصول را کاملاً از میان برمی‌دارد:"
        ]
    },
    "cat-06": {
        "title": "۸. دسته‌بندی ۰۶: دنیای پرستیژ، برندهای لوکس و لایف‌استایل ثروت (Luxury & Lifestyle)",
        "lead": "کالاهای فاخر با منطق معامله نمی‌شوند؛ بلکه با برانگیختن اشتیاق به کمال، اصالت و حس تعلق به طبقه برگزیده فروخته می‌شوند.",
        "paragraphs": [
            "این مجموعه دستورها به‌طور ویژه برای تیزرهای جواهرات گران‌بها، ساعت‌های کلکسیونی مکانیکی، عطرهای نیش، ویلاهای معماری مدرن و اتومبیل‌های سوپراسپرت تدوین شده‌اند.",
            "تلألو برلیان‌ها زیر نور کانونی، بافت فیبر کربن و انعکاس سنگ‌های مرمر براق، ویدیوهایی می‌آفرینند که وقار و پرستیژ برند شما را در تراز نام‌های افسانه‌ای جهان قرار می‌دهد:"
        ]
    },
    "cat-07": {
        "title": "۹. دسته‌بندی ۰۷: شوکیس تجاری محصول، پایه‌های معلق و پک‌شات استودیویی (Product Commercial)",
        "lead": "پک‌شات متحرک، موتور محرک افزایش فروش لندینگ‌پیج‌ها و وب‌سایت‌های مدرن است. نرخ تبدیل صفحه‌ای با ویدیوی محصول، تا ۲.۸ برابر عکس‌های ثابت ارزیابی می‌شود.",
        "paragraphs": [
            "با این فرامین می‌توانید اجزای محصول را در هوا معلق سازید (Zero-Gravity)، قطعات مکانیکی ساعت یا گجت را در نمای انفجاری (Exploded View) نمایش دهید و با ماکروعکاسی صنعتی، بافت و کیفیت ساخت بدنه را لمس‌پذیر کنید.",
            "هر کدام از این کدهای تجاری، اعتماد آنی خریدار را برای ثبت سفارش برمی‌انگیزند:"
        ]
    },
    "cat-08": {
        "title": "۱۰. دسته‌بندی ۰۸: زیبایی‌شناسی محیط کار کریتورها و اتمسفر تمرکز (Workspace Aesthetic)",
        "lead": "ترند محبوب ورک‌استیشن‌های مینیمال و زیبایی‌شناسی میز کار کریتورها، عمیق‌ترین حس اعتماد و آرامش را برای مخاطبان محصولات دیجیتال رقم می‌زند.",
        "paragraphs": [
            "اگر در حال معرفی ابزارهای نرم‌افزاری، خدمات طراحی وب، آکادمی‌های آموزشی یا دوره‌های وایب‌کدینگ هستید، تصویر کردن یک ستاپ کاری مینیمال با بخار ملایم فنجان اسپرسو، نمایشگر عریض خمیده و نور گرم تسک‌لایت، موثرترین استراتژی تعاملی است.",
            "این دستورها فضایی سرشار از تمرکز، سلیقه و خلاقیت را در تیزر شما به جریان می‌اندازند:"
        ]
    },
    "cat-09": {
        "title": "۱۱. دسته‌بندی ۰۹: ابرشهرهای سایبرپانک و رابط‌های هولوگرافیک آینده (Futuristic & Sci-Fi)",
        "lead": "برای استارتاپ‌های پیشگام در حوزه‌های هوش مصنوعی، فین‌تک، بلاک‌چین و وب۳، زبان بصری باید حاوی پیامی روشن از آینده سال ۲۰۹۹ باشد.",
        "paragraphs": [
            "کدهای این بخش به تیزرهای تبلیغاتی شما هویت آینده‌نگرانه می‌بخشند: لایه‌های رابط کاربری شیشه‌ای هولوگرافیک، آسمان‌خراش‌های نئونی بنفش و فیروزه‌ای در هوای بارانی شب، و اتصالات شبکه‌های عصبی شناور که قدرت پردازش مدرن را به رخ سرمایه‌گذاران و کاربران جهانی می‌کشند.",
            "فرامین زیر اوج نوآوری و تکنولوژی برند شما را به تصویر می‌کشند:"
        ]
    },
    "cat-10": {
        "title": "۱۲. دسته‌بندی ۱۰: قلمروهای فانتزی، پورتال‌های جادویی و مناظر اثیری (Fantasy & Dream)",
        "lead": "گاه برای متمایز شدن، باید قوانین فیزیک دنیای مادی را زیر پا گذاشت و ذهن مخاطب را به سفری رویایی در میان ابرها و جزایر معلق فراخواند.",
        "paragraphs": [
            "دستورات این دسته‌بندی مخصوص کمپین‌های برندسازی مفهومی، تیزرهای هنری و سناریوهای فراتر از زمان طراحی شده‌اند.",
            "پورتال‌های کیهانی چرخان، گیاهان درخشان بیولومینسنت و قلمروهای معلق در آسمان شفق قطبی، صحنه‌هایی چنان مسحورکننده خلق می‌کنند که ماندگاری پیام برند در حافظه بلندمدت بیننده تضمین می‌شود:"
        ]
    }
}

# =========================================================================
# 2. ENGLISH (EN) HUMANIZATION DATA
# =========================================================================
en_cat_data = {
    "cat-01": {
        "title": "3. Category 01: High-Impact Disruption VFX & Product Reveals",
        "lead": "The first three seconds of a social video dictate your customer acquisition cost. When debuting flagship hardware or luxury goods, viewers demand immediate visual payoff.",
        "paragraphs": [
            "Whether unveiling a Swiss automatic chronograph, artisanal perfume, or flagship consumer electronics, employing visceral physical phenomena—such as organic volumetric smoke parting outward, crystalline shattering, or molten gold cascading over metallic bezels—instantly cements high perceived value in the viewer's subconscious.",
            "Combine your isolated high-res subject reference with any of the battle-tested command presets below to render procedural particle physics and fluid simulations at a cinematic 120fps benchmark:"
        ]
    },
    "cat-02": {
        "title": "4. Category 02: Anamorphic 3D Billboards & Urban Takeovers (Outdoor)",
        "lead": "Anamorphic optical illusion displays across Times Square, Tokyo Shinjuku, and Dubai Mall command the highest viral share rates in modern outdoor advertising.",
        "paragraphs": [
            "If your campaign demands bold disruption beyond standard mobile frames, 3D billboard takeovers deliver unmatched scroll-stopping power. By constraining your product reference within a curved LED municipal frame, these presets instruct neural video models to calculate realistic parallax depth.",
            "The result is a mind-bending illusion where the subject appears to physically burst through digital display glass into rain-slicked city streets:"
        ]
    },
    "cat-03": {
        "title": "5. Category 03: Hollywood Cinematic Pacing & Anamorphic Scope",
        "lead": "The chasm between an amateur AI render and an expensive studio commercial lies in color science, 2.39:1 widescreen framing, and subtle optical halation.",
        "paragraphs": [
            "Master cinematographers spend decades mastering lens selection and film chemistry. In modern AI generation, applying dedicated director codes like /Cinematic or /HollywoodShot instructs the diffusion model to inject Panavision blue horizontal flares, tactile 35mm film grain, and deliberate, disciplined visual pacing.",
            "Transform your commercial renders with the exact cinematic aesthetics favored by top Hollywood studios:"
        ]
    },
    "cat-04": {
        "title": "6. Category 04: Volumetric Lighting & Atmospheric Weather Physics",
        "lead": "Light is the emotional conductor of commercial storytelling. A product bathed in flat, uncalibrated illumination looks cheap; illuminated with intention, it becomes coveted.",
        "paragraphs": [
            "From the warm, radiant glow of a 3200K Golden Hour sunset to rain-slicked city streets reflecting moody neon signage, environmental lighting dictates how customers perceive product quality.",
            "These presets calibrate color temperature spectrums (from warm 2800K dusk to crisp 6500K daylight) and procedural volumetric particulate fog with studio-grade optical fidelity:"
        ]
    },
    "cat-05": {
        "title": "7. Category 05: Precision Robotic Kinematics & Camera Rig Moves",
        "lead": "Uncontrolled camera drift and random jitter immediately destroy commercial credibility. Professional DPs rely on programmable Bolt robotic arms for repeatable camera paths.",
        "paragraphs": [
            "By replacing vague textual descriptions with formal cinematic kinematics—such as a continuous 360-degree orbital sweep (/OrbitShot), a smooth crane reveal (/DroneReveal), or Hitchcock's vertigo-inducing contra-zoom (/DollyZoom)—the AI establishes a rigid mathematical axis around your subject.",
            "This mechanical stabilization completely eliminates edge warping, ghosting, and erratic perspective jumps:"
        ]
    },
    "cat-06": {
        "title": "8. Category 06: Haute Couture, Horology & Ultra-Luxury Lifestyle",
        "lead": "Luxury is not sold on utilitarian features; it is acquired through the emotional desire for prestige, heritage, and uncompromising perfection.",
        "paragraphs": [
            "Engineered specifically for fine jewelry, bespoke timepieces, niche perfumery, architectural estates, and exotic hypercars, these commands focus the neural engine on luxury textures.",
            "Reflections gliding across carbon-fiber bodywork, diamond dispersion under focused pinspots, and tactile Italian leather finishes elevate your product into an aspirational cultural icon:"
        ]
    },
    "cat-07": {
        "title": "9. Category 07: Commercial Product Showcase & Zero-G Packshots",
        "lead": "In e-commerce and SaaS landing page design, interactive product motion videos convert at up to 2.8x the rate of static hero photography.",
        "paragraphs": [
            "These commands enable you to levitate products on anti-gravity pedestals, explode complex mechanical components into labeled visual layers (Exploded View), and execute tactile macro sweeps across premium materials.",
            "Simulating the sensory feeling of holding and inspecting the physical product in real life builds instant buyer trust:"
        ]
    },
    "cat-08": {
        "title": "10. Category 08: Minimalist Workspaces & Cozy Creator Lifestyle",
        "lead": "The viral appeal of minimalist creator desks and cozy lo-fi workstations establishes immediate warmth, authority, and creative credibility.",
        "paragraphs": [
            "For tech founders, software developers, design agencies, and vibe coders, showcasing an immaculate desk setup with curling espresso steam, an ultra-wide curved monitor, and warm ambient task lighting is the ultimate social proof.",
            "These prompts cultivate an atmosphere of deep work, intellectual focus, and modern creative lifestyle:"
        ]
    },
    "cat-09": {
        "title": "11. Category 09: Cyberpunk Megacities, Neural Grids & Sci-Fi HUDs",
        "lead": "Pioneering AI startups, Web3 platforms, and deep-tech founders require visual language engineered for the year 2099.",
        "paragraphs": [
            "Infuse your video campaigns with futuristic edge: semi-transparent holographic glass user interfaces, rain-drenched megacity towers pulsing with magenta and cyan neon, and floating neural network data streams.",
            "These commands broadcast institutional technical capability and forward-looking vision to investors and early adopters:"
        ]
    },
    "cat-10": {
        "title": "12. Category 10: Celestial Dreamscapes & Mythical Dimensional Portals",
        "lead": "When a brand narrative demands transcending the physical world, surrealism unlocks profound viewer fascination and unshakeable brand recall.",
        "paragraphs": [
            "Designed for conceptual branding, high-concept fashion films, and mythic storytelling, these presets construct impossible natural wonders.",
            "Swirling celestial rifts, bioluminescent enchanted flora, and gravity-defying archipelagos floating among aurora-lit cloudscapes captivate audiences with unforgettable visual poetry:"
        ]
    }
}

# =========================================================================
# 3. ARABIC (AR) HUMANIZATION DATA (فصحى معاصرة رصينة وبليغة)
# =========================================================================
ar_cat_data = {
    "cat-01": {
        "title": "٣. الفئة الأولى: الكشف والمؤثرات البصرية الخارقة وهندسة لفت الانتباه (Reveal & VFX)",
        "lead": "تحسم الثواني الثلاث الأولى مصير أي حملة إعلانية رقمية. عبر هذه الأوامر الاحترافية، حوّل لحظة إزاحة الستار عن منتجك إلى مشهد سينمائي يحبس الأنفاس.",
        "paragraphs": [
            "سواءً كنت تطلق ساعة يد فاخرة، عطراً نيش استثنائياً، أو جهازاً تقنياً متطوراً، فإن توظيف ظواهر بصرية فائقة الواقعية—مثل انقشاع سحب الدخان الحجمي، أو تفجر الكريستال وتطاير شظاياه، أو تدفق الذهب السائل بنعومة فوق الهيكل—يمنح علامتك التجارية هالة من الفخامة والقيمة العالية تأسر بصر العميل على الفور.",
            "للتطبيق، ادمج صورة مرجعية نظيفة لمنتجك مع أحد الأوامر الميدانية أدناه لتوجيه محرك الفيديو نحو محاكاة فيزيائية دقيقة للجسيمات بسرعة ١٢٠ إطاراً في الثانية:"
        ]
    },
    "cat-02": {
        "title": "٤. الفئة الثانية: اللوحات الإعلانية ثلاثية الأبعاد وشاشات الشوارع العملاقة (Outdoor 3D)",
        "lead": "تحقق شاشات الخداع البصري ثلاثية الأبعاد في ميدان التايمز، شينجوكو، ودبي مول أعلى معدلات الانتشار الفيروسي في العصر الرقمي. يمكنك الآن إخراج منتجك مجسماً إلى الواقع.",
        "paragraphs": [
            "إذا كنت تخطط لحملة تسويقية تثير ضجة واسعة وتستوقف الجمهور في منصات التواصل، فإن محاكاة شاشة رقمية ضخمة ثلاثية الأبعاد في شارع ممطر ليلاً هي خيارك الأقوى.",
            "تضع هذه الأوامر منتجك داخل إطار شاشة LED منحنية مع انعكاسات إضاءة الشارع الحقيقي، ليتحرك المنتج متجاوزاً حافة الشاشة كأنه اخترق الزجاج ليدخل الفضاء المادي أمام المارة:"
        ]
    },
    "cat-03": {
        "title": "٥. الفئة الثالثة: الأنماط الإخراجية، أبعاد الشاشة واللمسات السينمائية الهوليوودية (Cinematic)",
        "lead": "الفرق الجوهري بين مقطع هاوٍ وإعلان تجاري يُعرض بملايين الدولارات يكمن في التدرج اللوني (Color Grading)، والنسبة العريضة ۲.۳۹:۱، وحبيبات شريط الفيلم ۳۵ ملم.",
        "paragraphs": [
            "يقضي كبار المخرجين سنوات في دراسة تأثير العدسات واستجابة الألوان. في نماذج الذكاء الاصطناعي الحديثة، يتيح لك استخدام أوامر مثل /Cinematic أو /HollywoodShot استدعاء خصائص عدسات البانافيجن، ووهج الضوء الأفقي، وتوزيع الظلال الدرامية التي تميز الأفلام الحائزة على الجوائز العالمية.",
            "ارتقِ بإعلانات منتجاتك عبر اختيار النمط السينمائي الأنسب لهوية علامتك التجارية:"
        ]
    },
    "cat-04": {
        "title": "٦. الفئة الرابعة: الإضاءة السينمائية، درجات كلفن والظروف الجوية الغامرة (Lighting & Weather)",
        "lead": "الإضاءة هي الروح الحقيقية لأي كادر إعلاني؛ فالمنتج المسلط عليه ضوء مسطح باهت يبدو رخيصاً، بينما إضاءة الساعة الذهبية أو قطرات المطر تحوله إلى تحفة مرغوبة.",
        "paragraphs": [
            "سواءً كان هدفك التقاط إشراقة الغروب الدافئة عند حرارة ۳۲۰۰ كلفن، أو الانعكاسات النيونية على الأسفلت الرطب ليلاً، أو الأشعة الحجمية النافذة وسط الضباب، فإن هذه الإعدادات تمنح المشهد عمقاً ساحراً.",
            "تمت معايرة هذه الأوامر وفق مقاييس درجات كلفن الضوئية (من حرارة ٢٨۰۰ كلفن الدافئة إلى برودة الاستوديوهات المعاصرة عند ۶۵۰۰ كلفن):"
        ]
    },
    "cat-05": {
        "title": "٧. الفئة الخامسة: حركات الكاميرا الروبوتية، الدوران المداري والانسيابية الميكانيكية (Camera Movement)",
        "lead": "الاهتزازات العشوائية وحركات الكاميرا اليدوية غير المنضبطة هي العدو الأول لإعلانات الفيديو الذكية. ثبّت عدستك على مسارات روبوتية فائقة الدقة.",
        "paragraphs": [
            "بدلاً من كتابة أوصاف مطولة ومربكة، يتيح لك استخدام مصطلحات الإخراج الميكانيكي—مثل الدوران المداري ۳۶۰ درجة حول المنتج (/OrbitShot)، والتحليق الانسيابي للدرون (/DroneReveal)، وزوم الدوران الدوار الشهير (/DollyZoom)—تحديد محور دوران رياضي ثابت للكاميرا.",
            "يقضي هذا التحديد الحركي تماماً على عيوب تشوه حواف المنتج وتشتت المشاهد:"
        ]
    },
    "cat-06": {
        "title": "٨. الفئة السادسة: الفخامة الملكية، عوالم الأناقة وأسلوب حياة الأثرياء (Luxury & Lifestyle)",
        "lead": "السلع الفاخرة لا تُباع بمجرد سرد المواصفات، بل بمخاطبة مشاعر التميز والتفرد والانتماء لطبقة النخبة.",
        "paragraphs": [
            "صُممت هذه الأوامر خصيصاً لعلامات المجوهرات الراقية، الساعات الميكانيكية السويسرية، العطور النادرة، الفلل المعمارية الشاطئية، والسيارات الرياضية الفارهة.",
            "انعكاسات الضوء على ألياف الكربون، وبريق الأحجار الكريمة، وفخامة الرخام المصقول تمنح إعلانك هيبة استثنائية تليق بأرقى شرائح العملاء:"
        ]
    },
    "cat-07": {
        "title": "٩. الفئة السابعة: العروض التجارية الاحترافية للمنتجات وقواعد العرض العائمة (Product Commercial)",
        "lead": "في المتاجر الإلكترونية وصفحات الهبوط الاحترافية، تحقق مقاطع الفيديو التفاعلية معدلات تحويل للطلبات تفوق الصور الثابتة بنسبة تصل إلى ۲.۸ ضعفاً.",
        "paragraphs": [
            "تمنحك هذه المجموعة القدرة على جعل منتجك يطفو على قواعد حجرية عائمة بدون جاذبية (Zero-Gravity)، وتفكيك المكونات المعقدة في الهواء (Exploded View)، والتقريب المجهري فائق الدقة (Macro) لخامات التصنيع.",
            "يمنح هذا العرض ثلاثي الأبعاد المشتري شعوراً حقيقياً بملمس وجودة المنتج قبل شرائه:"
        ]
    },
    "cat-08": {
        "title": "١٠. الفئة الثامنة: مساحات العمل الهادئة، بخار القهوة وجماليات مكاتب المبدعين (Workspace Aesthetic)",
        "lead": "تحظى جماليات بيئات العمل المينيمال ومكاتب صناع المحتوى بثقة بالغة لدى جمهور الخدمات الرقمية والمشاريع التقنية الحديثة.",
        "paragraphs": [
            "إذا كنت تُسوّق لبرمجيات، تطبيقات سحابية، دورات تدريبية أو خدمات فايب كودينغ، فإن تصوير بيئة عمل مرتبة يتصاعد منها بخار الإسبريسو أمام شاشات عريضة منحنية هو أسرع طريق لكسب ثقة العميل.",
            "تنقل هذه الأوامر إحساساً عميقاً بالتركيز، الإنتاجية، وحسن التنظيم والإتقان:"
        ]
    },
    "cat-09": {
        "title": "١١. الفئة التاسعة: عوالم السايبربانك، المدن النيونية والواجهات الهولوغرافية المستقبلية (Futuristic & Sci-Fi)",
        "lead": "تحتاج الشركات الرائدة في مجالات الذكاء الاصطناعي، الفنتك، وسلاسل الكتل إلى هوية إعلانية بصرية تنبض بروح عام ۲۰۹۹.",
        "paragraphs": [
            "تضفي هذه الأوامر طابعاً مستقبلياً مبهراً على فيديوهاتك: واجهات زجاجية هولوغرافية تفاعلية، وناطحات سحاب مضاءة بالنيون البنفسجي وسط أمطار الليل، وخطوط شبكات عصبية متدفقة بالبيانات.",
            "تعكس هذه المشاهد قوة التطور التقني وجرأة الابتكار أمام المستثمرين والمستخدمين:"
        ]
    },
    "cat-10": {
        "title": "١٢. الفئة العاشرة: العوالم الأسطورية، البوابات السحرية والآفاق الخيالية (Fantasy & Dream)",
        "lead": "حين تتطلب فكرة الإعلان كسر قوانين الواقع المادي وأخذ المشاهد في رحلة خيالية غامرة، تصبح هذه الفئة أداتك السحرية المطلقة.",
        "paragraphs": [
            "صُممت فرامین هذه المجموعة للحملات الإبداعية المفاهيمية ورواية القصص الملهمة التي تتجاوز حدود المألوف.",
            "بوابات كونية متوهجة، جزر سابحة وسط الغيوم، ونباتات ليلية تشع ضوءاً فسفورياً تصنع مشاهد أسطورية تترسخ عميقاً في الذاكرة ولا يمكن تجاوزها:"
        ]
    }
}

# Helper to replace section in content
# We will replace sections in FA, EN, and AR
# Replace for Persian (FA)
for cat_id, data in fa_cat_data.items():
    # Replace in sections where "id": "cat-XX" appears with Persian content
    pattern = re.compile(r'(\"id\":\s*\"' + cat_id + r'\",\s*\n\s*\"title\":\s*\"[^\"]+\",\s*\n\s*\"lead\":\s*\")[^\"]+(\",\s*\n\s*\"paragraphs\":\s*\[)[^\]]+(\])', re.MULTILINE)
    
    # We find the specific occurrence in FA section (first occurrence)
    m = pattern.search(content)
    if m:
        paragraphs_json = ",\n            ".join([f'"{p}"' for p in data["paragraphs"]])
        new_block = f'"id": "{cat_id}",\n          "title": "{data["title"]}",\n          "lead": "{data["lead"]}",\n          "paragraphs": [\n            {paragraphs_json}\n          ]'
        content = content[:m.start()] + new_block + content[m.end():]
        print(f"Updated FA: {cat_id}")

# Replace for English (EN)
for cat_id, data in en_cat_data.items():
    # Find occurrence in EN section (next occurrence)
    pattern = re.compile(r'(\"id\":\s*\"' + cat_id + r'\",\s*\n\s*\"title\":\s*\"[^\"]+\",\s*\n\s*\"lead\":\s*\")[^\"]+(\",\s*\n\s*\"paragraphs\":\s*\[)[^\]]+(\])', re.MULTILINE)
    
    matches = list(pattern.finditer(content))
    # match 0 is FA (already updated or matches english?), let us find match that has English or starts after "en":
    en_pos = content.find('"en": {')
    ar_pos = content.find('"ar": {')
    for m in matches:
        if en_pos < m.start() < ar_pos:
            paragraphs_json = ",\n            ".join([f'"{p}"' for p in data["paragraphs"]])
            new_block = f'"id": "{cat_id}",\n          "title": "{data["title"]}",\n          "lead": "{data["lead"]}",\n          "paragraphs": [\n            {paragraphs_json}\n          ]'
            content = content[:m.start()] + new_block + content[m.end():]
            print(f"Updated EN: {cat_id}")
            break

# Replace for Arabic (AR)
for cat_id, data in ar_cat_data.items():
    ar_pos = content.find('"ar": {')
    pattern = re.compile(r'(\"id\":\s*\"' + cat_id + r'\",\s*\n\s*\"title\":\s*\"[^\"]+\",\s*\n\s*\"lead\":\s*\")[^\"]+(\",\s*\n\s*\"paragraphs\":\s*\[)[^\]]+(\])', re.MULTILINE)
    
    matches = list(pattern.finditer(content))
    for m in matches:
        if m.start() > ar_pos:
            paragraphs_json = ",\n            ".join([f'"{p}"' for p in data["paragraphs"]])
            new_block = f'"id": "{cat_id}",\n          "title": "{data["title"]}",\n          "lead": "{data["lead"]}",\n          "paragraphs": [\n            {paragraphs_json}\n          ]'
            content = content[:m.start()] + new_block + content[m.end():]
            print(f"Updated AR: {cat_id}")
            break

# Update TOCs for FA, EN, AR
# Persian TOC
fa_toc_replacements = [
    ("3. کدهای دسته‌بندی 01: رونمایی و جلوه‌های ویژه بصری (VFX)", "۳. دسته‌بندی ۰۱: رونمایی و جلوه‌های ویژه بصری هالیوودی (Reveal & VFX)"),
    ("4. کدهای دسته‌بندی 02: بیلبورد ۳ بعدی و تبلیغات محیطی (Outdoor)", "۴. دسته‌بندی ۰۲: بیلبوردهای سه‌بعدی و تبلیغات محیطی غول‌پیکر (Outdoor 3D)"),
    ("5. کدهای دسته‌بندی 03: روایت سینمایی و استایل هالیوودی (Cinematic)", "۵. دسته‌بندی ۰۳: روایت سینمایی، کادر آنامورفیک و گرید رنگی (Cinematic)"),
    ("6. کدهای دسته‌بندی 04: نورپردازی استودیویی و اتمسفر آب‌وهوایی (Lighting & Weather)", "۶. دسته‌بندی ۰۴: نورپردازی اتمسفریک، کلوین رنگ و شرایط جوی (Lighting & Weather)"),
    ("7. کدهای دسته‌بندی 05: حرکت‌های مکانیکی و کینماتیک دوربین (Camera Movement)", "۷. دسته‌بندی ۰۵: کینماتیک و حرکات مکانیکی دوربین فیلم‌برداری (Camera Movement)"),
    ("8. کدهای دسته‌بندی 06: سبک زندگی لوکس، پرستیژ و فشن (Luxury & Lifestyle)", "۸. دسته‌بندی ۰۶: دنیای پرستیژ، برندهای لوکس و لایف‌استایل ثروت (Luxury & Lifestyle)"),
    ("9. کدهای دسته‌بندی 07: تیزرهای تجاری محصول و پک‌شات فروشگاهی (Product & Commercial)", "۹. دسته‌بندی ۰۷: شوکیس تجاری محصول، پایه‌های معلق و پک‌شات (Product Commercial)"),
    ("10. کدهای دسته‌بندی 08: محیط‌های کاری مینیمال و زیبایی‌شناسی کریتورها (Workspace Aesthetic)", "۱۰. دسته‌بندی ۰۸: زیبایی‌شناسی محیط کار کریتورها و اتمسفر تمرکز (Workspace Aesthetic)"),
    ("11. کدهای دسته‌بندی 09: جهان‌های سایبرپانک و تکنولوژی آینده (Futuristic & Sci-Fi)", "۱۱. دسته‌بندی ۰۹: ابرشهرهای سایبرپانک و رابط‌های هولوگرافیک (Futuristic & Sci-Fi)"),
    ("12. کدهای دسته‌بندی 10: پورتال‌های ابعادی و قلمروهای فانتزی (Fantasy & Dream)", "۱۲. دسته‌بندی ۱۰: قلمروهای فانتزی، پورتال‌های جادویی و مناظر اثیری (Fantasy & Dream)")
]

for old_t, new_t in fa_toc_replacements:
    content = content.replace(f'"{old_t}"', f'"{new_t}"')

# English TOC
en_toc_replacements = [
    ("3. Category 01: Reveal / VFX", "3. Category 01: High-Impact Disruption VFX & Product Reveals"),
    ("4. Category 02: Billboard / Outdoor Advertising", "4. Category 02: Anamorphic 3D Billboards & Urban Takeovers (Outdoor)"),
    ("5. Category 03: Cinematic", "5. Category 03: Hollywood Cinematic Pacing & Anamorphic Scope"),
    ("6. Category 04: Lighting / Weather", "6. Category 04: Volumetric Lighting & Atmospheric Weather Physics"),
    ("7. Category 05: Camera Movement", "7. Category 05: Precision Robotic Kinematics & Camera Rig Moves"),
    ("8. Category 06: Luxury / Lifestyle", "8. Category 06: Haute Couture, Horology & Ultra-Luxury Lifestyle"),
    ("9. Category 07: Product / Commercial", "9. Category 07: Commercial Product Showcase & Zero-G Packshots"),
    ("10. Category 08: Workspace / Lifestyle Aesthetic", "10. Category 08: Minimalist Workspaces & Cozy Creator Lifestyle"),
    ("11. Category 09: Futuristic / Sci-Fi", "11. Category 09: Cyberpunk Megacities, Neural Grids & Sci-Fi HUDs"),
    ("12. Category 10: Fantasy / Dream", "12. Category 10: Celestial Dreamscapes & Mythical Dimensional Portals")
]

for old_t, new_t in en_toc_replacements:
    content = content.replace(f'"{old_t}"', f'"{new_t}"')

# Arabic TOC
ar_toc_replacements = [
    ("3. أوامر الفئة 01: الكشف والمؤثرات البصرية (VFX)", "٣. الفئة الأولى: الكشف والمؤثرات البصرية الخارقة وهندسة لفت الانتباه (Reveal & VFX)"),
    ("4. أوامر الفئة 02: اللوحات الإعلانية ثلاثية الأبعاد وشاشات الشوارع (Outdoor)", "٤. الفئة الثانية: اللوحات الإعلانية ثلاثية الأبعاد وشاشات الشوارع العملاقة (Outdoor 3D)"),
    ("5. أوامر الفئة 03: الأنماط السينمائية وهوليوود (Cinematic)", "٥. الفئة الثالثة: الأنماط الإخراجية، أبعاد الشاشة واللمسات السينمائية (Cinematic)"),
    ("6. أوامر الفئة 04: الإضاءة السينمائية والظروف الجوية (Lighting & Weather)", "٦. الفئة الرابعة: الإضاءة السينمائية، درجات كلفن والظروف الجوية الغامرة (Lighting & Weather)"),
    ("7. أوامر الفئة 05: حركات الكاميرا السينمائية والميكانيكية (Camera Movement)", "٧. الفئة الخامسة: حركات الكاميرا الروبوتية، الدوران المداري والانسيابية (Camera Movement)"),
    ("8. أوامر الفئة 06: الحياة الفاخرة والأناقة العالمية (Luxury & Lifestyle)", "٨. الفئة السادسة: الفخامة الملكية، عوالم الأناقة وأسلوب حياة الأثرياء (Luxury & Lifestyle)"),
    ("9. أوامر الفئة 07: الإعلانات التجارية للمنتجات وبك شات المتاجر (Product & Commercial)", "٩. الفئة السابعة: العروض التجارية الاحترافية للمنتجات وقواعد العرض العائمة (Product Commercial)"),
    ("10. أوامر الفئة 08: مساحات العمل الهادئة وجماليات صناع المحتوى (Workspace Aesthetic)", "١٠. الفئة الثامنة: مساحات العمل الهادئة، بخار القهوة وجماليات مكاتب المبدعين (Workspace Aesthetic)"),
    ("11. أوامر الفئة 09: العوالم المستقبلية والسايبربانك (Futuristic & Sci-Fi)", "١١. الفئة التاسعة: عوالم السايبربانك، المدن النيونية والواجهات الهولوغرافية (Futuristic & Sci-Fi)"),
    ("12. أوامر الفئة 10: البوابات السحرية والعوالم الخيالية (Fantasy & Dream)", "١٢. الفئة العاشرة: العوالم الأسطورية، البوابات السحرية والآفاق الخيالية (Fantasy & Dream)")
]

for old_t, new_t in ar_toc_replacements:
    content = content.replace(f'"{old_t}"', f'"{new_t}"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("ALL SECTIONS SUCCESSFULLY HUMANIZED AND SAVED!")
