import type { Topic } from "@/types";

export const movementTopics: Topic[] = [
  { id: "benefits", title: "Manfaat bergerak secara teratur", summary: "Aktivitas mendukung kesehatan tubuh dan pikiran.",
    points: ["Aktivitas teratur berkaitan dengan kesehatan jantung, suasana hati, tidur, dan energi yang lebih baik.", "Latihan kekuatan mendukung otot dan tulang.", "Bergerak dapat membantu mengurangi kekakuan akibat duduk.", "Aktivitas apa pun lebih baik daripada tidak sama sekali, dan kegiatan yang menyenangkan lebih mudah dipertahankan.", "Banyak organisasi kesehatan menyarankan sekitar 150 menit aktivitas intensitas sedang per minggu bagi orang dewasa, disertai latihan kekuatan setidaknya 2 hari. Anak muda umumnya memerlukan aktivitas harian lebih banyak. Mintalah saran dokter atau pelatih yang sesuai untukmu."] },
  { id: "warmup", title: "Dasar pemanasan", summary: "Siapkan tubuh dalam 5 hingga 10 menit.",
    points: ["Mulailah dengan gerakan ringan seperti jalan cepat atau bersepeda santai.", "Tambahkan gerakan dinamis: memutar lengan, mengayunkan kaki, memutar pinggul, dan jongkok tanpa beban.", "Coba versi lebih ringan dari latihan yang akan dilakukan.", "Tubuh seharusnya terasa lebih hangat dan leluasa bergerak, bukan lelah."] },
  { id: "cooldown", title: "Dasar pendinginan", summary: "Biarkan tubuh kembali tenang secara bertahap.",
    points: ["Kurangi tempo dengan berjalan santai selama 3 hingga 5 menit.", "Bernapaslah perlahan sampai napas dan detak jantung kembali tenang.", "Peregangan lembut pada otot yang dilatih bersifat opsional, tetapi dapat terasa nyaman.", "Minumlah air dan makan saat lapar."] },
  { id: "mobility", title: "Mobilitas", summary: "Kemampuan menggerakkan sendi dengan nyaman.",
    points: ["Lakukan gerakan rutin seperti cat-cow, putaran pinggul, rotasi punggung tengah, dan putaran pergelangan kaki.", "Lakukan gerakan yang terkontrol dan lancar.", "Mobilitas berkembang melalui latihan konsisten, sedikit demi sedikit setiap hari.", "Peregangan dan latihan kekuatan sama-sama dapat meningkatkan mobilitas."] },
  { id: "coordination", title: "Koordinasi dan keseimbangan", summary: "Kemampuan tubuh bergerak secara terpadu.",
    points: ["Berlatihlah berdiri dengan satu kaki di dekat dinding atau penyangga yang kokoh.", "Melempar dan menangkap, lompat tali, serta menari melatih koordinasi.", "Yoga, tai chi, dan seni bela diri dapat mengembangkan keseimbangan dan kesadaran tubuh.", "Mulailah dari gerakan sederhana dan tingkatkan secara perlahan."] },
  { id: "strength", title: "Dasar latihan kekuatan", summary: "Gerakkan tubuh dan tingkatkan beban bertahap.",
    points: ["Pola dasar: jongkok, menekuk pinggul, mendorong, menarik, membawa beban, dan menstabilkan otot inti.", "Mulailah dengan gerakan tanpa beban seperti squat, glute bridge, push-up di dinding atau posisi miring, dan gerakan menarik.", "Pelajari teknik yang benar terlebih dahulu, lalu tingkatkan repetisi, set, atau beban secara bertahap.", "Dua atau tiga sesi per minggu adalah awal yang baik bagi kebanyakan orang.", "Berhenti jika terasa nyeri tajam. Otot lelah adalah hal normal, tetapi nyeri sendi tidak."], tip: "Pemula sangat terbantu dengan bimbingan pelatih berkualifikasi, terutama saat berlatih angkat beban." },
  { id: "cardio", title: "Aktivitas kardio", summary: "Aktivitas yang meningkatkan detak jantung.",
    points: ["Berjalan, bersepeda, berenang, menari, joging, olahraga tim, dan mendaki semuanya termasuk.", "Intensitas sedang: kamu masih bisa berbicara, tetapi tidak bisa bernyanyi.", "Mulailah selama 10 hingga 20 menit dan tingkatkan secara bertahap.", "Pilih kegiatan yang kamu sukai agar lebih mudah dilakukan secara rutin."] },
  { id: "recovery", title: "Pemulihan", summary: "Tubuh beradaptasi saat beristirahat.",
    points: ["Pemulihan memberi waktu bagi otot untuk memperbaiki diri dan tubuh untuk beradaptasi.", "Tidur, makanan, air, dan pengelolaan stres mendukung pemulihan.", "Aktivitas ringan seperti berjalan dapat membantu tubuh terasa lebih baik pada hari yang santai.", "Sedikit nyeri otot selama satu atau dua hari adalah hal normal. Nyeri tajam atau berkepanjangan bukan hal yang normal."] },
  { id: "rest", title: "Hari istirahat", summary: "Istirahat adalah bagian dari latihan.",
    points: ["Rencanakan setidaknya satu atau dua hari dengan aktivitas lebih ringan setiap minggu.", "Tanda kamu mungkin perlu lebih banyak istirahat: lelah terus-menerus, tidur buruk, suasana hati menurun, atau nyeri yang tak kunjung hilang.", "Hari istirahat dapat diisi dengan berjalan santai atau peregangan lembut.", "Istirahat bukan berarti malas. Istirahat membantu kemajuan yang aman."] },
  { id: "sleep", title: "Tidur dan pemulihan", summary: "Tidur adalah salah satu cara terbaik untuk memulihkan tubuh.",
    points: ["Remaja umumnya membutuhkan sekitar 8 hingga 10 jam tidur, sedangkan orang dewasa sekitar 7 hingga 9 jam.", "Usahakan jadwal tidur teratur, termasuk pada akhir pekan jika memungkinkan.", "Kurangi layar terang dan makanan berat menjelang waktu tidur.", "Kamar yang sejuk, gelap, dan tenang dapat membantu.", "Jika sering kesulitan tidur, konsultasikan dengan tenaga kesehatan."] },
  { id: "safety", title: "Keamanan saat berolahraga", summary: "Tetap aman dan lakukan secara berkelanjutan.",
    points: ["Tingkatkan intensitas secara bertahap. Pedoman umum menyarankan peningkatan tidak lebih dari sekitar 10 persen per minggu.", "Cukupi kebutuhan cairan dan kenakan pakaian serta alas kaki yang sesuai.", "Hindari tantangan ekstrem, program instan, dan prinsip 'tidak sakit berarti tidak berhasil'.", "Berhenti dan cari bantuan jika mengalami nyeri dada, pusing, pingsan, atau sesak napas berat.", "Jika memiliki kondisi kesehatan atau merasa ragu, tanyakan kepada dokter sebelum memulai.", "Anak muda sebaiknya memilih aktivitas sesuai usia dan menghindari penurunan berat badan ekstrem, pembatasan makan, atau angkatan maksimal tanpa pengawasan."] },
];

export interface SessionBlock { label: string; minutes: number; ideas: string[] }
export interface SessionFocus { id: string; name: string; description: string; main: string[] }

export const sessionFocuses: SessionFocus[] = [
  { id: "mobility", name: "Mobilitas", description: "Gerakan lembut untuk mengurangi kaku dan meningkatkan kelenturan.", main: ["Gerakan cat-cow", "Peregangan world’s greatest", "Rotasi pinggul 90/90", "Rotasi punggung tengah", "Putaran pergelangan kaki"] },
  { id: "strength", name: "Dasar kekuatan", description: "Gerakan menggunakan berat tubuh untuk membangun fondasi.", main: ["Squat tanpa beban", "Glute bridge", "Push-up dengan posisi miring", "Row menggunakan meja atau resistance band", "Dead bug"] },
  { id: "cardio", name: "Kardio ringan", description: "Tempo stabil yang memungkinkanmu tetap berbicara.", main: ["Jalan cepat atau joging santai", "Bersepeda", "Berenang", "Menari", "Lompat tali dalam sesi singkat"] },
];

export function buildSession(focusId: string, total: number): SessionBlock[] {
  const focus = sessionFocuses.find((f) => f.id === focusId) ?? sessionFocuses[0];
  const warm = Math.max(3, Math.round(total * 0.2));
  const cool = Math.max(2, Math.round(total * 0.15));
  const main = Math.max(4, total - warm - cool);
  return [
    { label: "Pemanasan", minutes: warm, ideas: ["Berjalan santai atau jalan di tempat", "Putaran lengan", "Ayunan kaki", "Putaran pinggul"] },
    { label: focus.name, minutes: main, ideas: focus.main },
    { label: "Pendinginan", minutes: cool, ideas: ["Berjalan perlahan", "Peregangan lembut", "Bernapas perlahan"] },
  ];
}
