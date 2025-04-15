import courseImages from "../sharedVar/courseImg"; 

const dummyCourses = [
  {
    id: "course-1",
    title: "Matematika Dasar",
    lessons: 28,
    duration: "6h 30min",
    rating: 4.9,
    image: courseImages[0],
    chapters: [
      { id: "chapter-1", title: "Matriks", content: "Pelajari dasar-dasar matriks dan operasi matematika yang berkaitan." },
      { id: "chapter-2", title: "Kuadrat", content: "Mengenal persamaan kuadrat dan cara menyelesaikannya." },
      { id: "chapter-3", title: "Integral", content: "Pengenalan konsep integral dalam kalkulus dan aplikasinya." },
    ]
  },
  {
    id: "course-2",
    title: "Algoritma dan Pemrograman",
    lessons: 15,
    duration: "4h 00min",
    rating: 4.5,
    image: courseImages[0],
    chapters: [
      { id: "chapter-1", title: "Pengenalan Algoritma", content: "Memahami apa itu algoritma dan pentingnya dalam pemrograman." },
      { id: "chapter-2", title: "Struktur Data", content: "Belajar berbagai struktur data dasar seperti array, linked list, dan stack." },
      { id: "chapter-3", title: "Sorting dan Searching", content: "Implementasi algoritma pengurutan dan pencarian data." },
    ]
  },
  {
    id: "course-3",
    title: "Statistika Dasar",
    lessons: 10,
    duration: "2h 30min",
    rating: 4.2,
    image: courseImages[0],
    chapters: [
      { id: "chapter-1", title: "Deskripsi Data", content: "Analisis data menggunakan mean, median, dan modus." },
      { id: "chapter-2", title: "Distribusi Probabilitas", content: "Dasar probabilitas dan distribusi yang umum digunakan." },
      { id: "chapter-3", title: "Statistik Inferensial", content: "Menggunakan sampel untuk menarik kesimpulan umum." },
    ]
  },
  {
    id: "course-4",
    title: "Fisika Dasar",
    lessons: 12,
    duration: "3h 15min",
    rating: 4.6,
    image: courseImages[0],
    chapters: [
      { id: "chapter-1", title: "Hukum Newton", content: "Penjelasan ketiga hukum Newton dan aplikasinya." },
      { id: "chapter-2", title: "Gaya dan Gerak", content: "Bagaimana gaya mempengaruhi gerakan benda." },
      { id: "chapter-3", title: "Energi dan Usaha", content: "Konsep energi kinetik, potensial, dan usaha dalam fisika." },
    ]
  },
  {
    id: "course-5",
    title: "Fisika untuk Pemula",
    lessons: 20,
    duration: "5h 15min",
    rating: 4.7,
    image: courseImages[0],
    chapters: [
      { id: "chapter-1", title: "Pengenalan Fisika", content: "Dasar-dasar fisika untuk pelajar baru." },
      { id: "chapter-2", title: "Gerak Lurus", content: "Memahami gerak lurus beraturan dan berubah beraturan." },
      { id: "chapter-3", title: "Gelombang dan Suara", content: "Karakteristik gelombang dan bagaimana suara merambat." },
    ]
  },
];

export default dummyCourses;
