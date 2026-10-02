/**
 * ============================================================================
 * ASJAD AHMAD // DIGITAL IDENTITY — MATRIX SYSTEM JAVASCRIPT
 * TechnoJam 2026 VibeCoding Challenge [Easy Level]
 * Candidate: Asjad Ahmad (1st-Year BCA, Galgotias University)
 *
 * Modular, clean, beginner-friendly Vanilla JavaScript architecture:
 *   1. Web Audio Synthesizer (Native browser sounds, zero external files)
 *   2. Advanced Matrix Digital Rain Canvas (Multi-speed, leading bright glow)
 *   3. System Boot Sequence & Transitions
 *   4. Developer Humour & Random Quote System
 *   5. Terminal Command Engine (bash-style, history navigation)
 *   6. Simulated Hacking Sequence & Security Protocol
 *   7. Easter Egg Systems (Secret mode +100 AURA & sudo hire asjad)
 *   8. Event Listeners & Lifecycle Setup
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     DATA: Sarcastic, Self-Aware, Harmless Developer Humor (24 Quotes)
     ========================================================================== */
  const DEVELOPER_QUOTES = [
    "One bug fixed. Three new ones spawned.",
    "ERROR 404: Motivation has left the building.",
    "Production is just a place where bugs become features.",
    "Debugging: because apparently the code had other plans.",
    "Everything is under control. The control is questionable.",
    "System stable. Developer questionable.",
    "Compiling confidence...",
    "Current status: pretending I know what I'm doing.",
    "Bro, it's not a bug. It's undocumented behavior.",
    "Works on my machine. The machine has been advised not to talk.",
    "Achievement unlocked: It finally works.",
    "Running on curiosity and questionable decisions.",
    "Future developer under construction.",
    "ERROR: Sleep.exe has stopped responding.",
    "WARNING: Developer confidence exceeds current code stability.",
    "404: Perfect code not found.",
    "There is no cloud, it's just someone else's computer running on hopes and dreams.",
    "git commit -m 'Fixed it for real this time (part 7)'",
    "The code compiles. I am now deeply suspicious.",
    "Keyboard buffer full of wild guesses and caffeine.",
    "Writing code without coffee is like typing in lowercase binary.",
    "Stack Overflow was down for 5 minutes. The tech industry reverted to abacuses.",
    "My semicolon is missing, but my determination is intact.",
    "A SQL query walks into a bar, sees two tables, and asks: 'Can I join you?'"
  ];

  /* ==========================================================================
     SECTION 1: NATIVE WEB AUDIO (ZERO EXTERNAL FILES)
     ========================================================================== */
  let audioContext = null;
  let isSoundEnabled = false;

  function initAudio() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioContext = new AudioCtx();
      }
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  function playCyberTone(frequency, type = 'sine', duration = 0.08, volume = 0.04) {
    if (!isSoundEnabled || !audioContext) return;
    try {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, audioContext.currentTime);

      gain.gain.setValueAtTime(volume, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      osc.stop(audioContext.currentTime + duration);
    } catch (e) {
      // Audio might fail if user hasn't interacted yet, safely ignore
    }
  }

  const CyberAudio = {
    keyClick: () => playCyberTone(780, 'triangle', 0.03, 0.02),
    commandSuccess: () => {
      playCyberTone(587.33, 'sine', 0.06, 0.04);
      setTimeout(() => playCyberTone(880, 'sine', 0.1, 0.04), 70);
    },
    errorTone: () => {
      playCyberTone(220, 'sawtooth', 0.14, 0.05);
      setTimeout(() => playCyberTone(180, 'sawtooth', 0.2, 0.05), 100);
    },
    hackAlert: () => {
      playCyberTone(300, 'square', 0.08, 0.03);
      setTimeout(() => playCyberTone(440, 'square', 0.08, 0.03), 80);
    },
    eggSecret: () => {
      playCyberTone(523.25, 'sine', 0.08, 0.06);
      setTimeout(() => playCyberTone(659.25, 'sine', 0.08, 0.06), 90);
      setTimeout(() => playCyberTone(783.99, 'sine', 0.08, 0.06), 180);
      setTimeout(() => playCyberTone(1046.50, 'triangle', 0.24, 0.08), 270);
    }
  };

  /* ==========================================================================
     SECTION 2: MATRIX DIGITAL RAIN (MULTI-SPEED, LEADING GLOW)
     ========================================================================== */
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');

  // Matrix character palette (Katakana, Latin, Hex, Binary, Symbols)
  const matrixChars = "0101010101ABCDEFXYZアイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユヨラリルレワヲン<>/{}+*#~_";
  const charArray = matrixChars.split("");

  const fontSize = 16;
  let columns = 0;
  let drops = [];
  let dropSpeeds = [];
  let rainBaseColor = "#00ff41";
  let leadingCharColor = "#ffffff";
  let rainIntensityMode = 'boot'; // 'boot', 'normal', 'transition', 'hack', 'secret'

  function resizeMatrixCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);

    drops = [];
    dropSpeeds = [];
    for (let i = 0; i < columns; i++) {
      // Stagger initial Y offset and randomize falling velocity
      drops[i] = Math.floor(Math.random() * -60);
      dropSpeeds[i] = 0.8 + Math.random() * 0.9; // Different column speeds
    }
  }

  function setMatrixIntensity(mode) {
    rainIntensityMode = mode;
    if (mode === 'normal') {
      canvas.style.opacity = '0.55';
      rainBaseColor = "#00ff41";
      leadingCharColor = "#ffffff";
    } else if (mode === 'boot') {
      canvas.style.opacity = '0.82';
      rainBaseColor = "#00ff41";
      leadingCharColor = "#ffffff";
    } else if (mode === 'transition') {
      canvas.style.opacity = '0.95';
      rainBaseColor = "#39ff14";
      leadingCharColor = "#ffffff";
    } else if (mode === 'hack') {
      canvas.style.opacity = '0.85';
      rainBaseColor = "#00ff41";
      leadingCharColor = "#ff3344";
    } else if (mode === 'secret') {
      canvas.style.opacity = '0.90';
      rainBaseColor = "#ffb703"; // Golden rain
      leadingCharColor = "#ffffff";
    }
  }

  let lastFrameTime = 0;
  const fps = 33;
  const fpsInterval = 1000 / fps;

  function renderMatrix(timestamp) {
    requestAnimationFrame(renderMatrix);

    if (!lastFrameTime) lastFrameTime = timestamp;
    const elapsed = timestamp - lastFrameTime;

    if (elapsed > fpsInterval) {
      lastFrameTime = timestamp - (elapsed % fpsInterval);

      // Trailing fade wash
      const washOpacity = rainIntensityMode === 'transition' ? 0.05 : 0.085;
      ctx.fillStyle = `rgba(2, 6, 2, ${washOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px 'Consolas', 'Courier New', monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = Math.floor(drops[i]) * fontSize;

        // Leading character is brighter
        if (Math.random() > 0.4) {
          ctx.fillStyle = leadingCharColor;
        } else {
          ctx.fillStyle = rainBaseColor;
        }

        ctx.fillText(char, x, y);

        // Reset drop to top with randomized delay once it leaves the viewport
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          dropSpeeds[i] = 0.8 + Math.random() * 0.9;
        }

        const speedMultiplier = (rainIntensityMode === 'transition' || rainIntensityMode === 'hack') ? 1.6 : 1.0;
        drops[i] += dropSpeeds[i] * speedMultiplier;
      }
    }
  }

  /* ==========================================================================
     SECTION 3: SYSTEM BOOTLOADER SEQUENCE
     ========================================================================== */
  const bootScreen = document.getElementById('boot-screen');
  const bootLog = document.getElementById('boot-log');
  const bootHeroCard = document.getElementById('boot-hero-card');
  const btnSkipBoot = document.getElementById('btn-skip-boot');
  const btnEnterSystem = document.getElementById('btn-enter-system');
  const mainSystem = document.getElementById('main-system');
  const matrixCurtain = document.getElementById('matrix-curtain');
  const terminalInput = document.getElementById('terminal-input');

  const BOOT_STEPS = [
    { text: "INITIALIZING DIGITAL IDENTITY...", delay: 350, prefix: "[..]" },
    { text: "LOADING USER PROFILE...", delay: 750, prefix: "[OK]" },
    { text: "CONNECTING TO DIGITAL GRID...", delay: 1200, prefix: "[OK]" },
    { text: "CALIBRATING MATRIX INTERFACE...", delay: 1650, prefix: "[OK]" },
    { text: "CHECKING USER STATUS...", delay: 2100, prefix: "[..]" },
    { text: "DECRYPTING PROFILE...", delay: 2500, prefix: "[>>]" },
    { text: "SYSTEM READY.", delay: 2900, prefix: "[##]", ready: true }
  ];

  let bootTimers = [];

  function appendBootLine(msgObj) {
    const line = document.createElement('div');
    line.className = 'boot-line';

    const prefix = document.createElement('span');
    prefix.className = 'boot-line-prefix';
    prefix.textContent = msgObj.prefix;

    const text = document.createElement('span');
    text.className = 'boot-line-text';
    if (msgObj.ready) text.classList.add('ready');
    text.textContent = " " + msgObj.text;

    line.appendChild(prefix);
    line.appendChild(text);
    bootLog.appendChild(line);

    CyberAudio.keyClick();
  }

  function startBootSequence() {
    setMatrixIntensity('boot');

    BOOT_STEPS.forEach((item) => {
      const timer = setTimeout(() => {
        appendBootLine(item);
      }, item.delay);
      bootTimers.push(timer);
    });

    // Reveal boot identity card and Enter button
    const finishTimer = setTimeout(() => {
      bootHeroCard.classList.remove('hidden');
      btnEnterSystem.classList.remove('hidden');
      btnSkipBoot.classList.add('hidden');
      CyberAudio.commandSuccess();
    }, 3200);
    bootTimers.push(finishTimer);
  }

  function enterMainSystem() {
    bootTimers.forEach(t => clearTimeout(t));

    // Fast cinematic Matrix transition curtain
    setMatrixIntensity('transition');
    matrixCurtain.classList.add('active');
    CyberAudio.commandSuccess();

    setTimeout(() => {
      bootScreen.classList.add('fade-out');
      bootScreen.style.display = 'none';
      mainSystem.classList.remove('hidden');
      setMatrixIntensity('normal');
      matrixCurtain.classList.remove('active');

      // Ensure user lands on HOME / main hero section at the top of the page
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      // Initialize terminal welcome silently without focusing or scrolling to it
      initTerminalWelcome();
    }, 650);
  }

  function skipBootSequence() {
    enterMainSystem();
  }

  /* ==========================================================================
     SECTION 4: DEVELOPER HUMOUR & RANDOM QUOTE SYSTEM
     ========================================================================== */
  const quoteText = document.getElementById('quote-text');
  const btnNextQuote = document.getElementById('btn-next-quote');
  let currentQuoteIndex = 0;

  function displayRandomQuote() {
    CyberAudio.keyClick();
    quoteText.classList.add('fade');

    setTimeout(() => {
      let nextIndex = Math.floor(Math.random() * DEVELOPER_QUOTES.length);
      if (nextIndex === currentQuoteIndex) {
        nextIndex = (currentQuoteIndex + 1) % DEVELOPER_QUOTES.length;
      }
      currentQuoteIndex = nextIndex;
      quoteText.textContent = `"${DEVELOPER_QUOTES[currentQuoteIndex]}"`;
      quoteText.classList.remove('fade');
    }, 220);
  }

  /* ==========================================================================
     SECTION 5: TERMINAL ENGINE (BASH-STYLE, HISTORY NAVIGATION)
     ========================================================================== */
  const terminalHistory = document.getElementById('terminal-history');
  const terminalScreen = document.getElementById('terminal-screen');
  const easterEggModal = document.getElementById('easter-egg-modal');

  const commandHistory = [];
  let historyIndex = -1;
  let isHackingActive = false;

  function scrollToBottom() {
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function appendTerminalEntry(cmdText, responseHtml, type = 'normal') {
    const entry = document.createElement('div');
    entry.className = 'terminal-entry';

    if (cmdText !== null) {
      const echo = document.createElement('div');
      echo.className = 'terminal-cmd-echo';
      echo.innerHTML = `<span class="prompt-label">ASJAD@DIGITAL-ID:~$</span> <span class="cmd-text">${escapeHtml(cmdText)}</span>`;
      entry.appendChild(echo);
    }

    if (responseHtml) {
      const resp = document.createElement('div');
      resp.className = `terminal-response ${type}`;
      resp.innerHTML = responseHtml;
      entry.appendChild(resp);
    }

    terminalHistory.appendChild(entry);
    scrollToBottom();
  }

  function initTerminalWelcome() {
    const box = `
┌────────────────────────────────────────────────────────┐
│ ASJAD@DIGITAL-ID:~$                                    │
│                                                        │
│ Digital identity system online. Welcome.               │
│ Type "<strong class="neon-text">help</strong>" or "<strong class="neon-text">whoami</strong>" to inspect system data.         │
└────────────────────────────────────────────────────────┘`.trim();
    appendTerminalEntry(null, `<pre style="font-family: inherit; margin: 0;">${box}</pre>`, 'highlight');
  }

  function executeCommand(rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    const lower = trimmed.toLowerCase();

    if (isHackingActive) {
      appendTerminalEntry(trimmed, "System busy: Security protocol currently active.", "danger");
      return;
    }

    // Easter Egg 02 check
    if (lower === 'sudo hire asjad') {
      handleSudoHireCommand(trimmed);
      return;
    }

    switch (lower) {
      case 'help':
        handleHelpCommand(trimmed);
        break;

      case 'whoami':
        handleWhoamiCommand(trimmed);
        break;

      case 'about':
        handleAboutCommand(trimmed);
        break;

      case 'skills':
        handleSkillsCommand(trimmed);
        break;

      case 'projects':
        handleProjectsCommand(trimmed);
        break;

      case 'status':
        handleStatusCommand(trimmed);
        break;

      case 'joke':
      case 'quote':
        handleJokeCommand(trimmed);
        break;

      case 'date':
      case 'time':
        handleDateCommand(trimmed);
        break;

      case 'hack':
        handleHackCommand(trimmed);
        break;

      case 'clear':
      case 'cls':
        handleClearCommand();
        break;

      // Easter Egg 01 triggers
      case 'secret':
      case 'matrix':
      case 'aura':
      case 'root':
        triggerEasterEgg('terminal');
        break;

      default:
        CyberAudio.errorTone();
        appendTerminalEntry(
          trimmed,
          `bash: command not found: "${escapeHtml(trimmed)}". Type "<span style="color:var(--matrix-green-bright)">help</span>" for available commands.`,
          'danger'
        );
        break;
    }
  }

  function handleHelpCommand(cmd) {
    CyberAudio.commandSuccess();
    const out = `
<strong>AVAILABLE SYSTEM COMMANDS</strong>

<span style="color:var(--matrix-green-bright)">whoami</span>   &rarr; identify current user profile
<span style="color:var(--matrix-green-bright)">about</span>    &rarr; narrative summary & current mission
<span style="color:var(--matrix-green-bright)">skills</span>   &rarr; currently learning skills
<span style="color:var(--matrix-green-bright)">projects</span> &rarr; project log registry
<span style="color:var(--matrix-green-bright)">status</span>   &rarr; live diagnostic parameters
<span style="color:var(--matrix-green-bright)">joke</span>     &rarr; developer humor quote
<span style="color:var(--matrix-green-bright)">date</span>     &rarr; current browser date and time
<span style="color:var(--matrix-green-bright)">hack</span>     &rarr; execute security bypass protocol
<span style="color:var(--matrix-green-bright)">clear</span>    &rarr; clear terminal screen`.trim();
    appendTerminalEntry(cmd, out);
  }

  function handleWhoamiCommand(cmd) {
    CyberAudio.commandSuccess();
    const out = `
&gt; IDENTITY VERIFIED

<strong>NAME:</strong> ASJAD AHMAD
<strong>ROLE:</strong> BCA STUDENT
<strong>UNIVERSITY:</strong> GALGOTIAS UNIVERSITY
<strong>MODE:</strong> LEARNING
<strong>OBJECTIVE:</strong> BUILD + IMPROVE`.trim();
    appendTerminalEntry(cmd, out, 'highlight');
  }

  function handleAboutCommand(cmd) {
    CyberAudio.commandSuccess();
    const out = `
&gt; RETRIEVING PROFILE...

<strong>ASJAD AHMAD // 1ST-YEAR BCA STUDENT</strong>
Galgotias University

"I'm interested in coding, technology, problem solving, and video editing.
I'm currently learning programming and exploring different areas of computer science.
I enjoy experimenting with new ideas, building small projects, and learning through hands-on experience."

<strong>CURRENT MISSION:</strong>
LEARN &rarr; BUILD &rarr; IMPROVE`.trim();
    appendTerminalEntry(cmd, out);
  }

  function handleSkillsCommand(cmd) {
    CyberAudio.commandSuccess();
    const out = `
&gt; CURRENTLY LEARNING

&bull; <strong>C</strong> (Fundamentals & Logic)
&bull; <strong>PYTHON</strong> (Practical Coding)
&bull; <strong>HTML</strong> (Structure)
&bull; <strong>CSS</strong> (Interface Styling)
&bull; <strong>JAVASCRIPT</strong> (Interactivity)
&bull; <strong>GIT / GITHUB</strong> (Version Control)
&bull; <strong>COMPUTER SCIENCE</strong> (Core Concepts & Problem Solving)
&bull; <strong>VIDEO EDITING</strong> (Creative Experiments)

<em>[SKILL STATUS: IN PROGRESS &bull; HONEST LEARNER]</em>`.trim();
    appendTerminalEntry(cmd, out);
  }

  function handleProjectsCommand(cmd) {
    CyberAudio.commandSuccess();
    const out = `
&gt; PROJECT DATABASE ACCESSED

<strong>PROJECT 01 &mdash; ASJAD AHMAD // DIGITAL IDENTITY</strong>
A Matrix-inspired interactive digital identity created for the TechnoJam VibeCoding challenge.
TECH: HTML &bull; CSS &bull; JAVASCRIPT | STATUS: ACTIVE

<strong>PROJECT 02 &mdash; WEB EXPERIMENTS</strong>
Small experiments created while learning frontend concepts, UI interactions and JavaScript.
TECH: HTML &bull; CSS &bull; JAVASCRIPT | STATUS: LEARNING

<strong>PROJECT 03 &mdash; CODING PRACTICE</strong>
Programming exercises and problem-solving practice while building a foundation in computer science.
TECH: C &bull; PYTHON | STATUS: IN PROGRESS

<strong>PROJECT 04 &mdash; CREATIVE WORK</strong>
Video editing and creative digital experiments.
TECH: VIDEO EDITING | STATUS: ONGOING`.trim();
    appendTerminalEntry(cmd, out);
  }

  function handleStatusCommand(cmd) {
    CyberAudio.commandSuccess();
    const out = `
&gt; SYSTEM STATUS

<strong>CORE:</strong> ONLINE ●
<strong>USER:</strong> ASJAD AHMAD
<strong>MODE:</strong> LEARNING
<strong>BUGS:</strong> PRESENT
<strong>COFFEE:</strong> OPTIONAL
<strong>MOTIVATION:</strong> LOADING...
<strong>AURA:</strong> STABLE`.trim();
    appendTerminalEntry(cmd, out);
  }

  function handleJokeCommand(cmd) {
    CyberAudio.commandSuccess();
    const idx = Math.floor(Math.random() * DEVELOPER_QUOTES.length);
    const quote = DEVELOPER_QUOTES[idx];
    const out = `
&gt; RANDOM SYSTEM MESSAGE

"${quote}"`.trim();
    appendTerminalEntry(cmd, out, 'highlight');
  }

  function handleDateCommand(cmd) {
    CyberAudio.commandSuccess();
    const now = new Date();
    const out = `&gt; CURRENT SYSTEM TIME: ${now.toString()}`;
    appendTerminalEntry(cmd, out);
  }

  function handleClearCommand() {
    CyberAudio.keyClick();
    terminalHistory.innerHTML = '';
    initTerminalWelcome();
  }

  /* ==========================================================================
     SECTION 6: SIMULATED HACKING SEQUENCE
     ========================================================================== */
  function scrollPageToTerminal() {
    const terminalPanel = document.getElementById('terminal') || terminalScreen;
    if (!terminalPanel) return;

    const rect = terminalPanel.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if terminal is already adequately in view to prevent unnecessary jumps
    const isAlreadyVisible = (rect.top >= 40 && rect.top <= windowHeight * 0.45) ||
                             (rect.top < 40 && rect.bottom >= windowHeight * 0.6);

    if (!isAlreadyVisible) {
      terminalPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleHackCommand(cmd) {
    isHackingActive = true;
    terminalInput.disabled = true;
    setMatrixIntensity('hack');
    CyberAudio.hackAlert();

    // Immediately and smoothly scroll the page to the terminal output area
    scrollPageToTerminal();

    const entry = document.createElement('div');
    entry.className = 'terminal-entry';
    entry.innerHTML = `
      <div class="terminal-cmd-echo">
        <span class="prompt-label">ASJAD@DIGITAL-ID:~$</span> <span class="cmd-text">${escapeHtml(cmd)}</span>
      </div>
      <div class="terminal-response danger" id="hack-stream">
        &gt; INITIALIZING SECURITY PROTOCOL...
      </div>
    `;
    terminalHistory.appendChild(entry);
    scrollToBottom();

    const stream = entry.querySelector('#hack-stream');

    const steps = [
      { text: "\nSCANNING DIGITAL GRID...", delay: 600 },
      { text: "\nCHECKING FIREWALL...", delay: 1200 },
      { text: "\nANALYZING SECURITY...", delay: 1800 },
      { text: "\nBYPASS ATTEMPT...", delay: 2400 },
      { text: "\nACCESS LEVEL: 99%", delay: 3000 },
      { text: "\n\nACCESS DENIED.\n\nNice try, Asjad.\n\nSYSTEM MESSAGE:\nMaybe learn cybersecurity first. 💀", delay: 3700, final: true }
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        if (step.final) {
          CyberAudio.errorTone();
          stream.innerHTML += `<strong style="color:var(--accent-red); font-size:1rem;">${step.text}</strong>`;
          isHackingActive = false;
          terminalInput.disabled = false;
          terminalInput.focus({ preventScroll: true });
          setMatrixIntensity('normal');
        } else {
          CyberAudio.keyClick();
          stream.innerHTML += step.text;
        }
        scrollToBottom();
      }, step.delay);
    });
  }

  /* ==========================================================================
     SECTION 7: EASTER EGGS (SECRET MODE & SUDO HIRE ASJAD)
     ========================================================================== */
  // Easter Egg 02: sudo hire asjad
  function handleSudoHireCommand(cmd) {
    CyberAudio.keyClick();
    terminalInput.disabled = true;

    const entry = document.createElement('div');
    entry.className = 'terminal-entry';
    entry.innerHTML = `
      <div class="terminal-cmd-echo">
        <span class="prompt-label">ASJAD@DIGITAL-ID:~$</span> <span class="cmd-text">${escapeHtml(cmd)}</span>
      </div>
      <div class="terminal-response highlight" id="sudo-hire-stream">
        &gt; PERMISSION REQUESTED...
      </div>
    `;
    terminalHistory.appendChild(entry);
    scrollToBottom();

    const stream = entry.querySelector('#sudo-hire-stream');

    setTimeout(() => {
      CyberAudio.keyClick();
      stream.innerHTML += "\n\nCHECKING QUALIFICATIONS...";
      scrollToBottom();
    }, 600);

    setTimeout(() => {
      CyberAudio.keyClick();
      stream.innerHTML += "\n\nCHECKING AURA...";
      scrollToBottom();
    }, 1300);

    setTimeout(() => {
      CyberAudio.errorTone();
      stream.innerHTML += `
<strong style="color:var(--accent-gold); font-size:1.02rem;">
ACCESS DENIED.

Nice attempt.
</strong>`.trim();
      terminalInput.disabled = false;
      terminalInput.focus({ preventScroll: true });
      scrollToBottom();
    }, 2100);
  }

  // Easter Egg 01: Secret Mode (+100 AURA)
  function triggerEasterEgg(source = 'terminal') {
    CyberAudio.eggSecret();
    setMatrixIntensity('secret');

    appendTerminalEntry(
      source === 'terminal' ? 'matrix' : null,
      `
<strong style="color:var(--accent-gold); font-size:1.05rem;">
╔════════════════════════════╗
       SECRET MODE
         ACTIVATED
╚════════════════════════════╝
</strong>
+100 AURA

"You found something that wasn't in the documentation."
      `.trim(),
      'gold'
    );

    easterEggModal.classList.remove('hidden');

    // Return matrix to normal after 12s
    setTimeout(() => {
      if (rainIntensityMode === 'secret') {
        setMatrixIntensity('normal');
      }
    }, 12000);
  }

  function closeEasterEggModal() {
    CyberAudio.keyClick();
    easterEggModal.classList.add('hidden');
    terminalInput.focus({ preventScroll: true });
  }

  /* ==========================================================================
     SECTION 8: EVENT LISTENERS & LIFECYCLE
     ========================================================================== */
  function setupEventListeners() {
    // Sound Toggle Button
    const soundToggle = document.getElementById('sound-toggle');
    const soundText = soundToggle.querySelector('.sound-text');
    const soundIcon = soundToggle.querySelector('.sound-icon');

    soundToggle.addEventListener('click', () => {
      initAudio();
      isSoundEnabled = !isSoundEnabled;
      soundToggle.classList.toggle('active', isSoundEnabled);

      if (isSoundEnabled) {
        soundText.textContent = "SOUND: ON";
        soundIcon.textContent = "🔊";
        CyberAudio.commandSuccess();
      } else {
        soundText.textContent = "SOUND: OFF";
        soundIcon.textContent = "🔈";
      }
    });

    // Boot actions
    btnEnterSystem.addEventListener('click', () => {
      initAudio();
      enterMainSystem();
    });

    btnSkipBoot.addEventListener('click', () => {
      initAudio();
      skipBootSequence();
    });

    // Terminal Input (Enter key and Arrow Keys history)
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = terminalInput.value;
        terminalInput.value = '';
        executeCommand(val);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          terminalInput.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          terminalInput.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          terminalInput.value = '';
        }
      } else {
        CyberAudio.keyClick();
      }
    });

    // Clicking terminal screen focuses input
    terminalScreen.addEventListener('click', () => {
      terminalInput.focus();
    });

    // Any button or chip with data-cmd executes in terminal
    const cmdTriggers = document.querySelectorAll('[data-cmd]');
    cmdTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        initAudio();
        const cmd = trigger.getAttribute('data-cmd');
        if (cmd) {
          executeCommand(cmd);
          if (!terminalInput.disabled) {
            terminalInput.focus({ preventScroll: true });
          }
        }
      });
    });

    // Random Quote Button
    btnNextQuote.addEventListener('click', () => {
      initAudio();
      displayRandomQuote();
    });

    const heroQuoteBtn = document.getElementById('hero-quote-btn');
    if (heroQuoteBtn) {
      heroQuoteBtn.addEventListener('click', () => {
        initAudio();
        displayRandomQuote();
        const quoteSec = document.querySelector('.quote-section');
        if (quoteSec) quoteSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Secret Easter Egg Trigger 1: Clicking [λ] secret glyph in footer
    const secretGlyphBtn = document.getElementById('secret-glyph-btn');
    if (secretGlyphBtn) {
      secretGlyphBtn.addEventListener('click', () => {
        initAudio();
        triggerEasterEgg('glyph');
      });
    }

    // Secret Easter Egg Trigger 2: Clicking status badge 3 times
    const statusBadge = document.getElementById('status-badge');
    let badgeClicks = 0;
    let badgeTimer = null;

    if (statusBadge) {
      statusBadge.addEventListener('click', () => {
        initAudio();
        CyberAudio.keyClick();
        badgeClicks++;

        clearTimeout(badgeTimer);
        badgeTimer = setTimeout(() => {
          badgeClicks = 0;
        }, 1400);

        if (badgeClicks >= 3) {
          badgeClicks = 0;
          triggerEasterEgg('badge');
        }
      });
    }

    // Secret Easter Egg Trigger 3: Clicking avatar 3 times
    const avatarTrigger = document.getElementById('avatar-egg-trigger');
    let avatarClicks = 0;
    let avatarTimer = null;

    if (avatarTrigger) {
      avatarTrigger.addEventListener('click', () => {
        initAudio();
        CyberAudio.keyClick();
        avatarClicks++;

        clearTimeout(avatarTimer);
        avatarTimer = setTimeout(() => {
          avatarClicks = 0;
        }, 1400);

        if (avatarClicks >= 3) {
          avatarClicks = 0;
          triggerEasterEgg('avatar');
        }
      });
    }

    // Secret Easter Egg Trigger 4: Typing "matrix" anywhere on keyboard
    const secretWord = "matrix";
    let typedBuffer = "";

    window.addEventListener('keydown', (e) => {
      // Don't capture when user is typing inside the terminal input
      if (document.activeElement === terminalInput) return;

      if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
        typedBuffer += e.key.toLowerCase();
        if (typedBuffer.length > secretWord.length) {
          typedBuffer = typedBuffer.slice(-secretWord.length);
        }
        if (typedBuffer === secretWord) {
          typedBuffer = "";
          initAudio();
          triggerEasterEgg('keyboard');
        }
      }
    });

    // Easter Egg Modal Close
    const eggCloseBtn = document.getElementById('egg-close-btn');
    const eggDismissBtn = document.getElementById('egg-dismiss-btn');

    if (eggCloseBtn) eggCloseBtn.addEventListener('click', closeEasterEggModal);
    if (eggDismissBtn) eggDismissBtn.addEventListener('click', closeEasterEggModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !easterEggModal.classList.contains('hidden')) {
        closeEasterEggModal();
      }
    });

    // Window Resize with debounce
    window.addEventListener('resize', debounce(() => {
      resizeMatrixCanvas();
    }, 150));
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  /* ==========================================================================
     STARTUP LIFECYCLE
     ========================================================================== */
  window.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    resizeMatrixCanvas();
    requestAnimationFrame(renderMatrix);
    setupEventListeners();
    startBootSequence();
  });

})();
