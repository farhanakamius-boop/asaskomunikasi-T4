// Data for Ciri-ciri Komunikasi Efektif (Module 1)
const ciriData = {
    tujuan: {
        title: "Kejelasan Tujuan (Clarity of Purpose)",
        points: [
            "Pengirim mempunyai matlamat yang jelas sebelum menyampaikan sesuatu mesej.",
            "Menjawab persoalan: Mengapa mesej dihantar? Apakah tindakan yang diharapkan?",
            "Mengelakkan kekeliruan penerima tanpa salah tafsir.",
            "Meningkatkan fokus mesej agar lebih spesifik dan tidak meleret.",
            "Mempermudahkan tindakan penerima mesej secara langsung.",
            "Mempercepatkan proses membuat keputusan dalam organisasi logistik."
        ],
        scenario: "Logistik Hub: Sebelum menghantar e-mel penjadualan penghantaran kargo, pengurus menetapkan matlamat untuk mengarahkan ejen kastam melepaskan kontena nombor WH-882 hari ini."
    },
    kesempurnaan: {
        title: "Kesempurnaan (Completeness)",
        points: [
            "Mesej yang lengkap merangkumi semua maklumat penting.",
            "Penerima boleh memahami dan mengambil tindakan tanpa perlu bertanya semula.",
            "Menjawab semua soalan penting: Siapa (Who), Apa (What), Bila (When), Di mana (Where), Mengapa (Why), Bagaimana (How).",
            "Tiada fakta atau butiran penting yang tertinggal.",
            "Arahan kerja mestilah jelas dan komprehensif."
        ],
        scenario: "Pengurus Gudang menghantar arahan kerja kepada pemandu lori: 'Pak Abu, sila ambil 5 pallet barangan perubatan (DO: #6678) di Gudang A, Pelabuhan Klang, esok pagi jam 9:00 pagi menggunakan lori 3 tan.'"
    },
    maklumbalas: {
        title: "Maklum Balas (Feedback)",
        points: [
            "Respon atau reaksi daripada penerima selepas menerima mesej.",
            "Menunjukkan sama ada mesej difahami, dipersetujui, atau memerlukan penjelasan lanjut.",
            "Menjadikan proses komunikasi dua hala yang sihat.",
            "Mengesahkan kefahaman dan membetulkan salah faham dengan cepat.",
            "Meningkatkan kualiti komunikasi dan membina hubungan profesional.",
            "Membantu pihak pengurusan membuat keputusan berdasarkan maklum balas pekerja."
        ],
        scenario: "Selepas sesi taklimat keselamatan gudang baharu, penyelia meminta pemandu forklif menyatakan jika ada kekeliruan, dan mereka mengesahkan pemahaman prosedur larian forklift."
    },
    empati: {
        title: "Empati (Empathy)",
        points: [
            "Keupayaan memahami perasaan, perspektif, dan situasi orang lain.",
            "Menyampaikan mesej dengan mengambil kira emosi dan keperluan penerima.",
            "Mewujudkan hubungan kerja yang lebih harmoni dan mengurangkan konflik.",
            "Meningkatkan kepuasan pelanggan melalui perkhidmatan yang prihatin.",
            "Menggunakan nada sopan, profesional, dan meletakkan diri dalam situasi orang lain.",
            "Mengelakkan kata-kata kasar atau tuduhan melulu."
        ],
        scenario: "Ejen perkapalan memohon maaf atas kelewatan kontena akibat cuaca ribut di laut, menjelaskan situasi kepada pelanggan dengan nada tenang, menawarkan penjejakan langsung kontena tersebut."
    },
    menyesuaikan: {
        title: "Menyesuaikan Maklumat dengan Pendengar",
        points: [
            "Mesej disesuaikan berdasarkan latar belakang, jawatan, tahap pendidikan, dan pengalaman pendengar.",
            "Mengubah gaya bahasa (formal untuk pelanggan/pengurusan, mudah difahami untuk pekerja operasi).",
            "Memilih maklumat yang relevan sahaja bagi mengelakkan maklumat berlebihan.",
            "Memperbetulkan nada mesej berdasarkan pendengar (nada sopan atau tegas profesional).",
            "Memilih saluran komunikasi yang sesuai (panggilan telefon untuk kecemasan, e-mel untuk laporan rasmi)."
        ],
        scenario: "Seorang Eksekutif Logistik menerangkan status rantaian bekalan menggunakan rajah ringkas kepada pelanggan, tetapi menggunakan data analitik teknikal apabila membentang kepada Lembaga Pengarah."
    },
    saluran: {
        title: "Saluran Komunikasi Pelbagai",
        points: [
            "Menggunakan lebih daripada satu medium untuk menyampaikan mesej dalam perniagaan.",
            "Memastikan mesej sampai dengan cepat, tepat, dan berkesan.",
            "Saluran Bertulis: Surat rasmi, memorandum, e-mel arahan.",
            "Saluran Lisan: Panggilan telefon, mesyuarat mingguan, taklimat.",
            "Saluran Digital: WhatsApp Business, Telegram, aplikasi logistik syarikat.",
            "Saluran Visual: Infografik alur kerja gudang, graf prestasi bulanan.",
            "Saluran Non-Verbal: Bahasa badan, ekspresi wajah, hubungan mata semasa berunding."
        ],
        scenario: "Makluman kecemasan tentang penutupan pelabuhan dihantar melalui SMS pantas, disusuli e-mel rasmi dengan pelan kontingensi pengalihan kargo."
    },
    khabarangin: {
        title: "Penggunaan Khabar Angin (Grapevine Communication)",
        points: [
            "Komunikasi tidak formal yang berlaku secara spontan antara pekerja.",
            "Biasanya melalui perbualan harian, sembang pantri, WhatsApp kumpulan tidak rasmi, atau gosip.",
            "Peranan Positif: Menyampaikan maklumat dengan sangat cepat merentasi hierarki.",
            "Membantu memberi gambaran mood, kegusaran, atau persepsi pekerja terhadap pengurusan.",
            "Menjadi pelengkap kepada saluran komunikasi rasmi syarikat.",
            "Mengeratkan hubungan sosial pekerja secara tidak rasmi.",
            "Perlu dikendalikan secara terkawal oleh pengurusan bagi membetulkan gosip negatif."
        ],
        scenario: "Pihak pengurusan mendengar desas-desus pekerja risau tentang jadual giliran syif malam baharu di gudang, membolehkan pengurus merangka taklimat penjelasan rasmi sebelum ia menimbulkan mogok."
    }
};

// Simulation Steps for Logistics Challenge
const simSteps = [
    {
        npcMessage: "Salam, saya Aiman dari Syarikat Perabot Indah. Kontena bahan mentah kami (No: PI-772) sepatutnya sampai ke gudang kami kelmarin! Di mana barangan kami? Kami terpaksa tangguh pengeluaran disebabkan kelewatan ini!",
        objective: "Objektif: Balas aduan pelanggan yang sedang marah tentang kelewatan kontena import menggunakan prinsip 7C (Kesopanan & Empati).",
        options: [
            {
                text: "Saya tak tahu. Itu urusan syarikat perkapalan. Awak telefonlah mereka sendiri untuk semak. Bukan silap kami.",
                score: 0,
                feedback: "Sangat Lemah! Anda menyalahkan pihak lain dan tidak menunjukkan kesopanan (Courtesy) serta empati. Pelanggan akan bertambah marah.",
                userSpeech: "Saya tak tahu. Itu urusan syarikat perkapalan. Awak telefonlah mereka sendiri untuk semak. Bukan silap kami."
            },
            {
                text: "Kontena cik lewat sebab kapal rosak. Nanti kontena itu sampai saya maklumkan semula. Harap sabar.",
                score: 5,
                feedback: "Sederhana. Mesej ini ringkas (Conciseness) tetapi kurang lengkap (Completeness) dan tidak menunjukkan empati atau tindakan susulan yang kukuh.",
                userSpeech: "Kontena cik lewat sebab kapal rosak. Nanti kontena itu sampai saya maklumkan semula. Harap sabar."
            },
            {
                text: "Salam Cik Aiman, kami mohon maaf atas kelewatan kontena PI-772. Kapal MV Mega Cargo menghadapi masalah teknikal di Pelabuhan Klang. Kontena dijangka dilepaskan esok jam 10 pagi. Kami akan pantau pelepasan kastam dan hantar terus ke gudang cik. Terima kasih.",
                score: 10,
                feedback: "Terbaik! Mesej ini lengkap, ada kejelasan tujuan, memohon maaf dengan sopan, menerangkan punca secara tepat (Correctness), serta memberi jaminan pelan tindakan.",
                userSpeech: "Salam Cik Aiman, mohon maaf atas kesulitan. Kontena PI-772 lewat kerana isu teknikal kapal MV Mega Cargo di Pelabuhan Klang. Kami jangka barang dilepaskan esok jam 10 pagi dan kami uruskan penghantaran segera ke gudang cik. Status terkini akan kami kemas kini tengah hari ini. Terima kasih."
            }
        ]
    },
    {
        npcMessage: "Penyelia Gudang: 'Bos, kita kena hantar pemandu lori, Pak Abu, untuk ambil barangan elektronik penting kat gudang pelabuhan hari ni. Tolong hantar arahan kerja kat dia sekarang.'",
        objective: "Objektif: Beri arahan kerja bertulis kepada pemandu lori dengan mengamalkan prinsip Kesempurnaan (Completeness) dan Kejelasan (Clarity).",
        options: [
            {
                text: "Pak Abu, tolong pergi ambil barang elektrik kat Penang pelabuhan hari ni ya.",
                score: 2,
                feedback: "Kurang Butiran! Pak Abu tidak tahu gudang mana, barang apa, nombor rujukan dokumen (DO), atau masa yang ditetapkan.",
                userSpeech: "Pak Abu, tolong pergi ambil barang elektrik kat Penang pelabuhan hari ni ya."
            },
            {
                text: "Pak Abu, sila ke Gudang B, Pelabuhan Pulau Pinang sebelum jam 3:00 petang ini untuk mengambil 10 pallet barangan elektronik (DO #9982). Pastikan bawa dokumen kastam K4 yang asal. Terima kasih.",
                score: 10,
                feedback: "Sempurna! Arahan ini merangkumi butiran Apa (10 pallet barangan elektronik), Di mana (Gudang B, Pelabuhan Pulau Pinang), Bila (sebelum 3:00 petang), dokumen rujukan (DO #9982), dan dokumen kastam. Tiada maklumat tergantung.",
                userSpeech: "Pak Abu, sila ambil kargo 10 pallet barangan elektronik (DO #9982) di Gudang B, Pelabuhan Pulau Pinang hari ini sebelum 3 petang. Pastikan bawa dokumen K4 yang saya letak di atas meja kaunter. Hubungi saya jika ada isu."
            },
            {
                text: "Pak Abu, barang penting dah ready kat pelabuhan. Pergi ambil sekarang sebelum lori lain ambil dulu.",
                score: 4,
                feedback: "Gopoh! Maklumat ini mengelirukan dan tiada rujukan DO atau lokasi spesifik pelabuhan.",
                userSpeech: "Pak Abu, barang penting dah ready kat pelabuhan. Pergi ambil sekarang sebelum lori lain ambil dulu."
            }
        ]
    },
    {
        npcMessage: "Pengurus Besar (GM): 'Saya perlukan laporan ringkas tentang pencapaian penghantaran kontena kita pada bulan lepas untuk mesyuarat lembaga pengarah petang ini. Berikan data prestasi kita.'",
        objective: "Objektif: Sampaikan maklumat prestasi operasi kepada pengurusan atasan mengikut prinsip Ketegasan (Concreteness) dan Ketepatan (Correctness).",
        options: [
            {
                text: "Bulan lepas prestasi penghantaran kita sangat bagus bos. Kebanyakan kontena sampai tepat pada masanya dan pelanggan semuanya gembira.",
                score: 2,
                feedback: "Terlalu Umum! Tiada statistik atau fakta konkrit. Pihak pengurusan atasan memerlukan data angka bagi membuktikan kenyataan anda.",
                userSpeech: "Bulan lepas prestasi penghantaran kita sangat bagus bos. Kebanyakan kontena sampai tepat pada masanya dan pelanggan semuanya gembira."
            },
            {
                text: "Menurut data sistem bulanan, kadar penghantaran tepat pada masa (On-Time Delivery) bagi Julai 2026 ialah 94.2% berbanding sasaran 95%. Kelewatan berpunca daripada kesesakan kastam di pintu sempadan Bukit Kayu Hitam.",
                score: 10,
                feedback: "Luar Biasa! Maklumat ini sangat konkrit (menyertakan peratusan 94.2%), tepat (Julai 2026), membandingkan dengan sasaran, serta menyatakan punca kelewatan secara profesional.",
                userSpeech: "Prestasi penghantaran Julai 2026 mencatat kadar On-Time Delivery sebanyak 94.2% berbanding sasaran KPI 95%. Faktor utama variasi adalah kelewatan pelepasan kastam di Bukit Kayu Hitam yang mengambil masa purata 4 jam berbanding biasa 2 jam."
            },
            {
                text: "Bulan lepas ada sedikit masalah kelewatan lori tetapi kami dah selesaikan. Saya rasa peratusan tepat masa kita dalam lingkungan 90% ke atas kot.",
                score: 4,
                feedback: "Tidak Meyakinkan! Penggunaan perkataan 'rasanya' atau 'kot' menunjukkan anda tidak pasti dengan data anda, menjejaskan kredibiliti profesional.",
                userSpeech: "Bulan lepas ada sedikit masalah kelewatan lori tetapi kami dah selesaikan. Saya rasa peratusan tepat masa kita dalam lingkungan 90% ke atas kot."
            }
        ]
    }
];

// Database for Lecturer Panel (loaded dynamically from localStorage)
let mockStudents = [];

function loadStudentsList() {
    const saved = localStorage.getItem("asas_kom_topik4_students_list");
    if (saved) {
        try {
            mockStudents = JSON.parse(saved);
        } catch (e) {
            console.error("Error loading student database", e);
            mockStudents = [];
        }
    } else {
        mockStudents = [];
    }
}

function saveStudentsList() {
    localStorage.setItem("asas_kom_topik4_students_list", JSON.stringify(mockStudents));
}

// Initial load
loadStudentsList();

// Quiz Questions (Module 4)
const quizQuestions = [
    {
        question: "1. Pengurus Logistik memaklumkan kepada pemandu bahawa mesyuarat diadakan bertujuan untuk 'menetapkan sasaran KPI penghantaran kontena bulanan'. Apakah ciri komunikasi berkesan yang dipamerkan di sini?",
        options: [
            { text: "Empati", value: "A" },
            { text: "Kejelasan Tujuan", value: "B" },
            { text: "Khabar Angin", value: "C" },
            { text: "Maklum Balas", value: "D" }
        ],
        answer: "B",
        explanation: "Kejelasan tujuan memastikan pengirim mempunyai matlamat yang jelas (iaitu menyatakan tujuan mesyuarat ditubuhkan) supaya penerima tidak keliru."
    },
    {
        question: "2. E-mel arahan kerja logistik menghantar senarai tugas yang merangkumi: Nombor kontena, nama pemandu, tarikh pelepasan kastam, dan lokasi pelabuhan destinasi. Tindakan ini mematuhi prinsip:",
        options: [
            { text: "Kesempurnaan (Completeness)", value: "A" },
            { text: "Ringkas (Conciseness)", value: "B" },
            { text: "Budi Bahasa (Courtesy)", value: "C" },
            { text: "Ketegasan (Concreteness)", value: "D" }
        ],
        answer: "A",
        explanation: "Kesempurnaan bermakna mesej mengandungi semua butiran maklumat yang diperlukan (siapa, apa, bila, di mana) bagi mengelakkan andaian tambahan."
    },
    {
        question: "3. Apakah perbezaan ketara antara Kemahiran Mendengar secara AKTIF dan PASIF?",
        options: [
            { text: "Mendengar aktif melibatkan komunikasi dua hala dengan memberi maklum balas dan pertanyaan, manakala mendengar pasif hanyalah komunikasi sehala tanpa respon.", value: "A" },
            { text: "Mendengar aktif tidak memerlukan sebarang usaha berbanding mendengar pasif.", value: "B" },
            { text: "Mendengar pasif memerlukan pendengar meringkaskan isi penting pembicara.", value: "C" },
            { text: "Mendengar aktif hanya berlaku apabila menggunakan telefon sahaja.", value: "D" }
        ],
        answer: "A",
        explanation: "Mendengar secara aktif memerlukan keterlibatan penuh, tindak balas non-verbal, ulasan, atau komen, manakala mendengar pasif hanyalah menerima maklumat tanpa bertindak balas."
    },
    {
        question: "4. Apakah peranan positif khabar angin (grapevine communication) dalam persekitaran syarikat logistik?",
        options: [
            { text: "Menimbulkan pergaduhan antara pemandu forklift dan pengurus.", value: "A" },
            { text: "Boleh digunakan untuk menyebarkan rahsia sulit syarikat kepada pesaing.", value: "B" },
            { text: "Menyampaikan maklumat dengan sangat cepat serta memberi gambaran mood atau persepsi pekerja kepada pengurusan.", value: "C" },
            { text: "Menggantikan sepenuhnya komunikasi bertulis seperti e-mel rasmi.", value: "D" }
        ],
        answer: "C",
        explanation: "Khabar angin merupakan saluran komunikasi tidak formal yang menyebarkan info dengan cepat dan bertindak sebagai pengukur awal emosi atau kegusaran pekerja."
    },
    {
        question: "5. 'Jualan kami meningkat sebanyak 25% pada bulan September berbanding bulan Ogos' berbanding dengan ayat 'Jualan kita ada peningkatan'. Prinsip 7C yang mana paling sesuai dikaitkan?",
        options: [
            { text: "Ringkas (Conciseness)", value: "A" },
            { text: "Ketegasan/Penekanan (Concreteness)", value: "B" },
            { text: "Kejelasan (Clarity)", value: "C" },
            { text: "Pertimbangan (Consideration)", value: "D" }
        ],
        answer: "B",
        explanation: "Prinsip Concreteness (Ketegasan/Penekanan) menuntut penggunaan data statistik atau fakta khusus yang boleh diukur untuk mengukuhkan kenyataan, mengelakkan kenyataan yang samar-samar."
    }
];

// App State
let appState = {
    progress: {
        unit1: false,
        unit2: false,
        unit3: false,
        simulation: false,
        quiz: false
    },
    simulation: {
        currentStep: 0,
        score: 0,
        completed: false,
        history: []
    },
    quiz: {
        answers: Array(quizQuestions.length).fill(null),
        submitted: false,
        score: 0
    },
    passingMark: 70
};

// DOM Elements & Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Login controls
    setupLoginScreen();
    
    // Tab switching setup
    setupTabs();
    
    // Module 1 (Ciri) setup
    setupCiriInteractions();
    
    // Module 2 (Flip cards) setup
    setupFlipCards();
    
    // Module 3 (Accordions) setup
    setupAccordions();
    
    // Lecturer Control Panel setup
    setupLecturerPanel();
    
    // Check buttons setup
    setupGlobalEvents();
});

// Load app state from local storage based on active user
function loadState() {
    if (!currentUser.id) return;
    const saved = localStorage.getItem(`asas_kom_topik4_state_${currentUser.id}`);
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch (e) {
            console.error("Error parsing saved state", e);
        }
    } else {
        // Reset to default clean state for new user
        appState = {
            progress: { unit1: false, unit2: false, unit3: false, simulation: false, quiz: false },
            simulation: { currentStep: 0, score: 0, completed: false, history: [] },
            quiz: { answers: Array(quizQuestions.length).fill(null), submitted: false, score: 0 },
            passingMark: 70
        };
    }
}

// Save state to local storage based on active user
function saveState() {
    if (currentUser.id) {
        localStorage.setItem(`asas_kom_topik4_state_${currentUser.id}`, JSON.stringify(appState));
    }
    updateProgressUI();
    updateActiveStudentMockProgress();
}

// Update the current user progress in the mock student database for the lecturer panel
function updateActiveStudentMockProgress() {
    if (!currentUser.id) return;
    
    let overallProgress = calculateOverallProgress();
    let simScoreSum = appState.simulation.score;
    let finalQuizScore = appState.quiz.submitted ? Math.round((appState.quiz.score / quizQuestions.length) * 100) : 0;
    
    // Find or update the user in the mock students database
    let activeStudent = mockStudents.find(s => s.id === currentUser.id);
    if (!activeStudent) {
        activeStudent = {
            id: currentUser.id,
            name: currentUser.name,
            progress: overallProgress,
            quizScore: finalQuizScore,
            simulationScore: simScoreSum,
            lastActive: new Date().toISOString().replace('T', ' ').substring(0, 16)
        };
        mockStudents.unshift(activeStudent);
    } else {
        activeStudent.name = currentUser.name;
        activeStudent.progress = overallProgress;
        activeStudent.quizScore = finalQuizScore;
        activeStudent.simulationScore = simScoreSum;
        activeStudent.lastActive = new Date().toISOString().replace('T', ' ').substring(0, 16);
    }
    saveStudentsList();
}

// Calculate overall progress percentage
function calculateOverallProgress() {
    const parts = [
        appState.progress.unit1,
        appState.progress.unit2,
        appState.progress.unit3,
        appState.progress.simulation,
        appState.progress.quiz
    ];
    const completed = parts.filter(Boolean).length;
    return Math.round((completed / parts.length) * 100);
}

// Current Logged In User
let currentUser = { id: null, name: null };

// Load progress for mock students from localStorage if they have saved states
function loadMockStudentsProgress() {
    mockStudents.forEach(student => {
        if (currentUser.id && student.id === currentUser.id) return;
        
        const saved = localStorage.getItem(`asas_kom_topik4_state_${student.id}`);
        if (saved) {
            try {
                const state = JSON.parse(saved);
                
                // Calculate progress
                const parts = [
                    state.progress.unit1,
                    state.progress.unit2,
                    state.progress.unit3,
                    state.progress.simulation,
                    state.progress.quiz
                ];
                const completed = parts.filter(Boolean).length;
                student.progress = Math.round((completed / parts.length) * 100);
                
                student.quizScore = state.quiz.submitted ? Math.round((state.quiz.score / quizQuestions.length) * 100) : 0;
                student.simulationScore = state.simulation.score;
            } catch (e) {
                console.error("Error loading mock student progress", e);
            }
        } else {
            // Setup default empty values if no state exists yet
            student.progress = 0;
            student.quizScore = 0;
            student.simulationScore = 0;
        }
    });
}

// Login Student function
function loginStudent(id, name) {
    currentUser.id = id;
    currentUser.name = name;
    
    // Save to localStorage session
    localStorage.setItem("asas_kom_topik4_current_user", JSON.stringify(currentUser));
    
    // Add user or update user in mock students database
    updateActiveStudentMockProgress();
    
    // Load student state
    loadState();
    
    // Sync other mock students progress from localStorage
    loadMockStudentsProgress();
    
    // Update badge in header
    const badge = document.getElementById("current-user-badge");
    if (badge) {
        badge.textContent = `👤 ${name} (${id})`;
        badge.style.display = "inline-flex";
    }
    
    // Show logout button
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
        logoutBtn.style.display = "inline-flex";
    }
    
    // Switch screens
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app-main-content").style.display = "block";
    
    // Reinitialize interactive elements for this user
    initSimulation();
    renderQuiz();
    updateProgressUI();
}

// Logout Student function
function logoutStudent() {
    currentUser.id = null;
    currentUser.name = null;
    localStorage.removeItem("asas_kom_topik4_current_user");
    
    // Reset login inputs
    document.getElementById("student-name").value = "";
    document.getElementById("student-id").value = "";
    
    // Switch screens
    document.getElementById("app-main-content").style.display = "none";
    document.getElementById("login-screen").style.display = "flex";
}

// Setup Login screen bindings
function setupLoginScreen() {
    const loginSubmitBtn = document.getElementById("btn-login-submit");
    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener("click", () => {
            let name = document.getElementById("student-name").value.trim();
            let id = document.getElementById("student-id").value.trim().toUpperCase();
            
            if (!name) {
                alert("Sila masukkan nama penuh anda.");
                return;
            }
            if (!id) {
                alert("Sila masukkan ID Pelajar anda.");
                return;
            }
            
            // Create user state in mock database if it doesn't exist
            let existing = mockStudents.find(s => s.id === id);
            if (!existing) {
                mockStudents.push({
                    id: id,
                    name: name,
                    progress: 0,
                    quizScore: 0,
                    simulationScore: 0,
                    lastActive: new Date().toISOString().replace('T', ' ').substring(0, 16)
                });
                saveStudentsList();
            }
            
            loginStudent(id, name);
        });
    }
    
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logoutStudent);
    }
    
    // Check if session exists in localStorage
    const savedSession = localStorage.getItem("asas_kom_topik4_current_user");
    if (savedSession) {
        try {
            const user = JSON.parse(savedSession);
            loginStudent(user.id, user.name);
        } catch (e) {
            console.error("Error reading saved user session", e);
            logoutStudent();
        }
    } else {
        // Show login screen, hide main app
        document.getElementById("app-main-content").style.display = "none";
        document.getElementById("login-screen").style.display = "flex";
    }
}

// Update progress bars and numbers across the page
function updateProgressUI() {
    const overallProgress = calculateOverallProgress();
    
    // Header banner progress fill
    const bannerFill = document.getElementById("banner-progress-fill");
    const bannerPercent = document.getElementById("banner-progress-percent");
    if (bannerFill && bannerPercent) {
        bannerFill.style.width = `${overallProgress}%`;
        bannerPercent.textContent = `${overallProgress}%`;
    }
    
    // Stats section
    const statProgress = document.getElementById("stat-overall-progress");
    if (statProgress) {
        statProgress.textContent = `${overallProgress}%`;
    }
    
    const statQuiz = document.getElementById("stat-quiz-score");
    if (statQuiz) {
        if (appState.quiz.submitted) {
            const finalScore = Math.round((appState.quiz.score / quizQuestions.length) * 100);
            statQuiz.textContent = `${finalScore}%`;
            statQuiz.style.color = finalScore >= appState.passingMark ? "var(--success)" : "var(--error)";
        } else {
            statQuiz.textContent = "-";
            statQuiz.style.color = "var(--primary-pink)";
        }
    }
    
    // Complete sections buttons statuses
    const mark1Btn = document.getElementById("mark-unit1-complete");
    if (mark1Btn) {
        if (appState.progress.unit1) {
            mark1Btn.textContent = "Selesai ✓";
            mark1Btn.style.backgroundColor = "var(--success)";
        } else {
            mark1Btn.textContent = "Tandakan Selesai";
            mark1Btn.style.backgroundColor = "var(--primary-pink)";
        }
    }
    
    const mark2Btn = document.getElementById("mark-unit2-complete");
    if (mark2Btn) {
        if (appState.progress.unit2) {
            mark2Btn.textContent = "Selesai ✓";
            mark2Btn.style.backgroundColor = "var(--success)";
        } else {
            mark2Btn.textContent = "Tandakan Selesai";
            mark2Btn.style.backgroundColor = "var(--primary-pink)";
        }
    }
    
    const mark3Btn = document.getElementById("mark-unit3-complete");
    if (mark3Btn) {
        if (appState.progress.unit3) {
            mark3Btn.textContent = "Selesai ✓";
            mark3Btn.style.backgroundColor = "var(--success)";
        } else {
            mark3Btn.textContent = "Tandakan Selesai";
            mark3Btn.style.backgroundColor = "var(--primary-pink)";
        }
    }
}

// Setup navigation tabs
function setupTabs() {
    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            
            tab.classList.add("active");
            const activePanel = document.getElementById(target);
            if (activePanel) {
                activePanel.classList.add("active");
            }
            
            // Scroll to the top of the tab content smoothly
            window.scrollTo({
                top: document.querySelector(".tabs-navigation").offsetTop - 100,
                behavior: "smooth"
            });
        });
    });
}

// Setup interactions for Ciri-ciri cards (Module 1)
function setupCiriInteractions() {
    const cards = document.querySelectorAll(".ciri-card");
    const detailsContainer = document.getElementById("ciri-details-container");
    
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const ciriKey = card.dataset.ciri;
            const data = ciriData[ciriKey];
            
            if (!data) return;
            
            // Highlight selected card
            cards.forEach(c => c.classList.remove("active-card"));
            card.classList.add("active-card");
            
            // Render details
            let pointsHtml = "";
            data.points.forEach(point => {
                pointsHtml += `<li>${point}</li>`;
            });
            
            detailsContainer.innerHTML = `
                <div class="ciri-details-box">
                    <div class="ciri-details-title">
                        <span>💡</span> ${data.title}
                    </div>
                    <div class="details-grid">
                        <div class="details-list-box">
                            <h4>Penerangan & Perincian</h4>
                            <ul>
                                ${pointsHtml}
                            </ul>
                        </div>
                        <div class="example-box">
                            <span class="logistics-scenario-tag">Senario Logistik / SLK</span>
                            <h4>Contoh Pengaplikasian</h4>
                            <p>"${data.scenario}"</p>
                        </div>
                    </div>
                </div>
            `;
            
            detailsContainer.style.display = "block";
            
            // Smooth scroll to details box
            detailsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    });
    
    // Click the first card as default
    if (cards.length > 0) {
        cards[0].click();
    }
}

// Setup flip card logic (Module 2)
function setupFlipCards() {
    const cards = document.querySelectorAll(".flip-card");
    
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            // If user clicked the button to flip back, flip Y
            if (e.target.classList.contains("btn-flip-back")) {
                card.classList.remove("flipped");
                e.stopPropagation();
                return;
            }
            
            // Otherwise toggle
            card.classList.toggle("flipped");
        });
    });
}

// Setup accordions for 7C principles (Module 3)
function setupAccordions() {
    const panels = document.querySelectorAll(".toggle-panel");
    
    panels.forEach(panel => {
        const header = panel.querySelector(".toggle-header");
        header.addEventListener("click", () => {
            const isActive = panel.classList.contains("active-panel");
            
            // Close all
            panels.forEach(p => p.classList.remove("active-panel"));
            
            // Toggle clicked
            if (!isActive) {
                panel.classList.add("active-panel");
            }
        });
    });
    
    // Open first by default
    if (panels.length > 0) {
        panels[0].classList.add("active-panel");
    }
}

// Logistics Scenario Simulator logic
function initSimulation() {
    const chatHistory = document.getElementById("sim-chat-history");
    const optionsArea = document.getElementById("sim-options-area");
    const sidebarObjective = document.getElementById("sim-objective-text");
    const scoreNum = document.getElementById("sim-score-value");
    
    if (appState.simulation.completed) {
        showSimulationResult();
        return;
    }
    
    scoreNum.textContent = appState.simulation.score;
    
    // Clear chat and output first npc message
    chatHistory.innerHTML = "";
    optionsArea.innerHTML = "";
    
    const stepData = simSteps[appState.simulation.currentStep];
    sidebarObjective.textContent = stepData.objective;
    
    // Add NPC message to chat
    addChatMessage(stepData.npcMessage, "npc");
    
    // Display options
    stepData.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "sim-option-btn";
        btn.innerHTML = `<strong>Pilihan ${idx + 1}:</strong> ${opt.text}`;
        btn.addEventListener("click", () => handleSimulationChoice(opt));
        optionsArea.appendChild(btn);
    });
}

function addChatMessage(text, sender) {
    const chatHistory = document.getElementById("sim-chat-history");
    const msg = document.createElement("div");
    msg.className = `sim-message ${sender}`;
    msg.textContent = text;
    chatHistory.appendChild(msg);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function handleSimulationChoice(choice) {
    const optionsArea = document.getElementById("sim-options-area");
    optionsArea.innerHTML = ""; // Disable choices immediately
    
    // Add user speech to chat
    addChatMessage(choice.userSpeech, "user");
    
    // Add feedback after short delay
    setTimeout(() => {
        addChatMessage(choice.feedback, "feedback");
        
        // Update score
        appState.simulation.score += choice.score;
        document.getElementById("sim-score-value").textContent = appState.simulation.score;
        
        // Setup next button
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn btn-primary";
        nextBtn.style.marginTop = "1rem";
        nextBtn.style.width = "100%";
        nextBtn.innerHTML = appState.simulation.currentStep < simSteps.length - 1 ? "Seterusnya ➔" : "Lihat Keputusan ➔";
        
        nextBtn.addEventListener("click", () => {
            appState.simulation.currentStep++;
            if (appState.simulation.currentStep < simSteps.length) {
                initSimulation();
            } else {
                appState.simulation.completed = true;
                appState.progress.simulation = true;
                saveState();
                showSimulationResult();
            }
        });
        
        optionsArea.appendChild(nextBtn);
    }, 800);
}

function showSimulationResult() {
    const chatBody = document.getElementById("sim-body-container");
    const totalScore = appState.simulation.score;
    const maxScore = simSteps.length * 10;
    const percent = Math.round((totalScore / maxScore) * 100);
    
    let heading = "Hebat! Anda adalah Eksekutif Logistik yang Cemerlang!";
    let desc = "Komunikasi anda sangat berkesan dan mencerminkan standard profesional 7C dalam industri logistik. Maklum balas kerja lengkap dan memuaskan pelanggan.";
    let icon = "🏆";
    
    if (percent < 50) {
        heading = "Cubaan yang Baik, Perlu Lebih Latihan";
        desc = "Sesetengah komunikasi anda agak kasar atau tidak lengkap. Pelanggan atau pemandu lori mungkin keliru dengan arahan anda. Cuba lagi untuk skor sempurna!";
        icon = "✍️";
    } else if (percent < 80) {
        heading = "Sangat Baik! Hampir Sempurna!";
        desc = "Kemahiran komunikasi anda kukuh, namun terdapat butiran kecil yang boleh diperbaiki untuk memastikan kelancaran rantaian bekalan logistik syarikat.";
        icon = "⭐";
    }
    
    chatBody.innerHTML = `
        <div class="sim-result-screen">
            <div class="sim-result-icon">${icon}</div>
            <h2>${heading}</h2>
            <p style="margin: 1rem 0; max-width: 600px; color: var(--text-muted);">${desc}</p>
            <div style="background-color: var(--pastel-blue); padding: 1.5rem 3rem; border-radius: var(--radius-md); margin-bottom: 2rem; border: 1px solid var(--baby-blue);">
                <div style="font-size: 0.9rem; color: var(--text-dark); font-weight: 600;">Jumlah Skor Anda:</div>
                <div style="font-size: 3rem; font-weight: 800; color: var(--primary-pink);">${totalScore} / ${maxScore}</div>
                <div style="font-size: 1rem; color: var(--dark-blue); font-weight: 700;">Gred Kebolehan: ${percent}%</div>
            </div>
            <button class="btn btn-primary" id="btn-restart-sim">Ulangi Simulasi</button>
        </div>
    `;
    
    document.getElementById("btn-restart-sim").addEventListener("click", () => {
        appState.simulation.currentStep = 0;
        appState.simulation.score = 0;
        appState.simulation.completed = false;
        appState.progress.simulation = false;
        saveState();
        
        // Restore simulation body layout
        chatBody.innerHTML = `
            <div class="sim-body">
                <div class="sim-sidebar">
                    <div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-dark);">Tugasan Simulasi</h4>
                        <div class="sim-objective" id="sim-objective-text">Objektif: Selesaikan aduan kontena lewat.</div>
                    </div>
                    <div class="sim-score-box">
                        <div class="sim-score-num" id="sim-score-value">0</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Markah Prestasi</div>
                    </div>
                </div>
                <div class="sim-chat-area">
                    <div class="sim-chat-history" id="sim-chat-history"></div>
                    <div class="sim-options-area" id="sim-options-area"></div>
                </div>
            </div>
        `;
        initSimulation();
    });
}

// Render and setup Quiz
function renderQuiz() {
    const container = document.getElementById("quiz-questions-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    quizQuestions.forEach((q, qIdx) => {
        const questionCard = document.createElement("div");
        questionCard.className = "quiz-card";
        questionCard.id = `quiz-card-${qIdx}`;
        
        let optionsHtml = "";
        q.options.forEach(opt => {
            const isSelected = appState.quiz.answers[qIdx] === opt.value;
            let optionClass = "quiz-option";
            if (isSelected) optionClass += " selected";
            
            if (appState.quiz.submitted) {
                if (opt.value === q.answer) {
                    optionClass += " correct";
                } else if (isSelected) {
                    optionClass += " incorrect";
                }
            }
            
            optionsHtml += `
                <div class="${optionClass}" data-qidx="${qIdx}" data-val="${opt.value}">
                    <span class="quiz-option-letter">${opt.value}</span>
                    <span style="font-size: 0.9rem;">${opt.text}</span>
                </div>
            `;
        });
        
        let feedbackClass = "quiz-feedback";
        let feedbackText = "";
        if (appState.quiz.submitted) {
            feedbackClass += " show";
            const isCorrect = appState.quiz.answers[qIdx] === q.answer;
            feedbackClass += isCorrect ? " correct-feedback" : " incorrect-feedback";
            feedbackText = `<strong>${isCorrect ? "Betul! ✓" : "Salah ✗"}</strong> - ${q.explanation}`;
        }
        
        questionCard.innerHTML = `
            <div class="quiz-question-num">SOALAN ${qIdx + 1}</div>
            <div class="quiz-question-text">${q.question}</div>
            <div class="quiz-options-list">${optionsHtml}</div>
            <div class="${feedbackClass}">${feedbackText}</div>
        `;
        
        container.appendChild(questionCard);
    });
    
    // Add event listeners to options (only if not submitted)
    if (!appState.quiz.submitted) {
        document.querySelectorAll(".quiz-option").forEach(opt => {
            opt.addEventListener("click", () => {
                const qIdx = parseInt(opt.dataset.qidx);
                const val = opt.dataset.val;
                
                // Save answer
                appState.quiz.answers[qIdx] = val;
                
                // Visual toggle
                const card = document.getElementById(`quiz-card-${qIdx}`);
                card.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
                opt.classList.add("selected");
                
                saveState();
                checkQuizCompletionStatus();
            });
        });
    }
    
    // Setup quiz buttons
    const btnSubmit = document.getElementById("btn-submit-quiz");
    const btnReset = document.getElementById("btn-reset-quiz");
    const scoreBox = document.getElementById("quiz-score-container");
    
    if (appState.quiz.submitted) {
        btnSubmit.style.display = "none";
        btnReset.style.display = "inline-flex";
        
        const finalScore = Math.round((appState.quiz.score / quizQuestions.length) * 100);
        scoreBox.innerHTML = `
            <div style="background-color: ${finalScore >= appState.passingMark ? "var(--success-light)" : "var(--error-light)"}; border: 2px solid ${finalScore >= appState.passingMark ? "var(--success)" : "var(--error)"}; padding: 1.5rem; border-radius: var(--radius-md); text-align: center; max-width: 400px; margin: 0 auto 1.5rem auto;">
                <h3 style="color: ${finalScore >= appState.passingMark ? "var(--success)" : "var(--error)"}">${finalScore >= appState.passingMark ? "Tahniah! Anda Lulus!" : "Sila Cuba Lagi!"}</h3>
                <div style="font-size: 2.5rem; font-weight: 800; margin: 0.5rem 0;">${appState.quiz.score} / ${quizQuestions.length}</div>
                <div style="font-size: 0.9rem; color: var(--text-dark); font-weight: 600;">Peratusan: ${finalScore}% (Markah Lulus: ${appState.passingMark}%)</div>
            </div>
        `;
        scoreBox.style.display = "block";
    } else {
        btnSubmit.style.display = "inline-flex";
        btnReset.style.display = "none";
        scoreBox.style.display = "none";
        checkQuizCompletionStatus();
    }
}

function checkQuizCompletionStatus() {
    const allAnswered = appState.quiz.answers.every(ans => ans !== null);
    const btnSubmit = document.getElementById("btn-submit-quiz");
    if (btnSubmit) {
        btnSubmit.disabled = !allAnswered;
        btnSubmit.style.opacity = allAnswered ? "1" : "0.5";
        btnSubmit.style.cursor = allAnswered ? "pointer" : "not-allowed";
    }
}

function submitQuiz() {
    if (appState.quiz.submitted) return;
    
    let correctCount = 0;
    quizQuestions.forEach((q, idx) => {
        if (appState.quiz.answers[idx] === q.answer) {
            correctCount++;
        }
    });
    
    appState.quiz.submitted = true;
    appState.quiz.score = correctCount;
    appState.progress.quiz = true;
    
    saveState();
    renderQuiz();
    
    // Smooth scroll to score container
    document.getElementById("quiz-score-container").scrollIntoView({ behavior: "smooth" });
}

function resetQuiz() {
    appState.quiz.answers = Array(quizQuestions.length).fill(null);
    appState.quiz.submitted = false;
    appState.quiz.score = 0;
    appState.progress.quiz = false;
    
    saveState();
    renderQuiz();
}

// Lecturer Control Panel
function setupLecturerPanel() {
    const modal = document.getElementById("lecturer-modal");
    const openBtn = document.getElementById("btn-open-lecturer");
    const loginOpenBtn = document.getElementById("btn-login-open-lecturer");
    const closeBtn = document.getElementById("btn-close-lecturer");
    
    if (openBtn) {
        openBtn.addEventListener("click", () => {
            updateActiveStudentMockProgress();
            renderLecturerData();
            modal.classList.add("active");
        });
    }
    
    if (loginOpenBtn) {
        loginOpenBtn.addEventListener("click", () => {
            updateActiveStudentMockProgress();
            renderLecturerData();
            modal.classList.add("active");
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }
    
    // Click outside modal content to close
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
    
    // Passing mark slider setting listener
    const passingSlider = document.getElementById("passing-mark-slider");
    const passingVal = document.getElementById("passing-mark-value");
    if (passingSlider && passingVal) {
        passingSlider.value = appState.passingMark;
        passingVal.textContent = `${appState.passingMark}%`;
        
        passingSlider.addEventListener("input", (e) => {
            appState.passingMark = parseInt(e.target.value);
            passingVal.textContent = `${appState.passingMark}%`;
            saveState();
            // Re-render quiz if submitted to update success/fail colors
            if (appState.quiz.submitted) {
                renderQuiz();
            }
        });
    }
    
    // CSV Export button
    const csvBtn = document.getElementById("btn-export-csv");
    if (csvBtn) {
        csvBtn.addEventListener("click", exportLecturerCSV);
    }
    
    // Reset class data button
    const resetClassBtn = document.getElementById("btn-reset-class");
    if (resetClassBtn) {
        resetClassBtn.addEventListener("click", () => {
            if (confirm("Adakah anda pasti mahu menetapkan semula kemajuan seluruh kelas? Semua rekod progress pelajar akan diset semula ke 0%.")) {
                const resetState = {
                    progress: { unit1: false, unit2: false, unit3: false, simulation: false, quiz: false },
                    simulation: { currentStep: 0, score: 0, completed: false, history: [] },
                    quiz: { answers: Array(quizQuestions.length).fill(null), submitted: false, score: 0 },
                    passingMark: 70
                };
                mockStudents.forEach(student => {
                    localStorage.setItem(`asas_kom_topik4_state_${student.id}`, JSON.stringify(resetState));
                });
                localStorage.removeItem("asas_kom_topik4_current_user");
                localStorage.removeItem("asas_kom_topik4_students_list");
                
                // Reload location to reset layout cleanly
                window.location.reload();
            }
        });
    }
}

// Global individual student reset function exposed to window
window.resetIndividualStudent = function(studentId) {
    if (confirm(`Adakah anda pasti mahu menetapkan semula kemajuan untuk pelajar ${studentId}?`)) {
        const resetState = {
            progress: { unit1: false, unit2: false, unit3: false, simulation: false, quiz: false },
            simulation: { currentStep: 0, score: 0, completed: false, history: [] },
            quiz: { answers: Array(quizQuestions.length).fill(null), submitted: false, score: 0 },
            passingMark: 70
        };
        localStorage.setItem(`asas_kom_topik4_state_${studentId}`, JSON.stringify(resetState));
        
        // If this is the currently logged in student, load the reset state live
        if (currentUser.id === studentId) {
            appState = resetState;
            initSimulation();
            renderQuiz();
            saveState();
        } else {
            // Otherwise, update the mock database array item
            const s = mockStudents.find(student => student.id === studentId);
            if (s) {
                s.progress = 0;
                s.quizScore = 0;
                s.simulationScore = 0;
            }
        }
        
        saveStudentsList();
        renderLecturerData();
        alert(`Kemajuan pelajar ${studentId} telah diset semula ke 0%.`);
    }
};

function renderLecturerData() {
    const tableBody = document.getElementById("lecturer-students-list");
    const avgProgress = document.getElementById("lecturer-avg-progress");
    const avgScore = document.getElementById("lecturer-avg-score");
    const totalStudentsEl = document.getElementById("lecturer-total-students");
    
    if (!tableBody) return;
    
    // Clear
    tableBody.innerHTML = "";
    
    // Reload mock students live progress from localStorage before rendering
    loadMockStudentsProgress();
    
    let totalProgress = 0;
    let totalQuizScore = 0;
    let studentsWithQuiz = 0;
    
    mockStudents.forEach(student => {
        totalProgress += student.progress;
        if (student.quizScore > 0 || student.progress === 100) {
            totalQuizScore += student.quizScore;
            studentsWithQuiz++;
        }
        
        const isPassed = student.quizScore >= appState.passingMark;
        const statusClass = student.progress === 100 ? "complete" : "in-progress";
        const statusText = student.progress === 100 ? "Selesai" : "Sedang Belajar";
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${student.id}</strong></td>
            <td>${student.name}</td>
            <td>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <div class="progress-bar-container" style="width:70px; height:8px; margin-bottom:0;">
                        <div class="progress-bar-fill" style="width:${student.progress}%;"></div>
                    </div>
                    <span>${student.progress}%</span>
                </div>
            </td>
            <td>
                <span style="font-weight:700; color: ${isPassed ? "var(--success)" : "var(--error)"}">
                    ${student.quizScore}%
                </span>
            </td>
            <td>${student.simulationScore} pts</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td><small>${student.lastActive}</small></td>
            <td style="text-align: center;">
                <button class="btn-reset-single" onclick="resetIndividualStudent('${student.id}')">
                    🔄 Reset
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    
    // Update overview numbers
    totalStudentsEl.textContent = mockStudents.length;
    avgProgress.textContent = mockStudents.length > 0 ? `${Math.round(totalProgress / mockStudents.length)}%` : "0%";
    avgScore.textContent = studentsWithQuiz > 0 ? `${Math.round(totalQuizScore / studentsWithQuiz)}%` : "0%";
}

function exportLecturerCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID Pelajar,Nama Pelajar,Kemajuan (%),Skor Kuiz (%),Markah Simulasi,Status,Aktif Terakhir\n";
    
    mockStudents.forEach(s => {
        const status = s.progress === 100 ? "Selesai" : "Sedang Belajar";
        csvContent += `"${s.id}","${s.name}",${s.progress},${s.quizScore},${s.simulationScore},"${status}","${s.lastActive}"\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Prestasi_Pelajar_Komunikasi_Perniagaan_Topik_4.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download notes in PDF format
function generatePDF() {
    const element = document.getElementById("print-notes-template");
    if (!element) return;
    
    // Show spinner or modal loading if necessary
    const downloadBtn = document.getElementById("btn-download-pdf");
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = "⏳ Menjana PDF...";
    downloadBtn.disabled = true;

    // Check if html2pdf library is loaded (handles offline or sandbox environment gracefully)
    if (typeof html2pdf === 'undefined') {
        alert("Peringatan: Perpustakaan PDF luar tidak dimuatkan (kemungkinan tiada internet). Sistem akan membuka menu cetakan pelayar anda. Sila pilih 'Simpan sebagai PDF' (Save as PDF) dalam pilihan pencetak untuk memuat turun.");
        window.print();
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        return;
    }
    
    // Configure html2pdf options
    const opt = {
        margin:       10,
        filename:     'TOPIK_4_KEMAHIRAN_KOMUNIKASI_EFEKTIF.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css'] }
    };
    
    // Temporary toggle block visibility for html2pdf rendering
    element.style.display = "block";
    
    // Generate PDF and then hide template again
    html2pdf().set(opt).from(element).save().then(() => {
        element.style.display = "none";
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        
        // Track PDF download as part of overall progress
        // Trigger a notification or confirmation
        alert("Nota berjaya dimuat turun dalam format PDF!");
    }).catch(err => {
        console.error("PDF generation error", err);
        element.style.display = "none";
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        alert("Gagal memuat turun PDF. Sila cuba lagi.");
    });
}

// Global setups and other buttons checking
function setupGlobalEvents() {
    // Setups for Unit 1, 2, and 3 Mark Completed button
    const mark1Btn = document.getElementById("mark-unit1-complete");
    if (mark1Btn) {
        mark1Btn.addEventListener("click", () => {
            appState.progress.unit1 = !appState.progress.unit1;
            saveState();
        });
    }
    
    const mark2Btn = document.getElementById("mark-unit2-complete");
    if (mark2Btn) {
        mark2Btn.addEventListener("click", () => {
            appState.progress.unit2 = !appState.progress.unit2;
            saveState();
        });
    }
    
    const mark3Btn = document.getElementById("mark-unit3-complete");
    if (mark3Btn) {
        mark3Btn.addEventListener("click", () => {
            appState.progress.unit3 = !appState.progress.unit3;
            saveState();
        });
    }
    
    // Quiz buttons
    const btnSubmit = document.getElementById("btn-submit-quiz");
    if (btnSubmit) {
        btnSubmit.addEventListener("click", submitQuiz);
    }
    
    const btnReset = document.getElementById("btn-reset-quiz");
    if (btnReset) {
        btnReset.addEventListener("click", resetQuiz);
    }
    
    // PDF download
    const pdfBtn = document.getElementById("btn-download-pdf");
    if (pdfBtn) {
        pdfBtn.addEventListener("click", generatePDF);
    }
    
    // Next sections triggers in tabs
    const nextToUnit2 = document.getElementById("btn-next-to-unit2");
    if (nextToUnit2) {
        nextToUnit2.addEventListener("click", () => {
            appState.progress.unit1 = true;
            saveState();
            document.querySelector('[data-tab="tab-unit2"]').click();
        });
    }
    
    const nextToUnit3 = document.getElementById("btn-next-to-unit3");
    if (nextToUnit3) {
        nextToUnit3.addEventListener("click", () => {
            appState.progress.unit2 = true;
            saveState();
            document.querySelector('[data-tab="tab-unit3"]').click();
        });
    }
    
    const nextToSim = document.getElementById("btn-next-to-sim");
    if (nextToSim) {
        nextToSim.addEventListener("click", () => {
            appState.progress.unit3 = true;
            saveState();
            document.querySelector('[data-tab="tab-simulation"]').click();
        });
    }
}
