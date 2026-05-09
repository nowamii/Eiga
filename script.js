// MOVIES
const MOVIES = [
  {
    id: 1,
    title: "Interstellar",
    year: "2014",
    genre: "Science Fiction, Drama, Adventure",
    rating: 4.4,
    poster: "posters/interstellar.jpg",
    synopsis: "MANKIND WAS BORN ON EARTH. IT WAS NEVER MEANT TO DIE HERE. The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    trailer: "zSWdZVtXT7E",
    soundtrack: "ost/interstellar.mp3",
    soundtrackTitle: "Interstellar Main Theme",
    soundtrackArtist: "Hans Zimmer"
  },
  {
    id: 2,
    title: "The Perks of Being a Wallflower",
    year: "2012",
    genre: "Drama",
    rating: 4.0,
    poster: "posters/wallflower.jpg",
    emoji: "🎥",
    synopsis: "WE ARE INFINITE. Pittsburgh, Pennsylvania, 1991. High school freshman Charlie is a wallflower, always watching life from the sidelines, until two senior students, Sam and her stepbrother Patrick, become his mentors, helping him discover the joys of friendship, music and love.",
    cast: ["Logan Lerman", "Emma Watson", "Ezra Miller"],
    director: "Stephen Chbosky",
    trailer: "n5rh7O4IDc0",
    soundtrack: "ost/perks.mp3",
    soundtrackTitle: "Heroes",
    soundtrackArtist: "David Bowie"
  },
  {
    id: 3,
    title: "Dead Poets Society",
    year: "1989",
    genre: "Drama",
    rating: 4.3,
    poster: "posters/deadpoets.jpg",
    emoji: "🍿",
    synopsis: "HE WAS THEIR INSPIRATION. HE MADE THEIR LIVES EXTRAORDINARY. At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
    cast: ["Robin Williams", "Robert Sean Leonard", "Ethan Hawke"],
    director: "Peter Weir",
    trailer: "ye4KFyWu2do",
    soundtrack: "ost/carpe.mp3",
    soundtrackTitle: "Carpe Diem",
    soundtrackArtist: "Maurice Jarre"
  },
  {
    id: 4,
    title: "Lady Bird",
    year: "2017",
    genre: "Comedy, Drama",
    rating: 3.8,
    poster: "posters/ladybird.jpg",
    emoji: "🎭",
    synopsis: "FLY AWAY HOME. Lady Bird McPherson, a strong willed, deeply opinionated, artistic 17 year old comes of age in Sacramento. Her relationship with her mother and her upbringing are questioned and tested as she plans to head off to college.",
    cast: ["Saoirse Ronan", "Laurie Metcalf", "Tracy Letts", "Beanie Feldstein"],
    director: "Greta Gerwig",
    trailer: "cNi_HC839Wo",
    soundtrack: "ost/ladybird.mp3",
    soundtrackTitle: "As We Go Along",
    soundtrackArtist: "The Monkees"
  },
  {
    id: 5,
    title: "The Holdovers",
    year: "2023",
    genre: "Drama, Comedy",
    rating: 4.3,
    poster: "posters/theholdovers.jpg",
    emoji: "🎭",
    synopsis: "DISCOMFORT AND JOY. A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go. Eventually, he forms an unlikely bond with one of them — a damaged, brainy troublemaker — and with the school's head cook, who has just lost a son in Vietnam.",
    cast: ["Paul Giamatti", "Dominic Sessa", "Da'Vine Joy Randolph"],
    director: "Alexander Payne",
    trailer: "AhKLpJmHhIg",
    soundtrack: "ost/holdovers.mp3",
    soundtrackTitle: "Crying, Laughing, Loving, Lying",
    soundtrackArtist: "Labi Siffre"
  },
  {
    id: 6,
    title: "Perfect Days",
    year: "2023",
    genre: "Drama",
    rating: 4.3,
    poster: "posters/perfectdays.jpg",
    emoji: "🌟",
    synopsis: "IN A WORLD OF FLEETING MOMENTS, FIND THE BEAUTY THAT LASTS. Hirayama is content with his life as a toilet cleaner in Tokyo. Outside of his structured routine, he cherishes music on cassette tapes, books, and taking photos of trees. Through unexpected encounters, he reflects on finding beauty in the world.",
    cast: ["Kōji Yakusho", "Tokio Emoto", "Arisa Nakano"],
    director: "Wim Wenders",
    trailer: "QzZBbX5A1FA"
  },
  {
    id: 7,
    title: "Brother of the Year",
    year: "2018",
    genre: "Romance, Comedy, Drama",
    rating: 3.2,
    poster: "posters/boty.jpg",
    emoji: "🎞️",
    synopsis: "LOVE ME. LOVE MY BROTHER. Jane lives with her brother Chut with her being the only one doing everything around the house. But Chut will need to learn to take care of himself when Jane becomes involved romantically with a Japanese coworker.",
    cast: ["Sunny Suwanmetha", "Urassaya Sperbund", "Nichkhun Horvejkul"],
    director: "Witthaya Thongyooyong",
    trailer: "E9a-Gxtm5Ac"
  },
  {
    id: 8,
    title: "Man in Love",
    year: "2021",
    genre: "Drama, Romance",
    rating: 3.7,
    poster: "posters/maninlove.jpg",
    emoji: "🎞️",
    synopsis: "A debt collector strikes a deal with a debt-ridden woman struggling to care for her ailing father: he will take care of her bills if she agrees to date him.",
    cast: ["Roy Chiu", "Hsu Wei-ning", "Tsai Chen-nan"],
    director: "Yin Chen-hao",
    trailer: "udr78TOy-Kg"
  },
  {
    id: 9,
    title: "Chungking Express",
    year: "1994",
    genre: "Comedy, Drama, Romance",
    rating: 4.3,
    poster: "posters/chungking.jpg",
    emoji: "🎞️",
    synopsis: "IF MY MEMORY OF HER HAS AN EXPIRATION DATE, LET IT BE 10,000 years… Two melancholic Hong Kong policemen fall in love: one with a mysterious underworld figure, the other with a beautiful and ethereal server at a late-night restaurant.",
    cast: ["Brigitte Lin", "Takeshi Kaneshiro", "Tony Leung Chiu-wai", "Faye Wong"],
    director: "Wong Kar-Wai",
    trailer: "OPCug9jyG9k"
  },
  {
    id: 10,
    title: "I'm Drunk, I Love You",
    year: "2017",
    genre: "Romance",
    rating: 3.4,
    poster: "posters/imdrunkily.jpg",
    emoji: "🎭",
    synopsis: "DRINK MODERATELY, LOVE FULLY. Days before graduation, two college best friends go on one last road trip where they settle how they really feel for each other.",
    cast: ["Maja Salvador", "Paulo Avelino", "Dominic Roco"],
    director: "JP Habac",
    trailer: "vPd-CN-_KWw"
  },
  {
    id: 11,
    title: "Little Women",
    year: "2019",
    genre: "Drama, Romance",
    rating: 4.2,
    poster: "posters/littlewomen.jpg",
    emoji: "🎭",
    synopsis: "OWN YOUR STORY. Four sisters come of age in America in the aftermath of the Civil War.",
    cast: ["Saoirse Ronan", "Emma Watson", "Florence Pugh", "Eliza Scanlen"],
    director: "Greta Gerwig",
    trailer: "AST2-4db4ic"
  },
  {
    id: 12,
    title: "Submarine",
    year: "2010",
    genre: "Drama, Comedy, Romance",
    rating: 3.9,
    poster: "posters/submarine.jpg",
    emoji: "🎭",
    synopsis: "A COMEDY THAT DOESN'T LET PRINCIPLES STAND IN THE WAY OF PROGRESS. 15-year-old deep-thinking Welsh schoolboy Oliver Tate struggles to initiate and maintain a relationship with Jordana, his devilish, dark-haired classmate at their Swansea high school. As his parents' marriage begins to fall apart, similar problems arise in his relationship with Jordana.",
    cast: ["Craig Roberts", "Yasmin Paige"],
    director: "Richard Ayoade",
    trailer: "Z2xDk4LwBl0"
  },
  {
    id: 13,
    title: "Eternal Sunshine of the Spotless Mind",
    year: "2004",
    genre: "Science Fiction, Romance, Drama",
    rating: 4.2,
    poster: "posters/eternalsunshine.jpg",
    emoji: "🎭",
    synopsis: "You can erase someone from your mind. Getting them out of your heart is another story. Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
    cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    director: "Michel Gondry",
    trailer: "07-QBnEkgXU"
  },
  {
    id: 14,
    title: "Before Sunrise",
    year: "1995",
    genre: "Romance, Drama",
    rating: 4.3,
    poster: "posters/sunrise.jpg",
    emoji: "🎭",
    synopsis: "CAN THE GREATEST ROMANCE OF YOUR LIFE LAST ONLY ONE NIGHT? An unexpected meeting on a train leads two travelers to spend an evening wandering through Vienna. As the night unfolds, they share stories and conversations about life and love, exploring new ideas while a quiet intimacy grows between them, knowing it may be their only night together.",
    cast: ["Ethan Hawke", "Julie Delpy"],
    director: "Richard Linklater",
    trailer: "6MUcuqbGTxc"
  },
  {
    id: 15,
    title: "Before Sunset",
    year: "2004",
    genre: "Romance, Drama",
    rating: 4.3,
    poster: "posters/sunset.jpg",
    emoji: "🎭",
    synopsis: "WHAT IF YOU HAD A SECOND CHANCE WITH THE ONE THAT GOT AWAY? Nine years later, Jesse travels across Europe giving readings from a book he wrote about the night he spent in Vienna with Celine. After his reading in Paris, Celine finds him, and they spend part of the day together before Jesse has to again leave for a flight. They are both in relationships now, and Jesse has a son, but as their strong feelings for each other start to return, both confess a longing for more.",
    cast: ["Ethan Hawke", "Julie Delpy"],
    director: "Richard Linklater",
    trailer: "oI3UuneLcyU"
  },
  {
    id: 16,
    title: "Booksmart",
    year: "2019",
    genre: "Comedy",
    rating: 3.7,
    poster: "posters/booksmart.jpg",
    emoji: "🎭",
    synopsis: "GETTING STRAIGHT A'S. GIVING ZERO F'S. Two academic teenage superstars realize, on the eve of their high school graduation, that they should have worked less and played more. Determined to never fall short of their peers, the girls set out on a mission to cram four years of fun into one night.",
    cast: ["Kaitlyn Dever", "Beanie Feldstein", "Jessica Williams"],
    director: "Olivia Wilde",
    trailer: null
  },
  {
    id: 17,
    title: "Bottoms",
    year: "2023",
    genre: "Comedy",
    rating: 3.8,
    poster: "posters/bottoms.jpg",
    emoji: "🎭",
    synopsis: "A MOVIE ABOUT EMPOWERING WOMEN (THE HOT ONES). Unpopular best friends PJ and Josie start a high school self-defense club to meet girls and lose their virginity. They soon find themselves in over their heads when the most popular students start beating each other up in the name of self-defense.",
    cast: ["Rachel Sennott", "Ayo Edebiri", "Ruby Cruz"],
    director: "Emma Seligman",
    trailer: null
  },
  {
    id: 18,
    title: "The Half of It",
    year: "2020",
    genre: "Romance, Comedy, Drama",
    rating: 3.3,
    poster: "posters/halfofit.jpg",
    emoji: "🎭",
    synopsis: "A DIFFERENT KIND OF LOVE STORY. Shy, straight-A student Ellie is hired by sweet but inarticulate jock Paul, who needs help wooing the most popular girl in school. But their new and unlikely friendship gets tricky when Ellie discovers she has feelings for the same girl.",
    cast: ["Leah Lewis", "Daniel Diemer", "Alexxis Lemire"],
    director: "Emma Seligman",
    trailer: null
  },
  {
    id: 19,
    title: "Portrait of a Lady on Fire",
    year: "2019",
    genre: "Drama, Romance",
    rating: 4.4,
    poster: "posters/poalof.jpg",
    emoji: "🎭",
    synopsis: "DON'T REGRET. REMEMBER. On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
    cast: ["Noémie Merlant", "Adèle Haenel", "Luàna Bajrami"],
    director: "Céline Sciamma",
    trailer: null
  },
  {
    id: 20,
    title: "Call Me by Your Name",
    year: "2017",
    genre: "Romance, Drama",
    rating: 3.9,
    poster: "posters/cmbyn.jpg",
    emoji: "🎭",
    synopsis: "IS IT BETTER TO SPEAK OR DIE? In the summer of 1983, a 17-year-old Elio spends his days in his family's villa in Italy. One day Oliver, a graduate student, arrives to assist Elio's father, a professor of Greco-Roman culture. Soon, Elio and Oliver discover a summer that will alter their lives forever.",
    cast: ["Armie Hammer", "Timothée Chalamet", "Michael Stuhlbarg", "Amira Casar"],
    director: "Luca Guadagnino",
    trailer: null
  },
  {
    id: 21,
    title: "Begin Again",
    year: "2013",
    genre: "Comedy, Drama, Music, Romance",
    rating: 3.6,
    poster: "posters/beginagain.jpg",
    emoji: "🎭",
    synopsis: "YOU'RE ONLY AS STRONG AS YOUR NEXT MOVE. Gretta, a budding songwriter, finds herself alone after her boyfriend Dave ditches her. Her life gains purpose when Dan, a record label executive, notices her talent.",
    cast: ["Mark Ruffalo", "Keira Knightley", "Adam Levine", "Hailee Steinfeld"],
    director: "John Carney",
    trailer: null
  },
  {
    id: 22,
    title: "La La Land",
    year: "2016",
    genre: "Drama, Comedy, Romance",
    rating: 4.3,
    poster: "posters/lalaland.jpg",
    emoji: "🎭",
    synopsis: "HERE'S TO THE FOOLS WHO DREAM. Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    director: "Damien Chazelle",
    trailer: null
  },
  {
    id: 23,
    title: "Sing Street",
    year: "2016",
    genre: "Romance, Drama, Music, Comedy",
    rating: 4.0,
    poster: "posters/singstreet.jpg",
    emoji: "🎭",
    synopsis: "BOY MEETS GIRL. GIRL UNIMPRESSED. BOY STARTS BAND. A boy growing up in Dublin during the 1980s escapes his strained family life by starting a band to impress the mysterious girl he likes.",
    cast: ["Ferdia Walsh-Peelo", "Lucy Boynton", "Jack Reynor"],
    director: "John Carney",
    trailer: null
  },
  {
    id: 24,
    title: "Bohemian Rhapsody",
    year: "2018",
    genre: "Music, Drama",
    rating: 3.5,
    poster: "posters/bohemian.jpg",
    emoji: "🎭",
    synopsis: "FEARLESS LIVES FOREVER. Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    cast: ["Rami Malek", "Gwilym Lee", "Ben Hardy", "Joseph Mazzello"],
    director: "Brian Singer",
    trailer: null
  },
  {
    id: 25,
    title: "A Star is Born",
    year: "2018",
    genre: "Music, Romance, Drama",
    rating: 3.6,
    poster: "posters/astarisborn.jpg",
    emoji: "🎭",
    synopsis: "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    cast: ["Lady Gaga", "Bradley Cooper", "Sam Elliott"],
    director: "Bradley Cooper",
    trailer: null
  },
  {
    id: 26,
    title: "The Secret World of Arrietty",
    year: "2010",
    genre: "Animation, Fantasy, Family",
    rating: 3.9,
    poster: "posters/arrietty.jpg",
    emoji: "🎭",
    synopsis: "DO NOT BE SEEN BY HUMANS. THAT'S BEEN THE LAW OF CHILDREN OF THE UNDERFLOOR. 14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    cast: ["Mirai Shida", "Ryunosuke Kamiki", "Tomokazu Miura"],
    director: "Hiromasa Yonebayashi",
    trailer: null
  },
  {
    id: 27,
    title: "The Wind Rises",
    year: "2013",
    genre: "Romance, History, Drama, Animation",
    rating: 4.1,
    poster: "posters/twr.jpg",
    emoji: "🎭",
    synopsis: "We must live. A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    cast: ["Hideaki Anno", "Hidetoshi Nishijima", "Miori Takimoto"],
    director: "Hayao Miyazaki",
    trailer: null
  },
  {
    id: 28,
    title: "Whisper of the Heart",
    year: "1995",
    genre: "Drama, Animation, Family",
    rating: 4.2,
    poster: "posters/whisperoftheheart.jpg",
    emoji: "🎭",
    synopsis: "I found someone I like. Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: \"Seiji Amasawa.\"",
    cast: ["Yoko Honna", "Issey Takahashi", "Takashi Tachibana"],
    director: "Yoshifumi Kondo",
    trailer: null
  },
  {
    id: 29,
    title: "Ponyo",
    year: "2008",
    genre: "Animation, Family, Fantasy",
    rating: 4.1,
    poster: "posters/ponyo.jpg",
    emoji: "🎭",
    synopsis: "Welcome to a world where anything is possible. When Sosuke, a young boy who lives on a clifftop overlooking the sea, rescues a stranded goldfish named Ponyo, he discovers more than he bargained for. Ponyo is a curious, energetic young creature who yearns to be human, but even as she causes chaos around the house, her father, a powerful sorcerer, schemes to return Ponyo to the sea.",
    cast: ["Yuria Kozuki", "Hiroki Doi", "George Tokoro"],
    director: "Hayao Miyazaki",
    trailer: null
  },
  {
    id: 30,
    title: "Howl's Moving Castle",
    year: "2004",
    genre: "Animation, Fantasy, Adventure",
    rating: 4.4,
    poster: "posters/howl.jpg",
    emoji: "🎭",
    synopsis: "The two lived there. Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
    cast: ["Chieko Baisho", "Takuya Kimura", "Akihiro Miwa"],
    director: "Hayao Miyazaki",
    trailer: null
  },
];

// WEEKLY TOP MOVIES
const WEEKLY_TOP = [
  {
    title: "The Devil Wears Prada 2", year: "2026",
    synopsis: "Miranda Priestly returns. Andy Sachs faces the fashion world once more in this long-awaited sequel to the iconic 2006 film.",
    trailer: "https://www.youtube.com/watch?v=e9HXmMnUEdE"
  },
  {
    title: "Michael", year: "2026",
    synopsis: "A biographical film exploring the life, music, and legacy of Michael Jackson — the King of Pop.",
    trailer: "https://www.youtube.com/watch?v=3zOLzsbOleM"
  },
  {
    title: "The Devil Wears Prada", year: "2006",
    synopsis: "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the most demanding fashion magazine editor in New York.",
    trailer: "https://www.youtube.com/watch?v=6ZOZwUQKu3E"
  },
];

// DAILY QUOTES
const QUOTES = [
  { text: "Cinema is a mirror by which we often see ourselves.", author: "Martin Scorsese" },
  { text: "The length of a film should be directly related to the endurance of the human bladder.", author: "Alfred Hitchcock" },
  { text: "Every great film should seem new every time you see it.", author: "Roger Ebert" },
  { text: "Film is a disease. When it infects your bloodstream, it takes over as the number one hormone and you surrender your whole life to it.", author: "Frank Capra" },
  { text: "A film is never really good unless the camera is an eye in the head of a poet.", author: "Orson Welles" },
  { text: "The most honest form of filmmaking is to make a film for yourself.", author: "Peter Jackson" },
  { text: "I steal from every single movie ever made.", author: "Quentin Tarantino" },
  { text: "Making a film is like going down a mine. Once you've gone down, you're totally committed.", author: "John Boorman" },
  { text: "There are no rules in filmmaking. Only sins. And the cardinal sin is dullness.", author: "Frank Capra" },
  { text: "Cinema is a matter of what's in the frame and what's out.", author: "Martin Scorsese" },
  { text: "Every scene should be able to answer the question: why are you showing me this now?", author: "David Mamet" },
  { text: "The secret to film is that it's an illusion.", author: "George Lucas" },
  { text: "If it can be written, or thought, it can be filmed.", author: "Stanley Kubrick" },
  { text: "In feature films the director is God; in documentary films God is the director.", author: "Alfred Hitchcock" },
  { text: "Film lovers are sick people.", author: "François Truffaut" },
  { text: "The whole world is a stage, and cinema is the best seat in the house.", author: "Akira Kurosawa" },
  { text: "Drama is life with the dull bits cut out.", author: "Alfred Hitchcock" },
  { text: "I don't think you should feel about a film. You should feel about a woman, not a movie.", author: "Jean-Luc Godard" },
  { text: "Movies are like an expensive form of therapy for me.", author: "Tim Burton" },
  { text: "The camera is an instrument that teaches people how to see without a camera.", author: "Dorothea Lange" },
  { text: "Cinema is the most beautiful fraud in the world.", author: "Jean-Luc Godard" },
  { text: "Art is never finished, only abandoned.", author: "Leonardo da Vinci" },
  { text: "A story should have a beginning, a middle, and an end, but not necessarily in that order.", author: "Jean-Luc Godard" },
  { text: "Everything I learned I learned from the movies.", author: "Audrey Hepburn" },
  { text: "Life is a tragedy when seen in close-up, but a comedy in long-shot.", author: "Charlie Chaplin" },
  { text: "The best films are the ones that leave you with something to think about after you've left the theater.", author: "Stanley Kubrick" },
  { text: "You can't wait for inspiration. You have to go after it with a club.", author: "Jack London" },
  { text: "I am not afraid of death, I just don't want to be there when it happens.", author: "Woody Allen" },
  { text: "Movies touch our hearts and awaken our vision, and change the way we see things.", author: "Martin Scorsese" },
  { text: "Filmmaking is a chance to live many lifetimes.", author: "Robert Altman" },
  { text: "A film is a petrified fountain of thought.", author: "Jean Cocteau" },
];


// Generate star string
function starsHTML(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      s += '★'; // Full star for the integer part
    } else if (i - 0.5 <= rating) {
      s += '⯪'; // Half star if the remainder is >= 0.5 (or .4 depending on your threshold)
    } else {
      s += '☆'; // Empty star
    }
  }
  return s;
}


// Escape HTML to prevent XSS
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Populate weekly top movies list
function buildWeeklyTop() {
  const list = document.getElementById('weeklyTopMovies');
  if (!list) return;
  list.innerHTML = WEEKLY_TOP.map((m, i) => `
    <li class="hoverable-item">
      <span class="hoverable-trigger">
        <strong>${escapeHTML(m.title)}</strong> <em>(${escapeHTML(m.year)})</em>
        ${m.note ? `<span class="weekly-note">${escapeHTML(m.note)}</span>` : ''}
      </span>
      <div class="hover-popup">
        <p class="hover-popup-synopsis">${escapeHTML(m.synopsis || 'No synopsis available.')}</p>
        ${m.trailer
          ? `<a class="hover-popup-btn" href="${escapeHTML(m.trailer)}" target="_blank" rel="noopener">&#9654; Watch Trailer</a>`
          : `<span class="hover-popup-btn hover-popup-btn--disabled">&#9654; No Trailer Yet</span>`}
      </div>
    </li>
  `).join('');
}

// Picking quote based on day of the year
function buildQuoteOfDay() {
  const container = document.getElementById('quoteOfDay');
  const label = document.getElementById('quoteDateLabel');
  if (!container) return;

  const now = new Date();
  // Day-of-year index so it changes every day
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const idx = dayOfYear % QUOTES.length;
  const q = QUOTES[idx];

  if (label) {
    label.textContent = now.toLocaleDateString('en-PH', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  }

  container.innerHTML = `
    <blockquote class="quote-featured">
      <p>${escapeHTML(q.text)}</p>
      <cite>${escapeHTML(q.author)}</cite>
    </blockquote>
    <p class="quote-refresh-note" style="margin-bottom:22px; color:var(--ink-muted); font-size:.8rem; font-style:italic;">
        &gt;&gt; Quote refreshes daily. Come back tomorrow for a new one :)
      </p>
  `;
}

// Build movie gallery
let galleryShown = 10;
const GALLERY_STEP = 10;

function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  MOVIES.slice(0, galleryShown).forEach(movie => {
    grid.appendChild(createMovieCard(movie));
  });

  const moreWrap = document.getElementById('showMoreGalleryWrap');
  if (moreWrap) moreWrap.style.display = galleryShown >= MOVIES.length ? 'none' : 'block';

  const lessWrap = document.getElementById('showLessGalleryWrap');
  if (lessWrap) lessWrap.style.display = galleryShown <= GALLERY_STEP ? 'none' : 'block';
}

function showMoreGallery() {
  galleryShown = Math.min(galleryShown + GALLERY_STEP, MOVIES.length);
  buildGallery();
}

function showLessGallery() {
  galleryShown = GALLERY_STEP;
  buildGallery();
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View details for ${movie.title}`);

  const posterHTML = movie.poster
    ? `<img class="movie-poster-img" src="${movie.poster}" alt="${movie.title} poster" loading="lazy">`
    : `<div class="movie-poster-placeholder">
         <span class="emoji">${movie.emoji}</span>
         <span class="poster-label">POSTER</span>
       </div>`;

  card.innerHTML = `
    ${posterHTML}
    <div class="movie-card-body">
      <div class="movie-card-title">${escapeHTML(movie.title)}</div>
      <div class="movie-card-year">${escapeHTML(movie.year)}</div>
      <div class="star-rating">${starsHTML(movie.rating)}</div>
    </div>
  `;

  card.addEventListener('click', () => openModal(movie.id));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(movie.id); });
  return card;
}

// Modal functions
function openModal(id) {
  const movie = MOVIES.find(m => m.id === id);
  if (!movie) return;

  // Poster
  const posterWrap = document.getElementById('modalPosterWrap');
  if (movie.poster) {
    posterWrap.innerHTML = `<img src="${movie.poster}" alt="${movie.title} poster">`;
  } else {
    posterWrap.innerHTML = `<div class="modal-poster-placeholder">${movie.emoji}</div>`;
  }

  document.getElementById('modalTitle').textContent = movie.title;

  document.getElementById('modalMeta').innerHTML = `
    <span class="badge badge-crimson">${starsHTML(movie.rating)} ${movie.rating}/5</span>
    <span class="badge badge-sage">${escapeHTML(movie.genre)}</span>
    <span class="badge badge-parch">${escapeHTML(movie.year)}</span>
    <span class="badge badge-parch">Dir. ${escapeHTML(movie.director)}</span>
  `;

  document.getElementById('modalSynopsis').textContent = movie.synopsis;

  document.getElementById('modalCast').innerHTML = `
    <h3>&#9654; Cast</h3>
    <ul>
      ${movie.cast.map(c => `<li>${escapeHTML(c)}</li>`).join('')}
    </ul>
  `;

  // Trailer + Soundtrack inside the modal
  const mediaEl = document.getElementById('modalMedia');
  let mediaHTML = '';

  if (movie.trailer) {
    const tid = escapeHTML(movie.trailer);
    const ttitle = escapeHTML(movie.title);
    mediaHTML += `
      <div class="modal-media-section">
        <h3>&#9654; Official Trailer</h3>
        <div class="modal-trailer-wrap" id="trailerWrap_${tid}">
          <img
            class="trailer-thumb"
            src="https://img.youtube.com/vi/${tid}/hqdefault.jpg"
            alt="${ttitle} trailer thumbnail"
          >
          <button
            class="trailer-play-btn"
            aria-label="Play trailer"
            onclick="window.open('https://www.youtube.com/watch?v=${tid}','_blank','noopener')"
          >&#9654;</button>
        </div>
      </div>
    `;
  }

  if (movie.soundtrack) {
    const sTitle  = escapeHTML(movie.soundtrackTitle  || 'Featured Track');
    const sArtist = escapeHTML(movie.soundtrackArtist || '');
    mediaHTML += `
      <div class="modal-media-section">
        <h3>&#9835; Featured Soundtrack</h3>
        <div class="soundtrack-card">
          <div class="soundtrack-disc">
            <div class="soundtrack-disc-inner"></div>
          </div>
          <div class="soundtrack-info">
            <div class="soundtrack-title">${sTitle}</div>
            ${sArtist ? `<div class="soundtrack-artist">${sArtist}</div>` : ''}
            <audio class="soundtrack-audio" controls>
              <source src="${escapeHTML(movie.soundtrack)}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    `;
  }

  mediaEl.innerHTML = mediaHTML;

  const overlay = document.getElementById('movieModal');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalCloseBtn').focus();
  setTimeout(initSoundtrackDisc, 0);
}

function closeModal() {
  const overlay = document.getElementById('movieModal');
  // Pause any playing iframes by resetting src
  const iframes = overlay.querySelectorAll('iframe');
  iframes.forEach(f => { f.src = f.src; });

  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Syncing soundtrack disc animation with audio playback
function initSoundtrackDisc() {
  const audio = document.querySelector('.soundtrack-audio');
  const disc  = document.querySelector('.soundtrack-disc');
  if (!audio || !disc) return;
  audio.addEventListener('play',  () => disc.style.animationPlayState = 'running');
  audio.addEventListener('pause', () => disc.style.animationPlayState = 'paused');
  audio.addEventListener('ended', () => disc.style.animationPlayState = 'paused');
}

// Loading YouTube trailer
function loadTrailer(videoId) {
  const wrap = document.getElementById(`trailerWrap_${videoId}`);
  if (!wrap) return;
  wrap.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1"
      title="Official Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('movieModal')) closeModal();
}

// Show more / show less in the about section
function toggleMore() {
  const content = document.getElementById('moreContent');
  const btn = document.getElementById('showMoreBtn');
  const isVisible = content.classList.toggle('visible');
  btn.textContent = isVisible ? '[ - SHOW LESS ]' : '[ + SHOW MORE ]';
}

// Show more / show less in the genres section
function toggleGenres() {
  const content = document.getElementById('moreGenres');
  const btn = document.getElementById('showMoreGenresBtn');
  const isVisible = content.classList.toggle('visible');
  btn.textContent = isVisible ? '[ - SHOW LESS GENRES ]' : '[ + SHOW MORE GENRES ]';
}

// Glossary show more button
function toggleGlossary() {
  const hidden = document.getElementById('glossaryHidden');
  const btn = document.getElementById('glossaryToggleBtn');
  const isOpen = hidden.style.display === 'block';
  hidden.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? ' ▼ ' : ' ▲ ';
  btn.title = isOpen ? 'Show more terms' : 'Show fewer terms';
}

// Star rating input
function initStarRating() {
  const container = document.getElementById('starSelect');
  if (!container) return;

  container.innerHTML = '';
  let currentRating = 0;

  for (let i = 1; i <= 5; i++) {
    const slot = document.createElement('span');
    slot.className = 'star-slot';
    slot.dataset.full = i;
    slot.dataset.half = i - 0.5;
    // Base (dim) star + top (crimson, clipped) star
    slot.innerHTML =
      `<span class="star-base">&#9733;</span>` +
      `<span class="star-fill" style="clip-path: inset(0 100% 0 0)">&#9733;</span>`;
    container.appendChild(slot);
  }

  function paintStars(val) {
    container.querySelectorAll('.star-slot').forEach(slot => {
      const full = parseFloat(slot.dataset.full);
      const fill = slot.querySelector('.star-fill');
      if (val >= full) {
        fill.style.clipPath = 'inset(0 0% 0 0)';       // 100% visible
      } else if (val >= full - 0.5) {
        fill.style.clipPath = 'inset(0 59% 0 0)';      // left half visible
      } else {
        fill.style.clipPath = 'inset(0 100% 0 0)';     // hidden
      }
    });
  }

  paintStars(0);

  container.addEventListener('mousemove', e => {
    const slot = e.target.closest('.star-slot');
    if (!slot) return;
    const rect = slot.getBoundingClientRect();
    const isLeftHalf = (e.clientX - rect.left) < rect.width / 2;
    const hoverVal = isLeftHalf ? parseFloat(slot.dataset.half) : parseFloat(slot.dataset.full);
    paintStars(hoverVal);
  });

  container.addEventListener('mouseleave', () => paintStars(currentRating));

  container.addEventListener('click', e => {
    const slot = e.target.closest('.star-slot');
    if (!slot) return;
    const rect = slot.getBoundingClientRect();
    const isLeftHalf = (e.clientX - rect.left) < rect.width / 2;
    currentRating = isLeftHalf ? parseFloat(slot.dataset.half) : parseFloat(slot.dataset.full);
    document.getElementById('reviewRating').value = currentRating;
    paintStars(currentRating);
    const label = document.getElementById('starValueLabel');
    if (label) label.textContent = `${currentRating} / 5`;
  });

  container._reset = () => {
    currentRating = 0;
    document.getElementById('reviewRating').value = 0;
    paintStars(0);
    const label = document.getElementById('starValueLabel');
    if (label) label.textContent = '';
  };
}

// Review submission and display
const storedReviews = [];

function submitReview() {
  const name    = document.getElementById('reviewName').value.trim();
  const movie   = document.getElementById('reviewMovie').value.trim();
  const rating  = parseFloat(document.getElementById('reviewRating').value);
  const comment = document.getElementById('reviewComment').value.trim();
  const errEl   = document.getElementById('formError');

  if (!name || !movie || !rating || !comment) {
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';

  storedReviews.unshift({
    name, movie, rating, comment,
    date: new Date().toLocaleDateString('en-PH', { year:'numeric', month:'short', day:'numeric' })
  });

  renderReviews();

  // Reset form
  document.getElementById('reviewName').value    = '';
  document.getElementById('reviewMovie').value   = '';
  document.getElementById('reviewComment').value = '';
  document.getElementById('reviewRating').value  = 0;
  const starContainer = document.getElementById('starSelect');
  if (starContainer && starContainer._reset) starContainer._reset();
}

function renderReviews() {
  const container = document.getElementById('reviewsDisplay');
  const noReviews = document.getElementById('noReviews');
  if (!container) return;

  if (storedReviews.length === 0) {
    if (noReviews) noReviews.style.display = 'block';
    return;
  }

  if (noReviews) noReviews.style.display = 'none';

  container.innerHTML = storedReviews.map(r => `
    <div class="review-item">
      <div class="review-header">
        <div>
          <div class="review-author">${escapeHTML(r.name)}</div>
          <div class="review-movie">&#9658; ${escapeHTML(r.movie)}</div>
        </div>
        <div style="text-align:right;">
          <div class="review-stars">${starsHTML(r.rating)} <span class="review-rating-num">${r.rating}/5</span></div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
      <div class="review-body">${escapeHTML(r.comment)}</div>
    </div>
  `).join('');
}

// Back to top button
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 320);
  });
}

// Close modal on overlay click or Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Initialize everything once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  buildWeeklyTop();
  buildQuoteOfDay();
  buildGallery();
  renderReviews();
  initStarRating();
  initBackToTop();
});
