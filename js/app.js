/**
 * LexDom - AI Legal Compliance Guard for Startups
 * Main Application Logic
 * 
 * Features:
 * - Multi-account storage & complete email data isolation
 * - Strict 10-file maximum upload limit per account
 * - Dynamic loyalty points tracker (0-100 pts / 10 pts per file)
 * - Sci-Fi juridical login portal with persistent jurisdiction
 * - AI Compliance Guard audit with Risk Score & Critical Loopholes
 * - 'Rewrite Securely' lawyer-grade clause generator
 * - Negotiation Assistant with 3 smart counter-offers
 * - Market Benchmark widget against real-world VC norms
 * - Cross-Border Jurisdiction comparison engine
 * - Fake Pro Upgrade modal with 50% discount waitlist logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // MULTI-ACCOUNT STORAGE & DATA ISOLATION (By Email)
  // =========================================================================
  const ACCOUNTS_DB_KEY = 'lexdom_multi_accounts_v2';
  const ACTIVE_USER_EMAIL_KEY = 'lexdom_current_active_email_v2';

  // Load all accounts from localStorage
  function getAccountsDB() {
    try {
      const data = localStorage.getItem(ACCOUNTS_DB_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed reading accounts DB', e);
    }
    // Pre-seed demo starter account if completely empty
    return {
      'founder@lexstartup.io': {
        user: {
          name: 'Sarah Vance',
          email: 'founder@lexstartup.io',
          jurisdiction: 'egypt',
          courtCategory: 'economic',
          isLoggedIn: true
        },
        uploadedCount: 3, // starter demo usage (3/10 used)
        rewardPoints: 30, // 30 pts
        currentContract: null,
        history: [
          { id: 'h-1', name: 'YC_PostMoney_SAFE_SeriesA.pdf', title: 'Seed Round YC Post-Money SAFE', date: 'Oct 04, 2026', riskScore: 78, law: 'delaware', loopholesCount: 4 },
          { id: 'h-2', name: 'Saudi_Founder_Employment_IP_Pact.docx', title: 'KSA Startup Executive Employment & IP', date: 'Oct 03, 2026', riskScore: 72, law: 'ksa', loopholesCount: 2 },
          { id: 'h-3', name: 'Egypt_Founders_Shareholders_Pact.pdf', title: 'اتفاقية المساهمين وتأسيس شركة ناشئة', date: 'Oct 01, 2026', riskScore: 82, law: 'egypt', loopholesCount: 2 }
        ],
        waitlistJoined: false,
        compareMode: false,
        compareCountryB: 'delaware'
      }
    };
  }

  function saveAccountsDB(db) {
    try {
      localStorage.setItem(ACCOUNTS_DB_KEY, JSON.stringify(db));
    } catch (e) {
      console.error('Failed saving accounts DB', e);
    }
  }

  function getActiveEmail() {
    try {
      return (localStorage.getItem(ACTIVE_USER_EMAIL_KEY) || '').trim().toLowerCase();
    } catch (e) {
      return '';
    }
  }

  function setActiveEmail(email) {
    try {
      if (email) {
        localStorage.setItem(ACTIVE_USER_EMAIL_KEY, email.trim().toLowerCase());
      } else {
        localStorage.removeItem(ACTIVE_USER_EMAIL_KEY);
      }
    } catch (e) {}
  }

  // Create a brand new, completely fresh account (0 files used, 0 points)
  function createNewAccountState(email, name, jurisdiction) {
    const normEmail = email.trim().toLowerCase();
    const normName = (name && name.trim()) ? name.trim() : normEmail.split('@')[0];
    return {
      user: {
        name: normName,
        email: normEmail,
        jurisdiction: jurisdiction || 'egypt',
        courtCategory: 'economic',
        isLoggedIn: true
      },
      uploadedCount: 0, // Starts at 0! All 10 free scans available!
      rewardPoints: 0,  // Earns 10 pts per file analyzed
      currentContract: null,
      history: [],      // Completely fresh audit history
      waitlistJoined: false,
      compareMode: false,
      compareCountryB: 'delaware'
    };
  }

  // Active state reference in memory
  let accountsDB = getAccountsDB();
  let currentActiveEmail = getActiveEmail();
  let appState = null;

  // Initialize active account or default
  if (currentActiveEmail && accountsDB[currentActiveEmail]) {
    appState = accountsDB[currentActiveEmail];
  } else {
    // If no active user, default to demo account or prepare for login
    currentActiveEmail = 'founder@lexstartup.io';
    if (!accountsDB[currentActiveEmail]) {
      accountsDB[currentActiveEmail] = createNewAccountState(currentActiveEmail, 'Sarah Vance', 'egypt');
      accountsDB[currentActiveEmail].uploadedCount = 3;
      accountsDB[currentActiveEmail].rewardPoints = 30;
      saveAccountsDB(accountsDB);
    }
    appState = accountsDB[currentActiveEmail];
  }

  function saveCurrentState() {
    if (!appState || !appState.user || !appState.user.email) return;
    const normEmail = appState.user.email.trim().toLowerCase();
    accountsDB[normEmail] = appState;
    saveAccountsDB(accountsDB);
    setActiveEmail(normEmail);
  }

  // =========================================================================
  // AUDIO SYNTHESIS (Web Audio API - No external audio files needed)
  // =========================================================================
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playLegalChime() {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch(e) {}
  }

  function playWarningChime() {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.setValueAtTime(220, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch(e) {}
  }

  function playSuccessFanfare() {
    try {
      const ctx = getAudioContext();
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.4);
      });
    } catch(e) {}
  }

  // =========================================================================
  // TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message, icon = '🛡️') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="font-size:1.15rem">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4200);
  }

  // =========================================================================
  // DOM ELEMENT REFERENCES
  // =========================================================================
  const loginScreen = document.getElementById('login-screen');
  const loginEmailInput = document.getElementById('login-email-input');
  const loginNameInput = document.getElementById('login-name-input');
  const btnLoginSubmit = document.getElementById('btn-login-submit');
  const loginJurisdictionBtns = document.querySelectorAll('.jurisdiction-btn');
  
  const topbarUserFlag = document.getElementById('topbar-user-flag');
  const topbarUserLaw = document.getElementById('topbar-user-law');
  const topbarPoints = document.getElementById('topbar-points');
  const sidebarUserName = document.getElementById('sidebar-user-name');
  const sidebarUserLaw = document.getElementById('sidebar-user-law');
  const sidebarUserAvatar = document.getElementById('sidebar-user-avatar');
  const sidebarPoints = document.getElementById('sidebar-points');
  const sidebarProgressFill = document.getElementById('sidebar-progress-fill');
  const sidebarUploadCount = document.getElementById('sidebar-upload-count');
  
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  const uploadLawSelect = document.getElementById('upload-governing-law-select');
  const uploadCourtSelect = document.getElementById('upload-court-select');
  const crossBorderToggle = document.getElementById('cross-border-toggle');
  const countryCompareRow = document.getElementById('country-compare-select-row');
  const compareTargetSelect = document.getElementById('compare-target-country-select');
  const jurisdictionNotice = document.getElementById('jurisdiction-notice-text');
  
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('contract-file-input');
  const scanningCard = document.getElementById('scanning-card');
  const scanStepText = document.getElementById('scan-step-text');
  const auditResultsView = document.getElementById('audit-results-view');
  
  const proModal = document.getElementById('pro-upgrade-modal');
  const btnCloseModal = document.getElementById('btn-close-pro-modal');
  const modalEmailInput = document.getElementById('modal-waitlist-email');
  const btnModalSubmit = document.getElementById('btn-submit-waitlist');
  const modalInitialForm = document.getElementById('modal-initial-form');
  const modalSuccessState = document.getElementById('modal-success-state');

  // =========================================================================
  // UPLOAD LIMIT CHECK HELPER
  // =========================================================================
  function canUploadMoreFiles() {
    return appState && appState.uploadedCount < 10;
  }

  // =========================================================================
  // SYNCHRONIZE UI WITH ACTIVE ACCOUNT STATE
  // =========================================================================
  function syncUIWithState() {
    if (!appState || !appState.user) return;

    const curJurisdiction = JURISDICTIONS[appState.user.jurisdiction] || JURISDICTIONS.egypt;
    const isLocked = appState.uploadedCount >= 10;
    
    // Topbar Profile
    if (topbarUserFlag) topbarUserFlag.textContent = curJurisdiction.flag;
    if (topbarUserLaw) topbarUserLaw.textContent = `${curJurisdiction.name} (${appState.user.email})`;
    
    // Sidebar Profile
    if (sidebarUserName) sidebarUserName.textContent = appState.user.name || appState.user.email.split('@')[0];
    if (sidebarUserLaw) sidebarUserLaw.textContent = `${curJurisdiction.flag} ${curJurisdiction.name}`;
    if (sidebarUserAvatar) {
      const initials = (appState.user.name || appState.user.email)
        .split(' ')
        .map(w => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'LD';
      sidebarUserAvatar.textContent = initials;
    }
    
    // Points & Upload Counters
    const pts = appState.rewardPoints;
    const uploads = appState.uploadedCount;
    const remaining = Math.max(0, 10 - uploads);

    if (topbarPoints) topbarPoints.textContent = `${pts} pts`;
    if (sidebarPoints) sidebarPoints.textContent = `${pts} pts`;
    if (sidebarUploadCount) {
      sidebarUploadCount.textContent = isLocked ? `10 / 10 (LIMIT REACHED)` : `${uploads} / 10`;
    }
    
    const pct = Math.min(100, Math.round((pts / 100) * 100));
    if (sidebarProgressFill) {
      sidebarProgressFill.style.width = `${pct}%`;
      sidebarProgressFill.style.background = isLocked 
        ? 'linear-gradient(90deg, #ef4444, #f59e0b)' 
        : 'linear-gradient(90deg, var(--gold-400), #f3e7c4)';
    }

    // Dashboard Hero Counters
    const dashPoints = document.getElementById('dash-points-display');
    const dashUploads = document.getElementById('dash-uploads-display');
    const dashLawDisplay = document.getElementById('dash-active-law-badge');
    if (dashPoints) dashPoints.textContent = `${pts} pts`;
    if (dashUploads) {
      dashUploads.textContent = isLocked ? '10/10 (Locked)' : `${uploads}/10`;
      dashUploads.style.color = isLocked ? '#ef4444' : 'var(--gold-300)';
    }
    if (dashLawDisplay) dashLawDisplay.textContent = `${curJurisdiction.flag} ${curJurisdiction.fullName}`;

    // Milestone Banner for 10 files / 100 points
    const milestoneBanner = document.getElementById('dashboard-milestone-banner');
    if (milestoneBanner) {
      if (isLocked || pts >= 100) {
        milestoneBanner.style.display = 'flex';
      } else {
        milestoneBanner.style.display = 'none';
      }
    }

    // Update Dropzone Visual State (Locked vs Active)
    updateDropzoneLockedState(isLocked, remaining);

    // Sync Dropdowns in Uploader
    if (uploadLawSelect) uploadLawSelect.value = appState.user.jurisdiction;
    updateNoticeText();
  }

  function updateDropzoneLockedState(isLocked, remaining) {
    if (!dropzone) return;

    const dropIcon = dropzone.querySelector('.dropzone-icon');
    const dropTitle = dropzone.querySelector('.dropzone-title');
    const dropSub = dropzone.querySelector('.dropzone-subtitle');
    const browseBtn = document.getElementById('btn-browse-file');

    if (isLocked) {
      dropzone.classList.add('dropzone-locked');
      if (dropIcon) dropIcon.textContent = '🔒';
      if (dropTitle) dropTitle.textContent = 'Upload Limit Reached (10/10 Free Contracts Analyzed)';
      if (dropSub) {
        dropSub.innerHTML = `You have utilized all <strong>10 free audits</strong> for account: <code>${appState.user.email}</code>.<br><span style="color:#b91c1c;">You must upgrade to Pro to analyze additional documents.</span>`;
      }
      if (browseBtn) browseBtn.textContent = '⭐ Upgrade to Pro (50% Off Waitlist)';
    } else {
      dropzone.classList.remove('dropzone-locked');
      if (dropIcon) dropIcon.textContent = '📄';
      if (dropTitle) dropTitle.textContent = 'Drag & Drop Contract PDF Here';
      if (dropSub) {
        dropSub.innerHTML = `Supported: SAFEs, Term Sheets, Shareholder Pacts, Employment & IP Agreements (<strong>${remaining} free scans remaining</strong> for this account)`;
      }
      if (browseBtn) browseBtn.textContent = 'Browse Computer Files';
    }

    // Update Sample Cards Locked State
    document.querySelectorAll('.sample-card').forEach(card => {
      if (isLocked) {
        card.classList.add('sample-card-locked');
        card.setAttribute('title', 'Limit reached (10/10). Upgrade to Pro to analyze more files.');
      } else {
        card.classList.remove('sample-card-locked');
        card.removeAttribute('title');
      }
    });
  }

  function updateNoticeText() {
    if (!jurisdictionNotice || !appState || !appState.user) return;
    const jurA = JURISDICTIONS[uploadLawSelect ? uploadLawSelect.value : appState.user.jurisdiction] || JURISDICTIONS.egypt;
    const courtId = uploadCourtSelect ? uploadCourtSelect.value : 'economic';
    const courtObj = COURT_CATEGORIES.find(c => c.id === courtId) || COURT_CATEGORIES[0];
    
    if (crossBorderToggle && crossBorderToggle.checked) {
      const jurB = JURISDICTIONS[compareTargetSelect ? compareTargetSelect.value : 'delaware'] || JURISDICTIONS.delaware;
      jurisdictionNotice.innerHTML = `<strong>Cross-Border Engine Active:</strong> Benchmarking against primary <strong>${jurA.flag} ${jurA.name}</strong> (${courtObj.nameEn} / ${courtObj.nameAr}) and cross-comparing conflicts of law with <strong>${jurB.flag} ${jurB.name}</strong>.`;
    } else {
      jurisdictionNotice.innerHTML = `<strong>Jurisdiction Calibration Active:</strong> AI Legal Guard calibrated to <strong>${jurA.flag} ${jurA.fullName}</strong> (${courtObj.nameEn} / ${courtObj.nameAr}). All clauses checked for statutory enforceability.`;
    }
  }

  // =========================================================================
  // LOGIN / ONBOARDING PORTAL (Sci-Fi Legal Codex & Account Isolation)
  // =========================================================================
  let selectedLoginJurisdiction = (appState && appState.user) ? appState.user.jurisdiction : 'egypt';

  loginJurisdictionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      loginJurisdictionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedLoginJurisdiction = btn.getAttribute('data-jurisdiction');
      playLegalChime();
    });
  });

  if (btnLoginSubmit) {
    btnLoginSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const rawEmail = (loginEmailInput.value || '').trim();
      if (!rawEmail || !rawEmail.includes('@')) {
        showToast('Please enter a valid email address.', '⚠️');
        if (loginEmailInput) loginEmailInput.focus();
        return;
      }

      const email = rawEmail.toLowerCase();
      const name = (loginNameInput.value || '').trim() || email.split('@')[0];

      // Refresh accounts DB from storage
      accountsDB = getAccountsDB();

      // Check if account already exists or create a completely new isolated user
      let isBrandNewUser = false;
      if (!accountsDB[email]) {
        accountsDB[email] = createNewAccountState(email, name, selectedLoginJurisdiction);
        isBrandNewUser = true;
      } else {
        // Existing user: update name or jurisdiction if selected
        accountsDB[email].user.name = name || accountsDB[email].user.name;
        accountsDB[email].user.jurisdiction = selectedLoginJurisdiction;
        accountsDB[email].user.isLoggedIn = true;
      }

      // Set active user
      appState = accountsDB[email];
      currentActiveEmail = email;
      saveAccountsDB(accountsDB);
      setActiveEmail(email);

      playSuccessFanfare();

      if (isBrandNewUser) {
        showToast(`✨ Brand New Account Initialized for ${email}! 10 Free Contract Scans Available.`, '🎉');
      } else {
        if (appState.uploadedCount >= 10) {
          showToast(`Welcome back, ${appState.user.name}! Notice: You have used 10/10 free scans. Upgrade to Pro required.`, '🔒');
        } else {
          showToast(`Welcome back, ${appState.user.name}! (${10 - appState.uploadedCount} free scans remaining).`, '🛡️');
        }
      }

      // Hide login screen
      if (loginScreen) loginScreen.classList.add('hidden');

      // Clear any prior scan view if brand new
      if (isBrandNewUser) {
        if (auditResultsView) auditResultsView.style.display = 'none';
        if (scanningCard) scanningCard.style.display = 'none';
      } else if (appState.currentContract) {
        renderAuditResults(appState.currentContract);
        if (auditResultsView) auditResultsView.style.display = 'block';
      }

      syncUIWithState();
      renderHistoryTable();
    });
  }

  // Allow switching jurisdiction anytime from topbar
  const btnChangeJur = document.getElementById('btn-change-jurisdiction');
  if (btnChangeJur) {
    btnChangeJur.addEventListener('click', () => {
      if (loginScreen) {
        if (loginEmailInput && appState && appState.user) {
          loginEmailInput.value = appState.user.email;
        }
        if (loginNameInput && appState && appState.user) {
          loginNameInput.value = appState.user.name;
        }
        loginScreen.classList.remove('hidden');
      }
    });
  }

  // Logout button: Completely clear active user session so a new email can be tested
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      logoutUser();
    });
  }

  function logoutUser() {
    setActiveEmail('');
    
    // Clear login input values so user can freely enter any new email
    if (loginEmailInput) {
      loginEmailInput.value = '';
      loginEmailInput.focus();
    }
    if (loginNameInput) loginNameInput.value = '';

    // Hide active audit result
    if (auditResultsView) auditResultsView.style.display = 'none';
    if (scanningCard) scanningCard.style.display = 'none';

    // Show login screen
    if (loginScreen) loginScreen.classList.remove('hidden');
    
    showToast('Logged out. Enter any email to access or create a separate account.', '🔒');
    playLegalChime();
  }

  // =========================================================================
  // NAVIGATION TABS
  // =========================================================================
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute('data-tab');
      if (!targetTab) return;

      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      tabPanes.forEach(pane => {
        if (pane.id === `tab-${targetTab}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });

      // Special Tab Actions
      if (targetTab === 'benchmark') {
        renderBenchmarkTable(appState.currentContract || SAMPLE_CONTRACTS[0]);
      } else if (targetTab === 'compare') {
        renderJurisdictionComparison('delaware_vs_egypt');
      } else if (targetTab === 'history') {
        renderHistoryTable();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Quick Action Buttons
  document.querySelectorAll('[data-goto-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-goto-tab');
      const targetNav = document.querySelector(`.nav-item[data-tab="${tab}"]`);
      if (targetNav) targetNav.click();
    });
  });

  // =========================================================================
  // CROSS-BORDER & UPLOADER CONTROLS
  // =========================================================================
  if (crossBorderToggle) {
    crossBorderToggle.addEventListener('change', () => {
      appState.compareMode = crossBorderToggle.checked;
      if (crossBorderToggle.checked) {
        countryCompareRow.classList.add('visible');
      } else {
        countryCompareRow.classList.remove('visible');
      }
      updateNoticeText();
      saveCurrentState();
    });
  }

  if (uploadLawSelect) {
    uploadLawSelect.addEventListener('change', () => {
      appState.user.jurisdiction = uploadLawSelect.value;
      saveCurrentState();
      syncUIWithState();
    });
  }

  if (uploadCourtSelect) {
    uploadCourtSelect.addEventListener('change', updateNoticeText);
  }

  if (compareTargetSelect) {
    compareTargetSelect.addEventListener('change', () => {
      appState.compareCountryB = compareTargetSelect.value;
      updateNoticeText();
      saveCurrentState();
    });
  }

  // =========================================================================
  // FILE DRAG & DROP AND STRICT 10-FILE LIMIT ENGINE
  // =========================================================================
  if (dropzone) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (canUploadMoreFiles()) {
        dropzone.classList.add('drag-over');
      }
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('drag-over');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('drag-over');

      // STRICT LIMIT GUARD: Block 11th file!
      if (!canUploadMoreFiles()) {
        playWarningChime();
        showToast('🚨 Limit Reached: You have reached the maximum 10 free contract analyses for this account. Upgrade to Pro to continue.', '🔒');
        openProUpgradeModal(true);
        return;
      }

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileUpload(e.dataTransfer.files[0]);
      }
    });

    dropzone.addEventListener('click', (e) => {
      // If limit reached, clicking dropzone opens Pro modal directly
      if (!canUploadMoreFiles()) {
        playWarningChime();
        showToast('🚨 10-File Limit Reached. Upgrade to Pro required.', '🔒');
        openProUpgradeModal(true);
        return;
      }

      if (e.target.tagName !== 'BUTTON' && fileInput) {
        fileInput.click();
      }
    });
  }

  const btnBrowse = document.getElementById('btn-browse-file');
  if (btnBrowse && fileInput) {
    btnBrowse.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!canUploadMoreFiles()) {
        playWarningChime();
        showToast('🚨 10-File Limit Reached. Upgrade to Pro required.', '🔒');
        openProUpgradeModal(true);
        return;
      }
      fileInput.click();
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      if (!canUploadMoreFiles()) {
        playWarningChime();
        showToast('🚨 10-File Limit Reached. Upgrade to Pro required.', '🔒');
        openProUpgradeModal(true);
        fileInput.value = '';
        return;
      }
      if (fileInput.files && fileInput.files.length > 0) {
        handleFileUpload(fileInput.files[0]);
      }
    });
  }

  // 1-Click Sample Contracts (Subject to 10-file limit!)
  document.querySelectorAll('.sample-card').forEach(card => {
    card.addEventListener('click', () => {
      // STRICT LIMIT GUARD: Block sample scan if limit reached!
      if (!canUploadMoreFiles()) {
        playWarningChime();
        showToast('🚨 Free Limit Reached: You have analyzed 10/10 free contracts on this account. Please upgrade to Pro to run further audits.', '🔒');
        openProUpgradeModal(true);
        return;
      }

      const sampleId = card.getAttribute('data-sample-id');
      const contract = SAMPLE_CONTRACTS.find(c => c.id === sampleId) || SAMPLE_CONTRACTS[0];
      
      // Auto-adjust jurisdiction to match sample's primary law
      if (uploadLawSelect && contract.defaultLaw) {
        uploadLawSelect.value = contract.defaultLaw;
        appState.user.jurisdiction = contract.defaultLaw;
      }
      if (uploadCourtSelect && contract.category) {
        uploadCourtSelect.value = contract.category;
      }
      updateNoticeText();

      runAIScanSimulation(contract);
    });
  });

  // Simulate 10 Files Upload (User Requirement)
  const btnSimulate10 = document.getElementById('btn-simulate-10');
  if (btnSimulate10) {
    btnSimulate10.addEventListener('click', () => {
      if (appState.uploadedCount >= 10) {
        showToast('This account has already reached the maximum 10 free scans (10/10). Upgrade to Pro required.', '🔒');
        openProUpgradeModal(true);
        return;
      }

      // Advance upload count to 10 and points to 100
      appState.uploadedCount = 10;
      appState.rewardPoints = 100;

      // Populate history with 10 mock entries if history has fewer
      const sampleNames = [
        'YC_PostMoney_SAFE_SeedRound_SeriesA.pdf',
        'Saudi_Founder_Employment_IP_Pact.docx',
        'Egypt_Founders_Shareholders_Pact.pdf',
        'Family_Business_Founder_Equity_Pact.pdf',
        'Convertible_Promissory_Note_Vesting.pdf',
        'Advisor_Agreement_FAST_Standard.pdf',
        'Software_Licensing_Master_Services_Pact.pdf',
        'Commercial_Lease_Headquarters_Cairo.pdf',
        'Non_Disclosure_Trade_Secret_Pact.docx',
        'Series_A_Term_Sheet_NVCA_Model.pdf'
      ];

      appState.history = sampleNames.map((name, idx) => ({
        id: 'sim-' + idx,
        name: name,
        title: name.replace(/\.[^/.]+$/, "").replace(/_/g, ' '),
        date: `Oct 0${idx + 1}, 2026`,
        riskScore: [78, 72, 82, 68, 65, 59, 74, 80, 55, 78][idx],
        law: ['delaware', 'ksa', 'egypt', 'egypt', 'delaware', 'delaware', 'uae', 'egypt', 'ksa', 'delaware'][idx],
        loopholesCount: [4, 2, 2, 1, 3, 2, 3, 4, 1, 4][idx]
      }));

      saveCurrentState();
      syncUIWithState();
      renderHistoryTable();

      playSuccessFanfare();
      runConfetti();
      showToast('🎉 10 Documents Analyzed! Upload limit reached & 50% Loyalty Discount unlocked!', '🏆');

      // Auto open the Pro modal with discount waitlist
      setTimeout(() => {
        openProUpgradeModal(true);
      }, 700);
    });
  }

  function handleFileUpload(file) {
    // STRICT LIMIT GUARD: Block 11th file!
    if (!canUploadMoreFiles()) {
      playWarningChime();
      showToast('🚨 Limit Reached: You have reached the maximum 10 free contract analyses for this account. Upgrade to Pro to continue.', '🔒');
      openProUpgradeModal(true);
      return;
    }

    const activeLaw = uploadLawSelect ? uploadLawSelect.value : 'egypt';
    const activeCourt = uploadCourtSelect ? uploadCourtSelect.value : 'economic';
    let matchedSample = SAMPLE_CONTRACTS.find(s => s.defaultLaw === activeLaw) || SAMPLE_CONTRACTS[0];
    
    const customContract = {
      id: 'custom-' + Date.now(),
      name: file.name,
      title: `${file.name.replace(/\.[^/.]+$/, "")} (Startup Audit)`,
      category: activeCourt,
      defaultLaw: activeLaw,
      fileSize: `${(file.size / 1024 / 1024).toFixed(1)} MB` || '1.2 MB',
      riskScore: matchedSample.riskScore,
      riskLevel: matchedSample.riskLevel,
      summary: matchedSample.summary,
      loopholes: matchedSample.loopholes,
      marketBenchmarks: matchedSample.marketBenchmarks
    };

    runAIScanSimulation(customContract);
  }

  function runAIScanSimulation(contract) {
    if (!scanningCard || !auditResultsView) return;

    scanningCard.style.display = 'block';
    auditResultsView.style.display = 'none';
    scanningCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

    playLegalChime();

    const scanSteps = [
      `Tokenizing legal clauses & extracting covenants from ${contract.name}...`,
      `Validating against ${JURISDICTIONS[contract.defaultLaw]?.name || 'Governing'} statutes and judicial rulings...`,
      `Evaluating cross-border liabilities, non-compete reasonableness, and statutory caps...`,
      `Benchmarking clause terms against startup venture standards (1,500+ YC and regional deals)...`,
      `Finalizing Risk Score (${contract.riskScore}%) and compiling lawyer-grade rewrites...`
    ];

    let stepIdx = 0;
    scanStepText.textContent = scanSteps[0];

    const stepInterval = setInterval(() => {
      stepIdx++;
      if (stepIdx < scanSteps.length) {
        scanStepText.textContent = scanSteps[stepIdx];
        playLegalChime();
      } else {
        clearInterval(stepInterval);
        finishScan(contract);
      }
    }, 650);
  }

  function finishScan(contract) {
    scanningCard.style.display = 'none';
    auditResultsView.style.display = 'block';

    // Update active user state
    appState.currentContract = contract;
    appState.uploadedCount += 1;
    appState.rewardPoints += 10;
    
    // Add to active user history
    appState.history.unshift({
      id: contract.id,
      name: contract.name,
      title: contract.title,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      riskScore: contract.riskScore,
      law: contract.defaultLaw,
      loopholesCount: contract.loopholes.length
    });

    saveCurrentState();
    syncUIWithState();
    renderHistoryTable();

    // Check if user hit the 10th file milestone
    if (appState.uploadedCount >= 10) {
      playSuccessFanfare();
      runConfetti();
      showToast(`🏆 10th File Analyzed! Maximum free scans reached. 50% Loyalty Discount UNLOCKED!`, '🎉');
      
      // Auto open the Pro waitlist modal after a moment
      setTimeout(() => {
        openProUpgradeModal(true);
      }, 1100);
    } else {
      playSuccessFanfare();
      showToast(`AI Audit Complete. +10 Reward Points earned! (${10 - appState.uploadedCount} free scans remaining)`, '✅');
    }

    // Render results
    renderAuditResults(contract);
  }

  // =========================================================================
  // RENDER AUDIT RESULTS & LOOPHOLES
  // =========================================================================
  function renderAuditResults(contract) {
    const titleEl = document.getElementById('audit-contract-title');
    const jurBadgeEl = document.getElementById('audit-jurisdiction-badge');
    const courtBadgeEl = document.getElementById('audit-court-badge');
    const scoreValEl = document.getElementById('audit-score-num');
    const scoreCircle = document.getElementById('gauge-progress-circle');

    if (titleEl) titleEl.textContent = contract.title;
    if (jurBadgeEl) {
      const j = JURISDICTIONS[contract.defaultLaw] || JURISDICTIONS.egypt;
      jurBadgeEl.innerHTML = `${j.flag} ${j.fullName}`;
    }
    if (courtBadgeEl) {
      const court = COURT_CATEGORIES.find(c => c.id === contract.category) || COURT_CATEGORIES[0];
      courtBadgeEl.innerHTML = `${court.badge} ${court.nameEn}`;
    }

    if (scoreValEl) scoreValEl.textContent = `${contract.riskScore}%`;

    // Dynamic Circular Gauge
    if (scoreCircle) {
      const circumference = 440;
      const offset = circumference - (contract.riskScore / 100) * circumference;
      scoreCircle.style.strokeDashoffset = offset;
      if (contract.riskScore >= 70) {
        scoreCircle.style.stroke = '#ef4444';
      } else if (contract.riskScore >= 50) {
        scoreCircle.style.stroke = '#f59e0b';
      } else {
        scoreCircle.style.stroke = '#10b981';
      }
    }

    // Render Loopholes List
    const loopholesListContainer = document.getElementById('loopholes-list-container');
    if (!loopholesListContainer) return;
    loopholesListContainer.innerHTML = '';

    contract.loopholes.forEach((lh) => {
      const card = document.createElement('div');
      card.className = 'loophole-card';
      card.innerHTML = `
        <div class="loophole-top-bar">
          <div class="loophole-title">
            <span style="color:#dc2626; margin-right:6px;">⚠️</span> ${lh.title}
          </div>
          <div class="loophole-badges">
            <span class="badge-critical">${lh.severity}</span>
            <span class="badge-court-context">${lh.courtContext}</span>
          </div>
        </div>

        <div class="statute-reference">
          <span>📜 Statutory Precedent:</span>
          <strong>${lh.statuteRef}</strong>
          <span style="margin-left:auto; color:#64748b;">[${lh.clauseLocation}]</span>
        </div>

        <div class="raw-clause-box">
          <span class="clause-tag">Flagged Vulnerable Clause:</span>
          <div>"${lh.rawText}"</div>
        </div>

        <div class="why-risky-explanation">
          <span class="icon">🛑</span>
          <div><strong>Why this is dangerous:</strong> ${lh.whyRisky}</div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <button class="btn-rewrite-securely" data-loophole-id="${lh.id}">
            <span>✨ Rewrite Securely</span>
          </button>
          <button class="btn-send-to-negotiation" data-loophole-id="${lh.id}" style="background:none; border:1px solid #cbd5e1; padding:0.45rem 0.85rem; border-radius:6px; font-size:0.78rem; cursor:pointer; color:#334155;">
            <span>🤝 Send to Negotiation Assistant</span>
          </button>
        </div>

        <!-- Hidden Rewrite Solution Drawer -->
        <div class="rewrite-solution-drawer" id="drawer-${lh.id}">
          <div class="rewrite-header">
            <div class="rewrite-title">
              <span>✅</span> LexDom AI Protective Clause Replacement
            </div>
            <span style="font-size:0.75rem; color:#15803d; font-weight:700;">LAWYER-GRADE DRAFT</span>
          </div>
          <div class="secure-clause-text">
            ${lh.secureRewrite}
          </div>
          <div class="legal-rationale-note">
            <strong>Protective Rationale:</strong> ${lh.legalRationale}
          </div>
          <div class="rewrite-actions-row">
            <button class="btn-copy-clause" data-copy-text="${encodeURIComponent(lh.secureRewrite)}">
              <span>📋</span> Copy Secure Clause
            </button>
            <button class="btn-apply-clause" data-loophole-id="${lh.id}" style="background:#1e293b; color:#fff; border:none; padding:0.5rem 1rem; border-radius:6px; font-size:0.8rem; font-weight:700; cursor:pointer;">
              <span>🛡️</span> Apply to Document
            </button>
          </div>
        </div>
      `;
      loopholesListContainer.appendChild(card);
    });

    // Wire up 'Rewrite Securely' Buttons
    document.querySelectorAll('.btn-rewrite-securely').forEach(btn => {
      btn.addEventListener('click', () => {
        const lhId = btn.getAttribute('data-loophole-id');
        const drawer = document.getElementById(`drawer-${lhId}`);
        if (drawer) {
          const isOpen = drawer.classList.contains('open');
          drawer.classList.toggle('open');
          btn.innerHTML = isOpen ? '<span>✨ Rewrite Securely</span>' : '<span>▲ Hide Secure Draft</span>';
          playLegalChime();
        }
      });
    });

    // Wire up 'Copy Secure Clause' Buttons
    document.querySelectorAll('.btn-copy-clause').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = decodeURIComponent(btn.getAttribute('data-copy-text'));
        navigator.clipboard.writeText(text).then(() => {
          showToast('Secure clause copied to clipboard!', '📋');
          playLegalChime();
        });
      });
    });

    // Wire up 'Apply to Document'
    document.querySelectorAll('.btn-apply-clause').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.textContent = '✓ Resolved & Protected';
        btn.style.background = '#059669';
        showToast('Clause marked as resolved. Document risk mitigated.', '🛡️');
      });
    });

    // Wire up 'Send to Negotiation'
    document.querySelectorAll('.btn-send-to-negotiation').forEach(btn => {
      btn.addEventListener('click', () => {
        const lhId = btn.getAttribute('data-loophole-id');
        const lh = contract.loopholes.find(l => l.id === lhId);
        if (lh) {
          const goalInput = document.getElementById('negotiation-goal-input');
          const clauseContext = document.getElementById('negotiation-target-clause');
          if (goalInput) goalInput.value = `Protect founder against ${lh.title.toLowerCase()} and set standard market cap.`;
          if (clauseContext) clauseContext.textContent = `Target Clause: ${lh.clauseLocation} - ${lh.title}`;

          const negTabBtn = document.querySelector('.nav-item[data-tab="negotiation"]');
          if (negTabBtn) negTabBtn.click();
          generateNegotiationCounterOffers(lh);
        }
      });
    });
  }

  // =========================================================================
  // NEGOTIATION ASSISTANT TAB
  // =========================================================================
  const btnGenerateOffers = document.getElementById('btn-generate-counter-offers');
  const goalTextarea = document.getElementById('negotiation-goal-input');
  const offersContainer = document.getElementById('counter-offers-container');

  if (btnGenerateOffers) {
    btnGenerateOffers.addEventListener('click', () => {
      const goal = goalTextarea ? goalTextarea.value.trim() : '';
      if (!goal) {
        showToast('Please type your negotiation goal for the clause.', '⚠️');
        return;
      }
      playLegalChime();
      generateNegotiationCounterOffers(null, goal);
    });
  }

  // Preset Chips
  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (goalTextarea) {
        goalTextarea.value = chip.getAttribute('data-preset-goal');
        playLegalChime();
      }
    });
  });

  function generateNegotiationCounterOffers(loopholeObj, customGoal = '') {
    if (!offersContainer) return;

    offersContainer.innerHTML = `
      <div style="text-align:center; padding:2.5rem; background:#fff; border-radius:12px; border:1px solid #e2e8f0;">
        <div class="pulse-dot" style="margin:0 auto 1rem; width:14px; height:14px;"></div>
        <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:#0f172a;">Synthesizing 3 Smart Legal Counter-Offers...</h4>
        <p style="color:#64748b; font-size:0.85rem; margin-top:0.25rem;">Calibrating game-theory leverage & statutory standards</p>
      </div>
    `;

    setTimeout(() => {
      const activeContract = appState.currentContract || SAMPLE_CONTRACTS[0];
      const lh = loopholeObj || activeContract.loopholes[0];

      const offers = [
        {
          tier: 'balanced',
          title: 'Option 1: Balanced Win-Win (Market Median)',
          badge: 'Standard Venture Compromise',
          acceptanceRate: '88% Probability',
          clauseText: `Notwithstanding any provision herein to the contrary, the Company’s liability hereunder shall be strictly limited to the aggregate amounts paid under this Agreement during the twelve (12) month period preceding any claim. Neither party shall be liable for indirect, punitive, or consequential damages.`,
          strategy: `<strong>Negotiation Talking Point:</strong> "This reflects standard NVCA and YC Series Seed conventions. It protects both parties equally without introducing unlimited exposure that would kill future venture rounds."`
        },
        {
          tier: 'founder',
          title: 'Option 2: Founder-Favorable Shield (Aggressive Leverage)',
          badge: 'High Leverage / Maximum Protection',
          acceptanceRate: '58% Probability',
          clauseText: `The Investor agrees to look solely to the unencumbered cash assets of the Company and expressly waives any claim, remedy, or recourse against the Founders, officers, or key directors in their personal capacity. Any indemnification claims must be submitted within six (6) months of closing or be forever barred.`,
          strategy: `<strong>Negotiation Talking Point:</strong> "As early-stage founders taking below-market salaries, we cannot assume personal financial jeopardy. The corporate shield is an absolute condition of our board participation."`
        },
        {
          tier: 'compromise',
          title: 'Option 3: Milestone-Based Compromise (Strategic Middleground)',
          badge: 'Contingent Safeguard',
          acceptanceRate: '79% Probability',
          clauseText: `Indemnification obligations shall only become effective upon the occurrence of a verified final, unappealable judicial determination of gross negligence. Liability is capped at $50,000 prior to Series A funding, adjusting to 1.0x investment post-funding.`,
          strategy: `<strong>Negotiation Talking Point:</strong> "This ties liability directly to company maturity and institutional funding, ensuring early runway is preserved for product development."`
        }
      ];

      offersContainer.innerHTML = '';
      offers.forEach(off => {
        const card = document.createElement('div');
        card.className = `offer-card tier-${off.tier}`;
        card.innerHTML = `
          <div class="offer-top-row">
            <div class="offer-name">
              <span>⚖️</span> ${off.title}
            </div>
            <div class="acceptance-score-pill">
              Acceptance: ${off.acceptanceRate}
            </div>
          </div>
          <div style="font-size:0.75rem; color:#64748b; margin-bottom:0.6rem; font-weight:600;">
            ${off.badge}
          </div>
          <div class="offer-clause-box">
            "${off.clauseText}"
          </div>
          <div class="offer-strategy-note">
            ${off.strategy}
          </div>
          <button class="btn-copy-offer" data-copy="${encodeURIComponent(off.clauseText)}">
            <span>📋</span> Copy Counter-Offer
          </button>
        `;
        offersContainer.appendChild(card);
      });

      offersContainer.querySelectorAll('.btn-copy-offer').forEach(b => {
        b.addEventListener('click', () => {
          const t = decodeURIComponent(b.getAttribute('data-copy'));
          navigator.clipboard.writeText(t).then(() => {
            showToast('Counter-offer clause copied to clipboard!', '🤝');
            playLegalChime();
          });
        });
      });

      playSuccessFanfare();
      showToast('3 Smart Counter-Offers Generated.', '🎯');
    }, 600);
  }

  // =========================================================================
  // MARKET BENCHMARK WIDGET
  // =========================================================================
  function renderBenchmarkTable(contract) {
    const tableBody = document.getElementById('benchmark-table-body');
    if (!tableBody) return;

    const b = contract.marketBenchmarks || SAMPLE_CONTRACTS[0].marketBenchmarks;
    if (!b) return;

    const rows = [
      { metric: 'Valuation & SAFE Cap', actual: b.valuationCap.actual, standard: b.valuationCap.standard, rating: b.valuationCap.rating, status: 'warning' },
      { metric: 'Founder Vesting Schedule', actual: b.vestingSchedule.actual, standard: b.vestingSchedule.standard, rating: b.vestingSchedule.rating, status: 'warning' },
      { metric: 'Liquidation Preference', actual: b.liquidationPref.actual, standard: b.liquidationPref.standard, rating: b.liquidationPref.rating, status: b.liquidationPref.rating.includes('Safe') ? 'safe' : 'dangerous' },
      { metric: 'Founder Indemnity Exposure', actual: b.founderIndemnity.actual, standard: b.founderIndemnity.standard, rating: b.founderIndemnity.rating, status: 'dangerous' },
      { metric: 'Non-Compete Duration & Scope', actual: b.nonCompeteDuration.actual, standard: b.nonCompeteDuration.standard, rating: b.nonCompeteDuration.rating, status: 'warning' }
    ];

    tableBody.innerHTML = rows.map(r => `
      <tr>
        <td style="font-weight:700; color:var(--navy-900);">${r.metric}</td>
        <td style="color:#b91c1c; font-weight:600; font-family:monospace;">${r.actual}</td>
        <td style="color:#15803d; font-weight:600; font-family:monospace;">${r.standard}</td>
        <td>
          <span class="benchmark-rating-pill rating-${r.status}">${r.rating}</span>
        </td>
      </tr>
    `).join('');
  }

  // =========================================================================
  // JURISDICTION COMPARISON TAB
  // =========================================================================
  const comparePairSelect = document.getElementById('compare-pair-select');
  if (comparePairSelect) {
    comparePairSelect.addEventListener('change', () => {
      renderJurisdictionComparison(comparePairSelect.value);
    });
  }

  function renderJurisdictionComparison(pairKey) {
    const container = document.getElementById('jurisdiction-compare-results');
    if (!container) return;

    const data = JURISDICTION_COMPARISON_MATRIX[pairKey] || JURISDICTION_COMPARISON_MATRIX['delaware_vs_egypt'];
    
    container.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:var(--font-serif); font-size:1.4rem; color:var(--navy-900); margin-bottom:0.25rem;">${data.title}</h3>
        <p style="color:#64748b; font-size:0.875rem;">Comparative Statutory & Practical Enforcement Matrix for Startup Contracts</p>
      </div>

      <div class="compare-card-grid">
        ${data.points.map(pt => `
          <div class="compare-point-card">
            <div class="compare-point-title">${pt.metric}</div>
            <div class="compare-col">
              <div class="country-label">🏛️ ${data.countryA}</div>
              <div class="text">${pt.countryAStatus}</div>
            </div>
            <div class="compare-col" style="padding-top:0.5rem; border-top:1px dashed #e2e8f0;">
              <div class="country-label">⚖️ ${data.countryB}</div>
              <div class="text">${pt.countryBStatus}</div>
            </div>
            <div class="compare-verdict-box">
              <strong>💡 Founder Shield Recommendation:</strong> ${pt.recommendation}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // =========================================================================
  // AUDIT HISTORY TAB (Isolated per active account)
  // =========================================================================
  function renderHistoryTable() {
    const tbody = document.getElementById('history-table-body');
    if (!tbody) return;

    const items = (appState && appState.history) ? appState.history : [];

    if (items.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding:2.5rem; color:#64748b;">
            <div style="font-size:1.8rem; margin-bottom:0.5rem;">📂</div>
            <strong>No contracts analyzed yet for this account (${appState ? appState.user.email : ''}).</strong>
            <p style="font-size:0.8rem; margin-top:0.25rem;">Drag and drop a contract PDF above to start your compliance audit.</p>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = items.map(item => `
      <tr>
        <td style="font-weight:700; color:var(--navy-900);">
          <span>📄</span> ${item.name}
        </td>
        <td>
          <span style="font-size:0.8rem; background:#f1f5f9; padding:0.25rem 0.6rem; border-radius:9999px;">
            ${JURISDICTIONS[item.law]?.flag || '📜'} ${JURISDICTIONS[item.law]?.name || 'Standard'}
          </span>
        </td>
        <td style="color:#64748b; font-size:0.85rem;">${item.date}</td>
        <td>
          <span style="font-weight:800; color:${item.riskScore > 70 ? '#ef4444' : '#10b981'};">
            ${item.riskScore}%
          </span>
        </td>
        <td>
          <span style="background:#fee2e2; color:#991b1b; padding:0.15rem 0.5rem; border-radius:9999px; font-size:0.75rem; font-weight:700;">
            ${item.loopholesCount} Loopholes
          </span>
        </td>
        <td>
          <button class="btn-history-view" data-contract-id="${item.id}" style="background:none; border:1px solid #cbd5e1; padding:0.35rem 0.75rem; border-radius:6px; font-size:0.78rem; font-weight:600; cursor:pointer;">
            View Audit
          </button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.btn-history-view').forEach(btn => {
      btn.addEventListener('click', () => {
        const docTab = document.querySelector('.nav-item[data-tab="analyzer"]');
        if (docTab) docTab.click();
        const cid = btn.getAttribute('data-contract-id');
        const matched = appState.history.find(h => h.id === cid);
        const sampleToRender = SAMPLE_CONTRACTS.find(s => s.name === matched?.name) || SAMPLE_CONTRACTS[0];
        renderAuditResults(sampleToRender);
        if (auditResultsView) auditResultsView.style.display = 'block';
      });
    });
  }

  // =========================================================================
  // FAKE PRO UPGRADE WAITLIST MODAL
  // =========================================================================
  function openProUpgradeModal(isMilestoneTrigger = false) {
    if (!proModal) return;
    proModal.classList.add('open');
    if (modalInitialForm) modalInitialForm.style.display = 'block';
    if (modalSuccessState) modalSuccessState.style.display = 'none';
    if (modalEmailInput) modalEmailInput.value = appState ? appState.user.email : '';

    const discountSub = document.getElementById('modal-discount-subtext');
    if (discountSub) {
      if (appState && (appState.uploadedCount >= 10 || appState.rewardPoints >= 100 || isMilestoneTrigger)) {
        discountSub.innerHTML = `<strong>🎉 10 Documents Loyalty Milestone Achieved!</strong> You unlocked an exclusive permanent 50% discount.`;
      } else {
        discountSub.innerHTML = `Early Founder Access: Enter your email to reserve your permanent 50% discount.`;
      }
    }

    playLegalChime();
  }

  function closeProUpgradeModal() {
    if (proModal) proModal.classList.remove('open');
  }

  // Upgrade buttons
  document.querySelectorAll('.btn-trigger-pro-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openProUpgradeModal();
    });
  });

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', closeProUpgradeModal);
  }

  if (proModal) {
    proModal.addEventListener('click', (e) => {
      if (e.target === proModal) closeProUpgradeModal();
    });
  }

  if (btnModalSubmit) {
    btnModalSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const email = modalEmailInput.value.trim();
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.', '⚠️');
        return;
      }

      if (appState) {
        appState.waitlistJoined = true;
        saveCurrentState();
      }

      if (modalInitialForm) modalInitialForm.style.display = 'none';
      if (modalSuccessState) modalSuccessState.style.display = 'block';

      playSuccessFanfare();
      showToast('🎉 VIP Waitlist Joined! 50% Discount Code Reserved.', '✨');
      runConfetti();
    });
  }

  // Simple Canvas Confetti function
  function runConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '10002';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#d4af37', '#c5a880', '#0a1c38', '#10b981', '#ffffff'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14 - 3,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.rotation += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 120) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(animate);
  }

  // =========================================================================
  // INITIAL STARTUP & SESSION RECOVERY
  // =========================================================================
  if (currentActiveEmail && accountsDB[currentActiveEmail]) {
    // Session is active
    if (loginScreen) loginScreen.classList.add('hidden');
    syncUIWithState();
  } else {
    // No active session: show login screen
    if (loginScreen) loginScreen.classList.remove('hidden');
    if (loginEmailInput) loginEmailInput.value = '';
    syncUIWithState();
  }

  // Pre-render benchmark & comparison datasets
  renderBenchmarkTable(SAMPLE_CONTRACTS[0]);
  renderJurisdictionComparison('delaware_vs_egypt');
  renderHistoryTable();
});
