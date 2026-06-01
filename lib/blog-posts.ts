export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Beach Tips" | "Food Delivery";
  publishedAt: string;
  image: string;
  imageAlt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "beach-chair-rental-virginia-beach",
    title: "Beach Chair Rental in Virginia Beach — Everything You Need to Know",
    excerpt:
      "Planning a trip to Virginia Beach? Skip the hauling. Here is a smarter way to handle beach chair and umbrella setup.",
    category: "Beach Tips",
    publishedAt: "2026-05-27",
    image: "/assets/hero-beach.jpg",
    imageAlt: "Virginia Beach shoreline at sunset",
    sections: [
      {
        heading: "The Old Way: Walk-Up Rental Stands",
        paragraphs: [
          "For years, the standard option for beach chair rental in Virginia Beach has been walk-up rental stands on or near beach access points. You show up, wait, pick up your gear, haul it yourself, and reverse the same process at the end of the day.",
          "That model can work, but it is limited by inventory, timing, and effort. If you also need umbrellas, coolers, snacks, or drinks, you usually have to make separate stops and carry everything across the sand.",
        ],
      },
      {
        heading: "The New Way: On-Demand Beach Delivery",
        paragraphs: [
          "ShoreDrop is built for a different experience: reserve beach essentials in advance and get them delivered to your beach location in Virginia Beach.",
          "Instead of juggling gear logistics, you focus on your day. We handle setup and pickup timing so your group can arrive ready to relax.",
        ],
      },
      {
        heading: "What to Book for a Smooth Day",
        paragraphs: [
          "For most groups, the essentials are simple: chairs, shade, and a cooler. Larger groups often benefit from expanded setups so everyone has a comfortable spot.",
          "If food and beverage options are available, you can keep everything coordinated through the app instead of splitting your day between errands.",
        ],
      },
    ],
  },
  {
    slug: "what-to-bring-to-virginia-beach",
    title: "What to Bring to Virginia Beach (And What You Can Skip)",
    excerpt:
      "A practical packing list for Virginia Beach that helps you keep the fun and skip the heavy lifting.",
    category: "Beach Tips",
    publishedAt: "2026-05-27",
    image: "/assets/sandy-duo-package.jpg",
    imageAlt: "Beach setup with chairs and umbrella",
    sections: [
      {
        heading: "Bring the Essentials",
        paragraphs: [
          "A comfortable beach day starts with a short essentials list: seating, shade, hydration, and sun protection. Keeping this list focused makes planning easier.",
          "If you are coordinating for family or friends, reserve what you need ahead of time so you are not scrambling after arrival.",
        ],
      },
      {
        heading: "Skip Overpacking",
        paragraphs: [
          "Most visitors carry too much. Bulky gear, multiple coolers, and extra bags can turn a short walk into a stressful start.",
          "When setup and delivery are pre-arranged, you can travel lighter and keep the day centered on the beach, not on logistics.",
        ],
      },
    ],
  },
  {
    slug: "food-delivery-to-the-beach",
    title: "Food Delivery to the Beach in Virginia Beach — Yes, It's a Thing",
    excerpt:
      "Get meals and drinks delivered closer to your beach setup so you spend less time leaving your spot.",
    category: "Food Delivery",
    publishedAt: "2026-05-27",
    image: "/assets/mega-drop-package.jpg",
    imageAlt: "Food and drinks arranged for beach day service",
    sections: [
      {
        heading: "Keep Your Spot, Keep the Momentum",
        paragraphs: [
          "One of the biggest beach-day interruptions is leaving your area for food runs. It breaks up the day and can mean long lines at busy times.",
          "With delivery coordination, your group can stay in place and keep the day moving without repeated trips back and forth.",
        ],
      },
      {
        heading: "How to Plan Meal Timing",
        paragraphs: [
          "A simple approach is best: plan drinks and snacks first, then set a lunch window that matches your group’s schedule.",
          "When your setup and food timing are aligned, the day feels easier and more predictable for everyone.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
