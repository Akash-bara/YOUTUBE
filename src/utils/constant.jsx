export const YOUTUBE_LOGO="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
export const YOUTUBE_MENU="https://e7.pngegg.com/pngimages/336/45/png-clipart-menu-computer-icons-button-menu-business-bread-thumbnail.png"
export const YOUTUBE_USER="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
export const List =[ 
    "All",
    "Trending",
  "Gaming",
  "Live",
  "Music",
  "Movies",
  "Trailers",
  "Shorts",
  "News",
  "Sports",
  "Cricket",
  "Football",
  "BGMI",
  "Esports",
  "Comedy",
  "Vlogs",
  "Podcasts",
  "Environment",
  ];
  
  const GOOGLE_API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
  
  export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API=import.meta.env.VITE_SEARCH_API_KEY;

export const YOUTUBE_COMMENT_PIC="https://www.nicepng.com/png/detail/119-1196111_comment-youtube-comment-icon-png.png"

export const YOUTUBE_CHAT_PIC="https://e7.pngegg.com/pngimages/4/758/png-clipart-computer-icons-social-media-facebook-technical-support-blue-team.png"

export const Comment_data = [
  {
    name: "Luffy",
    text: "Is the One Piece edible? Asking for future Pirate King reasons 🍖",
    replies: [
      {
        name: "Zoro",
        text: "Focus, idiot. Also… where am I?",
        replies: [
          {
            name: "Nami",
            text: "You’re lost again. And you owe me money.",
            replies: [],
          },
        ],
      },
      {
        name: "Sanji",
        text: "If it’s food, I’ll cook it. If it’s treasure, Nami will steal it.",
        replies: [],
      },
    ],
  },
  {
    name: "Usopp",
    text: "I already found the One Piece last year but didn’t tell anyone.",
    replies: [
      {
        name: "Franky",
        text: "That’s SUPER fake, bro.",
        replies: [],
      },
      {
        name: "Chopper",
        text: "Wow Usopp!! You’re amazing!! 😍",
        replies: [
          {
            name: "Robin",
            text: "Chopper, he is lying.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Zoro",
    text: "I came here to comment but ended up in another anime.",
    replies: [
      {
        name: "Law",
        text: "Why are you in my comment section?",
        replies: [],
      },
      {
        name: "Sanji",
        text: "Moss-head, go back where you belong.",
        replies: [],
      },
    ],
  },
  {
    name: "Nami",
    text: "Whoever finds One Piece first, I’m taking 90% commission 💰",
    replies: [
      {
        name: "Luffy",
        text: "EH????",
        replies: [],
      },
      {
        name: "Zoro",
        text: "We’re definitely broke.",
        replies: [],
      },
    ],
  },
  {
    name: "Sanji",
    text: "I would fight Kaido, Big Mom, and YouTube ads for Nami-swan 💖",
    replies: [
      {
        name: "Zoro",
        text: "You’d lose to ads.",
        replies: [],
      },
      {
        name: "Robin",
        text: "Interesting priorities.",
        replies: [],
      },
    ],
  },
  {
    name: "Chopper",
    text: "STOP CALLING ME A TANUKI 😭",
    replies: [
      {
        name: "RandomViewer",
        text: "Okay raccoon.",
        replies: [],
      },
      {
        name: "Luffy",
        text: "Emergency food!!!",
        replies: [
          {
            name: "Chopper",
            text: "I HATE YOU 😡",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Robin",
    text: "I wonder what would happen if I read all these comments out loud ☠️",
    replies: [
      {
        name: "Brook",
        text: "YOHOHOHO even without eyes I can see chaos!",
        replies: [],
      },
    ],
  },
  {
    name: "Brook",
    text: "Can I get some likes? I don’t have skin but I have feelings 💀",
    replies: [
      {
        name: "Franky",
        text: "That joke is NOT SUPER.",
        replies: [],
      },
    ],
  },
  {
    name: "Kaido",
    text: "Jumped from a sky island, survived, opened YouTube.",
    replies: [
      {
        name: "Big Mom",
        text: "WHERE IS MY CAKE??? 🍰",
        replies: [],
      },
    ],
  },
  {
    name: "Shanks",
    text: "I was about to comment… but it’s not time yet.",
    replies: [
      {
        name: "Everyone",
        text: "BRO WHEN IS IT TIME???",
        replies: [],
      },
    ],
  },
  {
    name: "Buggy",
    text: "Why does everyone think I’m a joke 😭",
    replies: [
      {
        name: "World Government",
        text: "Congratulations, you’re a Yonko now.",
        replies: [
          {
            name: "Buggy",
            text: "WAIT WHAT?????",
            replies: [],
          },
        ],
      },
    ],
  },
];

export const LIVE_CHAT_COUNT=30;

