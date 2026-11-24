// Everything on the site comes from this file. Change the text, times, sermons,
// events and people here; the pages update on the next build.

export const site = {
  name: "Cedar Hollow Community Church",
  shortName: "Cedar Hollow",
  tagline: "A place to belong, believe and become",
  description:
    "Cedar Hollow Community Church is a friendly, multi-generational church family. Join us Sundays at 9 and 11am, with classes for kids and a warm welcome for everyone.",
  timeZone: "America/New_York",
  // Your online giving page (Tithe.ly, Pushpay, Planning Center Giving, PayPal or similar).
  giveUrl: "https://example.com/give",
  giveLabel: "Give online",
  phone: "(555) 018-4471",
  email: "hello@cedarhollow.example",
  address: {
    street: "1207 Meadowbrook Lane",
    city: "Ashford Falls",
    region: "OH",
    postal: "43010",
  },
  mapsUrl: "https://www.openstreetmap.org/search?query=1207%20Meadowbrook%20Lane",
  // Where you stream or post sermons. Leave a url empty to hide it.
  watchUrl: "https://example.com/live",
  social: [
    { label: "YouTube", url: "https://youtube.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Facebook", url: "https://facebook.com/" },
  ],
};

export const services = [
  { day: "Sunday", time: "9:00am", name: "Morning Worship", note: "Hymns and modern songs, kids classes for all ages" },
  { day: "Sunday", time: "11:00am", name: "Morning Worship", note: "Also streamed live, kids classes through 5th grade" },
  { day: "Wednesday", time: "6:30pm", name: "Midweek Gathering", note: "Dinner at 5:45pm, then prayer and Bible study" },
];

export const home = {
  heroTitle: "There's a seat saved for you.",
  heroText:
    "Whether you've followed Jesus for decades or you're just curious, you're welcome here. Come as you are, bring your questions, and meet people who'd love to know you.",
  welcomeTitle: "Welcome home",
  welcomeText: [
    "Cedar Hollow began in 1974 as eleven families meeting in a barn on Meadowbrook Lane. Fifty years later we're a church of all ages, still sharing meals, still praying for our neighbors, and still saving room at the table.",
    "Our Sundays are simple: honest worship, practical teaching from the Bible, and plenty of coffee afterward.",
  ],
};

export const visit = {
  intro:
    "Visiting a new church can feel like a lot. Here's what to expect so you can relax and just show up.",
  expect: [
    {
      title: "When you arrive",
      text: "Greeters at the front doors will say hello and point you to the coffee, the kids check-in and a good seat. No one will ask you to stand up or introduce yourself.",
      icon: "door",
    },
    {
      title: "During the service",
      text: "About 70 minutes: songs led by our band and choir, a time of prayer, and a message from the Bible. Dress is casual, so come in whatever you're comfortable in.",
      icon: "music",
    },
    {
      title: "For your kids",
      text: "Cedar Kids runs during both Sunday services for babies through 5th grade, with safe check-in and background-checked leaders. Students in grades 6 to 12 meet Wednesday nights.",
      icon: "kids",
    },
    {
      title: "Parking and access",
      text: "Free parking in our main lot, with reserved spaces for guests and families with young children by the front doors. The building is step-free with an elevator, and large print and hearing assist devices are at the welcome desk.",
      icon: "car",
    },
  ],
  faq: [
    {
      q: "What should I wear?",
      a: "Anything you like. You'll see jeans, Sunday best and everything in between.",
    },
    {
      q: "Do I have to give money?",
      a: "Not at all. Giving is for our church family. Please enjoy the service as our guest.",
    },
    {
      q: "Is there something for teenagers?",
      a: "Yes. Cedar Youth meets Wednesdays at 6:30pm for grades 6 to 12, with a monthly Sunday lunch together.",
    },
    {
      q: "Can I watch online first?",
      a: "Of course. The 11am service streams live each week, and past messages are on our sermons page.",
    },
    {
      q: "What do you believe?",
      a: "We're a non-denominational Christian church. We believe Jesus is who he said he is, that the Bible is trustworthy, and that grace is for everyone. Our pastors are always happy to talk over coffee.",
    },
  ],
};

export type Sermon = {
  title: string;
  speaker: string;
  date: string; // YYYY-MM-DD
  series: string;
  scripture: string;
  summary: string;
  // The 11-character ID from a YouTube link (youtube.com/watch?v=ID). Leave empty if none.
  youtubeId?: string;
  // A link to an MP3 file or podcast episode audio. Leave empty if none.
  audioUrl?: string;
};

// Newest first. Replace the sample IDs with your own videos and audio files.
export const sermons: Sermon[] = [
  {
    title: "Room at the Table",
    speaker: "Pastor Daniel Whitfield",
    date: "2026-11-22",
    series: "Open Doors",
    scripture: "Luke 14:12-24",
    summary: "Jesus tells a story about a banquet where the guest list keeps growing. What would it look like for our tables to look like his?",
    youtubeId: "YOUR_VIDEO_ID",
    audioUrl: "",
  },
  {
    title: "Strangers Who Became Family",
    speaker: "Pastor Daniel Whitfield",
    date: "2026-11-15",
    series: "Open Doors",
    scripture: "Ruth 1:1-18",
    summary: "Ruth's loyalty to Naomi shows how faithfulness in small, ordinary moments becomes part of a much bigger story.",
    youtubeId: "YOUR_VIDEO_ID",
    audioUrl: "",
  },
  {
    title: "Grace on an Ordinary Tuesday",
    speaker: "Rev. Alicia Moreno-Price",
    date: "2026-11-08",
    series: "Open Doors",
    scripture: "Colossians 3:12-17",
    summary: "Kindness, patience and forgiveness aren't Sunday clothes. A practical look at wearing grace through the week.",
    youtubeId: "",
    audioUrl: "https://example.com/audio/grace-on-an-ordinary-tuesday.mp3",
  },
  {
    title: "The Shepherd Who Looks",
    speaker: "Pastor Daniel Whitfield",
    date: "2026-11-01",
    series: "Psalms for the Road",
    scripture: "Psalm 23",
    summary: "The most familiar psalm, read slowly. Where are the green pastures and still waters in a busy life?",
    youtubeId: "YOUR_VIDEO_ID",
    audioUrl: "",
  },
  {
    title: "Songs in the Night",
    speaker: "Marcus Bell",
    date: "2026-10-25",
    series: "Psalms for the Road",
    scripture: "Psalm 42",
    summary: "What do we do with sorrow? The psalmists teach us to bring our whole hearts to God, even the heavy parts.",
    youtubeId: "",
    audioUrl: "https://example.com/audio/songs-in-the-night.mp3",
  },
];

export type ChurchEvent = {
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  description: string;
  link?: string;
};

// Past events hide themselves automatically.
export const events: ChurchEvent[] = [
  {
    title: "Community Thanksgiving Dinner",
    date: "2026-11-26",
    time: "1:00pm to 4:00pm",
    location: "Fellowship Hall",
    description: "Turkey, all the sides and good company. Everyone is welcome, and there's no cost. Bring a friend or a pie.",
  },
  {
    title: "Advent Wreath Workshop",
    date: "2026-12-05",
    time: "10:00am to 12:00pm",
    location: "Fellowship Hall",
    description: "Make an Advent wreath for your home with fresh greenery. All materials provided; great for families.",
    link: "https://example.com/signup/wreaths",
  },
  {
    title: "Coat and Blanket Drive",
    date: "2026-12-06",
    time: "All day",
    location: "Main lobby",
    description: "Drop off new or gently used coats and blankets for the Ashford Falls Warming Center.",
  },
  {
    title: "Christmas Choir Concert",
    date: "2026-12-13",
    time: "6:00pm",
    location: "Sanctuary",
    description: "The Cedar Hollow choir and orchestra present an evening of carols, with cocoa and cookies afterward.",
  },
  {
    title: "Christmas Eve Candlelight Services",
    date: "2026-12-24",
    time: "4:00pm and 7:00pm",
    location: "Sanctuary",
    description: "Carols, the Christmas story and candlelight. The 4pm service is especially family friendly.",
  },
  {
    title: "New Year Prayer Breakfast",
    date: "2027-01-09",
    time: "8:00am",
    location: "Fellowship Hall",
    description: "Start the year together with breakfast, stories of the past year and prayer for the year ahead.",
  },
  {
    title: "Newcomers Lunch",
    date: "2027-01-17",
    time: "12:30pm",
    location: "Room 104",
    description: "New to Cedar Hollow? Join our pastors for lunch, hear our story and ask anything.",
    link: "https://example.com/signup/newcomers",
  },
];

export const ministries = [
  { name: "Cedar Kids", audience: "Babies to 5th grade", text: "Bible stories, songs and games during both Sunday services, led by trained, background-checked volunteers.", icon: "kids" },
  { name: "Cedar Youth", audience: "Grades 6 to 12", text: "Wednesday nights, summer camp and a place to ask real questions with leaders who care.", icon: "spark" },
  { name: "Small Groups", audience: "Adults", text: "Groups of 8 to 12 meeting in homes across town for a meal, conversation and prayer.", icon: "home" },
  { name: "Worship and Arts", audience: "Musicians and creatives", text: "Choir, band, orchestra, tech and visual arts. Everyone starts somewhere; come and try.", icon: "music" },
  { name: "Care and Prayer", audience: "Anyone going through it", text: "Hospital visits, meals after a new baby or a loss, and a prayer team that meets every week.", icon: "heart" },
  { name: "Neighbors in Need", audience: "Our town", text: "A weekly food pantry, the winter warming center and home repairs for older neighbors.", icon: "hands" },
];

export const staff = [
  { name: "Daniel Whitfield", role: "Lead Pastor", bio: "Daniel has served Cedar Hollow since 2012. He loves long walks, short sermons and his wife Grace's peach cobbler." },
  { name: "Alicia Moreno-Price", role: "Associate Pastor", bio: "Alicia leads Care and Prayer and Small Groups. Ask her about her rescue dogs." },
  { name: "Marcus Bell", role: "Worship Director", bio: "Marcus plays six instruments badly and piano very well, and leads our choir and band." },
  { name: "Hannah Lindqvist", role: "Children's Director", bio: "Hannah makes Cedar Kids the best hour of every kid's week, and maybe the grown-ups' too." },
  { name: "Joel Okonkwo", role: "Youth Pastor", bio: "Joel runs Cedar Youth and still holds the camp record for the slowest canoe crossing." },
  { name: "Ruth Ellison", role: "Office Manager", bio: "Ruth knows where everything is and who everyone is. If you have a question, start with Ruth." },
];

export const give = {
  title: "Generosity changes lives",
  text: "Your giving supports our kids and youth ministries, the food pantry, the warming center and partners serving around the world. Thank you.",
  ways: ["Give online, once or every month", "Drop a gift in the boxes at the back of the sanctuary", "Mail a check to the church office"],
};
