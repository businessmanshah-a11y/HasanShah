var APPS_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';

async function submitForm() {
  const btn = document.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'در حال ارسال...';

  const data = collectFormData();

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    // no-cors means we can't read the response — assume success
    document.getElementById('step-4').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
    gsap.fromTo('#form-success', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });

  } catch (err) {
    btn.disabled = false;
    btn.textContent = 'ثبت و دریافت رایگان ✦';
    alert('خطا در ارسال — لطفاً دوباره امتحان کن یا مستقیم تماس بگیر: +989120870095');
  }
}
window.submitForm = submitForm;
