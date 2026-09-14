// videos.js — ONE flat list: every movement in the plan → its form video.
// Swap any entry's `url` + `source` later (programmatically or by hand).
//   source: "youtube" | "instagram"
//   Instagram links look like https://www.instagram.com/p/XXXX/ or https://www.instagram.com/reel/XXXX/
// Default urls are YouTube SEARCH links built from the movement name — not direct videos.
// Direct links (youtube.com/watch?v=…, youtu.be/…, youtube.com/shorts/…, instagram.com/p|reel/…)
// play INSIDE the form-cue sheet during a workout; search links can only open in a new tab.
export const VIDEOS = [
  // Monday — Arms
  { name: "Pullover",                   url: "https://www.youtube.com/results?search_query=kettlebell+pullover+form",                    source: "youtube" },
  { name: "Curl into halo",             url: "https://www.youtube.com/results?search_query=kettlebell+curl+into+halo+form",              source: "youtube" },
  { name: "Tricep dip",                 url: "https://www.youtube.com/results?search_query=kettlebell+tricep+dip+form",                  source: "youtube" },
  { name: "Throw over",                 url: "https://www.youtube.com/results?search_query=kettlebell+throw+over+form",                  source: "youtube" },
  { name: "Horn curl",                  url: "https://www.youtube.com/results?search_query=kettlebell+horn+curl+form",                   source: "youtube" },
  // Tuesday — Back + hinge
  { name: "Bent-over row",              url: "https://www.youtube.com/results?search_query=kettlebell+bent-over+row+form",               source: "youtube" },
  { name: "Deadlift",                   url: "https://www.youtube.com/results?search_query=kettlebell+deadlift+form",                    source: "youtube" },
  { name: "Ballistic row",              url: "https://www.youtube.com/results?search_query=kettlebell+ballistic+row+form",               source: "youtube" },
  { name: "Shrug",                      url: "https://www.youtube.com/results?search_query=kettlebell+shrug+form",                       source: "youtube" },
  { name: "Goblet good morning",        url: "https://www.youtube.com/results?search_query=kettlebell+goblet+good+morning+form",         source: "youtube" },
  { name: "Renegade row",               url: "https://www.youtube.com/results?search_query=kettlebell+renegade+row+form",                source: "youtube" },
  // Thursday — Chest + shoulders
  { name: "Floor press",                url: "https://www.youtube.com/results?search_query=kettlebell+floor+press+form",                 source: "youtube" },
  { name: "Horn lift",                  url: "https://www.youtube.com/results?search_query=kettlebell+horn+lift+form",                   source: "youtube" },
  { name: "Liftoff pushup",             url: "https://www.youtube.com/results?search_query=kettlebell+liftoff+pushup+form",              source: "youtube" },
  { name: "Halo",                       url: "https://www.youtube.com/results?search_query=kettlebell+halo+form",                        source: "youtube" },
  { name: "Overhead press",             url: "https://www.youtube.com/results?search_query=kettlebell+overhead+press+form",              source: "youtube" },
  // Friday — Core + conditioning
  { name: "Two-hand swing",             url: "https://www.youtube.com/results?search_query=kettlebell+two-hand+swing+form",              source: "youtube" },
  { name: "High pull",                  url: "https://www.youtube.com/results?search_query=kettlebell+high+pull+form",                   source: "youtube" },
  { name: "Sit-up to press",            url: "https://www.youtube.com/results?search_query=kettlebell+sit-up+to+press+form",             source: "youtube" },
  { name: "Dead bug",                   url: "https://www.youtube.com/results?search_query=kettlebell+dead+bug+form",                    source: "youtube" },
  // Saturday — Legs (Halo shared with Thursday, listed once above)
  { name: "Squat into goblet thruster", url: "https://www.youtube.com/results?search_query=kettlebell+squat+into+goblet+thruster+form",  source: "youtube" },
  { name: "Cossack squat",              url: "https://www.youtube.com/results?search_query=kettlebell+cossack+squat+form",               source: "youtube" },
  { name: "Twisted reverse lunge",      url: "https://www.youtube.com/results?search_query=kettlebell+twisted+reverse+lunge+form",       source: "youtube" }
];
