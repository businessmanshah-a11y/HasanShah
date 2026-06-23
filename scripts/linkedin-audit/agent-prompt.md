# LinkedIn Profile Audit — Agent Instructions

You are a LinkedIn profile audit agent. Your job is to visit Hasan Shahmoradi's
LinkedIn profile pages using the Playwright browser tools available to you,
extract all content, score each section using the rubric below, and write a
comprehensive Markdown report.

## LinkedIn Username

The profile to audit is: **hasanshahmoradi** (verify by navigating to the
profile first — if the URL resolves differently, use whatever username you find).

Base URL: `https://www.linkedin.com/in/hasanshahmoradi/`

---

## Prerequisites Check

Before starting, verify:
1. You have Playwright browser tools available (you should see `browser_navigate`,
   `browser_screenshot`, etc. in your tools list).
2. The browser is already authenticated — navigate to `https://www.linkedin.com`
   and confirm you see the LinkedIn feed (not a login page). If you see a login
   page, stop and tell the user to re-run the cookie converter.

---

## Pages to Visit (in order)

For **each** page below, do all four steps before moving to the next page:
1. Navigate to the URL.
2. Wait 2 seconds for the page to load, then scroll slowly to the bottom to
   trigger lazy-loaded content.
3. Take a full-page screenshot and save it to
   `docs/linkedin-audit/screenshots/<page-name>.png`.
4. Extract ALL visible text content from the page.

### Page 1: Main Profile
URL: `https://www.linkedin.com/in/hasanshahmoradi/`
Screenshot name: `01-main-profile.png`
Look for: profile photo presence, banner image, headline text, about/summary
(click "see more" if present), featured section items, connection count, any
badges (Open to Work, Hiring, etc.).

### Page 2: Experience
URL: `https://www.linkedin.com/in/hasanshahmoradi/details/experience/`
Screenshot name: `02-experience.png`
Look for: all job roles, companies, date ranges, descriptions. Click "Show all"
or "See more" for any truncated descriptions.

### Page 3: Education
URL: `https://www.linkedin.com/in/hasanshahmoradi/details/education/`
Screenshot name: `03-education.png`
Look for: all degrees, institutions, dates, activities/societies.

### Page 4: Skills
URL: `https://www.linkedin.com/in/hasanshahmoradi/details/skills/`
Screenshot name: `04-skills.png`
Look for: all listed skills, endorsement counts per skill, total skill count.

### Page 5: Recommendations
URL: `https://www.linkedin.com/in/hasanshahmoradi/details/recommendations/`
Screenshot name: `05-recommendations.png`
Look for: count received vs given, full text of each received recommendation,
who wrote them and their title.

### Page 6: Recent Activity
URL: `https://www.linkedin.com/in/hasanshahmoradi/recent-activity/all/`
Screenshot name: `06-recent-activity.png`
Look for: date of most recent post, visible post types (text/image/video/
article/poll/repost), estimated posting frequency based on visible timestamps.

---

## Scoring Rubric

Score each section from 1 to 10 using these exact criteria:

### Profile Photo /10
- 1–3: Missing or clearly unprofessional (selfie, group photo, cartoon)
- 4–6: Present but low quality, bad lighting, or not a headshot
- 7–9: Professional headshot, good lighting, clear face, professional attire
- 10: Professional headshot + square crop, face centered, high resolution

### Banner /10
- 1–3: Default LinkedIn gray/blue gradient banner (not customized)
- 4–6: Custom image but no text or branding message
- 7–9: Custom image with a value proposition or branding
- 10: On-brand design, readable text, directly reinforces the headline

### Headline /10
- 1–3: Just a job title ("Web Developer") or empty
- 4–6: Title + company name only
- 7–9: Value statement ("I help X do Y with Z") — specific audience named
- 10: Keyword-rich, specific audience, compelling hook, under 220 characters

### About / Summary /10
- 1–3: Empty or a single generic sentence
- 4–6: Lists skills/services without addressing the reader's pain
- 7–9: Addresses audience pain point, includes a CTA, tells a brief story
- 10: First line hooks immediately, social proof with numbers, clear CTA,
       strategic keywords, under 2000 characters

### Featured Section /10
- 1–3: Empty or not present
- 4–6: Has 1–2 items but no clear strategy
- 7–9: Includes website link, portfolio, or lead magnet
- 10: 3+ strategic items: landing page link, best case study, best post or article

### Experience /10
- 1–3: Only job titles and dates, no descriptions at all
- 4–6: Has descriptions but they are duties-based ("responsible for...")
- 7–9: Result-driven bullets with metrics ("Increased X by Y%"), 2–3 per role
- 10: 3–5 result bullets per role, media/portfolio attached to at least one role,
       strategic keywords in descriptions

### Education /10
- 1–3: Completely empty
- 4–6: Only degree name and institution
- 7–9: Date range, activities/societies added
- 10: Complete with activities + any relevant certifications or courses linked

### Skills /10
- 1–3: Fewer than 10 skills listed
- 4–6: 10–25 skills, mostly generic
- 7–9: 25–50 skills, relevant to niche, multiple endorsements on key skills
- 10: 50 skills (LinkedIn max), top 3 pinned = core expertise, 10+ endorsements
       on primary skills

### Recommendations /10
- 1–3: Zero recommendations received
- 4–5: 1–2 received
- 6–7: 3–5 received from colleagues or clients
- 8–9: 5+ received, at least some from clients, substantial text
- 10: 5+ received, texts mention specific results, and user has given
       recommendations too

### Activity / Posts /10
- 1–3: No posts visible, or last post was 6+ months ago
- 4–5: Irregular posts, no clear topic or strategy
- 6–7: Posts roughly 1–2 times per week
- 8–9: Consistent cadence, variety of formats, visible engagement
- 10: Weekly posting minimum, engages in others' comments, has published
       articles or newsletters

---

## Report to Write

After visiting all 6 pages and scoring all sections, write the complete audit
report to:

`docs/linkedin-audit/linkedin-audit-YYYY-MM-DD.md`

Replace YYYY-MM-DD with today's actual date.

Use this exact format:

```markdown
# LinkedIn Audit — Hasan Shahmoradi
**Audit Date:** YYYY-MM-DD
**Profile URL:** https://www.linkedin.com/in/hasanshahmoradi/

---

## Overall Score: XX/100

| Section | Score | Status |
|---------|------:|--------|
| Profile Photo | X/10 | 🔴 |
| Banner | X/10 | 🟡 |
| Headline | X/10 | 🟢 |
| About / Summary | X/10 | 🔴 |
| Featured Section | X/10 | 🔴 |
| Experience | X/10 | 🟡 |
| Education | X/10 | 🟢 |
| Skills | X/10 | 🟡 |
| Recommendations | X/10 | 🔴 |
| Activity / Posts | X/10 | 🟡 |

> 🔴 = 1–4 (critical) | 🟡 = 5–7 (needs work) | 🟢 = 8–10 (good)

---

## 🔴 P1 — Fix This Week
*(Sections scored 1–4. Direct impact on first impressions.)*

- **[Section name]:** [Specific problem]. Suggested fix: [exact copy or action].

---

## 🟡 P2 — Improve This Month
*(Sections scored 5–7. Will significantly boost profile strength.)*

- **[Section name]:** [What is missing]. Action: [specific steps].

---

## 🟢 P3 — Content to Create
*(New content that will activate the profile and build authority.)*

- **Post idea 1:** [Specific topic based on Hasan's actual experience/niche]
- **Post idea 2:** [Another specific idea]
- **Post idea 3:** [Another specific idea]
- **Article idea:** [Topic relevant to Iranian SMB + web presence niche]
- **Featured item to add:** [Specific recommendation]

---

## Section-by-Section Analysis

### Profile Photo
**Score: X/10**
**What I saw:** [Describe exactly what the photo looks like]
**Why this score:** [Specific reasons based on rubric]
**Exact action:** [Precise instruction to fix or improve]

### Banner
**Score: X/10**
**What I saw:** [Description]
**Why this score:** [Reasons]
**Exact action:** [Fix]

### Headline
**Score: X/10**
**Current headline:** "[paste exact current text]"
**Why this score:** [Reasons]
**Suggested headline:** "[Write a specific better version based on Hasan's actual work]"

### About / Summary
**Score: X/10**
**Current about:** [paste full current text, or "Empty"]
**Why this score:** [Reasons]
**Suggested rewrite:** [Write the actual improved About section]

### Featured Section
**Score: X/10**
**Current items:** [List what is there]
**Why this score:** [Reasons]
**Exact action:** [List exactly what to add/remove]

### Experience
**Score: X/10**
**Current content:** [List all roles found]
**Why this score:** [Reasons]
**Exact action:** [Specific rewrite for at least the most recent role]

### Education
**Score: X/10**
**Current content:** [What is there]
**Why this score:** [Reasons]
**Exact action:** [What to add]

### Skills
**Score: X/10**
**Total skills found:** [number]
**Top skills listed:** [list first 5]
**Why this score:** [Reasons]
**Exact action:** [Which skills to add, which to remove, which to pin as top 3]

### Recommendations
**Score: X/10**
**Received:** [count] | **Given:** [count]
**Summary of received:** [brief summary of what they say]
**Exact action:** [Who to ask for recommendations + suggested message template]

### Activity / Posts
**Score: X/10**
**Last post:** [date or "Not visible"]
**Frequency estimate:** [posts per week/month]
**Post types seen:** [text / image / video / article / repost]
**Exact action:** [Specific posting schedule + first 3 post topics to create now]
```

---

## When Done

Tell the user:
1. The report is saved at `docs/linkedin-audit/linkedin-audit-YYYY-MM-DD.md`
2. Screenshots are in `docs/linkedin-audit/screenshots/`
3. Which P1 items need attention this week
