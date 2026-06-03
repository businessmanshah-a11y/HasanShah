# HasanShah Project — Claude Instructions

## جستجوی فایل‌ها و کد

وقتی دنبال فایل، تابع، یا مفهوم خاصی هستی، **قبل از هر چیز** از گراف query بگیر:

```bash
graphify query "<سوال>"          # جستجوی broad
graphify query "<سوال>" --dfs    # trace یک مسیر خاص
graphify path "NodeA" "NodeB"   # کوتاه‌ترین مسیر بین دو مفهوم
graphify explain "ComponentName" # توضیح یک node
```

گراف در `graphify-out/graph.json` موجوده. فقط اگر گراف جواب کافی نداد، فایل را مستقیم بخوان.

برای به‌روزرسانی گراف بعد از تغییر فایل‌ها:
```bash
/graphify . --update
```
