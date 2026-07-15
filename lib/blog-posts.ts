export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Beach Tips" | "Food Delivery" | "Private Events" | "Virginia Beach Tips";
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
      "Planning a trip to Virginia Beach? Skip the hauling. Here's everything you need to know about beach chair rental - and a smarter, on-demand way to do it.",
    category: "Beach Tips",
    publishedAt: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Virginia Beach shoreline at sunset",
    sections: [
      {
        heading: "Planning a trip to Virginia Beach and wondering about beach chair rental?",
        paragraphs: [
          "You're not alone. It's one of the most common questions tourists ask before arriving - and for good reason. Hauling chairs, umbrellas, and coolers from a parking lot to the sand is nobody's idea of a vacation.",
          "Here's everything you need to know about renting beach chairs in Virginia Beach, including a smarter way to do it that most visitors don't even know exists.",
        ],
      },
      {
        heading: "The Old Way: Walk-Up Rental Stands",
        paragraphs: [
          "For years, the standard option for beach chair rental in Virginia Beach has been walk-up rental stands on the boardwalk or near beach access points. You show up, wait in line, pick up your gear, haul it to your spot, and then reverse the whole process at the end of the day. It works - but it's not exactly the relaxing beach day most people have in mind.",
          "Walk-up rentals are also limited in what they offer. You typically get a chair and maybe an umbrella. Need a cooler? You're carrying that yourself. Want a tent for your kids? Probably not available. Forgot sunscreen or snacks? Time to leave your spot and find a store.",
        ],
      },
      {
        heading: "The New Way: On-Demand Beach Delivery",
        paragraphs: [
          "ShoreDrop is Virginia Beach's on-demand beach delivery and setup service. Instead of renting gear at a stand and hauling it to the sand yourself, you order through the ShoreDrop app and we deliver everything directly to your beach spot - chairs, umbrellas, tents, coolers with ice, and more.",
          "You can pre-order the night before so your setup is ready when you arrive, or place an on-demand order the same day. Either way, you show up to a fully prepared beach setup with zero effort.",
        ],
      },
      {
        heading: "What You Can Order Through ShoreDrop",
        paragraphs: [
          "ShoreDrop offers several ready-made packages as well as a build-your-own option:",
          "The Chill Pill - 1 chair, 1 umbrella, 1 small cooler with ice. Starting at $34.99. Perfect for a solo beach day or a couple looking to keep it simple.",
          "The Sandy Duo - 2 chairs, 1 umbrella, 1 small cooler with ice. Starting at $44.99. Great for two people who want to relax without the hassle.",
          "The Shady Bunch - 4 chairs, 1 tent, 1 large cooler with ice. Starting at $64.99. A solid setup for a small group or family.",
          "The Mega Drop - 8 chairs, 2 tents, 2 large coolers with ice. Starting at $119.99. The ultimate beach day for large groups, birthday parties, or family reunions.",
          "You can also build your own setup by choosing individual items - chairs at $15 each, umbrellas at $30, tents at $25, small coolers at $15, large coolers at $25.",
        ],
      },
      {
        heading: "Food Delivery Straight to Your Beach Spot",
        paragraphs: [
          "Here's what makes ShoreDrop different from any traditional beach chair rental service: we also deliver food and drinks from local Virginia Beach restaurants directly to your spot on the sand. No leaving your setup, no missing the waves, no dragging the kids back to the boardwalk for lunch. Order from the app and it comes to you.",
        ],
      },
      {
        heading: "Pre-Order for the Best Experience",
        paragraphs: [
          "The easiest way to use ShoreDrop is to pre-order the night before. Place your order before 11:59 PM and our crew will have your setup ready on the beach before you arrive the next morning. You'll get a photo sent to your phone confirming everything is in place - chairs out, umbrella up, cooler stocked - before you even leave the hotel.",
        ],
      },
      {
        heading: "Who ShoreDrop Is For",
        paragraphs: [
          "ShoreDrop was built for anyone who wants to spend more time enjoying the beach and less time managing logistics:",
          "Families with young kids who don't want to pack and unpack a car full of gear",
          "Tourists visiting Virginia Beach who didn't bring equipment from home",
          "Groups and parties that need more than a couple of chairs",
          "Anyone who values their time and just wants to show up and relax",
        ],
      },
      {
        heading: "How to Get Started",
        paragraphs: [
          "ShoreDrop is available now on the App Store. Download the app, browse the packages, and book your beach setup in minutes. Whether you're visiting Virginia Beach this weekend or planning ahead for summer, ShoreDrop is the easiest way to handle beach chair rental, umbrella delivery, and everything else you need for a perfect day at the shore.",
          "Ready to skip the hauling and go straight to relaxing? Download the ShoreDrop app and book your setup today.",
        ],
      },
    ],
  },
  {
    slug: "what-to-bring-to-virginia-beach",
    title: "What to Bring to Virginia Beach (And What You Can Skip)",
    excerpt:
      "Packing for Virginia Beach? Here's a practical guide to what you actually need to bring - and what you can leave at home thanks to ShoreDrop.",
    category: "Beach Tips",
    publishedAt: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Beach setup with chairs and umbrella",
    sections: [
      {
        heading: "Packing for a Virginia Beach trip always starts the same way",
        paragraphs: [
          "You picture a relaxing beach day, then reality kicks in and you're trying to fit two umbrellas, four chairs, a tent, a cooler, and three bags of snacks into an already-packed car. Sound familiar?",
          "Here's a practical guide to what you actually need to bring to Virginia Beach - and what you can skip entirely.",
        ],
      },
      {
        heading: "The Essentials You Should Always Pack",
        paragraphs: [
          "Sunscreen - Virginia Beach gets intense sun, especially from June through August. Bring more than you think you need, and go with SPF 50 or higher if you have kids. Reapply every two hours.",
          "Swimwear and a cover-up - Obvious, but worth noting: bring a cover-up for walking the boardwalk or stopping for food. Virginia Beach's Atlantic Avenue boardwalk has plenty of restaurants and shops within easy reach.",
          "Water shoes - The beach near the jetties and some northern sections can have shells and rough sand. Water shoes are especially useful for kids.",
          "A beach bag - Something waterproof or sand-resistant that can hold phones, sunscreen, snacks, and a change of clothes. The less you're digging through sand to find things, the better.",
          "Cash and a card - The boardwalk has everything from food trucks to souvenir shops. Some smaller vendors are cash only.",
          "Medications and a small first aid kit - Especially if you have kids. Jellyfish are rare but present, and minor cuts from shells happen.",
        ],
      },
      {
        heading: "What You Can Skip Entirely",
        paragraphs: [
          "This is where it gets interesting - and where most Virginia Beach visitors are overpacking.",
          "Heavy beach chairs - You don't need to bring them from home or rent them at a stand anymore. ShoreDrop delivers premium beach chairs directly to your spot on the Virginia Beach sand. Order through the app the night before and they're waiting for you when you arrive.",
          "Umbrellas and tents - Same story. ShoreDrop delivers umbrellas and beach tents as part of every package. Skip the awkward airline check-in with a giant umbrella bag and let us handle it.",
          "A massive cooler - Packing a 50-pound cooler in your car, hauling it to the beach, and then dragging it back at the end of the day is genuinely one of the worst parts of a beach trip. ShoreDrop includes coolers with ice in every package. Small and large sizes available. Order it, use it, leave it - we pick it up.",
          "Prepackaged snacks and drinks from home - ShoreDrop delivers food and drinks from local Virginia Beach restaurants directly to your beach spot. Want lunch from a local seafood restaurant without leaving your chair? Done. Cold drinks delivered in the afternoon? Easy. You don't need to pack a cooler full of food from home when you can order fresh on demand.",
        ],
      },
      {
        heading: "Virginia Beach Packing List - The Short Version",
        paragraphs: [
          "Here's what you actually need:",
          "- Sunscreen (SPF 50+)",
          "- Swimwear and cover-up",
          "- Water shoes",
          "- Beach bag",
          "- Phone and charger",
          "- Cash and card",
          "- Medications / small first aid kit",
          "- Towels (ShoreDrop offers these too - check current availability)",
          "That's it. Everything else - chairs, umbrellas, tents, coolers, food, and drinks - can come through ShoreDrop.",
        ],
      },
      {
        heading: "Planning Your Virginia Beach Beach Day",
        paragraphs: [
          "Virginia Beach offers miles of public beach from the Chesapeake Bay Bridge-Tunnel all the way up to the North End near First Landing State Park. The busiest sections tend to be near the boardwalk (between 1st and 40th Streets), where you'll find the most amenities. If you prefer a quieter stretch, head north of 42nd Street or toward Sandbridge Beach for a more relaxed atmosphere.",
          "Wherever you end up on the sand, ShoreDrop can deliver your setup and meals directly to your location. No more planning your day around hauling gear.",
        ],
      },
      {
        heading: "The Bottom Line",
        paragraphs: [
          "The best Virginia Beach trips are the ones where you spend more time in the water and less time managing equipment. Leave the bulky gear at home, download ShoreDrop, and show up to the beach ready to enjoy it.",
          "Pack light. Order smart. Enjoy more. Download ShoreDrop on the App Store.",
        ],
      },
    ],
  },
  {
    slug: "food-delivery-to-the-beach",
    title: "Food Delivery to the Beach in Virginia Beach — Yes, It's a Thing",
    excerpt:
      "Get food and drinks delivered directly to your spot on the Virginia Beach sand. ShoreDrop brings meals from local restaurants right to your chair.",
    category: "Food Delivery",
    publishedAt: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Food and drinks arranged for beach day service",
    sections: [
      {
        heading: "You're settled into your chair, and then someone says they're hungry",
        paragraphs: [
          "What happens next on most beach trips: everyone packs up, drags sand through the boardwalk, waits in line at a restaurant, and spends the next hour trying to convince everyone to go back. By the time you return, the good spot is gone.",
          "There's a better way.",
        ],
      },
      {
        heading: "Beach Food Delivery in Virginia Beach",
        paragraphs: [
          "ShoreDrop delivers food and drinks from local Virginia Beach restaurants directly to your spot on the sand. You stay in your chair. Your order comes to you. It's one of those things that sounds too convenient to be real until you've done it once.",
          "This is what food delivery to the beach actually looks like: you open the ShoreDrop app, browse the available restaurant options, place your order, and receive it at your beach location. Cold drinks, hot food, snacks - whatever you need, whenever you need it during your beach day.",
        ],
      },
      {
        heading: "Why Beach Food Delivery Changes Everything",
        paragraphs: [
          "For families, it's the difference between a smooth beach day and a chaotic mid-afternoon scramble. Keeping kids fed and happy without packing up a full setup is genuinely valuable.",
          "For groups, it means everyone eats together at the beach instead of splitting up to find food separately on the boardwalk.",
          "For couples, it turns a regular beach day into something that actually feels like a vacation - ordering lunch without leaving your spot, drinks arriving cold, no stress.",
        ],
      },
      {
        heading: "Local Virginia Beach Restaurants, Delivered",
        paragraphs: [
          "ShoreDrop works with local Virginia Beach restaurant partners to offer real food - not just snacks out of a cooler. We're talking actual meals delivered to the sand. Virginia Beach has an incredible local food scene with fresh seafood, casual dining, and everything in between, and ShoreDrop is building the bridge between those restaurants and the beach.",
        ],
      },
      {
        heading: "Beach Drinks Delivery Too",
        paragraphs: [
          "It's not just food. ShoreDrop delivers cold drinks - sodas, water, juices, and more - directly to your setup. Combined with the cooler with ice that comes in every ShoreDrop package, you're covered all day without ever leaving your spot.",
        ],
      },
      {
        heading: "How It Works",
        paragraphs: [
          "1. Download the ShoreDrop app on iOS",
          "2. Book your beach setup package (chairs, umbrella, cooler)",
          "3. When you're ready to eat, open the app and browse food options",
          "4. Place your order and stay put - delivery comes to you",
          "The whole experience is designed around one idea: you shouldn't have to leave the beach to have a great beach day.",
        ],
      },
      {
        heading: "Perfect For",
        paragraphs: [
          "Families with young kids - Getting little ones off the sand, through the crowds, and into a restaurant for lunch is exhausting. ShoreDrop brings lunch to them.",
          "Large groups - Coordinating food for 7+ people at a beach restaurant is chaos. Order for the group from the app and eat together at your setup.",
          "Hotel guests - Staying at a Virginia Beach hotel and heading to the beach? Your hotel is close to the water, but walking back for every meal adds up. ShoreDrop keeps you at the beach longer.",
          "Anyone who just wants to relax - Sometimes you don't want to think about logistics. ShoreDrop handles the gear and the food so you can actually unwind.",
        ],
      },
      {
        heading: "Virginia Beach Beach Day, Fully Covered",
        paragraphs: [
          "Between the beach setup delivery (chairs, umbrella, tent, cooler) and the food and drink delivery, ShoreDrop covers the full day. You show up, everything is there, food comes to you, and at the end of the day we pack it all up. That's what a real beach day should feel like.",
          "Hungry at the beach? Stay put. Download ShoreDrop and order food delivery to your Virginia Beach spot today.",
        ],
      },
    ],
  },
  {
    slug: "how-to-plan-a-private-beach-event-in-virginia-beach",
    title: "How to Plan a Private Beach Event in Virginia Beach (Birthday Parties, Corporate Outings & More)",
    excerpt:
      "Planning a private beach event in Virginia Beach? ShoreDrop handles setup, gear, food, and breakdown so you can focus on your guests.",
    category: "Private Events",
    publishedAt: "2026-05-27",
    image: "/assets/private-events-cover.png",
    imageAlt: "Private group beach setup at sunset",
    sections: [
      {
        heading: "Virginia Beach is one of the best places for a private beach event",
        paragraphs: [
          "Virginia Beach is one of the best places on the East Coast for a private beach event. Miles of open sand, warm Atlantic water, and a lively local restaurant scene make it an ideal setting for birthday parties, corporate outings, family reunions, graduation celebrations, and group gatherings of all kinds.",
          "The challenge - as anyone who has tried to coordinate beach logistics for a group knows - is the setup. Getting enough chairs, shade structures, food, and supplies to a beach location for 10, 20, or 50 people is a real operational challenge. That's exactly what ShoreDrop is built to solve.",
        ],
      },
      {
        heading: "What Makes a Great Private Beach Event",
        paragraphs: [
          "The best beach events share a few things in common: everyone has a place to sit, there's enough shade, food and drinks are handled, and the organizer isn't stressed out by the time guests arrive. That last part is harder than it sounds when you're coordinating gear for a large group.",
          "A well-organized private beach event in Virginia Beach typically includes:",
          "- Enough seating for all guests (chairs or lounge setups)",
          "- Shade coverage (tents and/or umbrellas)",
          "- Food and drinks that don't require guests to leave the beach",
          "- A clear location that's easy for everyone to find",
          "- Easy breakdown and cleanup at the end",
          "ShoreDrop handles all of the above.",
        ],
      },
      {
        heading: "Birthday Parties at the Beach",
        paragraphs: [
          "A beach birthday party in Virginia Beach is memorable in a way that a venue party simply isn't. The setting does most of the work - ocean backdrop, fresh air, space for everyone to move around. ShoreDrop delivers a full setup for your group: multiple chairs, tents for shade, large coolers with ice, and food delivery from local restaurant partners.",
          "Whether it's a kids' birthday party where families need shade and space for little ones to play, or an adult celebration where the group wants to spend the afternoon relaxed and fed, ShoreDrop can handle the logistics from start to finish.",
        ],
      },
      {
        heading: "Corporate Beach Outings",
        paragraphs: [
          "Virginia Beach corporate events are growing in popularity - it's a genuinely different experience from a conference room or a rented venue, and teams respond to it. A corporate beach outing done right means your team shows up to a ready setup, eats well, and spends the day actually enjoying each other's company instead of managing chairs and coolers.",
          "ShoreDrop's large group packages are well-suited for corporate outings. The Mega Drop (7 chairs, 2 tents, 2 large coolers) is a strong starting point, and individual items can be added to scale for larger groups. Food delivery from local Virginia Beach restaurants means you can offer a catered experience without the logistics of bringing outside catering onto the beach.",
        ],
      },
      {
        heading: "Family Reunions and Group Gatherings",
        paragraphs: [
          "Family reunions at Virginia Beach are a tradition for many East Coast families. ShoreDrop makes the logistics easy regardless of group size - book the gear in advance, have everything set up before your group arrives, and spend the day focused on the people rather than the equipment.",
        ],
      },
      {
        heading: "Off-Season Beach Events",
        paragraphs: [
          "Virginia Beach is genuinely beautiful outside of summer. Late spring and early fall offer mild temperatures, smaller crowds, and stunning views - ideal conditions for private events and corporate gatherings that want the beach setting without the peak-season crowds. ShoreDrop operates beyond the summer season with private event packages tailored specifically for off-season beach gatherings.",
        ],
      },
      {
        heading: "How to Book a Private Beach Event with ShoreDrop",
        paragraphs: [
          "For standard group setups, download the ShoreDrop app and select the package and add-ons that fit your group size. For larger private events, custom setups, or corporate bookings, reach out directly at Admin@shoredropapp.com to discuss what you need.",
          "ShoreDrop handles delivery, setup, food coordination, and end-of-day breakdown - you focus on your guests.",
        ],
      },
      {
        heading: "Virginia Beach Private Event Planning Tips",
        paragraphs: [
          "- Book in advance - especially for summer weekends, popular beach locations fill up. Pre-ordering the night before guarantees your setup is ready when your group arrives.",
          "- Think about shade - for large groups with kids or a long afternoon event, plan for more shade than you think you need. Tents provide better coverage than umbrellas for groups.",
          "- Consider food timing - coordinate food delivery so it arrives when your group is ready to eat, not too early or too late.",
          "- Have a clear meeting point - let guests know exactly where to find the setup on the beach (cross street, landmark, description of the setup).",
          "Planning a beach event in Virginia Beach? Contact ShoreDrop at Admin@shoredropapp.com or download the app to get started.",
        ],
      },
    ],
  },
  {
    slug: "ultimate-virginia-beach-family-vacation-guide-2026",
    title: "The Ultimate Virginia Beach Family Vacation Guide (2026)",
    excerpt:
      "Planning a family vacation to Virginia Beach in 2026? Best beaches, kid activities, eats, and how to make beach days stress-free with ShoreDrop.",
    category: "Virginia Beach Tips",
    publishedAt: "2026-05-27",
    image: "/assets/family-guide-cover.png",
    imageAlt: "Family-friendly beach setup in Virginia Beach",
    sections: [
      {
        heading: "Virginia Beach is one of the most family-friendly beach destinations",
        paragraphs: [
          "Virginia Beach is one of the most family-friendly beach destinations on the East Coast - and for good reason. It has miles of wide, clean beaches, a lively boardwalk, a huge range of restaurants and activities, and enough variety to keep everyone in the family happy from toddlers to teenagers.",
          "If you're planning a family trip to Virginia Beach in 2026, here's everything you need to know to make it great.",
        ],
      },
      {
        heading: "Why Virginia Beach Is Perfect for Families",
        paragraphs: [
          "Virginia Beach has a few things that separate it from other beach destinations. The waves are manageable for kids - Atlantic surf that's active enough to be fun without being dangerous most days. The beach itself is wide, meaning even in peak summer there's usually room to spread out. And the boardwalk runs for three miles alongside the beach, giving families easy access to food, entertainment, and amenities without going far.",
          "The city is also highly accessible - easy to drive to from most Mid-Atlantic states, with plenty of hotel options at different price points right on or near the oceanfront.",
        ],
      },
      {
        heading: "Best Beaches in Virginia Beach for Families",
        paragraphs: [
          "The Oceanfront (1st-40th Street) - The main stretch, busiest in summer, closest to hotels and boardwalk amenities. Good for families who want everything within walking distance.",
          "North End (above 40th Street) - Quieter, less crowded, more residential feel. Great for families who want more space and a calmer atmosphere. ShoreDrop serves this area.",
          "Sandbridge Beach - About 15 miles south of the main oceanfront. More remote, uncrowded, and beautiful. Ideal for families who prefer a quieter, more natural setting.",
          "First Landing State Park - At the north end of Virginia Beach, where the Chesapeake Bay meets the Atlantic. Good for families interested in nature, kayaking, and a different kind of beach experience.",
        ],
      },
      {
        heading: "Things to Do in Virginia Beach with Kids",
        paragraphs: [
          "The Virginia Aquarium & Marine Science Center - One of the best aquariums on the East Coast. Kids love the shark tank, touch pools, and the outdoor aviary. Budget a half day.",
          "The Virginia Beach Boardwalk - Three miles of oceanfront boardwalk with bike rentals, roller skating, carnival games, restaurants, and live entertainment in summer. Easy to spend an entire evening here.",
          "Kayaking and Paddleboarding - Several rental companies along the beach and in the bay area offer kayak and paddleboard rentals. Calm bay areas are great for beginners and younger kids.",
          "Atlantic Fun Park and the Beach Amusements - Classic boardwalk rides, mini golf, go-karts, and arcade games. Kids love it, teenagers love it, and it's all within walking distance of the oceanfront hotels.",
          "Dolphin Watching Tours - Virginia Beach has regular dolphin sightings, and several boat tour companies offer dolphin-watching excursions. Genuinely one of the most memorable experiences for kids visiting the beach.",
        ],
      },
      {
        heading: "Where to Eat with Kids in Virginia Beach",
        paragraphs: [
          "Virginia Beach's restaurant scene has grown significantly over the past few years. Some family favorites near the oceanfront:",
          "- Fresh seafood is everywhere - fish tacos, crab cakes, shrimp baskets. Kids who eat seafood will be happy. Kids who don't will find burgers and pizza at every other restaurant.",
          "- The boardwalk has plenty of casual options for ice cream, funnel cakes, and quick food between beach time.",
          "- Local spots are generally better and more affordable than chain restaurants on the strip.",
          "And remember - with ShoreDrop you can also order food delivery from local Virginia Beach restaurants directly to your beach spot. Skip the lunchtime migration back to the boardwalk and stay on the sand.",
        ],
      },
      {
        heading: "Making Your Beach Days Stress-Free",
        paragraphs: [
          "Here's the honest truth about family beach days: the logistics can wear you down fast. Packing the car, hauling chairs and umbrellas and a cooler and all the kid gear to the sand, keeping track of it all, and then doing it in reverse at the end of the day - it adds up.",
          "ShoreDrop was built specifically to remove that friction. Download the app, book your beach package the night before, and your setup - chairs, umbrella, tent, cooler with ice - is ready on the beach when your family arrives. No hauling, no setup, no stress. When the day is done, we pack everything up while you rinse off and head to dinner.",
          "For families, especially those with young kids or a lot of gear, it makes an enormous practical difference in how the day actually feels.",
        ],
      },
      {
        heading: "Virginia Beach Family Vacation Planning Tips",
        paragraphs: [
          "- Book early for summer weekends - hotels and vacation rentals near the oceanfront fill up fast from Memorial Day through Labor Day.",
          "- Arrive at the beach early - even in peak season, the beach is noticeably less crowded before 10 AM. Early risers get the best spots.",
          "- Pre-order your beach setup the night before - use ShoreDrop so everything is ready when you arrive. Kids do not handle \"wait while we set up the tent\" gracefully.",
          "- Plan one non-beach activity per day - a morning at the aquarium or an evening on the boardwalk gives the trip variety and prevents sand fatigue.",
          "- Watch the weather - Virginia Beach summer afternoons sometimes bring brief thunderstorms. Have a plan for a 30-minute rain delay (the boardwalk is perfect for this).",
          "- Sunscreen, sunscreen, sunscreen - start applying before you leave the hotel, not when you get to the sand.",
        ],
      },
      {
        heading: "The Bottom Line",
        paragraphs: [
          "Virginia Beach is genuinely one of the best family beach destinations on the East Coast. Wide beaches, great amenities, lots to do, and easy access from most Mid-Atlantic and Southeast cities make it a natural choice for a summer family trip.",
          "With ShoreDrop handling your beach setup and food delivery, you spend less time managing logistics and more time actually enjoying the vacation you planned.",
          "Ready for your family beach day? Download ShoreDrop on the App Store - available now in Virginia Beach.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
