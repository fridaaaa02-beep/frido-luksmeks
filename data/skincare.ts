import type { RoutineStep, SkinType, Topic } from "@/types";

export const skinTypes: SkinType[] = [
  {
    id: "normal",
    name: "Normal",
    tagline: "Seimbang: jarang terlalu berminyak atau terlalu kering.",
    signs: ["Kulit terasa nyaman beberapa jam setelah dibersihkan", "Pori-pori hampir tidak terlihat", "Jarang berjerawat atau mengelupas", "Jarang terasa perih saat memakai produk baru"],
    goals: ["Jaga keseimbangan dengan rutinitas sederhana", "Lindungi kulit dengan tabir surya setiap hari", "Hindari menambah langkah yang tidak diperlukan"],
    lookFor: ["Pembersih lembut", "Pelembap ringan", "Tabir surya spektrum luas SPF 30 atau lebih"],
    watchOut: ["Eksfoliasi berlebihan", "Mengganti banyak produk sekaligus", "Tidak memakai tabir surya karena kulit 'terlihat baik-baik saja'"],
    tip: "Kulit normal tetap dapat berubah karena musim, stres, perjalanan, dan usia. Anggap jenis kulit sebagai titik awal, bukan label seumur hidup.",
  },
  {
    id: "dry",
    name: "Kering",
    tagline: "Produksi minyak lebih sedikit sehingga kulit terasa kencang atau kasar.",
    signs: ["Kulit terasa kencang setelah dibersihkan", "Terlihat mengelupas atau bertekstur kasar", "Tampak kusam", "Terasa lebih buruk saat udara dingin atau kering"],
    goals: ["Dukung lapisan pelindung kulit", "Ganti kelembapan yang hilang dan jaga agar tetap tersimpan", "Bersihkan dengan lembut"],
    lookFor: ["Pembersih bertekstur krim atau susu", "Humektan seperti gliserin dan asam hialuronat", "Oklusif dan emolien seperti ceramide, squalane, atau petrolatum"],
    watchOut: ["Mandi dengan air yang sangat panas", "Pembersih berbusa yang membuat kulit terasa kesat", "Lulur kasar", "Pewangi yang kuat"],
    tip: "Oleskan pelembap saat kulit masih sedikit lembap. Cara ini membantu mengunci air yang sudah ada di kulit.",
  },
  {
    id: "oily",
    name: "Berminyak",
    tagline: "Produksi sebum lebih banyak sehingga kulit tampak mengilap dan terasa licin.",
    signs: ["Kilap muncul beberapa jam setelah mencuci wajah", "Pori-pori tampak besar", "Pori-pori lebih sering tersumbat atau berjerawat", "Riasan atau tabir surya mudah bergeser"],
    goals: ["Jaga kebersihan kulit tanpa menghilangkan minyak alaminya", "Gunakan pelembap ringan", "Pilih produk nonkomedogenik"],
    lookFor: ["Pembersih gel atau busa ringan", "Pelembap bebas minyak atau berbentuk gel", "Tabir surya ringan berbentuk cair atau gel"],
    watchOut: ["Mencuci wajah berkali-kali sehari", "Tidak memakai pelembap (kulit bisa terasa lebih buruk)", "Memencet pori-pori"],
    tip: "Kulit berminyak tetap membutuhkan kelembapan. Produk ringan berbahan dasar air melembapkan tanpa terasa berat.",
  },
  {
    id: "combination",
    name: "Kombinasi",
    tagline: "Kondisi tiap area berbeda, biasanya zona T lebih berminyak.",
    signs: ["Dahi, hidung, dan dagu tampak mengilap", "Pipi normal atau kering", "Area yang berbeda bereaksi berbeda terhadap produk"],
    goals: ["Gunakan rutinitas lembut yang cocok untuk seluruh wajah", "Sesuaikan hanya bagian yang membutuhkan", "Jaga kelembapan tetap seimbang"],
    lookFor: ["Pembersih gel-krim yang lembut", "Pelembap losion ringan", "Tabir surya yang tidak terasa berminyak"],
    watchOut: ["Menganggap seluruh wajah berminyak", "Menggunakan produk kuat pada area kering", "Memakai terlalu banyak produk sekaligus"],
    tip: "Kamu dapat menggunakan pelembap sedikit lebih kaya pada area kering dan lapisan lebih ringan di zona T.",
  },
  {
    id: "sensitive",
    name: "Sensitif",
    tagline: "Mudah bereaksi dengan kemerahan, rasa perih, atau gatal.",
    signs: ["Terasa perih atau panas saat memakai produk tertentu", "Mudah memerah", "Bereaksi terhadap pewangi atau bahan aktif kuat", "Kulit terasa reaktif setelah perubahan cuaca"],
    goals: ["Jaga rutinitas tetap singkat dan konsisten", "Kenalkan satu produk baru setiap kali", "Lindungi lapisan pelindung kulit"],
    lookFor: ["Produk tanpa pewangi", "Daftar bahan yang singkat", "Tabir surya mineral jika filter kimia menimbulkan iritasi"],
    watchOut: ["Eksfolian kuat", "Minyak esensial dan pewangi pekat", "Mencoba beberapa produk baru dalam minggu yang sama"],
    tip: "Sensitif menggambarkan reaksi kulit, bukan diagnosis. Kemerahan, rasa terbakar, atau ruam yang menetap sebaiknya dibicarakan dengan tenaga kesehatan.",
  },
];

export const morningRoutine: RoutineStep[] = [
  { title: "Bilas atau bersihkan wajah", detail: "Gunakan air suam-suam kuku. Pembersih lembut bersifat opsional pada pagi hari jika kulit terasa baik, dan bermanfaat jika kulit berminyak atau kamu memakai produk berat pada malam hari." },
  { title: "Perawatan (opsional)", detail: "Serum antioksidan sederhana, seperti vitamin C, cocok untuk sebagian orang. Mulai perlahan dan hentikan jika kulit terasa iritasi.", optional: true },
  { title: "Pelembap", detail: "Pilih tekstur yang sesuai dengan jenis kulit: gel atau losion untuk kulit berminyak, krim untuk kulit kering." },
  { title: "Tabir surya", detail: "Tabir surya spektrum luas SPF 30 atau lebih adalah langkah harian yang paling bermanfaat. Oleskan secukupnya dan gunakan kembali jika lama beraktivitas di luar." },
];

export const nightRoutine: RoutineStep[] = [
  { title: "Bersihkan tabir surya dan kotoran", detail: "Jika memakai tabir surya atau riasan, gunakan pembersih minyak atau balsem yang lembut terlebih dahulu, lalu lanjutkan dengan pembersih biasa." },
  { title: "Bersihkan wajah", detail: "Pijat wajah dengan ujung jari selama 30 hingga 60 detik, bilas hingga bersih, lalu tepuk-tepuk hingga kering dengan handuk bersih." },
  { title: "Perawatan (opsional)", detail: "Sebagian orang menggunakan produk seperti retinoid atau perawatan jerawat. Kenalkan satu per satu, beberapa malam per minggu, dan baca petunjuk pemakaian.", optional: true },
  { title: "Pelembap", detail: "Pelembap malam membantu menjaga lapisan pelindung kulit saat kamu tidur." },
];

export const skinTopics: Topic[] = [
  {
    id: "cleansing",
    title: "Membersihkan wajah",
    summary: "Kulit yang bersih tidak harus terasa kesat.",
    points: [
      "Dua kali sehari sudah cukup bagi kebanyakan orang: sekali pada pagi dan malam hari.",
      "Gunakan air suam-suam kuku. Air yang sangat panas dapat membuat kulit kering dan iritasi.",
      "Pijat selama 30 hingga 60 detik, lalu bilas hingga bersih, termasuk di garis rambut dan rahang.",
      "Tepuk-tepuk hingga kering, jangan digosok, dan gunakan handuk bersih.",
      "Jika kulit terasa kencang, perih, atau sangat kering setelah dicuci, kemungkinan pembersihnya terlalu keras.",
    ],
    tip: "Setelah berolahraga atau banyak berkeringat, segera bilas wajah.",
  },
  {
    id: "moisturizers",
    title: "Pelembap",
    summary: "Melembapkan, melembutkan kulit, dan membantu mengurangi kehilangan air.",
    points: [
      "Humektan (gliserin, asam hialuronat) menarik air ke kulit.",
      "Emolien (ceramide, squalane, alkohol lemak) menghaluskan dan melembutkan.",
      "Oklusif (petrolatum, dimetikon, lilin) membentuk lapisan yang memperlambat hilangnya air.",
      "Kulit berminyak biasanya lebih cocok dengan gel atau losion. Kulit kering biasanya lebih cocok dengan krim.",
      "Oleskan pada kulit yang sedikit lembap. Gunakan pelembap seukuran kacang polong hingga koin untuk wajah.",
    ],
  },
  {
    id: "spf",
    title: "Tabir surya dan SPF",
    summary: "Kebiasaan konsisten yang penting untuk kesehatan kulit jangka panjang.",
    points: [
      "SPF terutama menunjukkan perlindungan terhadap sinar UVB. Cari label 'spektrum luas' untuk perlindungan UVA juga.",
      "SPF 30 atau lebih umum disarankan untuk penggunaan sehari-hari.",
      "Kebanyakan orang mengoleskan terlalu sedikit. Panduan umum untuk wajah dan leher adalah sepanjang dua jari.",
      "Oleskan kembali kira-kira setiap dua jam saat terpapar matahari langsung, serta setelah berenang atau banyak berkeringat.",
      "Filter mineral (seng oksida, titanium dioksida) dan kimia sama-sama bekerja. Tabir surya terbaik adalah yang nyaman kamu gunakan.",
      "Topi, tempat teduh, dan pakaian membantu melengkapi perlindungan tabir surya.",
    ],
    tip: "Tabir surya tetap bermanfaat saat mendung dan di dalam ruangan dekat jendela terang karena UVA dapat menembus awan dan kaca.",
  },
  {
    id: "barrier",
    title: "Lapisan pelindung kulit",
    summary: "Lapisan terluar kulit menjaga kelembapan dan menghalau iritan.",
    points: [
      "Lapisan pelindung kulit tersusun dari sel-sel kulit yang terikat oleh lipid seperti ceramide, kolesterol, dan asam lemak.",
      "Tanda lapisan pelindung terganggu antara lain perih, kencang, kemerahan, mengelupas, dan produk yang tiba-tiba terasa mengiritasi.",
      "Penyebab umum: terlalu sering mencuci atau mengeksfoliasi, produk keras, air sangat panas, serta cuaca dingin dan kering.",
      "Dukung lapisan ini dengan menyederhanakan rutinitas, menggunakan pembersih lembut, memakai pelembap, dan menggunakan tabir surya.",
      "Hentikan sementara bahan aktif seperti asam kuat dan retinoid hingga kulit kembali terasa tenang.",
    ],
  },
  {
    id: "acne",
    title: "Dasar-dasar jerawat",
    summary: "Jerawat umum terjadi, dapat ditangani, dan bukan tanda kebersihan yang buruk.",
    points: [
      "Jerawat muncul saat pori-pori tersumbat minyak dan sel kulit mati, terkadang disertai bakteri dan peradangan.",
      "Hormon, genetika, stres, obat-obatan tertentu, dan beberapa produk dapat berpengaruh.",
      "Menggosok terlalu keras tidak menghilangkan jerawat dan sering kali memperparah iritasi.",
      "Bahan yang umum dijual bebas antara lain benzoil peroksida, asam salisilat, dan adapalena. Mulailah secara perlahan.",
      "Memencet jerawat dapat menyebabkan bekas luka dan noda gelap. Sebisa mungkin biarkan jerawat sembuh sendiri.",
      "Perbaikan biasanya membutuhkan waktu berminggu-minggu, bukan beberapa hari. Jalankan rutinitas selama 8 hingga 12 minggu kecuali kulit mengalami iritasi.",
    ],
    tip: "Jerawat yang nyeri, dalam, atau meninggalkan bekas sebaiknya ditangani tenaga profesional sejak dini. Tersedia perawatan yang efektif.",
  },
  {
    id: "safety",
    title: "Keamanan produk",
    summary: "Cara mencoba produk baru dengan lebih aman.",
    points: [
      "Uji tempel: oleskan sedikit produk pada bagian dalam lengan bawah atau belakang telinga selama beberapa hari sebelum menggunakannya di wajah.",
      "Tambahkan satu produk baru setiap kali dan tunggu setidaknya dua minggu sebelum menilai hasilnya.",
      "Periksa tanggal kedaluwarsa dan simbol masa pakai setelah dibuka. Jauhkan produk dari panas dan sinar matahari.",
      "Jangan berbagi produk perawatan kulit atau riasan yang menyentuh mata atau mulut.",
      "Hindari racikan sendiri dari air lemon, soda kue, minyak esensial tanpa pengencer, atau bahan dapur sejenis. Bahan tersebut dapat membakar atau mengiritasi kulit.",
      "Waspadai klaim pemasaran seperti 'ajaib', 'detoks', atau 'hasil permanen'.",
    ],
  },
  {
    id: "dermatologist",
    title: "Kapan perlu berkonsultasi dengan dokter kulit",
    summary: "Edukasi umum bermanfaat, tetapi beberapa kondisi memerlukan bantuan profesional.",
    points: [
      "Tahi lalat atau bercak yang berubah ukuran, bentuk, atau warna, berdarah, atau tidak kunjung sembuh.",
      "Jerawat yang nyeri, berbentuk kista, meninggalkan bekas, atau tidak membaik setelah perawatan bebas yang konsisten.",
      "Ruam yang sangat gatal, menyebar, melepuh, atau terus kambuh.",
      "Pembengkakan mendadak, biduran, atau kesulitan bernapas setelah memakai produk memerlukan penanganan medis segera.",
      "Kerontokan rambut, perubahan kuku, atau perubahan kulit yang tidak dapat dijelaskan.",
      "Kapan pun kamu merasa ragu atau masalah tersebut memengaruhi kenyamanan maupun rasa percaya diri.",
    ],
    tip: "Situs ini hanya memberikan edukasi umum. Situs ini tidak dapat mendiagnosis atau menangani kondisi kesehatan.",
  },
];

export const skinMistakes: { mistake: string; fix: string }[] = [
  { mistake: "Tidak memakai tabir surya saat mendung", fix: "Jadikan SPF langkah terakhir setiap pagi, apa pun cuacanya." },
  { mistake: "Terlalu sering mencuci atau menggosok kulit dengan keras", fix: "Bersihkan wajah dua kali sehari dengan tekanan lembut. Hindari lulur kasar." },
  { mistake: "Menggunakan terlalu banyak produk baru sekaligus", fix: "Kenalkan satu produk setiap kali dan beri waktu untuk melihat hasilnya." },
  { mistake: "Tidak memakai pelembap pada kulit berminyak", fix: "Pilih gel atau losion ringan yang melembapkan tanpa terasa berat." },
  { mistake: "Memencet jerawat", fix: "Gunakan perawatan khusus jerawat dan biarkan sembuh dengan sendirinya." },
  { mistake: "Tidur tanpa membersihkan riasan atau tabir surya", fix: "Luangkan waktu sebentar untuk membersihkannya sebelum tidur." },
  { mistake: "Meniru persis rutinitas teman atau influencer", fix: "Mulailah dari jenis dan kebutuhan kulitmu sendiri." },
  { mistake: "Menggunakan beberapa bahan aktif kuat secara bersamaan", fix: "Gunakan satu bahan aktif setiap kali dan tingkatkan toleransi secara bertahap." },
];
