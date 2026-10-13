/**
 * Editable content for the Paradise residents' site.
 * Replace the sample notices, and fill associationEmail and associationPhone,
 * before treating the board as live.
 */

export const site = {
  name: "Paradise",
  township: "Brigade Cornerstone Utopia",
  brand: "Paradise | Brigade Cornerstone Utopia",
  place: "Varthur, Bengaluru",
  description:
    "Residents' site for Paradise at Brigade Cornerstone Utopia: notices, shared amenities, and everyday contacts.",
  addressLines: [
    "Paradise | Brigade Cornerstone Utopia",
    "Whitefield–Sarjapur Road, Varthur",
    "Bengaluru, Karnataka 560087",
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Brigade%20Cornerstone%20Utopia%20Varthur%20Bengaluru",
  rera: "PRM/KA/RERA/1251/446/PR/210219/003926",
  associationEmail: "bcuparadiserwa@gmail.com",
  associationPhone: "",
  officeHours: "Not published",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/amenities", label: "Amenities" },
  { href: "/notices", label: "Notices" },
  { href: "/directory", label: "Directory" },
  { href: "/contact", label: "Contact" },
] as const;

export const blocks = ["Eden", "Serene", "Halcyon", "Tranquil", "Paradise"] as const;

export const homes = [
  {
    name: "Studio",
    area: "510, 533 and 565 sq ft",
    metric: "47, 49 and 52 sq m",
    summary: "A single living space, planned for one or two people.",
  },
  {
    name: "Cosy 2 BHK",
    area: "852, 854 and 857 sq ft",
    metric: "79 sq m",
    summary: "Two bedrooms in the smaller Paradise plan.",
  },
  {
    name: "Comfy 2 BHK",
    area: "1,100 and 1,102 sq ft",
    metric: "102 sq m",
    summary: "Two bedrooms and two toilets in the larger Paradise plan.",
  },
] as const;

export const facts = [
  { label: "Homes", value: "Studio and 2 BHK" },
  { label: "Block", value: "Paradise, one of five" },
  { label: "Place", value: "Varthur, Bengaluru" },
  { label: "Record", value: "RERA registered" },
] as const;

export type NoticeCategory = "Maintenance" | "Community" | "Safety";

export type Notice = {
  id: string;
  title: string;
  date: string;
  category: NoticeCategory;
  body: string;
  sample: boolean;
};

export const notices: Notice[] = [
  {
    id: "sample-parking",
    title: "Visitor parking",
    date: "2026-10-09",
    category: "Safety",
    sample: true,
    body: "Example only. A real notice would name the visitor bay, the hours, and who to call if a car is blocking a driveway.",
  },
  {
    id: "sample-meeting",
    title: "Wing meeting",
    date: "2026-10-04",
    category: "Community",
    sample: true,
    body: "Example only. A real notice would give the venue, the time, and the decisions residents are being asked to make.",
  },
  {
    id: "sample-water-tank",
    title: "Overhead tank cleaning",
    date: "2026-09-18",
    category: "Maintenance",
    sample: true,
    body: "Example only. A real notice would name the date, the stacks affected, and whether the water supply will stop.",
  },
];

export const amenityGroups = [
  {
    title: "Water and wellness",
    items: [
      {
        name: "Swimming pool",
        detail: "A township pool, with a separate children's pool listed beside it.",
      },
      {
        name: "Gymnasium",
        detail: "A shared gym on the clubhouse circuit.",
      },
      {
        name: "Clubhouse",
        detail: "Indoor rooms used for residents' gatherings.",
      },
      {
        name: "Walking paths",
        detail: "Jogging and walking routes through the open parts of the campus.",
      },
    ],
  },
  {
    title: "Courts and play",
    items: [
      {
        name: "Children's play",
        detail: "Outdoor play space for younger residents.",
      },
      {
        name: "Basketball and tennis",
        detail: "Outdoor courts published for the township.",
      },
      {
        name: "Badminton",
        detail: "Listed among the indoor and outdoor games.",
      },
      {
        name: "Skating rink",
        detail: "A paved loop for children and learners.",
      },
      {
        name: "Amphitheatre",
        detail: "An open gathering space for community programmes.",
      },
    ],
  },
  {
    title: "Everyday campus",
    items: [
      {
        name: "Gardens",
        detail: "Landscaped open space across the township.",
      },
      {
        name: "Hall and indoor games",
        detail: "A multipurpose hall and an indoor games room for bookings and small events.",
      },
      {
        name: "Security",
        detail: "A gated campus, with security cabins and CCTV published for the township.",
      },
      {
        name: "Power and parking",
        detail: "Backup for common areas, and resident car parking.",
      },
      {
        name: "Retail edge",
        detail:
          "Paradise is the block with the shorter walk to the high-street shops, the multiplex, and the offices.",
      },
    ],
  },
] as const;

export const emergencyContacts = [
  { label: "All emergencies", number: "112", note: "Police, fire, and ambulance" },
  { label: "Police", number: "100", note: "Local police" },
  { label: "Fire", number: "101", note: "Fire and rescue" },
  { label: "Ambulance", number: "108", note: "Medical emergency" },
  { label: "Women's helpline", number: "1091", note: "Women in distress" },
] as const;
