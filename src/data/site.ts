/**
 * ─────────────────────────────────────────────────────────────
 *  SEMUA KONTEN SITUS ADA DI FILE INI.
 *  Ganti judul, deskripsi, thumbnail, dan link proyek di sini
 *  tanpa perlu menyentuh komponen.
 * ─────────────────────────────────────────────────────────────
 */

import profilePhoto from "@/assets/profile.jpg";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import motionVideo from "@/assets/motion.mp4";
import profileReelVideo from "@/assets/profile-reel.mp4";

/**
 * Foto profil asli milik Zidan.
 * Sumber: Google Photos — https://photos.app.goo.gl/gTpNLGq6quBGmPvn7
 * File tersimpan lokal di src/assets/profile.jpg (1086×1448).
 */
export const profileImage = {
  src: profilePhoto,
  alt: "Foto profil Zidan Firstian Pandora",
  sourceUrl: "https://photos.app.goo.gl/gTpNLGq6quBGmPvn7",
  /** Gambar cadangan bila foto utama gagal dimuat. */
  fallback:
    "https://images.pexels.com/photos/30268837/pexels-photo-30268837.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
};

/** Sumber semua foto & video karya (Google Photos share links milik Zidan). */
export const workSources = {
  work01: "https://photos.app.goo.gl/nz75rDP179semhc1A",
  work02: "https://photos.app.goo.gl/4t3y6P5JvgghGziv9",
  work03: "https://photos.app.goo.gl/vuznsmDnkv1Un5sa8",
  /** Video motion graphics (Google Photos). */
  motion: "https://photos.app.goo.gl/zYxr9bqRkaKwjQ5s5",
  /** Video motion graphics versi Google Drive — sumber file MP4 utama. */
  motionDrive:
    "https://drive.google.com/file/d/1uhZsaWv8T73ygchYRQLCEhLqE-Bep1-S/view?usp=drive_link",
  /** Video profil (reel vertikal) di Google Photos. */
  profileReel: "https://photos.app.goo.gl/Eero7QXWSqgb1vqF6",
};

/**
 * Video profil vertikal — reel pengenalan diri (40.7 detik, 356×640).
 * Di-inline sebagai data URI agar dijamin selalu tersedia bersama bundle.
 */
export const profileReel = {
  src: profileReelVideo,
  href: "https://photos.app.goo.gl/Eero7QXWSqgb1vqF6",
  label: "Reel video profil Zidan Firstian Pandora, videografer dan video editor",
};

export const site = {
  name: "Zidan Firstian Pandora",
  logo: "ZIDAN",
  role: "Videographer & Video Editor",
  tagline: "Turning Moments Into Meaningful Stories.",
  description:
    "Videographer & Video Editor yang berfokus pada dokumentasi kegiatan, storytelling visual, dan menciptakan karya video yang kreatif serta bermakna.",
  labels: ["VIDEOGRAPHER", "VIDEO EDITOR", "VISUAL STORYTELLER"],
  email: "zidanfirstianpandora@gmail.com",
  whatsappDisplay: "0857-7783-4452",
  whatsappNumber: "6285777834452",
  driveFolder: "https://drive.google.com/drive/folders/1ixxwwiWVCywpuhSU8MahQZPXy_Q_9Las",
};

export const links = {
  whatsapp: `https://wa.me/${site.whatsappNumber}`,
  email: `mailto:${site.email}`,
  drive: site.driveFolder,
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------- HERO ------------------------------- */

export const hero = {
  // Video background (opsional). Jika ingin memakai reel milik sendiri,
  // cukup ganti `video` dan `poster` di bawah ini.
  video: "https://videos.pexels.com/video-files/31026110/13262112_3840_2160_24fps.mp4",
  poster:
    "https://images.pexels.com/videos/31026110/man-taking-video-of-a-house-using-a-sony-camera-on-a-dji-gimbal-stabilizer-31026110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  fallbackImage:
    "https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
};

/* ------------------------------- ABOUT ------------------------------ */

export const about = {
  title: "Behind The Visuals.",
  photo: profileImage.src,
  paragraphs: [
    "Saya adalah individu yang memiliki minat besar dalam dokumentasi kegiatan dan editing video. Saya senang mengabadikan berbagai momen, menangkap cerita melalui visual, serta mengolah hasil rekaman menjadi video yang menarik dan bermakna.",
    "Saya terus mengembangkan kreativitas, kemampuan teknis, dan kepekaan visual untuk menghasilkan konten berkualitas. Saya juga memiliki semangat untuk belajar hal baru, bekerja sama dalam tim, dan berkontribusi dalam setiap proyek kreatif.",
  ],
  facts: [
    { label: "Nama", value: "Zidan Firstian Pandora" },
    { label: "Pendidikan", value: "SMK Muhammadiyah 2 Taman" },
    { label: "Jurusan", value: "Desain Komunikasi Visual" },
    { label: "Passion", value: "Videografi & Editing Video" },
    { label: "Pengalaman", value: "Admin di New Idea Indonesia (1–2 tahun)" },
  ],
};

/**
 * Strip "Behind The Lens" di section About — foto dokumentasi asli milik Zidan.
 * Catatan: caption menjelaskan isi frame secara netral tanpa mengklaim
 * nama acara/brand di luar yang benar-benar terlihat pada foto.
 */
export const galleryShots = [
  {
    src: work01,
    tag: "Event — Suasana Peserta",
    caption:
      "Dokumentasi suasana peserta acara, hasil karya Zidan Firstian Pandora",
  },
  {
    src: work02,
    tag: "Event — Panggung & Catwalk",
    caption:
      "Dokumentasi panggung dan catwalk peserta, hasil karya Zidan Firstian Pandora",
  },
  {
    src: work03,
    tag: "Product — Detail Kemasan",
    caption:
      "Product photography perawatan kulit, hasil karya Zidan Firstian Pandora",
  },
];

/* ----------------------------- PORTFOLIO ---------------------------- */

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  /** Rasio thumbnail: "16:9" | "4:5" */
  ratio: "16:9" | "4:5";
  /** Lebar kolom pada grid desktop (Tailwind: col-span-*) */
  span: string;
  thumbnail: string;
  href: string;
  year: string;
  /**
   * "photo" = karya nyata (still foto dari lapangan).
   * "video" = karya video asli — diputar langsung di dalam situs.
   * "placeholder" = slot kosong yang menunggu karya asli.
   */
  kind?: "photo" | "video" | "placeholder";
  /** URL file video (MP4) untuk karya yang bisa diputar inline. */
  /** URL file video (MP4) untuk karya yang bisa diputar inline. */
  videoUrl?: string;
  /**
   * URL sumber video alternatif (opsional). Bila ada, dipakai sebagai
   * sumber streaming agar bundle tetap ringan; `videoUrl` menjadi fallback.
   */
  videoStreamUrl?: string;
  /** Tautan sumber foto asli (Google Photos), jika ada. */
  sourceUrl?: string;
  /** Dimensi asli thumbnail — mencegah layout shift saat gambar dimuat. */
  imgWidth?: number;
  imgHeight?: number;
};

export const portfolioNote =
  "Kartu bertanda FOTO adalah still hasil dokumentasi lapangan milik Zidan. Karya video lengkap tersimpan di folder Google Drive — kartu bertanda SLOT VIDEO menunggu diisi judul & thumbnail karya video asli (ganti datanya di src/data/site.ts).";

export const categories = [
  "All",
  "Event Documentation",
  "Creative Content",
  "Videography",
  "Video Editing",
  "Animation",
];

export const projects: Project[] = [
  /* ─────────────── KARYA NYATA (still foto dokumentasi lapangan) ─────────────── */

  {
    id: "w-01",
    category: "Event Documentation",
    title: "Momen Peserta — Dokumentasi Acara",
    description:
      "Mengabadikan reaksi spontan para peserta di tengah rangkaian acara. Fokus pada ekspresi jujur, komposisi rapat, dan bokeh yang memisahkan subjek dari keramaian ruangan.",
    ratio: "16:9",
    span: "lg:col-span-7",
    thumbnail: work01,
    imgWidth: 1300,
    imgHeight: 867,
    href: links.drive,
    year: "Event",
    kind: "photo",
    sourceUrl: workSources.work01,
  },
  {
    id: "w-02",
    category: "Event Documentation",
    title: "Catwalk Panggung — Beauty Muslimah Indonesia",
    description:
      "Dokumentasi catwalk peserta di depan LED screen. Pengambilan gambar memperhatikan tempo gerakan, pencahayaan panggung, dan detail kostum agar terasa hidup seperti siaran langsung.",
    ratio: "16:9",
    span: "lg:col-span-5",
    thumbnail: work02,
    imgWidth: 1000,
    imgHeight: 667,
    href: links.drive,
    year: "Event",
    kind: "photo",
    sourceUrl: workSources.work02,
  },
  {
    id: "w-03",
    category: "Creative Content",
    title: "Product Detail — Tata Letak Skincare",
    description:
      "Product photography untuk konten kreatif: susunan tata letak produk, pemilihan sudut cahaya, dan detail kemasan agar informasi produk terbaca jelas dalam satu frame.",
    ratio: "16:9",
    span: "lg:col-span-5",
    thumbnail: work03,
    imgWidth: 1000,
    imgHeight: 667,
    href: links.drive,
    year: "Product",
    kind: "photo",
    sourceUrl: workSources.work03,
  },

  /* ─────────────── KARYA MOTION GRAPHICS (video asli) ─────────────── */

  {
    id: "p-05",
    category: "Animation",
    title: "Motion Graphics — Eksplorasi Animasi",
    description:
      "Karya animasi yang menggabungkan pergerakan tipografi, transisi, dan komposisi visual. Dasar pengembangan skill motion graphics yang membawa saya meraih Juara Harapan 1 MEAwards 2025 pada kategori Lomba Animasi.",
    ratio: "16:9",
    span: "lg:col-span-12",
    thumbnail: "",
    /** Streaming langsung dari Google Drive — bundle tetap ringan. */
    videoStreamUrl:
      "https://drive.usercontent.google.com/download?id=1uhZsaWv8T73ygchYRQLCEhLqE-Bep1-S&export=download",
    /** Fallback lokal (data URI) bila Drive tidak dapat dijangkau. */
    videoUrl: motionVideo,
    href: workSources.motionDrive,
    year: "Motion",
    kind: "video",
    sourceUrl: workSources.motionDrive,
  },
];

/* ---------------------------- EXPERIENCE ---------------------------- */

export const timeline = [
  {
    type: "Profesional",
    title: "New Idea Indonesia",
    role: "Admin",
    period: "1–2 Tahun",
    description:
      "Berpengalaman dalam lingkungan kerja profesional dengan mengembangkan kedisiplinan, tanggung jawab, komunikasi, dan kemampuan bekerja sama dalam tim.",
    tags: ["Kedisiplinan", "Komunikasi", "Kerja Tim", "Tanggung Jawab"],
  },
  {
    type: "Pendidikan",
    title: "SMK Muhammadiyah 2 Taman",
    role: "Desain Komunikasi Visual",
    period: "Siswa",
    description:
      "Menekuni bidang Desain Komunikasi Visual dengan fokus pada videografi, dokumentasi kegiatan, dan editing video.",
    tags: ["DKV", "Videografi", "Editing"],
  },
];

/* ---------------------------- ACHIEVEMENT --------------------------- */

export const achievements = [
  {
    title: "Juara Harapan 1",
    event: "MEAwards 2025",
    category: "Kategori: Lomba Animasi",
  },
];

/* ------------------------------- SKILLS ----------------------------- */

export const skills = [
  {
    name: "Video Editing",
    desc: "Menyusun alur cerita, ritme, color grading, dan finishing.",
    icon: "scissors",
  },
  {
    name: "Videography",
    desc: "Pengambilan gambar, framing, dan komposisi sinematik.",
    icon: "camera",
  },
  {
    name: "Event Documentation",
    desc: "Mendokumentasikan kegiatan dari persiapan hingga liputan.",
    icon: "calendar",
  },
  {
    name: "Visual Storytelling",
    desc: "Menerjemahkan ide menjadi narasi visual yang mudah dipahami.",
    icon: "sparkles",
  },
  {
    name: "Creative Content",
    desc: "Mengemas ide menjadi konten yang segar dan relevan.",
    icon: "bulb",
  },
];

export const tools = [
  { name: "CapCut", mark: "Cc", desc: "Editing cepat & konten short-form" },
  { name: "Adobe After Effects", mark: "Ae", desc: "Motion graphics & compositing" },
];

/* ------------------------------ GOALS ------------------------------- */

export const goals = {
  headline: "Every Frame Has a Story.",
  description:
    "Saya ingin berkembang menjadi videografer dan video editor profesional yang mampu mengabadikan momen, menyampaikan cerita, dan mengubah ide menjadi karya visual yang kreatif, berkualitas, serta bermakna.",
  cta: "Let's Create Something Together",
  /** Memakai foto dokumentasi asli milik Zidan sebagai latar. */
  background: work02,
  backgroundAlt:
    "Suasana panggung Beauty Muslimah Indonesia — dokumentasi karya Zidan Firstian Pandora",
};

/* ----------------------------- MARQUEE ------------------------------ */

export const marqueeWords = [
  "Videography",
  "Storytelling",
  "Event Documentation",
  "Video Editing",
  "Motion Graphics",
  "Creative Content",
  "Color Grading",
  "Cinematic",
];
