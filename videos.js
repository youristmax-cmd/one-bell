// videos.js — ONE flat list: every movement in the plan → its form video.
// Swap any entry's `url` + `source` later (programmatically or by hand).
//   source: "youtube" | "instagram"
//   Instagram links look like https://www.instagram.com/p/XXXX/ or https://www.instagram.com/reel/XXXX/
// Direct links (youtube.com/watch?v=…, youtu.be/…, youtube.com/shorts/…, instagram.com/p|reel/…)
// play INSIDE the form-cue sheet during a workout; search links can only open in a new tab.
export const VIDEOS = [
  // Monday — Arms
  { name: "Pullover",                   url: "https://youtube.com/shorts/jXO0pdYecmo",                                    source: "youtube" },
  { name: "Curl into halo",             url: "https://youtube.com/shorts/OZbmpAgC8Bo",                                    source: "youtube" },
  { name: "Tricep dip",                 url: "https://youtube.com/shorts/VYpt6d6Z9is",                                    source: "youtube" },
  { name: "Throw over",                 url: "https://www.youtube.com/results?search_query=kettlebell+throw+over+form",   source: "youtube" },  // waiting on the original reel link
  { name: "Horn curl",                  url: "https://youtube.com/shorts/-pvL3JjAbug",                                    source: "youtube" },
  // Tuesday — Back + hinge
  { name: "Bent-over row",              url: "https://youtube.com/shorts/PzvvvZmNdq0",                                    source: "youtube" },
  { name: "Deadlift",                   url: "https://youtube.com/shorts/I7q_EPywprs",                                    source: "youtube" },
  { name: "Ballistic row",              url: "https://youtube.com/shorts/UUH4AZ1CDZQ",                                    source: "youtube" },
  { name: "Shrug",                      url: "https://youtube.com/shorts/WZaQV4BFPVk",                                    source: "youtube" },
  { name: "Goblet good morning",        url: "https://youtube.com/shorts/ESxrXltZwYA",                                    source: "youtube" },
  { name: "Renegade row",               url: "https://youtube.com/shorts/6rWeJh_e2jA",                                    source: "youtube" },
  // Thursday — Chest + shoulders
  { name: "Floor press",                url: "https://youtube.com/shorts/2ieUwoU_nHA",                                    source: "youtube" },
  { name: "Horn lift",                  url: "https://www.youtube.com/results?search_query=kettlebell+horn+lift+form",    source: "youtube" },  // waiting on the original reel link
  { name: "Uppercut",                   url: "https://youtube.com/shorts/e4gAbnf69_U",                                    source: "youtube" },
  { name: "Halo",                       url: "https://youtube.com/shorts/7oPYzH80bM4",                                    source: "youtube" },
  { name: "Overhead press",             url: "https://youtube.com/shorts/uzPQm5zgPXo",                                    source: "youtube" },
  // Friday — Core + conditioning
  { name: "Two-hand swing",             url: "https://youtube.com/shorts/n1df4ASFeZU",                                    source: "youtube" },
  { name: "High pull",                  url: "https://youtube.com/shorts/Z9bPfPi0mog",                                    source: "youtube" },
  { name: "Sit-up to press",            url: "https://youtube.com/shorts/XkbhtebFab0",                                    source: "youtube" },
  { name: "Dead bug",                   url: "https://youtube.com/shorts/bWAhAPSvf1k",                                    source: "youtube" },
  // Saturday — Legs (Halo shared with Thursday, listed once above)
  { name: "Squat into goblet thruster", url: "https://youtube.com/shorts/-dONhXBbPHQ",                                    source: "youtube" },
  { name: "Cossack squat",              url: "https://youtube.com/shorts/NIv8cdHM3s4",                                    source: "youtube" },
  { name: "Twisted reverse lunge",      url: "https://youtube.com/shorts/8MLB3y8D_g0",                                    source: "youtube" }
];

// Played in the warm-up block before every session. `start` is in seconds: 25 = the "POGO HOPS" chapter (skips the intro).
export const WARMUP = { name: "5 Minute Pre Workout Warm Up", url: "https://youtu.be/GQXpRWdtzRg", source: "youtube", start: 25 };
