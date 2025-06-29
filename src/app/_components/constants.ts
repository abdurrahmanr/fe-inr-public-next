export type LinkItem =
  | {
      type: "link";
      url: string;
    }
  | {
      type: "dropdown";
      url: string;
      options: string[];
    };

export const links: LinkItem[] = [
  {
    type: "link",
    url: "beranda",
  },
  {
    type: "dropdown",
    url: "profil",
    options: ["sejarah", "visi-misi", "tentang", "struktur-organisasi"],
  },
  {
    type: "link",
    url: "anggota",
  },
  {
    type: "link",
    url: "blog",
  },
  {
    type: "link",
    url: "kegiatan",
  },
  {
    type: "link",
    url: "karya",
  },
  {
    type: "link",
    url: "agenda",
  },
];

export const dataBlog = [
  {
    id: 1,
    title:
      "Pengumuman Calon Angkatan Muda yang berhasil lolos ke Tahap Selanjutnya 1",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident 1.",
    author: "admin",
    date: "21 January 2023",
    category: "event",
  },
  {
    id: 2,
    title:
      "Pengumuman Calon Angkatan Muda yang berhasil lolos ke Tahap Selanjutnya 2",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident 2.",
    author: "admin",
    date: "22 January 2023",
    category: "web",
  },
  {
    id: 3,
    title:
      "Pengumuman Calon Angkatan Muda yang berhasil lolos ke Tahap Selanjutnya 3",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident 3.",
    author: "imank",
    date: "23 January 2023",
    category: "mobile",
  },
  {
    id: 4,
    title:
      "Pengumuman Calon Angkatan Muda yang berhasil lolos ke Tahap Selanjutnya 4",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident 4.",
    author: "admin",
    date: "24 January 2023",
    category: "desain",
  },
  {
    id: 5,
    title:
      "Pengumuman Calon Angkatan Muda yang berhasil lolos ke Tahap Selanjutnya 5",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident 4.",
    author: "admin",
    date: "24 January 2023",
    category: "event",
  },
  {
    id: 6,
    title: "Summer Picnic",
    description: "Join us for a sunny outdoor event!",
    author: "Jane Doe",
    date: "2023-08-15",
    category: "event",
  },
  {
    id: 7,
    title: "Mobile App Launch",
    description: "Introducing a cutting-edge mobile app.",
    author: "Alex Smith",
    date: "2023-07-10",
    category: "mobile",
  },
  {
    id: 8,
    title: "Web Development Workshop",
    description: "Learn the latest web development trends.",
    author: "Michael Johnson",
    date: "2023-09-25",
    category: "web",
  },
  {
    id: 9,
    title: "Modern Design Showcase",
    description: "Explore the world of contemporary design.",
    author: "Emily Green",
    date: "2023-08-05",
    category: "desain",
  },
  {
    id: 10,
    title: "Tech Conference",
    description: "Connect with tech enthusiasts and experts.",
    author: "John Brown",
    date: "2023-09-18",
    category: "event",
  },
  {
    id: 11,
    title: "Mobile Photography Workshop",
    description: "Capture stunning moments with your phone.",
    author: "Sarah Turner",
    date: "2023-07-28",
    category: "mobile",
  },
  {
    id: 12,
    title: "Web Design Trends",
    description: "Discover the latest in web design aesthetics.",
    author: "Daniel White",
    date: "2023-09-10",
    category: "web",
  },
  {
    id: 13,
    title: "Graphic Design Workshop",
    description: "Learn techniques for creating impactful visuals.",
    author: "Jessica Davis",
    date: "2023-08-05",
    category: "desain",
  },
  {
    id: 14,
    title: "Startup Summit",
    description: "Fuel your entrepreneurial spirit.",
    author: "Kevin Black",
    date: "2023-09-25",
    category: "event",
  },
  {
    id: 15,
    title: "Mobile Gaming Showcase",
    description: "Explore the world of mobile gaming.",
    author: "Ethan Gray",
    date: "2023-07-05",
    category: "mobile",
  },
  {
    id: 16,
    title: "Web Development Bootcamp",
    description: "Intensive coding and web skills training.",
    author: "Olivia Adams",
    date: "2023-08-15",
    category: "web",
  },
  {
    id: 17,
    title: "Design Thinking Workshop",
    description: "Learn the process of design thinking.",
    author: "Lucas Turner",
    date: "2023-09-12",
    category: "desain",
  },
  {
    id: 18,
    title: "Art and Tech Exhibition",
    description: "Explore the fusion of art and technology.",
    author: "Sophia White",
    date: "2023-08-25",
    category: "event",
  },
  {
    id: 19,
    title: "Mobile App Design Masterclass",
    description: "Deep dive into mobile app UI/UX design.",
    author: "Andrew Lee",
    date: "2023-07-20",
    category: "mobile",
  },
  {
    id: 20,
    title: "Web Accessibility Workshop",
    description: "Create inclusive and accessible web experiences.",
    author: "Maria Clark",
    date: "2023-08-30",
    category: "web",
  },
  {
    id: 21,
    title: "Digital Design Exhibition",
    description: "Showcasing innovative digital design creations.",
    author: "William Johnson",
    date: "2023-09-08",
    category: "desain",
  },
  {
    id: 22,
    title: "AI in Events Conference",
    description: "Exploring the role of AI in event planning.",
    author: "Nora Brown",
    date: "2023-09-18",
    category: "event",
  },
  {
    id: 23,
    title: "Mobile App Development Trends",
    description: "Stay up-to-date with mobile app trends.",
    author: "Jacob Taylor",
    date: "2023-07-12",
    category: "mobile",
  },
  {
    id: 24,
    title: "Web Animation Workshop",
    description: "Learn to add dynamic animations to websites.",
    author: "Ava Wilson",
    date: "2023-08-08",
    category: "web",
  },
  {
    id: 25,
    title: "Design Principles Seminar",
    description: "Exploring fundamental design principles.",
    author: "Leo Smith",
    date: "2023-09-15",
    category: "desain",
  },
];

export const dataAgenda = [
  {
    id: 1,
    title: "Outdoor Inready Workgroup",
    description:
      "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
    author: "admin",
    date: "28-30 Oktober 2022",
  },
  {
    id: 2,
    title: "Tahap Wawancara Calon Angkatan Muda",
    description:
      "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
    author: "admin",
    date: "20 September 2022",
  },
  {
    id: 3,
    title: "Open House untuk Calon Angkatan Muda",
    description:
      "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
    author: "admin",
    date: "15 September 2022",
  },
  {
    id: 4,
    title: "Sosialisasi Inready Workgroup untuk Calon Angkatan Muda",
    description:
      "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
    author: "admin",
    date: "10 September 2022",
  },
  {
    id: 5,
    title: "Rapat Kerja Pengurus Inready Workgroup periode 2022-2023",
    description:
      "Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.",
    author: "admin",
    date: "25 Agustus 2022",
  },
];

export const pengurus = [
  {
    nama: "a",
    jabatan: "pembina",
  },
  {
    nama: "a",
    jabatan: "pembina",
  },
];

export const categories = ["event", "mobile", "desain", "web"];
