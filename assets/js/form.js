let currentStep = 1;
const totalSteps = 4;

// Chip selection (single and multi)
document.querySelectorAll('.options-grid').forEach(grid => {
  const isMulti = grid.hasAttribute('data-multiselect');
  grid.querySelectorAll('.option-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (!isMulti) grid.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.toggle('selected');
    });
  });
});

// Show/hide logo upload
document.querySelectorAll('#f-has-logo .option-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const logoArea = document.getElementById('logo-upload-area');
    logoArea.style.display = chip.dataset.value === 'yes' ? 'block' : 'none';
  });
});

// Logo file preview
function previewLogo(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('logoPreview');
    preview.src = e.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}
window.previewLogo = previewLogo;

// Color picker
function selectColor(swatch) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  swatch.classList.add('selected');
  const color = swatch.dataset.color;
  document.getElementById('f-color').value = color;
  document.getElementById('hexPreview').style.background = color;
}
window.selectColor = selectColor;

function updateHexPreview(val) {
  if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
    document.getElementById('hexPreview').style.background = val;
  }
}
window.updateHexPreview = updateHexPreview;

// Step navigation
function updateProgress(step) {
  const pct = (step / totalSteps) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById('pl-' + i).classList.toggle('active', i === step);
  }
}

function nextStep(from) {
  if (from === 1) {
    const name = document.getElementById('f-name').value.trim();
    const contact = document.getElementById('f-contact').value.trim();
    if (!name || !contact) { alert('لطفاً اسم و شماره تماست رو وارد کن'); return; }
  }
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from + 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
  document.getElementById('form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.nextStep = nextStep;

function prevStep(from) {
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from - 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
}
window.prevStep = prevStep;

// Collect form data
function collectFormData() {
  const getSelected = (id) =>
    [...document.querySelectorAll(`#${id} .option-chip.selected`)].map(c => c.dataset.value).join(', ');

  return {
    name: document.getElementById('f-name').value.trim(),
    contact: document.getElementById('f-contact').value.trim(),
    businessType: getSelected('f-business-type'),
    hasSite: getSelected('f-has-site'),
    instaLoss: getSelected('f-insta-loss'),
    competitor: getSelected('f-competitor'),
    whyNow: getSelected('f-why-now'),
    age: getSelected('f-age'),
    geo: getSelected('f-geo'),
    income: getSelected('f-income'),
    hasLogo: getSelected('f-has-logo'),
    color: document.getElementById('f-color').value || getSelected('colorPalette'),
    vibe: getSelected('f-vibe'),
    goal: getSelected('f-goal'),
    firstAction: document.getElementById('f-first-action').value.trim(),
    logoBase64: document.getElementById('logoPreview').src || '',
    timestamp: new Date().toISOString(),
  };
}
window.collectFormData = collectFormData;
