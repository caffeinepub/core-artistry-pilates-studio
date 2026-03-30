import { ClassStatus, ClassType } from "../backend.d";

export const mockClasses = [
  {
    id: "1",
    startTime:
      BigInt(new Date("2026-03-30T07:00:00").getTime()) * BigInt(1000000),
    status: ClassStatus.booked,
    instructor: "Sofia Chen",
    durationMinutes: BigInt(55),
    spotsLeft: BigInt(1),
    capacity: BigInt(3),
    classType: ClassType.refomer,
  },
  {
    id: "2",
    startTime:
      BigInt(new Date("2026-03-30T09:30:00").getTime()) * BigInt(1000000),
    status: ClassStatus.waitlisted,
    instructor: "Elena Marchetti",
    durationMinutes: BigInt(50),
    spotsLeft: BigInt(0),
    capacity: BigInt(3),
    classType: ClassType.mat,
  },
  {
    id: "3",
    startTime:
      BigInt(new Date("2026-03-30T11:00:00").getTime()) * BigInt(1000000),
    status: ClassStatus.fullyBooked,
    instructor: "Marcus Webb",
    durationMinutes: BigInt(55),
    spotsLeft: BigInt(0),
    capacity: BigInt(3),
    classType: ClassType.refomer,
  },
  {
    id: "4",
    startTime:
      BigInt(new Date("2026-03-30T14:00:00").getTime()) * BigInt(1000000),
    status: ClassStatus.bookingClosed,
    instructor: "Isabelle Laurent",
    durationMinutes: BigInt(60),
    spotsLeft: BigInt(0),
    capacity: BigInt(3),
    classType: ClassType.privateSession,
  },
  {
    id: "5",
    startTime:
      BigInt(new Date("2026-03-31T07:30:00").getTime()) * BigInt(1000000),
    status: ClassStatus.booked,
    instructor: "Sofia Chen",
    durationMinutes: BigInt(55),
    spotsLeft: BigInt(2),
    capacity: BigInt(3),
    classType: ClassType.mat,
  },
  {
    id: "6",
    startTime:
      BigInt(new Date("2026-03-31T10:00:00").getTime()) * BigInt(1000000),
    status: ClassStatus.booked,
    instructor: "Isabelle Laurent",
    durationMinutes: BigInt(55),
    spotsLeft: BigInt(1),
    capacity: BigInt(3),
    classType: ClassType.refomer,
  },
  {
    id: "7",
    startTime:
      BigInt(new Date("2026-04-01T08:00:00").getTime()) * BigInt(1000000),
    status: ClassStatus.waitlisted,
    instructor: "Marcus Webb",
    durationMinutes: BigInt(50),
    spotsLeft: BigInt(0),
    capacity: BigInt(3),
    classType: ClassType.mat,
  },
  {
    id: "8",
    startTime:
      BigInt(new Date("2026-04-01T17:30:00").getTime()) * BigInt(1000000),
    status: ClassStatus.booked,
    instructor: "Elena Marchetti",
    durationMinutes: BigInt(55),
    spotsLeft: BigInt(1),
    capacity: BigInt(3),
    classType: ClassType.refomer,
  },
];

export const mockInstructors = [
  {
    id: "1",
    name: "Sofia Chen",
    bio: "A former ballet dancer turned master Pilates instructor, Sofia brings a refined sense of artistry to every session. With over 12 years of practice, her classes are a meditative journey through precise, intentional movement.",
    specialties: [ClassType.refomer, ClassType.mat],
    image: "/assets/generated/instructor-sofia.dim_400x400.jpg",
  },
  {
    id: "2",
    name: "Elena Marchetti",
    bio: "Trained at the Pilates Foundation in London, Elena specialises in clinical Pilates and rehabilitation. Her holistic approach integrates breathwork and mindfulness, helping clients reconnect with their bodies on a deeper level.",
    specialties: [ClassType.mat, ClassType.privateSession],
    image: "/assets/generated/instructor-elena.dim_400x400.jpg",
  },
  {
    id: "3",
    name: "Marcus Webb",
    bio: "An advocate for functional movement, Marcus has worked with elite athletes and wellness enthusiasts alike. His reformer classes challenge strength and mobility, leaving clients feeling both powerful and renewed.",
    specialties: [ClassType.refomer, ClassType.privateSession],
    image: "/assets/generated/instructor-marcus.dim_400x400.jpg",
  },
  {
    id: "4",
    name: "Isabelle Laurent",
    bio: "Isabelle's philosophy is simple: the body is a work of art in progress. A certified STOTT Pilates instructor with a background in contemporary dance, she crafts sessions that are equal parts sculptural and restorative.",
    specialties: [ClassType.refomer, ClassType.mat, ClassType.privateSession],
    image: "/assets/generated/instructor-isabelle.dim_400x400.jpg",
  },
];

export const mockTestimonials = [
  {
    id: "1",
    author: "Alexandra K.",
    content:
      "Core Artistry has completely transformed how I inhabit my body. Sofia's sessions are unlike anything I've experienced — meditative, precise, and deeply effective. I wouldn't trade my Tuesday mornings for the world.",
    rating: BigInt(5),
    timestamp: BigInt(Date.now()),
  },
  {
    id: "2",
    author: "James T.",
    content:
      "As someone who spent years ignoring my body, Marcus has genuinely changed my life. The small class sizes mean every session feels entirely personal. The studio itself is a sanctuary.",
    rating: BigInt(5),
    timestamp: BigInt(Date.now()),
  },
  {
    id: "3",
    author: "Priya M.",
    content:
      "Elena's approach is so thoughtful and intuitive. She noticed tension patterns in my body I wasn't even aware of. Three months in and my posture, energy, and confidence are all transformed.",
    rating: BigInt(5),
    timestamp: BigInt(Date.now()),
  },
  {
    id: "4",
    author: "Camille D.",
    content:
      "The intimacy of maximum three people per class is something you simply cannot find elsewhere. Isabelle gives you her undivided attention and the results speak for themselves. Absolute luxury.",
    rating: BigInt(5),
    timestamp: BigInt(Date.now()),
  },
  {
    id: "5",
    author: "Rachel S.",
    content:
      "I came for the reformer classes and stayed for the community. Core Artistry has cultivated something rare — a space that feels both exclusive and deeply welcoming. It's become my weekly ritual.",
    rating: BigInt(4),
    timestamp: BigInt(Date.now()),
  },
  {
    id: "6",
    author: "Michael H.",
    content:
      "After a back injury, I was hesitant to try Pilates. Marcus and Elena collaborated on a programme specifically for me. Six weeks later, I'm pain-free and stronger than ever. Exceptional care.",
    rating: BigInt(5),
    timestamp: BigInt(Date.now()),
  },
];
