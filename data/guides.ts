import type { Guide } from "@/types";
import { readingMinutes } from "@/lib/utils";

export const guides: Guide[] = [
  {
    slug: "build-a-simple-skincare-routine", title: "Susun rutinitas perawatan kulit sederhana", category: "Face",
    excerpt: "Tiga langkah cukup bagi kebanyakan orang: bersihkan, lembapkan, lindungi.",
    related: ["understanding-spf", "skin-barrier-basics", "common-skincare-mistakes"],
    sections: [
      { heading: "Mulai dengan tiga langkah", body: ["Rutinitas tidak perlu panjang agar efektif. Pembersih lembut, pelembap yang sesuai dengan kulit, dan sunscreen harian sudah mencakup kebutuhan dasar kebanyakan orang.", "Tambahkan produk hanya jika ada alasan khusus, seperti jerawat, kulit kering, atau noda gelap. Tambahkan satu per satu."] },
      { heading: "Pagi dan malam", body: ["Pada pagi hari, bilas atau bersihkan wajah, gunakan pelembap, lalu sunscreen. Pada malam hari, bersihkan wajah dengan baik, terutama jika memakai sunscreen, lalu gunakan pelembap.", "Konsistensi lebih penting daripada harga. Rutinitas dasar yang dilakukan setiap hari lebih baik daripada rutinitas rumit yang hanya sesekali dilakukan."] },
      { heading: "Beri waktu", body: ["Sel kulit beregenerasi dalam hitungan minggu, bukan hari. Jalankan rutinitas baru setidaknya selama empat hingga delapan minggu sebelum menilai manfaatnya. Jika terjadi iritasi, hentikan penggunaan produk."] },
    ],
  },
  {
    slug: "understanding-spf", title: "Memahami SPF dan sunscreen", category: "Face",
    excerpt: "Arti angka SPF, jumlah pemakaian, dan seberapa sering perlu dioleskan kembali.",
    related: ["build-a-simple-skincare-routine", "skin-barrier-basics", "common-skincare-mistakes"],
    sections: [
      { heading: "Arti SPF", body: ["SPF mengukur perlindungan sunscreen terhadap sinar UVB yang menyebabkan kulit terbakar. Label 'spektrum luas' berarti produk juga melindungi dari sinar UVA yang berkontribusi pada penuaan kulit.", "SPF 30 menghalangi sekitar 97 persen UVB dan SPF 50 sekitar 98 persen. Angka yang lebih tinggi memberi sedikit perlindungan tambahan, jadi cara mengoleskannya lebih penting daripada angkanya."] },
      { heading: "Jumlah dan frekuensi pemakaian", body: ["Kebanyakan orang memakai terlalu sedikit. Panduan umum untuk wajah dan leher adalah sekitar dua ruas jari. Oleskan kembali kira-kira setiap dua jam saat terik dan setelah berenang atau banyak berkeringat.", "Sunscreen bekerja lebih baik jika disertai berteduh, memakai topi, dan mengenakan pakaian pelindung."] },
      { heading: "Pilih yang nyaman digunakan", body: ["Sunscreen mineral dan kimia sama-sama efektif. Gel dan cairan sering cocok untuk kulit berminyak, krim cocok untuk kulit kering, dan produk tanpa pewangi cocok untuk kulit sensitif. Sunscreen terbaik adalah yang nyaman kamu pakai."] },
    ],
  },
  {
    slug: "skin-barrier-basics", title: "Mengenal lapisan pelindung kulit", category: "Face",
    excerpt: "Pentingnya perawatan lembut dan cara menenangkan kulit yang iritasi.",
    related: ["build-a-simple-skincare-routine", "common-skincare-mistakes", "understanding-spf"],
    sections: [
      { heading: "Apa itu lapisan pelindung kulit", body: ["Lapisan pelindung kulit adalah bagian terluar kulit. Lapisan ini menjaga air tetap di dalam dan menghalau iritan, seperti dinding yang tersusun dari sel kulit dan lemak seperti ceramide."] },
      { heading: "Tanda lapisan pelindung terganggu", body: ["Kulit terasa kencang, perih, memerah, mengelupas, atau produk yang biasanya nyaman tiba-tiba terasa mengiritasi. Terlalu sering mencuci, eksfoliasi keras, air sangat panas, serta cuaca dingin dan kering merupakan pemicu umum."] },
      { heading: "Cara mendukung lapisan pelindung", body: ["Sederhanakan rutinitas: gunakan pembersih lembut, pelembap dengan bahan seperti ceramide atau gliserin, dan sunscreen. Hentikan sementara bahan aktif kuat hingga kulit terasa tenang. Jika iritasi berlanjut, konsultasikan dengan tenaga kesehatan."] },
    ],
  },
  {
    slug: "common-skincare-mistakes", title: "Kesalahan umum dalam merawat kulit", category: "Face",
    excerpt: "Kebiasaan yang diam-diam merugikan kulit dan cara mudah memperbaikinya.",
    related: ["skin-barrier-basics", "build-a-simple-skincare-routine", "understanding-spf"],
    sections: [
      { heading: "Terlalu banyak melakukan perawatan", body: ["Terlalu banyak produk, asam kuat, atau lulur dapat mengiritasi kulit. Jika kulit memerah atau terasa sakit, mengurangi produk sering kali menjadi solusinya."] },
      { heading: "Melewatkan langkah dasar", body: ["Tidak memakai sunscreen atau pelembap, serta tidak membersihkan sunscreen pada malam hari adalah kekurangan yang umum. Semuanya mudah diperbaiki."] },
      { heading: "Meniru orang lain", body: ["Produk yang cocok untuk teman belum tentu cocok untukmu. Mulailah dari jenis dan tujuan perawatan kulitmu, lalu kenalkan produk baru secara perlahan dengan uji tempel."] },
    ],
  },
  {
    slug: "how-to-identify-your-hair-pattern", title: "Cara mengenali pola rambut", category: "Hair",
    excerpt: "Panduan sederhana untuk sistem 1A hingga 4C beserta keterbatasannya.",
    related: ["porosity-density-and-thickness", "healthy-scalp-and-dandruff", "wash-day-for-every-hair-type"],
    sections: [
      { heading: "Empat jenis utama", body: ["Tipe 1 adalah rambut lurus, tipe 2 bergelombang, tipe 3 keriting, dan tipe 4 keriting rapat. Masing-masing memiliki tiga subtipe (A, B, dan C) yang menggambarkan kerapatan polanya."] },
      { heading: "Cara mengamati", body: ["Cuci rambut, gunakan sedikit kondisioner, lalu biarkan kering tanpa disisir atau dipanaskan. Amati bentuk beberapa helai rambut di bagian depan, samping, dan belakang. Banyak orang memiliki lebih dari satu pola rambut."] },
      { heading: "Panduan, bukan aturan", body: ["Pola hanyalah salah satu aspek rambut. Porositas, kepadatan, ketebalan helai, dan kondisi kulit kepala juga menentukan rutinitas. Gunakan klasifikasi sebagai panduan awal, lalu sesuaikan dengan perilaku rambutmu."] },
    ],
  },
  {
    slug: "porosity-density-and-thickness", title: "Porositas, kepadatan, dan ketebalan rambut", category: "Hair",
    excerpt: "Tiga karakteristik yang sama pentingnya dengan pola ikal.",
    related: ["how-to-identify-your-hair-pattern", "wash-day-for-every-hair-type", "healthy-scalp-and-dandruff"],
    sections: [
      { heading: "Porositas", body: ["Porositas menggambarkan seberapa mudah rambut menyerap dan mempertahankan kelembapan. Rambut berporositas rendah dapat sulit menyerap produk, sedangkan rambut berporositas tinggi menyerap dengan cepat tetapi juga cepat kering."] },
      { heading: "Kepadatan dan ketebalan", body: ["Kepadatan adalah jumlah helai rambut, sedangkan ketebalan adalah lebar setiap helai. Rambut dapat memiliki helai halus dengan kepadatan tinggi atau helai kasar dengan kepadatan rendah."] },
      { heading: "Cara menggunakan informasi ini", body: ["Rambut halus atau berkepadatan rendah biasanya cocok dengan produk lebih ringan. Rambut kasar atau berkepadatan tinggi sering terbantu oleh kondisioner yang lebih kaya dan penataan per bagian."] },
    ],
  },
  {
    slug: "healthy-scalp-and-dandruff", title: "Dasar kesehatan kulit kepala dan ketombe", category: "Hair",
    excerpt: "Serpihan, rasa gatal, dan cara yang benar-benar membantu.",
    related: ["wash-day-for-every-hair-type", "porosity-density-and-thickness", "how-to-identify-your-hair-pattern"],
    sections: [
      { heading: "Ketombe umum terjadi", body: ["Kulit kepala mengelupas dan sedikit gatal adalah hal umum dan bukan disebabkan oleh kebersihan yang buruk. Kulit kepala kering, berminyak, penumpukan produk, dan jamur yang umum ditemukan pada kulit dapat berperan."] },
      { heading: "Hal yang dapat membantu", body: ["Sampo antiketombe dengan bahan seperti zinc pyrithione atau ketoconazole dapat membantu. Diamkan sampo sesuai petunjuk label dan gunakan secara rutin selama beberapa minggu."] },
      { heading: "Kapan perlu meminta saran", body: ["Jika kulit kepala terasa nyeri, sangat merah, memiliki luka, atau mengalami kerontokan rambut, mintalah bantuan tenaga kesehatan."] },
    ],
  },
  {
    slug: "wash-day-for-every-hair-type", title: "Panduan mencuci untuk semua jenis rambut", category: "Hair",
    excerpt: "Frekuensi mencuci, cara memakai kondisioner, dan mengeringkan dengan lembut.",
    related: ["healthy-scalp-and-dandruff", "porosity-density-and-thickness", "how-to-identify-your-hair-pattern"],
    sections: [
      { heading: "Seberapa sering mencuci", body: ["Rambut lurus dan halus sering kali perlu dicuci lebih sering. Rambut ikal dan keriting rapat biasanya lebih baik dicuci lebih jarang karena minyak alami bergerak perlahan ke sepanjang helai rambut."] },
      { heading: "Langkah-langkahnya", body: ["Sampo kulit kepala, gunakan kondisioner pada bagian panjang rambut, uraikan kusut dengan lembut, bilas, lalu peras air tanpa menggosok. Gunakan produk tanpa bilas atau produk penata jika bermanfaat bagi rambutmu."] },
      { heading: "Mengeringkan rambut", body: ["Mengeringkan alami dan menggunakan diffuser dengan panas rendah adalah pilihan yang lembut. Jika memakai alat panas, gunakan pelindung panas dan pengaturan terendah yang efektif."] },
    ],
  },
  {
    slug: "desk-setup-for-comfort", title: "Menata meja kerja agar nyaman", category: "Posture",
    excerpt: "Penyesuaian kecil untuk mengurangi ketegangan leher, bahu, dan pergelangan tangan.",
    related: ["moving-through-your-workday", "simple-stretches-for-desk-workers", "sleep-and-recovery-basics"],
    sections: [
      { heading: "Kursi dan kaki", body: ["Atur kursi agar telapak kaki menapak rata dan paha kira-kira sejajar. Gunakan pijakan kaki jika perlu dan topang punggung bawah."] },
      { heading: "Layar dan papan ketik", body: ["Letakkan bagian atas layar mendekati tinggi mata dan kira-kira sejauh jangkauan satu lengan. Dekatkan papan ketik dan tetikus agar siku berada pada sudut 90 hingga 110 derajat dan pergelangan tangan tetap lurus."] },
      { heading: "Pencahayaan dan variasi posisi", body: ["Kurangi pantulan, pastikan ruang kerja cukup terang, dan ubah posisi secara teratur. Tidak ada penataan yang dapat menggantikan kebutuhan untuk bergerak."] },
    ],
  },
  {
    slug: "moving-through-your-workday", title: "Bergerak selama hari kerja", category: "Posture",
    excerpt: "Jeda gerak singkat yang cocok untuk jadwal apa pun.",
    related: ["desk-setup-for-comfort", "simple-stretches-for-desk-workers", "building-a-daily-routine-that-lasts"],
    sections: [
      { heading: "Sebentar tetapi sering", body: ["Berdiri, melakukan peregangan, atau berjalan selama satu hingga tiga menit setiap 30 sampai 60 menit cukup untuk menyelingi waktu duduk yang lama."] },
      { heading: "Jadikan kebiasaan otomatis", body: ["Hubungkan gerakan dengan kegiatan yang sudah rutin dilakukan: mengisi botol minum, menyelesaikan panggilan, atau membaca pesan. Pengingat di ponsel atau jam tangan dapat membantu."] },
      { heading: "Istirahatkan mata", body: ["Setiap 20 menit, lihat objek sejauh sekitar 6 meter selama 20 detik. Kebiasaan 20-20-20 yang sederhana ini memberi mata waktu beristirahat."] },
    ],
  },
  {
    slug: "simple-stretches-for-desk-workers", title: "Peregangan sederhana untuk pekerja meja", category: "Movement",
    excerpt: "Peregangan lembut untuk leher, dada, pinggul, dan punggung.",
    related: ["desk-setup-for-comfort", "warm-up-and-cool-down", "sleep-and-recovery-basics"],
    sections: [
      { heading: "Leher dan bahu", body: ["Miringkan kepala perlahan hingga telinga mendekati satu bahu dan tahan selama 20 detik, lalu ganti sisi. Putar bahu ke belakang sepuluh kali."] },
      { heading: "Dada dan punggung", body: ["Berdirilah di ambang pintu dengan lengan bawah menempel pada bingkai, lalu condongkan tubuh perlahan untuk membuka dada. Putaran tubuh sambil duduk dengan satu tangan di lutut seberang dapat melemaskan tulang belakang."] },
      { heading: "Pinggul", body: ["Berlutut dengan satu lutut dan letakkan kaki lainnya di depan. Miringkan panggul sedikit ke dalam dan geser ke depan sampai terasa peregangan lembut di bagian depan pinggul. Berhenti jika terasa sakit."] },
    ],
  },
  {
    slug: "warm-up-and-cool-down", title: "Dasar pemanasan dan pendinginan", category: "Movement",
    excerpt: "Cara mempersiapkan dan mengakhiri latihan dengan nyaman.",
    related: ["simple-stretches-for-desk-workers", "sleep-and-recovery-basics", "building-a-daily-routine-that-lasts"],
    sections: [
      { heading: "Pemanasan", body: ["Luangkan waktu lima hingga sepuluh menit untuk meningkatkan detak jantung secara perlahan dan menggerakkan sendi dengan leluasa. Berjalan, bersepeda ringan, dan gerakan dinamis seperti mengayunkan kaki dapat dilakukan."] },
      { heading: "Pendinginan", body: ["Kurangi tempo secara bertahap selama tiga hingga lima menit sampai napas kembali tenang. Peregangan ringan bersifat opsional."] },
      { heading: "Dengarkan tubuhmu", body: ["Sedikit usaha dan rasa lelah adalah hal normal. Nyeri tajam, pusing, atau nyeri dada adalah tanda untuk berhenti dan meminta saran."] },
    ],
  },
  {
    slug: "sleep-and-recovery-basics", title: "Dasar tidur dan pemulihan", category: "Movement",
    excerpt: "Mengapa istirahat menjadi bagian dari setiap rutinitas sehat.",
    related: ["building-a-daily-routine-that-lasts", "warm-up-and-cool-down", "moving-through-your-workday"],
    sections: [
      { heading: "Durasi tidur", body: ["Remaja umumnya membutuhkan sekitar 8 hingga 10 jam tidur dan orang dewasa sekitar 7 hingga 9 jam. Kebutuhan setiap orang berbeda."] },
      { heading: "Kebiasaan tidur yang lebih baik", body: ["Atur waktu tidur dan bangun secara teratur, gunakan satu jam sebelum tidur untuk menenangkan diri, jaga kamar tetap gelap dan sejuk, serta batasi kafein pada sore hari."] },
      { heading: "Hari istirahat", body: ["Latihan memberi sedikit tekanan pada tubuh, sedangkan pemulihan membantu tubuh menjadi lebih kuat. Sisihkan hari dengan aktivitas ringan dan perhatikan rasa lelah."] },
    ],
  },
  {
    slug: "build-a-practical-wardrobe", title: "Membangun lemari pakaian praktis", category: "Style",
    excerpt: "Beberapa pakaian serbaguna yang pas dan mudah dipadukan.",
    related: ["fit-comfort-and-colour", "building-a-daily-routine-that-lasts", "build-a-simple-skincare-routine"],
    sections: [
      { heading: "Mulai dari pakaian dasar", body: ["Beberapa kaus dan kemeja yang pas, celana panjang, sweter, jaket, serta dua atau tiga pasang sepatu dapat menghasilkan banyak padu padan."] },
      { heading: "Pilih palet warna", body: ["Pilih dua atau tiga warna netral dasar dan satu atau dua warna aksen. Pakaian akan lebih mudah dipadukan."] },
      { heading: "Belanja secara bertahap", body: ["Tambahkan pakaian jika kamu tahu item tersebut cocok dengan setidaknya tiga pakaian yang sudah dimiliki. Kualitas dan ukuran lebih penting daripada merek."] },
    ],
  },
  {
    slug: "fit-comfort-and-colour", title: "Ukuran, kenyamanan, dan warna", category: "Style",
    excerpt: "Tiga hal yang membuat padu padan terlihat lebih baik.",
    related: ["build-a-practical-wardrobe", "building-a-daily-routine-that-lasts", "understanding-spf"],
    sections: [
      { heading: "Ukuran", body: ["Jahitan bahu sebaiknya berada dekat tepi bahu, lengan berakhir sekitar pergelangan tangan, dan celana terasa nyaman. Penjahit dapat menyesuaikan detail kecil dengan biaya terjangkau."] },
      { heading: "Kenyamanan", body: ["Jika kamu terus-menerus membetulkan pakaian, hal itu akan terlihat. Pilih bahan dan potongan yang nyaman dikenakan sesuai iklim."] },
      { heading: "Warna", body: ["Gunakan warna netral sebagai dasar dan satu warna aksen. Padu padan monokrom dengan beberapa nuansa juga terlihat rapi."] },
    ],
  },
  {
    slug: "building-a-daily-routine-that-lasts", title: "Membangun rutinitas harian yang bertahan lama", category: "Habits",
    excerpt: "Kebiasaan kecil yang diulang lebih baik daripada perubahan besar sekaligus.",
    related: ["sleep-and-recovery-basics", "moving-through-your-workday", "build-a-simple-skincare-routine"],
    sections: [
      { heading: "Mulai dari hal kecil", body: ["Pilih satu atau dua kebiasaan dan kaitkan dengan kegiatan yang sudah rutin dilakukan. Contohnya, gunakan sunscreen setelah menyikat gigi."] },
      { heading: "Catat dengan santai", body: ["Daftar kebiasaan dapat menunjukkan perkembangan, tetapi tidak masalah jika melewatkan satu hari. Lanjutkan rutinitas esok hari tanpa menyalahkan diri sendiri."] },
      { heading: "Perawatan sehat, bukan kesempurnaan", body: ["Merawat diri berarti merasa nyaman dan menjaga kesehatan. Tidak ada penampilan ideal yang harus dikejar. Jika rutinitas menimbulkan stres, aturan kaku, atau kekhawatiran tentang tubuh, berhentilah sejenak dan bicarakan dengan orang tepercaya atau tenaga kesehatan."] },
    ],
  },
];

export const guideCategories = ["Face", "Hair", "Posture", "Movement", "Style", "Habits"] as const;

export function guideCategoryLabel(category: Guide["category"]): string {
  const labels: Record<Guide["category"], string> = {
    Face: "Wajah",
    Hair: "Rambut",
    Posture: "Postur",
    Movement: "Aktivitas",
    Style: "Gaya",
    Habits: "Kebiasaan",
  };
  return labels[category];
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function guideMinutes(g: Guide): number {
  return readingMinutes(g.sections.map((s) => s.heading + " " + s.body.join(" ")).join(" "));
}
