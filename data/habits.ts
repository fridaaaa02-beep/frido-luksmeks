import type { HabitGroup } from "@/types";

export const habitGroups: HabitGroup[] = [
  { id: "morning-hygiene", title: "Kebersihan pagi", icon: "sun", description: "Mulai hari dengan segar.", items: [
    { id: "teeth-am", label: "Sikat gigi selama dua menit", tip: "Gunakan sikat lembut dan pasta gigi berfluorida." },
    { id: "wash-am", label: "Cuci wajah dan tubuh sesuai kebutuhan", tip: "Air suam-suam kuku lebih lembut untuk kulit." },
  ] },
  { id: "skincare", title: "Dasar perawatan kulit", icon: "sparkles", description: "Lakukan dengan sederhana dan konsisten.", items: [
    { id: "moisturize-am", label: "Gunakan pelembap", tip: "Pilih tekstur yang sesuai dengan jenis kulitmu." },
    { id: "spf", label: "Gunakan tabir surya pada kulit yang terpapar", tip: "Oleskan secukupnya dan ulangi saat berada di luar." },
  ] },
  { id: "haircare", title: "Perawatan rambut", icon: "scissors", description: "Kulit kepala sehat, rambut pun sehat.", items: [
    { id: "hair-style", label: "Sisir atau tata rambut dengan lembut", tip: "Mulai dari ujung rambut jika kusut." },
    { id: "hair-wash", label: "Cuci rambut saat kulit kepala membutuhkannya", tip: "Frekuensi bergantung pada kondisi kulit kepala dan jenis rambut." },
  ] },
  { id: "hydration", title: "Cukupi kebutuhan cairan", icon: "droplets", description: "Minum air sepanjang hari.", items: [
    { id: "water-am", label: "Minum air pada pagi hari", tip: "Sediakan gelas atau botol minum di dekatmu." },
    { id: "water-day", label: "Minum sedikit demi sedikit sepanjang hari", tip: "Rasa haus dan warna urine kuning pucat dapat menjadi panduan." },
  ] },
  { id: "meals", title: "Jadwal makan teratur", icon: "utensils", description: "Berikan energi yang cukup bagi tubuh.", items: [
    { id: "meals-reg", label: "Makan secara teratur", tip: "Sertakan sayuran, buah, protein, dan biji-bijian utuh." },
    { id: "meals-slow", label: "Makan tanpa terburu-buru", tip: "Duduklah dan nikmati makanan dengan tenang jika memungkinkan." },
  ] },
  { id: "activity", title: "Aktivitas fisik", icon: "activity", description: "Bergerak dengan cara yang kamu sukai.", items: [
    { id: "move", label: "Bergerak selama 20 hingga 30 menit", tip: "Berjalan kaki juga termasuk." },
    { id: "stretch", label: "Lakukan peregangan selama beberapa menit", tip: "Pastikan tetap nyaman dan jangan memaksakan gerakan hingga terasa sakit." },
  ] },
  { id: "screen-breaks", title: "Istirahat dari layar", icon: "monitor", description: "Istirahatkan mata dan tubuh.", items: [
    { id: "break-eyes", label: "Alihkan pandangan dari layar setiap 20 menit", tip: "Lihat objek sejauh sekitar 6 meter selama 20 detik." },
    { id: "break-stand", label: "Berdiri dan bergerak setiap jam", tip: "Isi ulang air minum sebagai pengingat alami." },
  ] },
  { id: "sleep", title: "Rutinitas tidur", icon: "moon", description: "Tenangkan diri sebelum beristirahat.", items: [
    { id: "screens-off", label: "Kurangi penggunaan layar sebelum tidur", tip: "Usahakan memiliki waktu tenang selama 30 hingga 60 menit." },
    { id: "bedtime", label: "Tidur pada waktu yang teratur", tip: "Konsistensi lebih penting daripada jadwal yang sempurna." },
  ] },
  { id: "evening-hygiene", title: "Kebersihan malam", icon: "bath", description: "Akhiri hari dengan baik.", items: [
    { id: "teeth-pm", label: "Sikat dan bersihkan sela gigi", tip: "Gunakan benang gigi sekali sehari jika memungkinkan." },
    { id: "wash-pm", label: "Bersihkan wajah dan gunakan pelembap", tip: "Bersihkan tabir surya dan kotoran dengan lembut." },
  ] },
];

export const dailyReminders: string[] = [
  "Kulit, rambut, dan tubuh setiap orang berbeda. Bandingkan perkembanganmu dengan dirimu kemarin.",
  "Segelas air adalah bentuk perhatian sederhana untuk diri sendiri. Minumlah sekarang.",
  "Tabir surya adalah langkah perawatan kulit yang sangat bermanfaat. Gunakan sebelum beraktivitas di luar.",
  "Berdirilah, putar bahu, lalu lihat ke luar jendela selama satu menit.",
  "Istirahat adalah bagian dari merawat diri. Utamakan tidur yang cukup malam ini.",
  "Perawatan lembut lebih baik daripada yang keras. Rawat kulit dan rambutmu dengan baik.",
  "Jalan kaki selama sepuluh menit juga termasuk aktivitas fisik.",
  "Cuci tangan dan sikat gigi, lalu nikmati rasa segar.",
  "Kamu tidak membutuhkan sepuluh produk. Pembersih, pelembap, dan tabir surya adalah awal yang baik.",
  "Ukuran yang pas dan kenyamanan membuat pakaian terasa lebih baik. Kenakan yang membuatmu nyaman.",
  "Periksa postur: bahu rileks, kaki tertopang, dan layar setinggi mata.",
  "Coba ubah satu kebiasaan kecil minggu ini, bukan semuanya sekaligus.",
];
