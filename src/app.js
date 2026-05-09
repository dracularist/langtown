// ========== SUPABASE SETUP ==========
const SUPABASE_URL = 'https://edjoserjwhffnkdayzda.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkam9zZXJqd2hmZm5rZGF5emRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMjc3MjUsImV4cCI6MjA5MzgwMzcyNX0.m6qU3uIbV_LPsPUp4dI5flejCBPD1Dx4S4Bn51wYCk8';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========== UNIT DATA (embedded from slides/unit1-data.json) ==========
const UNIT_DATA = {"unit":{"id":1,"title":"Two Suitcases and Nowhere to Sleep","building":"accommodation","targetVocab":[{"word":"flat","emoji":"🏠"},{"word":"studio","emoji":"🏢"},{"word":"bedsit","emoji":"🛏️"},{"word":"furnished","emoji":"🛋️"},{"word":"unfurnished","emoji":"📦"},{"word":"spacious","emoji":"📐"},{"word":"cosy","emoji":"☕"},{"word":"en-suite","emoji":"🚿"},{"word":"shared","emoji":"👥"},{"word":"deposit","emoji":"💰"},{"word":"PCM","emoji":"📅"},{"word":"guarantor","emoji":"👤"}]},"scenes":{"station-dusk":{"sky":"dusk","elements":["station","street-lamp","ground"],"description":"Evening train station with warm windows"},"station-day":{"sky":"day","elements":["building","street-lamp","ground"],"description":"Daytime street with apartment building"},"station-night":{"sky":"night","elements":["cafe","street-lamp","pavement"],"description":"Night café scene with warm window light"},"dark":{"sky":"dark","elements":[],"description":"Dark background for indoor/email scenes"}},"slides":[{"id":1,"act":1,"actName":"Arrival","type":"story","scene":"station-dusk","phone":null,"email":null,"content":{"narration":"You step out of the station.\nTwo suitcases. One backpack.\nYour phone shows 11% battery.","thought":"Okay. New city. No place to sleep tonight."}},{"id":2,"act":1,"actName":"Arrival","type":"story","scene":"station-dusk","phone":{"from":"Priya","messages":["Hey! I'm so sorry I can't pick you up — my seminar ran late. Are you at the station?"]},"content":{"dialogue":{"speaker":"Priya — voice message","text":"Hey! I'm so sorry I can't pick you up — my seminar ran late. Are you at the station?"},"narration":"You look at the screen and start typing…"}},{"id":3,"act":1,"actName":"Arrival","type":"story","scene":"dark","email":{"from":"Oakfield Housing Agency","subject":"Accommodation Update","body":"Dear Student,\n\nWe are sorry to inform you that your accommodation has been cancelled.\n\nThe landlord no longer accepts international students at this property.\n\nYou may need to find your own place.\n\nBest regards,\nOakfield Housing Agency","highlight":"cancelled"},"content":{"narration":"You open your email and read the letter from your housing agency again.","thought":"Cancelled? They took my deposit last month…"}},{"id":4,"act":1,"actName":"Arrival","type":"question","scene":"station-dusk","phone":{"from":"Priya","messages":["Wait — they did WHAT?","Okay, don't panic. This happens sometimes. But do you know anything about renting a flat here?"],"urgent":1},"content":{"dialogue":{"speaker":"Priya","text":"Wait — they did WHAT? Okay, don't panic. But first — do you know anything about renting a flat here?"}},"question":{"label":"Quick check","text":"What is your situation right now?","options":[{"letter":"A","text":"I have a place tonight, find one tomorrow","correct":false},{"letter":"B","text":"No place tonight — I need to find one now","correct":true},{"letter":"C","text":"I can get a refund and stay in a hotel","correct":false}],"feedback":"Right. No place to sleep tonight. Let's find you a flat. Fast."}},{"id":5,"act":2,"actName":"The Search","type":"story","scene":"station-dusk","phone":{"from":"Rental Website","isWebsite":true,"url":"rightmove.co.uk/search...","header":"Find a place to rent","filters":["Flat","Studio","Bedsit"],"listings":[{"price":"650 pcm","desc":"Spacious 1-bed flat, furnished. All bills included.","icon":"🛋️","keywords":["Spacious","flat","furnished"]},{"price":"520 pcm","desc":"Cosy studio, unfurnished. Deposit required.","icon":"📦","keywords":["Cosy","studio","unfurnished"]},{"price":"380 pcm","desc":"Bedsit, shared kitchen, en-suite bathroom.","icon":"🚿","keywords":["Bedsit","shared","en-suite"]}]},"content":{"narration":"You open a rental website. The page loads. Dozens of listings appear. But the words are all… different.","thought":"Every word looks simple. But together they don't make sense."}},{"id":6,"act":2,"actName":"The Search","type":"quiz","scene":"station-dusk","phone":{"from":"Priya","messages":["Test yourself! If you want your own space with kitchen and bathroom, which do you pick?"]},"content":{"dialogue":{"speaker":"Priya","text":"Test yourself! If you want your own space with kitchen and bathroom, which do you pick?"}},"quiz":[{"question":"You want a private home on one floor with its own kitchen and bathroom. You search for a:","label":"Vocabulary","options":[{"letter":"A","text":"Bedsit — one room, bathroom outside","correct":false},{"letter":"B","text":"Flat — your own home on one floor","correct":true},{"letter":"C","text":"Studio — one room, everything together","correct":false}],"feedback":"Right! A flat is a full home on one floor — separate rooms, private kitchen and bathroom. A studio has everything in one room."}]},{"id":7,"act":2,"actName":"The Search","type":"story","scene":"station-dusk","phone":{"from":"Rental Website","isWebsite":true,"url":"rightmove.co.uk/oakfield...","header":"Results near Oakfield","listings":[{"price":"650 pcm","desc":"Spacious 1-bed flat, furnished. Bed, desk, wardrobe included. All bills included.","icon":"🛋️","keywords":["Spacious","flat","furnished"]},{"price":"520 pcm","desc":"Cosy studio, unfurnished. Empty room. Deposit required.","icon":"📦","keywords":["Cosy","studio","unfurnished"]},{"price":"380 pcm","desc":"Bedsit, shared kitchen, en-suite bathroom.","icon":"🚿","keywords":["Bedsit","shared","en-suite"]}]},"thoughtBubble":"Spacious… furnished… so that one has everything.\n\nBut 'cosy' and 'unfurnished' — smaller, and empty. I'd need to buy a bed, a desk…","content":{"narration":"Three results show up on your screen. You read the descriptions carefully.","thought":"Spacious… furnished… so that one has everything already.\n\nBut 'cosy' and 'unfurnished' — smaller, and empty."}},{"id":8,"act":2,"actName":"The Search","type":"quiz","scene":"station-dusk","phone":{"from":"Priya","messages":["Don't just scroll! Do you know what these words really mean?"]},"content":{"dialogue":{"speaker":"Priya","text":"Don't just scroll! Do you know what these words really mean?"}},"quiz":[{"question":"\"Furnished\" means:","label":"Question 1","options":[{"letter":"A","text":"Has furniture — you can move in right away","correct":true},{"letter":"B","text":"The room is newly painted","correct":false},{"letter":"C","text":"Close to the city centre","correct":false}],"feedback":"Yes! Furnished = bed, desk, wardrobe included."},{"question":"\"Cosy\" in a rental ad usually means:","label":"Question 2","options":[{"letter":"A","text":"Very warm and heated well","correct":false},{"letter":"B","text":"Small — a nice way of saying \"tiny\"","correct":true},{"letter":"C","text":"Has lots of windows","correct":false}],"feedback":"Right! In UK ads, \"cosy\" ≈ small. Not bad — just honest to know."}]},{"id":9,"act":2,"actName":"The Search","type":"story","scene":"station-dusk","phone":{"from":"Priya","messages":["The bedsit is cheap for a reason.","'Shared kitchen' = you cook with strangers.","'En-suite bathroom' = at least your bathroom is private. That's something."],"warn":1},"content":{"dialogue":{"speaker":"Priya","text":"The bedsit is cheap for a reason. 'Shared kitchen' = you cook with strangers. 'En-suite bathroom' = at least your bathroom is private. That's something."},"narration":"You look at the price again. 380 per month.","thought":"Shared kitchen with strangers… I've heard stories.\nBut the price…"}},{"id":10,"act":2,"actName":"The Search","type":"decision","scene":"station-dusk","content":{"decisionLabel":"Your decision","decisionText":"Which flat do you call about?","narration":"Each choice leads to a different story. There's no perfect answer."},"decisions":[{"letter":"A","title":"Spacious Flat","price":"650 pcm","desc":"Furnished — has bed, desk, wardrobe. All bills included.","tag":"Easy but expensive","tagType":"safe","emoji":"🛋️","feedback":"You call about the flat. It sounds easy — everything's included. But your budget is tight…"},{"letter":"B","title":"Cosy Studio","price":"520 pcm","desc":"Unfurnished — empty. You buy your own furniture.","tag":"Cheaper but needs work","tagType":"budget","emoji":"📦","feedback":"You call about the studio. It's empty but affordable. Tomorrow you can go to IKEA.","recommended":true},{"letter":"C","title":"Bedsit","price":"380 pcm","desc":"Shared kitchen. En-suite bathroom. No guarantor needed.","tag":"Cheapest but… strangers?","tagType":"risk","emoji":"🚿","feedback":"You call about the bedsit. It's cheap — very cheap. But you'll share a kitchen with strangers…"}]},{"id":11,"act":3,"actName":"The Call","type":"story","scene":"station-day","phoneCall":{"title":"Oakfield Rentals","duration":"0:47","dialogue":[{"speaker":"Agent","text":"Yes, the studio is still available. It's five twenty per calendar month.","highlight":["per calendar month"]},{"speaker":"You","text":"Per calendar…?"},{"speaker":"Agent","text":"Each month. And we require a deposit of five twenty as well.","highlight":["deposit"]}]},"calculator":{"expression":"520+520","result":"= £1,040"},"content":{"dialogue":{"speaker":"Agent on the phone","text":"It's five twenty per calendar month… And we require a deposit of five twenty as well."},"narration":"You hang up and open your phone's calculator.","thought":"520 + 520… that's over a thousand pounds for the first month."}},{"id":12,"act":3,"actName":"The Call","type":"question","scene":"station-day","bankCard":{"bank":"YOUR BANK","balance":"£1,840.00","cardNumber":"**** **** **** 4821"},"content":{"narration":"You check your bank account."},"question":{"label":"Budget check","text":"Rent: £520 + Deposit: £520 + Basic furniture: ~£300. Your balance is £1,840. Do you have enough?","options":[{"letter":"A","text":"Yes — enough, with some left over","correct":true},{"letter":"B","text":"Just enough — barely","correct":false},{"letter":"C","text":"No — not enough money","correct":false}],"feedback":"Correct! £1,840 − £1,340 = £500 left. Tight, but enough to start. You need to move fast."}},{"id":13,"act":3,"actName":"The Call","type":"story","scene":"station-day","callEnded":true,"rejected":true,"content":{"dialogues":[{"speaker":"Agent","speakerColor":"agent","text":"We'll need one more thing — a UK guarantor. Someone who promises to pay if you can't."},{"speaker":"You","speakerColor":"you","text":"I… don't know anyone in the UK."},{"speaker":"Agent","speakerColor":"agent","text":"Then I'm sorry, we can't proceed."}],"narration":"The agent pauses. Then:","thought":"A guarantor. Of course. I just moved here yesterday."}},{"id":14,"act":3,"actName":"The Call","type":"decision","scene":"station-day","phone":{"from":"Priya","messages":["Guarantor problem? Yeah, that's the number one issue for international students. But there are solutions.","Your university might offer a guarantor service. Or you can pay a few months upfront."]},"content":{"dialogue":{"speaker":"Priya (calling you back)","text":"Guarantor problem? Yeah, that's the number one issue. But your university might offer a guarantor service. Or you can pay a few months upfront."},"decisionLabel":"What do you do next?","narration":"All three are real solutions. But which one makes the most sense for you?"},"decisions":[{"letter":"A","title":"Go to the university tomorrow","desc":"Ask about their guarantor service for international students","recommended":true},{"letter":"B","title":"Pay three months upfront","desc":"Save £200 but spend a big chunk of your savings"},{"letter":"C","title":"Find a flat that doesn't need a guarantor","desc":"Like that bedsit — but is it worth the risk?"}]},{"id":15,"act":4,"actName":"Nightfall","type":"story","scene":"station-night","receipt":{"item":"Coffee","total":"3.80"},"content":{"narration":"It's fully dark now.\nYou find a café and order a coffee.\nIt's 3.80.","thought":"Two suitcases. No flat yet.\nBut I know more than I did an hour ago."}},{"id":16,"act":4,"actName":"Nightfall","type":"story","scene":"station-night","phone":{"from":"Priya","messages":["Hey, you're doing fine. First day is always the worst. Here's what you learned today:","Sleep well. Tomorrow we go to the university office."],"review":["🏠 flat · studio · bedsit","🛋️ furnished · unfurnished","📐 spacious · cosy","🚿 en-suite · shared","💰 deposit · PCM","👤 guarantor"]},"content":{"dialogue":{"speaker":"Priya","text":"Hey, you're doing fine. First day is always the worst. Here's what you learned today — you'll need all of it:"}},"vocabReview":[{"emoji":"🏠","word":"flat"},{"emoji":"🏢","word":"studio"},{"emoji":"🛏️","word":"bedsit"},{"emoji":"🛋️","word":"furnished"},{"emoji":"📦","word":"unfurnished"},{"emoji":"📐","word":"spacious"},{"emoji":"☕","word":"cosy"},{"emoji":"🚿","word":"en-suite"},{"emoji":"👥","word":"shared"},{"emoji":"💰","word":"deposit"},{"emoji":"📅","word":"PCM"},{"emoji":"👤","word":"guarantor"}]},{"id":17,"act":4,"actName":"Nightfall","type":"quiz-tf","scene":"station-night","content":{"quizHeader":"Quick review — True or False?"},"quizTF":[{"statement":"\"Furnished\" means the room is empty.","answer":false},{"statement":"\"Deposit\" is money you get back when you leave.","answer":true},{"statement":"\"PCM\" means the price for one month.","answer":true},{"statement":"A \"studio\" has a separate kitchen and bathroom.","answer":false},{"statement":"A \"guarantor\" pays if you cannot.","answer":true}]},{"id":18,"act":4,"actName":"Nightfall","type":"recap","scene":"dark","timeline":[{"emoji":"🚂","text":"You arrived — two suitcases, no plan"},{"emoji":"📧","text":"Agency cancelled — your room was gone"},{"emoji":"🔍","text":"Learned the words — flat, studio, bedsit, furnished, unfurnished…"},{"emoji":"📞","text":"Called a flat — deposit + PCM = £1,040 for month one"},{"emoji":"🚫","text":"Hit a wall — no guarantor, no flat"},{"emoji":"☕","text":"Survived day one — tomorrow you go to the university"}],"content":{"recapTitle":"What a day.","recapSubtitle":"You arrived with nothing, found out your room was cancelled, learned a whole new vocabulary, got rejected by an agent, and ended up in a café at 3.80 coffee.\n\nTomorrow: the university office. But tonight — you survived."}},{"id":19,"act":4,"actName":"Nightfall","type":"preview","scene":"dark","unitCards":[{"status":"completed","title":"Unit 1 — \"Two Suitcases and Nowhere to Sleep\"","desc":"You learned to read rental listings, understand prices, and deal with the guarantor problem."},{"status":"next","title":"Unit 2 — \"The View That Wasn't What It Seemed\"","desc":"You go to the university office for help — then visit your first flat in person. The photos were… misleading."},{"status":"locked","title":"Unit 3 — \"Mrs. Fletcher's Fine Print\"","desc":"The contract arrives. It's 12 pages long. Every word looks important. Which ones actually are?"}],"content":{"nextTitle":"Coming up in Unit 2…","nextDesc":"You visit your first flat. The photos showed a bright, spacious room. The real thing has a window facing a brick wall and a landlord who says \"it gets darker in winter.\""}},{"id":20,"act":4,"actName":"Nightfall","type":"complete","scene":"complete","stats":{"words":12,"exercises":7,"decisions":3,"rejected":1},"vocabSummary":["flat","studio","bedsit","furnished","unfurnished","spacious","cosy","en-suite","shared","deposit","PCM","guarantor"],"storySummary":"Arrived → Agency cancelled → Learned the words → Found options → Hit the guarantor wall → Survived day one"}]};

// ========== BUILDINGS DATA ==========
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
            { id: 'n1', title: 'Introducing yourself', desc: "Hi, I'm new here!", emoji: '👋', status: 'current' },
            { id: 'n2', title: 'Meeting your neighbours', desc: 'Small talk at the door', emoji: '🤝', status: 'locked' },
            { id: 'n3', title: 'Describing your home', desc: 'My flat is on the second floor', emoji: '🏡', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Daily Routines', items: [
            { id: 'n4', title: 'Talking about your day', desc: 'I usually wake up at...', emoji: '🌅', status: 'locked' },
            { id: 'n5', title: 'Shopping at the local store', desc: 'Do you have any...?', emoji: '🛒', status: 'locked' },
        ]},
        { unit: 'Unit 3 — Feelings & Relationships', items: [
            { id: 'n6', title: 'Expressing emotions', desc: "I'm feeling a bit homesick", emoji: '💭', status: 'locked' },
            { id: 'n7', title: 'Making plans with friends', desc: 'Are you free this weekend?', emoji: '📅', status: 'locked' },
        ]},
    ],
    cafe: [
        { unit: 'Unit 1 — Ordering', items: [
            { id: 'c1', title: 'Ordering a coffee', desc: 'Can I get a flat white?', emoji: '☕', status: 'current' },
            { id: 'c2', title: 'Reading the menu', desc: "What's the soup of the day?", emoji: '📋', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Social Talk', items: [
            { id: 'c3', title: 'Chatting with the barista', desc: "How's your day going?", emoji: '😊', status: 'locked' },
            { id: 'c4', title: 'Meeting someone for coffee', desc: 'Shall we grab a coffee?', emoji: '🫂', status: 'locked' },
        ]},
        { unit: 'Unit 3 — Dining Culture', items: [
            { id: 'c5', title: 'Understanding tipping culture', desc: 'Is tip included?', emoji: '💰', status: 'locked' },
            { id: 'c6', title: 'Food allergies & dietary needs', desc: "I'm allergic to nuts", emoji: '⚠️', status: 'locked' },
        ]},
    ],
    accommodation: [
        { unit: 'Act 1 — Two Suitcases, Nowhere to Sleep', items: [
            { id: 'a1', title: 'The Email That Changed Everything', desc: 'Your room was cancelled', emoji: '📧', status: 'current' },
            { id: 'a2', title: 'Decoding the Rental Ads', desc: 'What do those words mean?', emoji: '🔍', status: 'locked' },
            { id: 'a3', title: 'The Phone Call', desc: 'Deposit, PCM… and a wall', emoji: '📞', status: 'locked' },
        ]},
        { unit: 'Act 2 — The View That Wasn\'t What It Seemed', items: [
            { id: 'a4', title: 'The Window Facing the Wall', desc: 'The photos lied', emoji: '🖼️', status: 'locked' },
            { id: 'a5', title: 'Reading Between the Lines', desc: 'The contract arrives', emoji: '📄', status: 'locked' },
        ]},
        { unit: 'Act 3 — Flatmate Life', items: [
            { id: 'a6', title: 'Sam\'s Midnight Experiments', desc: 'Whose turn is it to clean?', emoji: '🧹', status: 'locked' },
            { id: 'a7', title: 'The Leak', desc: 'Tuesday has come and gone', emoji: '💧', status: 'locked' },
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
            { id: 'cm1', title: 'Understanding your syllabus', desc: "What's the grading breakdown?", emoji: '📖', status: 'current' },
            { id: 'cm2', title: 'Office hours', desc: 'Can I ask about my essay?', emoji: '🧑‍🏫', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Group Work', items: [
            { id: 'cm3', title: 'Participating in seminars', desc: "I'd like to add to that point", emoji: '💬', status: 'locked' },
            { id: 'cm4', title: 'Working in groups', desc: 'Who wants to handle the slides?', emoji: '👥', status: 'locked' },
        ]},
    ],
    hospital: [
        { unit: 'Unit 1 — Basic Health', items: [
            { id: 'h1', title: 'Registering with a GP', desc: "I'd like to register as a patient", emoji: '📝', status: 'current' },
            { id: 'h2', title: 'Describing symptoms', desc: "I've had a headache for three days", emoji: '🤒', status: 'locked' },
        ]},
        { unit: 'Unit 2 — Mental Wellbeing', items: [
            { id: 'h3', title: 'Talking about stress', desc: "I've been struggling with...", emoji: '🧠', status: 'locked' },
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
    unitData: null,
    currentSlide: 0,
    // Unit sub-node list state
    unitListBuilding: null,
    unitListUnitIndex: null,
    // Fine-grained progress (quiz results, wrong answers, etc.)
    quizResults: {},  // { quizId: { correct, attempts, lastAnswer } }
};

// Unit sub-node definitions for Accommodation Unit 1
const UNIT1_SUBNODES = [
    {
        id: 'u1-act1', title: 'The Email That Changed Everything',
        desc: 'Station → Cancelled → First steps',
        emoji: '📧',
        slideStart: 0,  // index 0-3 (slides 1-4)
        slideEnd: 3,
        type: 'Story'
    },
    {
        id: 'u1-act2', title: 'Decoding the Rental Ads',
        desc: 'Browse listings → Learn the words → Make a choice',
        emoji: '🔍',
        slideStart: 4,  // index 4-9 (slides 5-10)
        slideEnd: 9,
        type: 'Story + Practice'
    },
    {
        id: 'u1-act3-4', title: 'The Phone Call & Nightfall',
        desc: 'Deposit talk → Rejected → Survive day one',
        emoji: '📞',
        slideStart: 10,  // index 10-19 (slides 11-20)
        slideEnd: 19,
        type: 'Story + Resolution'
    },
];

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
    const { data, error } = await db.from('users').select('username, progress').eq('username', username.toLowerCase()).single();
    if (error && error.code !== 'PGRST116') return { found: false, error };
    if (data) return { found: true, progress: data.progress, username: data.username };
    return { found: false };
}

async function saveUser(username, progress) {
    const usernameLower = username.toLowerCase().trim();
    const now = new Date().toISOString();
    const { error } = await db.from('users').upsert({ username: usernameLower, progress, updated_at: now }, { onConflict: 'username' });
    if (error) { console.error('Save error:', error); return false; }
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
            courses[buildingId].forEach(unit => { unit.items.forEach(item => { itemMap[item.id] = item; }); });
            for (const [itemId, newStatus] of Object.entries(items)) {
                if (itemMap[itemId]) itemMap[itemId].status = newStatus;
            }
        }
    }
    return courses;
}

function extractProgress(courseData) {
    const progress = {};
    for (const [buildingId, units] of Object.entries(courseData)) {
        const buildingProgress = {};
        units.forEach(unit => { unit.items.forEach(item => { if (item.status !== 'locked') buildingProgress[item.id] = item.status; }); });
        if (Object.keys(buildingProgress).length > 0) progress[buildingId] = buildingProgress;
    }
    return progress;
}

// ========== LOGIN ==========
async function handleLogin() {
    const input = $('#username-input');
    const username = input.value.trim();
    if (!username) { showLoginError('Please enter a name'); return; }
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
            if (!hasInterests) { showScreen('welcome'); renderOnboardingStep(); }
            else { state.selectedInterests = state.progress._interests; renderBuildings(); showScreen('town'); }
        }
    } catch (err) { showLoginError('Something went wrong. Please try again.'); console.error(err); }
    finally { showLoginLoading(false); }
}

function showLoginError(msg) { const el = $('#login-error'); el.textContent = msg; el.classList.add('visible'); el.classList.remove('hidden'); }
function hideLoginError() { $('#login-error').classList.add('hidden'); $('#login-error').classList.remove('visible'); }
function showLoginLoading(show) { const el = $('#login-loading'); const btn = $('#btn-login'); if (show) { el.classList.remove('hidden'); btn.disabled = true; } else { el.classList.add('hidden'); btn.disabled = false; } }

// ========== ONBOARDING ==========
function renderOnboardingStep() {
    const step1 = $('#onboarding-step-1'), step2 = $('#onboarding-step-2'), btnNext = $('#btn-next');
    if (state.username) $('#greeting-name').textContent = state.username;
    if (state.onboardingStep === 1) {
        step1.classList.remove('hidden'); step2.classList.add('hidden');
        btnNext.disabled = !state.destination;
        btnNext.innerHTML = 'Continue <svg class="btn-arrow" viewBox="0 0 24 24" width="20" height="20"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
    } else {
        step1.classList.add('hidden'); step2.classList.remove('hidden');
        btnNext.disabled = state.selectedInterests.length === 0;
        btnNext.innerHTML = 'Build my town <svg class="btn-arrow" viewBox="0 0 24 24" width="20" height="20"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
    }
}

function handleDestinationClick(value) {
    state.destination = value;
    $$('.option-card').forEach(c => { c.style.borderColor = c.dataset.value === value ? 'var(--blue)' : ''; c.style.background = c.dataset.value === value ? 'var(--blue-light)' : ''; });
    $('#btn-next').disabled = false;
}

function handleInterestClick(value) {
    const idx = state.selectedInterests.indexOf(value);
    if (idx > -1) { state.selectedInterests.splice(idx, 1); }
    else { if (state.selectedInterests.length >= 3) return; state.selectedInterests.push(value); }
    updateInterestCards(); updateSelectionCounter();
    $('#btn-next').disabled = state.selectedInterests.length === 0;
}

function updateInterestCards() { $$('.interest-card').forEach(c => { c.classList.toggle('selected', state.selectedInterests.includes(c.dataset.value)); }); }
function updateSelectionCounter() { $('#selection-count').textContent = state.selectedInterests.length; }

// ========== TOWN MAP ==========
function renderBuildings() {
    const grid = $('#buildings-grid'); grid.innerHTML = '';
    BUILDINGS.forEach(b => {
        const isActive = state.selectedInterests.includes(b.id);
        const card = document.createElement('div');
        card.className = `building-card ${isActive ? 'active' : 'locked'}`;
        card.dataset.building = b.id;
        card.innerHTML = `<div class="building-icon">${b.emoji}</div><div class="building-name">${b.name}</div><div class="building-level">${b.level}</div>`;
        if (isActive) card.addEventListener('click', () => openBuilding(b.id));
        grid.appendChild(card);
    });
}

function openBuilding(id) { state.currentBuilding = id; renderBuildingDetail(id); showScreen('building'); }

// ========== BUILDING DETAIL ==========
function renderBuildingDetail(id) {
    const building = BUILDINGS.find(b => b.id === id);
    const courses = state.courseData[id] || [];
    const bgColors = { neighbourhood: '#FFE0B2', cafe: '#D7CCC8', accommodation: '#B3E5FC', station: '#C8E6C9', campus: '#FFF9C4', hospital: '#F8BBD0', admin: '#E1BEE7', office: '#B2DFDB' };
    $('#building-icon').style.background = bgColors[id] || '#eee';
    $('#building-icon').textContent = building.emoji;
    $('#building-title').textContent = building.name;
    $('#building-subtitle').textContent = building.keywords;

    const list = $('#course-list'); list.innerHTML = '';
    courses.forEach((unit, ui) => {
        const unitEl = document.createElement('div'); unitEl.className = 'course-unit';
        const progress = unit.items.filter(i => i.status === 'completed').length;
        unitEl.innerHTML = `<div class="unit-header"><span class="unit-label">${unit.unit}</span><span class="unit-progress">${progress}/${unit.items.length}</span></div><div class="course-items">${unit.items.map((item, i) => renderCourseItem(item, i)).join('')}</div>`;
        list.appendChild(unitEl);
    });
    $$('.course-item').forEach(el => { el.addEventListener('click', () => { const itemId = el.dataset.id; const item = findCourseItem(id, itemId); if (item && (item.status === 'current' || item.status === 'completed')) { const courses = state.courseData[id]; let uIdx = 0; courses.forEach((u, i) => { if (u.items.some(it => it.id === itemId)) uIdx = i; }); showUnitList(id, uIdx); } }); });
}

function findCourseItem(buildingId, itemId) {
    const courses = state.courseData[buildingId];
    if (!courses) return null;
    for (const unit of courses) { for (const item of unit.items) { if (item.id === itemId) return item; } }
    return null;
}

function renderCourseItem(item) {
    const statusLabels = { current: '<span class="course-badge new">New</span>', completed: '<span class="course-badge review">Done</span>', locked: '<span class="course-badge locked-badge">Locked</span>' };
    return `<div class="course-item" data-id="${item.id}"><div class="course-node ${item.status}">${item.emoji}</div><div class="course-info"><div class="course-title">${item.title}</div><div class="course-desc">${item.desc}</div></div>${statusLabels[item.status]}</div>`;
}

// ========== UNIT RENDERER ==========
function showUnitList(buildingId, unitIndex) {
    if (buildingId !== 'accommodation') { alert('Unit content coming soon!'); return; }
    state.unitListBuilding = buildingId;
    state.unitListUnitIndex = unitIndex;

    const building = BUILDINGS.find(b => b.id === buildingId);
    const courses = state.courseData[buildingId];
    const unit = courses ? courses[unitIndex] : null;

    $('#unit-list-title').textContent = unit ? unit.unit : 'Unit ' + (unitIndex + 1);
    $('#unit-list-subtitle').textContent = building ? building.name : '';
    const bgColors = { neighbourhood: '#FFE0B2', cafe: '#D7CCC8', accommodation: '#B3E5FC', station: '#C8E6C9', campus: '#FFF9C4', hospital: '#F8BBD0', admin: '#E1BEE7', office: '#B2DFDB' };
    $('#unit-list-emoji').style.background = bgColors[buildingId] || '#eee';
    $('#unit-list-emoji').textContent = building ? building.emoji : '📚';

    // Render sub-nodes
    const subNodes = buildingId === 'accommodation' && unitIndex === 0 ? UNIT1_SUBNODES : null;
    const content = $('#unit-list-content');
    if (!subNodes) {
        content.innerHTML = '<div style="text-align:center;padding:40px;color:#888;">Unit content coming soon!</div>';
    } else {
        let html = '';
        subNodes.forEach((sn, i) => {
            // Determine status based on stored progress
            const subProgress = state.progress._subnodes || {};
            const snStatus = subProgress[sn.id] || (i === 0 ? 'current' : (i > 0 && subProgress[subNodes[i-1].id] === 'completed' ? 'current' : 'locked'));
            html += `<div class="unit-subnode ${snStatus}" data-subnode="${sn.id}" data-index="${i}">`;
            html += `<div class="subnode-icon ${snStatus}">${sn.emoji}</div>`;
            html += `<div class="subnode-info"><div class="subnode-title">${sn.title}</div><div class="subnode-desc">${sn.desc}</div></div>`;
            html += `<span class="subnode-badge ${snStatus}">${snStatus === 'completed' ? 'Done' : snStatus === 'current' ? sn.type : 'Locked'}</span>`;
            html += '</div>';
        });
        content.innerHTML = html;

        // Attach click handlers
        content.querySelectorAll('.unit-subnode').forEach(el => {
            el.addEventListener('click', function() {
                const status = this.classList.contains('locked') ? 'locked' : '';
                if (status !== 'locked') {
                    launchSubNode(parseInt(this.dataset.index));
                }
            });
        });
    }

    showScreen('unit-list');
}

function launchSubNode(subNodeIndex) {
    state.unitData = UNIT_DATA;
    const sn = UNIT1_SUBNODES[subNodeIndex];
    state.currentSlide = sn.slideStart;
    showScreen('unit');
    renderSlide(sn.slideStart);
}

function launchUnit(buildingId, unitIndex) {
    if (buildingId !== 'accommodation') { alert('Unit content coming soon!'); return; }
    state.unitData = UNIT_DATA;
    state.currentSlide = 0;
    showScreen('unit');
    renderSlide(0);
}

function unitNav(dir) {
    const next = state.currentSlide + dir;
    if (next >= 0 && next < state.unitData.slides.length) renderSlide(next);
}

function renderSlide(idx) {
    state.currentSlide = idx;
    state.slideAnswered = false;
    state.slideBlocked = false;
    const slide = state.unitData.slides[idx];
    const scene = state.unitData.slides[idx] ? (state.unitData.scenes[state.unitData.slides[idx].scene] || {}) : {};
    const el = $('#unit-content');
    let html = '';

    const isQuestion = slide.question || slide.quiz || slide.quizTF;
    const isComplete = slide.type === 'complete';
    const isDecision = slide.type === 'decision' && slide.decisions;

    if (isComplete) { html += renderComplete(slide); }
    else {
        const sc = state.unitData.scenes[slide.scene] || {};
        html += '<div class="unit-scene sky-' + (sc.sky || 'dark') + '">';
        html += renderSceneBackground(slide, sc);
        html += '</div>';
        html += '<div class="unit-overlays">';
        html += renderOverlays(slide);
        html += '</div>';
        html += '<div class="unit-tap-layer" id="unit-tap-layer" onclick="handleSlideTap()"></div>';
        html += '<div class="unit-text-area" onclick="handleSlideTap()">';
        html += renderSlideContent(slide, isQuestion, isDecision);
        html += '</div>';
    }

    el.innerHTML = html;

    // Progress bar
    const pct = ((idx + 1) / state.unitData.slides.length) * 100;
    const fill = $('#unit-progress-fill');
    if (fill) fill.style.width = pct + '%';

    // Hide nav arrows during slides, show only for tap hint
    const prevBtn = $('#unit-prev-btn');
    const nextBtn = $('#unit-next-btn');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    applyReveal(slide, isQuestion, isDecision);
    attachSlideHandlers(slide, isQuestion);
}

function handleSlideTap(e) {
    if (e) e.stopPropagation();
    if (state.slideBlocked) return;
    const slide = state.unitData.slides[state.currentSlide];
    const isQuestion = slide.question || slide.quiz || slide.quizTF;
    if (isQuestion && !state.slideAnswered) return;
    advanceSlide();
}

function applyReveal(slide, isQuestion, isDecision) { /* no-op in simple mode */ }
function collectRevealSegments(slide, isQuestion, isDecision) { return []; }

function advanceSlide() {
    if (state.slideBlocked) return;
    const next = state.currentSlide + 1;
    if (next < state.unitData.slides.length) renderSlide(next);
}

function renderSceneBackground(slide, scene) {
    let h = '';
    if (scene.sky === 'night') h += '<div class="unit-star"></div>';
    if (scene.sky === 'dusk') { h += '<div class="unit-star"></div><div class="unit-moon"></div>'; }

    // Station
    if (slide.scene === 'station-dusk' || slide.scene === 'station-day') {
        h += '<div class="unit-station"><div class="unit-station-sign">OAKFIELD STATION</div>';
        ['uw1','uw2','uw3','uw4','uw5','uw6'].forEach(c => { h += '<div class="unit-station-win ' + c + '"></div>'; });
        h += '</div>';
    }
    // Lamp
    if (slide.scene === 'station-dusk') h += '<div class="unit-lamp" style="right:70px;bottom:100px;"><div class="unit-lamp-head"></div><div class="unit-lamp-light"></div><div class="unit-lamp-pole"></div></div>';
    if (slide.scene === 'station-night') h += '<div class="unit-lamp" style="left:25px;bottom:80px;"><div class="unit-lamp-head"></div><div class="unit-lamp-light"></div><div class="unit-lamp-pole"></div></div>';
    // Ground/pavement
    if (slide.scene === 'station-dusk' || slide.scene === 'station-day') h += '<div class="unit-ground"></div>';
    if (slide.scene === 'station-night') h += '<div class="unit-pavement"></div>';
    // Building (day)
    if (slide.scene === 'station-day') {
        h += '<div class="unit-building">';
        ['bw1','bw2','bw3','bw4','bw5','bw6'].forEach((c, i) => { h += '<div class="unit-bldg-win" style="top:' + (i < 3 ? '20px' : '60px') + ';left:' + (i % 3 === 0 ? '30px' : i % 3 === 1 ? '70px' : '110px') + ';"></div>'; });
        h += '</div>';
    }
    // Cafe (night)
    if (slide.scene === 'station-night') {
        h += '<div class="unit-cafe"><div class="unit-cafe-awning"></div><div class="unit-cafe-sign">CAFE</div>';
        h += '<div class="unit-cafe-win ucw1"><div class="unit-interior-table"></div><div class="unit-interior-person" style="background:#4a4a6a;left:8px;bottom:20px;"></div><div class="unit-interior-person" style="background:#6a4a4a;right:8px;bottom:20px;"></div></div>';
        h += '<div class="unit-cafe-win ucw2"><div class="unit-interior-table"></div><div class="unit-interior-person" style="background:#4a6a4a;left:10px;bottom:20px;"></div></div>';
        h += '<div class="unit-cafe-door"></div></div>';
    }

    return h;
}

function renderOverlays(slide) {
    let h = '';

    // Phone
    if (slide.phone) {
        const p = slide.phone;
        if (p.isWebsite) {
            h += '<div class="unit-phone wide website"><div class="unit-phone-notch"></div>';
            h += '<div class="unit-phone-status"><span>10%</span><span>18:50</span><div class="unit-phone-battery"></div></div>';
            h += '<div class="unit-browser-bar"><div class="unit-browser-url">' + (p.url || '') + '</div></div>';
            if (p.header) h += '<div class="unit-web-header">' + p.header + '</div>';
            if (p.filters) { h += '<div style="padding:4px 6px;display:flex;gap:3px;">'; p.filters.forEach((f, i) => { h += '<div style="font-size:5px;font-weight:700;padding:3px 6px;border-radius:3px;background:' + (i === 0 ? '#2a5a8c;color:#fff;' : '#e8e8e8;color:#555;') + '">' + f + '</div>'; }); h += '</div>'; }
            if (p.listings) { h += '<div style="padding:4px 6px;">'; p.listings.forEach(l => { h += '<div class="unit-listing-card">'; if (l.icon) h += '<div class="unit-listing-icon">' + l.icon + '</div>'; h += '<div class="unit-listing-price">' + l.price + '</div><div class="unit-listing-desc">' + highlightKeywords(l.desc, l.keywords) + '</div></div>'; }); h += '</div>'; }
            h += '<div class="unit-phone-home-el"></div></div>';
        } else {
            const wide = p.messages && p.messages.some(m => m.length > 40);
            h += '<div class="unit-phone' + (wide ? ' wide' : '') + '"><div class="unit-phone-notch"></div>';
            h += '<div class="unit-phone-status"><span>9%</span><span>18:52</span></div>';
            h += '<div class="unit-chat-avatar"><div class="unit-chat-avatar-circle"></div><div class="unit-chat-name">' + p.from + '</div></div>';
            p.messages.forEach((m, i) => { let cls = 'unit-chat-bubble'; if (p.warn && i >= p.warn - 1) cls += ' warn'; if (p.urgent && i >= p.urgent - 1) cls += ' urgent'; if (p.review) cls += ' review'; h += '<div class="' + cls + '">' + m + '</div>'; });
            if (p.review) p.review.forEach(r => { h += '<div class="unit-chat-bubble review">' + r + '</div>'; });
            h += '<div class="unit-phone-home-el"></div></div>';
        }
    }

    // Email
    if (slide.email) {
        const e = slide.email;
        h += '<div class="unit-email"><div class="unit-email-header"><div class="unit-email-from">From: ' + e.from + '</div><div class="unit-email-subject">Subject: ' + e.subject + '</div></div>';
        h += '<div class="unit-email-body">' + (e.highlight ? e.body.replace(e.highlight, '<span class="unit-email-hl">' + e.highlight + '</span>') : e.body) + '</div></div>';
    }

    // Call
    if (slide.phoneCall) {
        const c = slide.phoneCall;
        h += '<div class="unit-call"><div class="unit-phone-notch"></div><div class="unit-call-screen"><div class="unit-call-avatar">📞</div><div class="unit-call-name">' + c.title + '</div><div class="unit-call-status">' + c.duration + '</div>';
        c.dialogue.forEach(d => { h += '<div class="unit-call-dialogue' + (d.speaker === 'You' ? ' you' : '') + '"><div class="speaker">' + d.speaker + '</div><div class="text">' + d.text + '</div></div>'; });
        h += '</div><div class="unit-phone-home-el"></div></div>';
    }

    // Call ended
    if (slide.callEnded) h += '<div class="unit-call-ended"><div class="unit-call-ended-icon">📵</div><div class="unit-call-ended-text">Call Ended</div><div class="unit-call-ended-time">Duration: 1:23</div></div>';
    if (slide.rejected) h += '<div class="unit-rejected">REJECTED</div>';

    // Calculator
    if (slide.calculator) h += '<div class="unit-calc"><div class="unit-calc-label">Your calculator</div><div class="unit-calc-display">' + slide.calculator.expression + '<br><small>' + slide.calculator.result + '</small></div></div>';

    // Bank card
    if (slide.bankCard) { const b = slide.bankCard; h += '<div class="unit-bank-card"><div class="unit-bank-logo">' + b.bank + '</div><div class="unit-bank-balance-label">Current balance</div><div class="unit-bank-balance">' + b.balance + '</div><div class="unit-bank-name">' + b.cardNumber + '</div></div>'; }

    // Receipt
    if (slide.receipt) h += '<div class="unit-receipt">' + slide.receipt.item + '<br>—————<br><div class="unit-receipt-total">' + slide.receipt.total + '</div></div>';

    // Thought bubble
    if (slide.thoughtBubble) h += '<div class="unit-thought-bubble">' + slide.thoughtBubble.replace(/\n/g, '<br>') + '</div>';

    // Decision flat cards
    if (slide.type === 'decision' && slide.decisions && slide.decisions[0].price) {
        h += '<div class="unit-flat-cards">';
        slide.decisions.forEach(d => { h += '<div class="unit-flat-card" data-decision="' + d.letter + '"><div class="unit-flat-card-header"><div class="unit-flat-card-price">' + d.price + '</div><div class="unit-flat-card-emoji">' + d.emoji + '</div></div><div class="unit-flat-card-title">' + d.title + '</div><div class="unit-flat-card-desc">' + d.desc + '</div><div class="unit-flat-card-tag unit-tag-' + d.tagType + '">' + d.tag + '</div></div>'; });
        h += '</div>';
    }

    // Timeline
    if (slide.timeline) {
        h += '<div class="unit-timeline"><div class="unit-timeline-line"></div>';
        slide.timeline.forEach(t => { h += '<div class="unit-timeline-item"><div class="unit-timeline-dot">' + t.emoji + '</div><div class="unit-timeline-text"><strong>' + t.text.split('—')[0].trim() + '</strong>' + (t.text.includes('—') ? '—' + t.text.split('—')[1] : '') + '</div></div>'; });
        h += '</div>';
    }

    // Preview cards
    if (slide.unitCards) {
        h += '<div class="unit-preview-cards">';
        slide.unitCards.forEach(c => {
            const locked = c.status === 'locked' ? ' locked' : c.status === 'next' ? '' : ' current';
            const labelCls = c.status === 'completed' ? ' completed' : c.status === 'next' ? ' next' : ' locked-label';
            const label = c.status === 'completed' ? '✅ Completed' : c.status === 'next' ? 'Next' : 'Locked';
            h += '<div class="unit-preview-card' + locked + '"><div class="unit-preview-card-label' + labelCls + '">' + label + '</div><div class="unit-preview-card-title">' + c.title + '</div><div class="unit-preview-card-desc">' + c.desc + '</div></div>';
        });
        h += '</div>';
    }

    return h;
}

// Kept for backwards compat — redirects to split functions
function renderSceneElements(slide, scene) { return renderSceneBackground(slide, scene) + renderOverlays(slide); }

function highlightKeywords(desc, keywords) {
    if (!keywords) return desc;
    let result = desc;
    keywords.forEach(kw => { result = result.replace(kw, '<span class="unit-listing-kw">' + kw + '</span>'); });
    return result;
}

function renderSlideContent(slide, isQuestion) {
    const c = slide.content;
    let h = '';

    // Dialogues
    if (c.dialogue) { const sc = c.dialogue.speaker ? 'speaker-' + c.dialogue.speaker.toLowerCase().replace(/[^a-z]/g, '') : 'speaker-priya'; h += '<div class="unit-dialogue-box"><div class="unit-dialogue-speaker ' + sc + '">' + c.dialogue.speaker + '</div><div class="unit-dialogue-text">' + c.dialogue.text + '</div></div>'; }
    if (c.dialogues) { c.dialogues.forEach(d => { const sc = d.speakerColor ? 'speaker-' + d.speakerColor : 'speaker-priya'; h += '<div class="unit-dialogue-box"><div class="unit-dialogue-speaker ' + sc + '">' + d.speaker + '</div><div class="unit-dialogue-text">' + d.text + '</div></div>'; }); }
    if (c.narration) h += '<div class="unit-narrator">' + c.narration.replace(/\n/g, '<br>') + '</div>';
    if (c.thought) h += '<div class="unit-thought">' + c.thought.replace(/\n/g, '<br>') + '</div>';

    // Question
    if (slide.question) {
        const q = slide.question;
        h += '<div class="unit-question-box"><div class="unit-question-label">' + q.label + '</div><div class="unit-question-text">' + q.text + '</div>';
        q.options.forEach(o => { h += '<div class="unit-option" data-correct="' + o.correct + '"><div class="unit-option-letter">' + o.letter + '</div><div class="unit-option-text">' + o.text + '</div></div>'; });
        h += '<div class="unit-feedback"><div class="unit-feedback-text">' + q.feedback + '</div></div></div>';
    }

    // Quiz
    if (slide.quiz) {
        slide.quiz.forEach((q, qi) => {
            h += '<div class="unit-quiz-q" id="quiz-' + qi + '"><div class="unit-quiz-q-label">' + q.label + '</div><div class="unit-quiz-q-text">' + q.question + '</div>';
            q.options.forEach(o => { h += '<div class="unit-option" data-correct="' + o.correct + '" data-quiz="' + qi + '"><div class="unit-option-letter">' + o.letter + '</div><div class="unit-option-text">' + o.text + '</div></div>'; });
            h += '<div class="unit-feedback"><div class="unit-feedback-text">' + q.feedback + '</div></div></div>';
        });
    }

    // True/False
    if (slide.quizTF) {
        h += '<div class="unit-quiz-header">' + c.quizHeader + '</div>';
        slide.quizTF.forEach((q, i) => {
            h += '<div class="unit-tf-item" id="tf-' + i + '"><div class="unit-tf-statement">' + q.statement + '</div>';
            h += '<div class="unit-tf-buttons"><button class="unit-tf-btn true-btn" onclick="tfAnswer(' + i + ',' + q.answer + ',true)">T</button>';
            h += '<button class="unit-tf-btn false-btn" onclick="tfAnswer(' + i + ',' + q.answer + ',false)">F</button></div>';
            h += '<div class="unit-tf-result"></div></div>';
        });
    }

    // Decision text
    if (slide.type === 'decision' && c.decisionLabel) {
        h += '<div class="unit-decision-label">' + c.decisionLabel + '</div>';
        if (c.decisionText) h += '<div class="unit-decision-text">' + c.decisionText + '</div>';
    }
    if (c.narration && slide.type === 'decision') h += '<div class="unit-narrator">' + c.narration + '</div>';

    // Vocab review
    if (slide.vocabReview) {
        h += '<div class="unit-vocab-grid">';
        slide.vocabReview.forEach(v => { h += '<div class="unit-vocab-item"><span class="unit-vocab-emoji">' + v.emoji + '</span><span class="unit-vocab-word">' + v.word + '</span></div>'; });
        h += '</div>';
    }

    // Recap
    if (slide.type === 'recap') {
        h += '<div class="unit-recap-title">' + c.recapTitle + '</div>';
        h += '<div class="unit-recap-subtitle">' + (c.recapSubtitle || '').replace(/\n/g, '<br>') + '</div>';
    }

    // Preview
    if (slide.type === 'preview') {
        h += '<div class="unit-next-title">' + c.nextTitle + '</div>';
        h += '<div class="unit-next-desc">' + c.nextDesc + '</div>';
        h += '<button class="unit-btn-primary" onclick="alert(\'Unit 2 coming soon!\')">Continue to Unit 2 →</button>';
    }

    // "Tap anywhere" hint for story slides
    if (!isQuestion && slide.type !== 'complete' && slide.type !== 'decision') {
        h += '<div class="unit-tap-hint">Tap anywhere to continue</div>';
    }

    // On question slides, show "Tap to continue after answering" hint
    if (isQuestion) {
        h += '<div class="unit-tap-hint" id="q-tap-hint" style="display:none;">Tap anywhere to continue</div>';
    }

    return h;
}

function renderComplete(slide) {
    let h = '<div class="unit-complete">';
    h += '<div class="unit-complete-icon">🏠</div>';
    h += '<div class="unit-complete-title">Unit 1 Complete!</div>';
    h += '<div class="unit-complete-subtitle">"' + state.unitData.unit.title + '"</div>';
    h += '<div class="unit-stats-grid">';
    h += '<div class="unit-stat-card"><div class="unit-stat-number">' + slide.stats.words + '</div><div class="unit-stat-label">New words</div></div>';
    h += '<div class="unit-stat-card"><div class="unit-stat-number">' + slide.stats.exercises + '</div><div class="unit-stat-label">Exercises</div></div>';
    h += '<div class="unit-stat-card"><div class="unit-stat-number">' + slide.stats.decisions + '</div><div class="unit-stat-label">Decisions made</div></div>';
    h += '<div class="unit-stat-card"><div class="unit-stat-number">' + slide.stats.rejected + '</div><div class="unit-stat-label">Rejected call</div></div>';
    h += '</div>';
    h += '<div class="unit-vocab-summary-section"><div class="unit-vocab-summary-label">Words learned</div><div class="unit-vocab-tags">';
    slide.vocabSummary.forEach(w => { h += '<span class="unit-vocab-tag">' + w + '</span>'; });
    h += '</div></div>';
    h += '<div class="unit-story-summary-box"><div class="unit-story-summary-label">Story progress</div><div class="unit-story-summary-text">' + slide.storySummary + '</div></div>';
    h += '<div class="unit-btn-row"><button class="unit-btn-primary" onclick="backToUnitList()">Back to Unit →</button>';
    h += '<button class="unit-btn-secondary" onclick="renderSlide(0)">Review</button></div>';
    h += '</div>';
    return h;
}

function backToUnitList() {
    // Save subnode completion
    const sn = UNIT1_SUBNODES[state.currentSubNodeIndex || 0];
    if (sn) {
        if (!state.progress._subnodes) state.progress._subnodes = {};
        state.progress._subnodes[sn.id] = 'completed';
    }
    // Mark course item as completed
    const courses = state.courseData.accommodation;
    if (courses && courses[0] && courses[0].items[0]) {
        courses[0].items[0].status = 'completed';
        if (courses[0].items[1]) courses[0].items[1].status = 'current';
    }
    const progress = extractProgress(state.courseData);
    progress._interests = state.selectedInterests;
    progress._quizResults = state.quizResults;
    saveUser(state.username, progress);
    showUnitList('accommodation', 0);
}

function backToTown() {
    const progress = extractProgress(state.courseData);
    progress._interests = state.selectedInterests;
    saveUser(state.username, progress);
    renderBuildings();
    showScreen('town');
}

function attachSlideHandlers(slide, isQuestion) {
    // Single question
    document.querySelectorAll('.unit-question-box .unit-option').forEach(opt => {
        opt.addEventListener('click', function() {
            const box = this.closest('.unit-question-box');
            if (box.querySelector('.unit-feedback.visible')) return;
            const correct = this.dataset.correct === 'true';
            const allOpts = box.querySelectorAll('.unit-option');
            const qIdx = [...allOpts].indexOf(this) % allOpts.length;
            // Always show correct answer
            allOpts.forEach(o => {
                if (o.dataset.correct === 'true') o.classList.add('correct');
            });
            if (correct) { this.classList.add('correct'); }
            else { this.classList.add('wrong'); }
            box.querySelector('.unit-feedback').classList.add('visible');
            recordQuizResult('q-' + state.currentSlide + '-' + qIdx, { correct, chosen: this.querySelector('.unit-option-letter').textContent });
            state.slideAnswered = true;
            state.slideBlocked = false;
            const hint = document.getElementById('q-tap-hint');
            if (hint) hint.style.display = 'block';
        });
    });
    // Quiz
    document.querySelectorAll('.unit-quiz-q .unit-option').forEach(opt => {
        opt.addEventListener('click', function() {
            const q = this.closest('.unit-quiz-q');
            if (q.querySelector('.unit-feedback.visible')) return;
            const correct = this.dataset.correct === 'true';
            const allQuizOpts = q.querySelectorAll('.unit-option');
            const qIdx = [...allQuizOpts].indexOf(this) % allQuizOpts.length;
            // Always show correct answer
            allQuizOpts.forEach(o => {
                if (o.dataset.correct === 'true') o.classList.add('correct');
            });
            if (correct) { this.classList.add('correct'); }
            else { this.classList.add('wrong'); }
            q.querySelector('.unit-feedback').classList.add('visible');
            recordQuizResult('quiz-' + state.currentSlide + '-' + qIdx, { correct, chosen: this.querySelector('.unit-option-letter').textContent });
            state.slideAnswered = true;
            state.slideBlocked = false;
            const hint2 = document.getElementById('q-tap-hint');
            if (hint2) hint2.style.display = 'block';
        });
    });
    // True/False
    document.querySelectorAll('.unit-tf-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tfItem = this.closest('.unit-tf-item');
            if (tfItem.classList.contains('done')) return;
            tfItem.classList.add('done');
            const idx = [...document.querySelectorAll('.unit-tf-item')].indexOf(tfItem);
            const slideData = state.unitData.slides[state.currentSlide];
            const q = slideData.quizTF[idx];
            const isCorrect = (this.classList.contains('true-btn') && q.answer === true) || (this.classList.contains('false-btn') && q.answer === false);
            const result = tfItem.querySelector('.unit-tf-result');
            result.textContent = isCorrect ? '✅ Correct!' : '❌ Not quite — the answer is ' + (q.answer ? 'True' : 'False');
            result.className = 'unit-tf-result ' + (isCorrect ? 'correct' : 'wrong');
            recordQuizResult('tf-' + state.currentSlide + '-' + idx, { correct: isCorrect, chosen: this.classList.contains('true-btn') ? 'True' : 'False' });
            state.slideAnswered = true;
            state.slideBlocked = false;
            const hint3 = document.getElementById('q-tap-hint');
            if (hint3) hint3.style.display = 'block';
        });
    });
    // Flat cards (decision)
    document.querySelectorAll('.unit-flat-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.unit-flat-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // For question slides, block tap-to-advance until answered
    if (isQuestion) {
        state.slideBlocked = true;
    }
}

function tfAnswer(idx, correctAnswer, chosen) {
    const el = document.getElementById('tf-' + idx);
    if (el.classList.contains('done')) return;
    el.classList.add('done');
    const isCorrect = chosen === correctAnswer;
    const result = el.querySelector('.unit-tf-result');
    result.textContent = isCorrect ? '✅ Correct!' : '❌ Not quite — the answer is ' + (correctAnswer ? 'True' : 'False');
    result.className = 'unit-tf-result ' + (isCorrect ? 'correct' : 'wrong');
    // Record fine-grained progress
    recordQuizResult('tf-' + idx, { correct: isCorrect, chosen, correctAnswer });
}

function recordQuizResult(quizId, data) {
    if (!state.quizResults[quizId]) {
        state.quizResults[quizId] = { attempts: 0, wrongAnswers: [] };
    }
    const qr = state.quizResults[quizId];
    qr.attempts++;
    qr.lastCorrect = data.correct;
    if (!data.correct) {
        qr.wrongAnswers.push(data.chosen);
    }
    // Auto-save to cloud periodically
    if (state.username) {
        const progress = extractProgress(state.courseData);
        progress._interests = state.selectedInterests;
        progress._quizResults = state.quizResults;
        saveUser(state.username, progress);
    }
}

// ========== LOGOUT ==========
function handleLogout() {
    const lastUser = state.username;
    state.username = ''; state.isNewUser = false; state.onboardingStep = 1; state.destination = null;
    state.selectedInterests = []; state.progress = {}; state.courseData = {};
    localStorage.removeItem('langtown_user');
    localStorage.setItem('langtown_last_user', lastUser);
    $('#username-input').value = lastUser;
    showScreen('login');
}

// ========== EVENT LISTENERS ==========
function init() {
    $('#btn-login').addEventListener('click', handleLogin);
    $('#username-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') handleLogin(); });

    const cachedUser = localStorage.getItem('langtown_user');
    if (cachedUser) { $('#username-input').value = cachedUser; setTimeout(() => handleLogin(), 300); }
    else { const lastUser = localStorage.getItem('langtown_last_user'); if (lastUser) $('#username-input').value = lastUser; }

    $$('.option-card').forEach(card => { card.addEventListener('click', () => handleDestinationClick(card.dataset.value)); });
    $$('.interest-card').forEach(card => { card.addEventListener('click', () => handleInterestClick(card.dataset.value)); });

    $('#btn-next').addEventListener('click', async () => {
        if (state.onboardingStep === 1 && state.destination) { state.onboardingStep = 2; renderOnboardingStep(); }
        else if (state.onboardingStep === 2 && state.selectedInterests.length > 0) {
            const progress = extractProgress(state.courseData);
            progress._interests = state.selectedInterests;
            progress._destination = state.destination;
            await saveUser(state.username, progress);
            renderBuildings(); showScreen('town');
        }
    });

    $('#btn-back').addEventListener('click', () => { showScreen('town'); });
    $('#btn-unit-list-back').addEventListener('click', () => { showScreen('building'); renderBuildingDetail(state.currentBuilding); });
    $('#btn-logout').addEventListener('click', handleLogout);

    if (state.username) $('#town-username').textContent = state.username;
}

document.addEventListener('DOMContentLoaded', init);
