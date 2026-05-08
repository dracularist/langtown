// ========== SUPABASE SETUP ==========
const SUPABASE_URL = 'https://edjoserjwhffnkdayzda.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkam9zZXJqd2hmZm5rZGF5emRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMjc3MjUsImV4cCI6MjA5MzgwMzcyNX0.m6qU3uIbV_LPsPUp4dI5flejCBPD1Dx4S4Bn51wYCk8';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========== DATA ==========

const BUILDINGS = [
    { id: 'neighbourhood', name: 'Neighbourhood', emoji: '🏠', keywords: 'Daily life, feelings, making friends', level: 'A1-A2' },
    { id: 'cafe', name: 'Café', emoji: '☕', keywords: 'Social talk, dining culture', level: 'A1-A2' },
    { id: 'accommodation', name: 'Accommodation', emoji: '🔑', keywords: 'Renting, contracts, flatmates', level: 'A1-A2' },
    { id: 'station', name: 'Station', emoji: '🚂', keywords: 'Travel, directions, transport', level: 'A1-A2' },
    { id: 'campus', name: 'Campus', emoji: '📚', keywords: 'Study, academic discussion', level: 'A2-B1' },
    { id: 'hospital', name: 'Hospital', emoji: '🏥', keywords: 'Health, wellbeing', level: 'A2-B1' },
    { id: 'admin', name: 'Admin', emoji: '📋', keywords: 'Banking, visa, council', level: 'B1' },
    { id: 'office', name: 'Office', emoji: '🏢', keywords: 'Career, workplace', level: 'B1-B2' },
];

const DEFAULT_COURSES = {
    neighbourhood: [
        { unit: 'Unit 1 — Getting Settled', items: [
            { id: 'n1', title: 'Introducing yourself', desc: 'Hi, I\'m new here!', emoji: '👋', status: 'current' },
            { id: 'n2', title: 'Meeting your neighbours', desc: 'Small talk at the door', emoji: '🤝', status: 'locked' },
            { id: 'n3', title: 'Describing your home', desc: 'My flat is on the second floor', emoji: '🏡', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Daily Routines', items: [
            { id: 'n4', title: 'Talking about your day', desc: 'I usually wake up at...', emoji: '🌅', status: 'locked' },
            { id: 'n5', title: 'Shopping at the local store', desc: 'Do you have any...?', emoji: '🛒', status: 'locked' },
        ]},
        { unit: 'Unit 3 — Feelings & Relationships', items: [
            { id: 'n6', title: 'Expressing emotions', desc: 'I\'m feeling a bit homesick', emoji: '💭', status: 'locked' },
            { id: 'n7', title: 'Making plans with friends', desc: 'Are you free this weekend?', emoji: '📅', status: 'locked' },
        ]},
    ],
    cafe: [
        { unit: 'Unit 1 — Ordering', items: [
            { id: 'c1', title: 'Ordering a coffee', desc: 'Can I get a flat white?', emoji: '☕', status: 'current' },
            { id: 'c2', title: 'Reading the menu', desc: 'What\'s the soup of the day?', emoji: '📋', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Social Talk', items: [
            { id: 'c3', title: 'Chatting with the barista', desc: 'How\'s your day going?', emoji: '😊', status: 'locked' },
            { id: 'c4', title: 'Meeting someone for coffee', desc: 'Shall we grab a coffee?', emoji: '🫂', status: 'locked' },
        ]},
        { unit: 'Unit 3 — Dining Culture', items: [
            { id: 'c5', title: 'Understanding tipping culture', desc: 'Is tip included?', emoji: '💰', status: 'locked' },
            { id: 'c6', title: 'Food allergies & dietary needs', desc: 'I\'m allergic to nuts', emoji: '⚠️', status: 'locked' },
        ]},
    ],
    accommodation: [
        { unit: 'Unit 1 — Finding a Place', items: [
            { id: 'a1', title: 'Reading rental listings', desc: '2-bed flat, all bills included', emoji: '📰', status: 'current' },
            { id: 'a2', title: 'Booking a viewing', desc: 'I\'d like to see the property', emoji: '📞', status: 'locked' },
            { id: 'a3', title: 'Asking the right questions', desc: 'What\'s the deposit?', emoji: '❓', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Contracts & Moving In', items: [
            { id: 'a4', title: 'Understanding the contract', desc: 'Is this a fixed-term tenancy?', emoji: '📄', status: 'locked' },
            { id: 'a5', title: 'Talking to your landlord', desc: 'The heating isn\'t working', emoji: '🔧', status: 'locked' },
        ]},
        { unit: 'Unit 3 — Flatmate Life', items: [
            { id: 'a6', title: 'Setting house rules', desc: 'Whose turn is it to clean?', emoji: '🧹', status: 'locked' },
            { id: 'a7', title: 'Splitting bills', desc: 'Can you Venmo me for the electric?', emoji: '💸', status: 'locked' },
        ]},
    ],
    station: [
        { unit: 'Unit 1 — Getting Around', items: [
            { id: 's1', title: 'Buying a ticket', desc: 'A return to Manchester, please', emoji: '🎫', status: 'current' },
            { id: 's2', title: 'Reading signs & announcements', desc: 'The 14:30 is delayed', emoji: '📢', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Asking for Help', items: [
            { id: 's3', title: 'Asking for directions', desc: 'Excuse me, how do I get to...?', emoji: '🗺️', status: 'locked' },
            { id: 's4', title: 'Dealing with delays', desc: 'Is there a replacement bus?', emoji: '🚌', status: 'locked' },
        ]},
    ],
    campus: [
        { unit: 'Unit 1 — Academic Life', items: [
            { id: 'cm1', title: 'Understanding your syllabus', desc: 'What\'s the grading breakdown?', emoji: '📖', status: 'current' },
            { id: 'cm2', title: 'Office hours', desc: 'Can I ask about my essay?', emoji: '🧑‍🏫', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Group Work', items: [
            { id: 'cm3', title: 'Participating in seminars', desc: 'I\'d like to add to that point', emoji: '💬', status: 'locked' },
            { id: 'cm4', title: 'Working in groups', desc: 'Who wants to handle the slides?', emoji: '👥', status: 'locked' },
        ]},
    ],
    hospital: [
        { unit: 'Unit 1 — Basic Health', items: [
            { id: 'h1', title: 'Registering with a GP', desc: 'I\'d like to register as a patient', emoji: '📝', status: 'current' },
            { id: 'h2', title: 'Describing symptoms', desc: 'I\'ve had a headache for three days', emoji: '🤒', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Mental Wellbeing', items: [
            { id: 'h3', title: 'Talking about stress', desc: 'I\'ve been struggling with...', emoji: '🧠', status: 'locked' },
            { id: 'h4', title: 'Finding support services', desc: 'Where can I get counselling?', emoji: '💚', status: 'locked' },
        ]},
    ],
    admin: [
        { unit: 'Unit 1 — Banking', items: [
            { id: 'ad1', title: 'Opening a bank account', desc: 'What documents do I need?', emoji: '🏦', status: 'current' },
            { id: 'ad2', title: 'Setting up payments', desc: 'I need to set up a standing order', emoji: '💳', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Visa & Registration', items: [
            { id: 'ad3', title: 'BRP collection', desc: 'Where do I pick up my BRP?', emoji: '🪪', status: 'locked' },
            { id: 'ad4', title: 'Council tax & registration', desc: 'Do students pay council tax?', emoji: '🏛️', status: 'locked' },
        ]},
    ],
    office: [
        { unit: 'Unit 1 — Workplace Basics', items: [
            { id: 'o1', title: 'Writing a professional email', desc: 'Dear Mr. Smith, I am writing to...', emoji: '✉️', status: 'current' },
            { id: 'o2', title: 'The daily standup', desc: 'Yesterday I worked on...', emoji: '📊', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Career Growth', items: [
            { id: 'o3', title: 'Job interviews', desc: 'Tell me about yourself', emoji: '🎯', status: 'locked' },
            { id: 'o4', title: 'Networking at events', desc: 'What do you do?', emoji: '🤝', status: 'locked' },
        ]},
    ],
};

// ========== STATE ==========
let state = {
    screen: 'login',
    username: '',
    isNewUser: false,
    onboardingStep: 1,
    destination: null,
    selectedInterests: [],
    currentBuilding: null,
    progress: {},
    courseData: {},
};

// ========== DOM REFS ==========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ========== SCREEN MANAGEMENT ==========
function showScreen(name) {
    $$('.screen').forEach(s => s.classList.remove('active'));
    $(`#screen-${name}`).classList.add('active');
    state.screen = name;
}

// ========== SUPABASE HELPERS ==========
async function checkUser(username) {
    const { data, error } = await db
        .from('users')
        .select('username, progress')
        .eq('username', username.toLowerCase())
        .single();

    if (error && error.code !== 'PGRST116') return { found: false, error };
    if (data) return { found: true, progress: data.progress, username: data.username };
    return { found: false };
}

async function saveUser(username, progress) {
    const usernameLower = username.toLowerCase().trim();
    const now = new Date().toISOString();
    const { error } = await db
        .from('users')
        .upsert({
            username: usernameLower,
            progress: progress,
            updated_at: now,
        }, { onConflict: 'username' });

    if (error) {
        console.error('Save error:', error);
        return false;
    }
    return true;
}

async function loadUser(username) {
    const result = await checkUser(username);
    if (result.found) {
        state.username = result.username;
        state.progress = result.progress;
        state.courseData = mergeProgress(DEFAULT_COURSES, result.progress);
        localStorage.setItem('langtown_user', result.username);
        return { isNew: false };
    }
    return { isNew: true };
}

function mergeProgress(defaultCourses, progress) {
    const courses = JSON.parse(JSON.stringify(defaultCourses));
    for (const [buildingId, items] of Object.entries(progress)) {
        if (courses[buildingId]) {
            const itemMap = {};
            courses[buildingId].forEach(unit => {
                unit.items.forEach(item => {
                    itemMap[item.id] = item;
                });
            });
            for (const [itemId, newStatus] of Object.entries(items)) {
                if (itemMap[itemId]) {
                    itemMap[itemId].status = newStatus;
                }
            }
        }
    }
    return courses;
}

function extractProgress(courseData) {
    const progress = {};
    for (const [buildingId, units] of Object.entries(courseData)) {
        const buildingProgress = {};
        units.forEach(unit => {
            unit.items.forEach(item => {
                if (item.status !== 'locked') {
                    buildingProgress[item.id] = item.status;
                }
            });
        });
        if (Object.keys(buildingProgress).length > 0) {
            progress[buildingId] = buildingProgress;
        }
    }
    return progress;
}

// ========== LOGIN ==========
async function handleLogin() {
    const input = $('#username-input');
    const username = input.value.trim();
    if (!username) {
        showLoginError('Please enter a name');
        return;
    }

    showLoginLoading(true);
    hideLoginError();

    try {
        const result = await loadUser(username);

        if (result.isNew) {
            state.isNewUser = true;
            state.username = username.toLowerCase();
            state.courseData = JSON.parse(JSON.stringify(DEFAULT_COURSES));
            showScreen('welcome');
            renderOnboardingStep();
        } else {
            state.isNewUser = false;
            const hasInterests = state.progress._interests && state.progress._interests.length > 0;
            if (!hasInterests) {
                showScreen('welcome');
                renderOnboardingStep();
            } else {
                state.selectedInterests = state.progress._interests;
                renderBuildings();
                showScreen('town');
            }
        }
    } catch (err) {
        showLoginError('Something went wrong. Please try again.');
        console.error(err);
    } finally {
        showLoginLoading(false);
    }
}

function showLoginError(msg) {
    const el = $('#login-error');
    el.textContent = msg;
    el.classList.add('visible');
    el.classList.remove('hidden');
}

function hideLoginError() {
    $('#login-error').classList.add('hidden');
    $('#login-error').classList.remove('visible');
}

function showLoginLoading(show) {
    const el = $('#login-loading');
    const btn = $('#btn-login');
    if (show) {
        el.classList.remove('hidden');
        btn.disabled = true;
    } else {
        el.classList.add('hidden');
        btn.disabled = false;
    }
}

// ========== ONBOARDING ==========
function renderOnboardingStep() {
    const step1 = $('#onboarding-step-1');
    const step2 = $('#onboarding-step-2');
    const btnNext = $('#btn-next');

    // Show greeting
    if (state.username) {
        $('#greeting-name').textContent = state.username;
    }

    if (state.onboardingStep === 1) {
        step1.classList.remove('hidden');
        step2.classList.add('hidden');
        btnNext.disabled = !state.destination;
        btnNext.innerHTML = 'Continue <svg class="btn-arrow" viewBox="0 0 24 24" width="20" height="20"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
    } else {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        btnNext.disabled = state.selectedInterests.length === 0;
        btnNext.innerHTML = 'Build my town <svg class="btn-arrow" viewBox="0 0 24 24" width="20" height="20"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
    }
}

function handleDestinationClick(value) {
    state.destination = value;
    $$('.option-card').forEach(c => {
        c.style.borderColor = c.dataset.value === value ? 'var(--blue)' : '';
        c.style.background = c.dataset.value === value ? 'var(--blue-light)' : '';
    });
    $('#btn-next').disabled = false;
}

function handleInterestClick(value) {
    const idx = state.selectedInterests.indexOf(value);
    if (idx > -1) {
        state.selectedInterests.splice(idx, 1);
    } else {
        if (state.selectedInterests.length >= 3) return;
        state.selectedInterests.push(value);
    }
    updateInterestCards();
    updateSelectionCounter();
    $('#btn-next').disabled = state.selectedInterests.length === 0;
}

function updateInterestCards() {
    $$('.interest-card').forEach(c => {
        const isSelected = state.selectedInterests.includes(c.dataset.value);
        c.classList.toggle('selected', isSelected);
    });
}

function updateSelectionCounter() {
    $('#selection-count').textContent = state.selectedInterests.length;
}

// ========== TOWN MAP ==========
function renderBuildings() {
    const grid = $('#buildings-grid');
    grid.innerHTML = '';

    BUILDINGS.forEach(b => {
        const isActive = state.selectedInterests.includes(b.id);
        const card = document.createElement('div');
        card.className = `building-card ${isActive ? 'active' : 'locked'}`;
        card.dataset.building = b.id;
        card.innerHTML = `
            <div class="building-icon">${b.emoji}</div>
            <div class="building-name">${b.name}</div>
            <div class="building-level">${b.level}</div>
        `;

        if (isActive) {
            card.addEventListener('click', () => openBuilding(b.id));
        }

        grid.appendChild(card);
    });
}

function openBuilding(id) {
    state.currentBuilding = id;
    renderBuildingDetail(id);
    showScreen('building');
}

// ========== BUILDING DETAIL ==========
function renderBuildingDetail(id) {
    const building = BUILDINGS.find(b => b.id === id);
    const courses = state.courseData[id] || [];

    const bgColors = {
        neighbourhood: '#FFE0B2', cafe: '#D7CCC8', accommodation: '#B3E5FC',
        station: '#C8E6C9', campus: '#FFF9C4', hospital: '#F8BBD0',
        admin: '#E1BEE7', office: '#B2DFDB',
    };
    $('#building-header-icon').style.background = bgColors[id] || '#eee';
    $('#building-header-icon').textContent = building.emoji;
    $('#building-title').textContent = building.name;
    $('#building-subtitle').textContent = building.keywords;

    const list = $('#course-list');
    list.innerHTML = '';

    courses.forEach((unit, ui) => {
        const unitEl = document.createElement('div');
        unitEl.className = 'course-unit';

        const progress = unit.items.filter(i => i.status === 'completed').length;
        unitEl.innerHTML = `
            <div class="unit-header">
                <span class="unit-label">${unit.unit}</span>
                <span class="unit-progress">${progress}/${unit.items.length}</span>
            </div>
            <div class="course-items">
                ${unit.items.map((item, i) => renderCourseItem(item, i)).join('')}
            </div>
        `;

        list.appendChild(unitEl);
    });

    // Attach click handlers to course items
    $$('.course-item').forEach(el => {
        el.addEventListener('click', () => {
            const itemId = el.dataset.id;
            advanceCourse(id, itemId);
        });
    });
}

function renderCourseItem(item, index) {
    const statusLabels = {
        current: '<span class="course-badge new">New</span>',
        completed: '<span class="course-badge review">Done</span>',
        locked: '<span class="course-badge locked-badge">Locked</span>',
    };

    return `
        <div class="course-item" data-id="${item.id}">
            <div class="course-node ${item.status}">${item.emoji}</div>
            <div class="course-info">
                <div class="course-title">${item.title}</div>
                <div class="course-desc">${item.desc}</div>
            </div>
            ${statusLabels[item.status]}
        </div>
    `;
}

function advanceCourse(buildingId, itemId) {
    const courses = state.courseData[buildingId];
    if (!courses) return;

    // Find all items in order
    const allItems = [];
    courses.forEach(unit => {
        unit.items.forEach(item => {
            allItems.push(item);
        });
    });

    const targetIdx = allItems.findIndex(i => i.id === itemId);
    if (targetIdx === -1) return;

    const target = allItems[targetIdx];
    if (target.status === 'locked') return;

    // If current, mark as completed and unlock next
    if (target.status === 'current') {
        target.status = 'completed';
        // Unlock the next locked item
        for (let i = targetIdx + 1; i < allItems.length; i++) {
            if (allItems[i].status === 'locked') {
                allItems[i].status = 'current';
                break;
            }
        }

        // Save to cloud
        const progress = extractProgress(state.courseData);
        progress._interests = state.selectedInterests;
        saveUser(state.username, progress);
    }

    // Re-render
    renderBuildingDetail(buildingId);
}

// ========== LOGOUT ==========
function handleLogout() {
    state.username = '';
    state.isNewUser = false;
    state.onboardingStep = 1;
    state.destination = null;
    state.selectedInterests = [];
    state.progress = {};
    state.courseData = {};
    localStorage.removeItem('langtown_user');
    $('#username-input').value = '';
    showScreen('login');
}

// ========== EVENT LISTENERS ==========
function init() {
    // Login
    $('#btn-login').addEventListener('click', handleLogin);
    $('#username-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleLogin();
    });

    // Auto-login if cached
    const cachedUser = localStorage.getItem('langtown_user');
    if (cachedUser) {
        $('#username-input').value = cachedUser;
        setTimeout(() => handleLogin(), 300);
    }

    // Destination selection (Step 1)
    $$('.option-card').forEach(card => {
        card.addEventListener('click', () => handleDestinationClick(card.dataset.value));
    });

    // Interest selection (Step 2)
    $$('.interest-card').forEach(card => {
        card.addEventListener('click', () => handleInterestClick(card.dataset.value));
    });

    // Next button
    $('#btn-next').addEventListener('click', async () => {
        if (state.onboardingStep === 1 && state.destination) {
            state.onboardingStep = 2;
            renderOnboardingStep();
        } else if (state.onboardingStep === 2 && state.selectedInterests.length > 0) {
            // Save interests to progress
            const progress = extractProgress(state.courseData);
            progress._interests = state.selectedInterests;
            progress._destination = state.destination;
            await saveUser(state.username, progress);

            renderBuildings();
            showScreen('town');
        }
    });

    // Back button
    $('#btn-back').addEventListener('click', () => {
        showScreen('town');
    });

    // Logout button
    $('#btn-logout').addEventListener('click', handleLogout);

    // Update town username
    if (state.username) {
        $('#town-username').textContent = state.username;
    }
}

// ========== START ==========
document.addEventListener('DOMContentLoaded', init);
