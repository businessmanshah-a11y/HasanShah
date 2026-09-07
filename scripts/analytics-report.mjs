#!/usr/bin/env node
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const propertyId = process.env.GA4_PROPERTY_ID || '553080341';
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.resolve(__dirname, '../docs/hasanshah-seo-f2037b4860ad.json');

const client = new BetaAnalyticsDataClient({ keyFilename });

async function getAnalytics() {
  console.log('\n======================================================');
  console.log('   📊 گزارش لحظه‌ای و تحلیلی گوگل آنالیتیکس (GA4)');
  console.log(`   پراپرتی: ${propertyId} | سایت: hasanshah.ir`);
  console.log('======================================================\n');

  try {
    // 1. Realtime Users
    const [realtimeRes] = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: 'activeUsers' }],
    });
    const activeUsers = realtimeRes.rows?.[0]?.metricValues?.[0]?.value || '0';
    console.log(`⚡ کاربران آنلاین در ۳۰ دقیقه گذشته: ${activeUsers} نفر`);

    // 2. Realtime Devices & Events
    const [devicesRes] = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      dimensions: [{ name: 'deviceCategory' }],
      metrics: [{ name: 'activeUsers' }],
    });
    if (devicesRes.rows?.length) {
      const devices = devicesRes.rows.map(r => `${r.dimensionValues[0].value}: ${r.metricValues[0].value}`).join(' | ');
      console.log(`📱 دستگاه‌ها: ${devices}`);
    }

    const [eventsRes] = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      dimensions: [{ name: 'eventName' }],
      metrics: [{ name: 'eventCount' }],
    });
    if (eventsRes.rows?.length) {
      console.log('\n📌 رویدادهای ثبت‌شده اخیر:');
      eventsRes.rows.forEach(r => {
        console.log(`   - ${r.dimensionValues[0].value}: ${r.metricValues[0].value} بار`);
      });
    }

    // 3. Historical Overview (Today & Recent Days)
    const [overviewRes] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
      ],
    });

    console.log('\n------------------------------------------------------');
    console.log('📈 خلاصه عملکرد ۷ روز گذشته:');
    if (overviewRes.rows?.length) {
      const row = overviewRes.rows[0];
      const users = row.metricValues[0].value;
      const sessions = row.metricValues[1].value;
      const pageViews = row.metricValues[2].value;
      const avgDuration = Math.round(Number(row.metricValues[3].value || 0));

      console.log(`   • کل کاربران: ${users}`);
      console.log(`   • نشست‌ها (Sessions): ${sessions}`);
      console.log(`   • بازدید صفحات (Page Views): ${pageViews}`);
      console.log(`   • میانگین زمان حضور در سایت: ${avgDuration} ثانیه`);
    } else {
      console.log('   (داده‌های تجمیعی استاندارد ظرف ۲۴ ساعت آینده در دسترس خواهند بود)');
    }

    // 4. Top Pages
    const [pagesRes] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }],
      limit: 5,
    });

    if (pagesRes.rows?.length) {
      console.log('\n🔥 پربازدیدترین صفحات:');
      pagesRes.rows.forEach((r, idx) => {
        console.log(`   ${idx + 1}. ${r.dimensionValues[0].value} (${r.metricValues[0].value} بازدید)`);
      });
    }

    console.log('\n======================================================\n');
  } catch (error) {
    console.error('❌ خطا در دریافت داده‌های آنالیتیکس:', error.message);
  }
}

getAnalytics();
