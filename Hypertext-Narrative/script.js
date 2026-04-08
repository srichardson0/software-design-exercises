// NARRATIVE DATA 

// Keys follow the pattern "stringIndex-fretIndex"
// (stringIndex: 0=low E, 1=A, 2=D, 3=G, 4=B, 5=high e)

const NODES = {
 
  // ── LOW E STRING ─────────────────────────────────────────────────────────
 
  '0-0': {
    title: 'Robert Johnson & The Crossroads',
    coord: 'Low E · Open',
    media: {
      type: 'image',
      src: './assets/Robert+Johnson+Complete+Recordings-2950948248.jpg',
      alt: 'Robert Johnson, circa 1935'
    },
    body: 'Somewhere in the Mississippi Delta in 1936, Robert Johnson recorded 29 songs that would define the sound of the 20th century. The legend says he sold his soul at a crossroads. The truth is stranger: he disappeared for a year, came back able to play like nobody alive, and nobody ever got a straight answer out of him about it. By 27 he was dead — poisoned, they say, by a jealous husband. His open-E drone and Spanish tuning set the template for every blues and rock guitarist who followed. When Keith Richards first heard Johnson in the early 1960s, he thought he was listening to two guitarists playing at once.',
    links: ['0-3', '0-5', '1-0']
  },
 
  '0-3': {
    title: 'Chuck Berry & The Duck Walk',
    coord: 'Low E · Fret 3',
    media: {
      type: 'gif',
      src: './assets/chuck-berry-duck-walk.gif',
      alt: 'Chuck Berry performing'
    },
    body: 'Before Chuck Berry, the electric guitar was mostly background furniture in a big band. Berry moved it front and center and gave it a personality — brash, cocky, and built for teenagers. "Johnny B. Goode" (1958) was a manifesto. The double-string opening riff, the duck walk across the stage, the lyrics about a country boy who could play guitar just like ringing a bell: this was the blueprint for rock and roll\'s entire visual and sonic language. John Lennon said, "If you tried to give rock and roll another name, you might call it Chuck Berry."',
    links: ['0-0', '0-5', '1-3', '3-0']
  },
 
  '0-5': {
    title: 'Muddy Waters Goes Electric',
    coord: 'Low E · Fret 5',
    media: {
      type: 'image',
      src: './assets/muddy-waters-3318543798.jpg',
      alt: 'Muddy Waters performing Mannish Boy'
    },
    body: 'McKinley Morganfield left Stovall\'s plantation in Mississippi in 1943 and drove north to Chicago with a borrowed guitar and a suitcase. He plugged in. The acoustic delta blues he\'d learned from Son House was too quiet for the noisy South Side clubs, so he amplified it — and in doing so invented a new kind of music entirely. His band, which at various points included Little Walter on harmonica and Jimmy Rogers on guitar, was the most influential small group in blues history. The Rolling Stones named themselves after one of his songs. He called Jimi Hendrix his grandson.',
    links: ['0-3', '0-7', '1-5', '3-5']
  },
 
  '0-7': {
    title: 'John Lee Hooker & The Boogie',
    coord: 'Low E · Fret 7',
    media: {
      type: 'image',
      src: './assets/John+Lee+Hooker+01-3014949552.jpg',
      alt: 'John Lee Hooker performing'
    },
    body: 'John Lee Hooker played by his own rules. Literally — he didn\'t keep standard time, and other musicians found it maddening to play with him until they understood that the groove itself was the time. "Boogie Chillen" (1948) was recorded in one take, Hooker stomping his foot on a wooden platform, and it sold over a million copies. He held a single droning note for minutes at a time and somehow made it feel inevitable. He recorded under at least a dozen aliases for different labels simultaneously, a survival strategy that also scattered his influence across the entire map of American music.',
    links: ['0-5', '1-7', '2-7']
  },
 
  // ── A STRING ─────────────────────────────────────────────────────────────
 
  '1-0': {
    title: 'Django Reinhardt: Five Fingers, Two Working',
    coord: 'A String · Open',
    media: {
      type: 'image',
      src: './assets/djangoreinhardt.jpg',
      alt: 'Django Reinhardt'
    },
    body: 'In 1928, a fire swept through the caravan where Django Reinhardt slept on the outskirts of Paris. He escaped but his fretting hand was badly burned — the ring finger and pinky fused together and rendered nearly useless. He taught himself to play again with two fingers and a thumb, developing a style so advanced that it remains technically demanding even for players with full hand function. With violinist Stéphane Grappelli, he formed the Quintette du Hot Club de France and invented a distinctly European approach to jazz. Charlie Parker said Django was the only guitarist who surprised him.',
    links: ['0-0', '1-2', '2-0']
  },
 
  '1-2': {
    title: 'Chet Atkins & The Nashville Sound',
    coord: 'A String · Fret 2',
    media: {
      type: 'gif',
      src: './assets/chet-atkins-guitar.gif',
      alt: 'Chet Atkins fingerpicking demonstration'
    },
    body: 'Chet Atkins was the architect of Nashville. As a player, he perfected a three-finger thumb-and-fingers picking style borrowed from Merle Travis and turned it into the most precise, clean-toned fingerpicking in country music history. As a producer at RCA, he stripped out the fiddles and steel guitars, added strings and vocal choruses, and created the "Nashville Sound" that made country music a commercial juggernaut through the 1960s. He produced Elvis. He mentored Dolly Parton. He played classical transcriptions as naturally as he played Hank Williams. He was called "Mr. Guitar," and it was not an overstatement.',
    links: ['1-0', '1-3', '4-0']
  },
 
  '1-3': {
    title: 'Jimi Hendrix: Setting the Guitar on Fire',
    coord: 'A String · Fret 3',
    media: {
      type: 'gif',
      src: './assets/jimi-hendrix-fire.gif',
      alt: 'Jimi Hendrix performing Voodoo Child at Woodstock'
    },
    body: 'At the Monterey Pop Festival in June 1967, Jimi Hendrix lit his Stratocaster on fire and became a legend in a single evening. But the fire was almost a footnote. What came before it — "Wild Thing," the feedback, the guitar played behind his back, the sounds nobody had heard from a guitar before — was the real conflagration. Hendrix had spent years in the American South playing chitlin circuit gigs, absorbing the blues, before moving to London and exploding outward. He heard the guitar as an orchestra, a noise machine, and a voice all at once. He died at 27.',
    links: ['1-0', '1-5', '0-3', '3-0']
  },
 
  '1-5': {
    title: 'Stevie Ray Vaughan: Texas Flood',
    coord: 'A String · Fret 5',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/6XcQwvb6xBg?si=-BRxQLpFk_MdT1ol',
      alt: 'Stevie Ray Vaughan performing Texas Flood live'
    },
    body: 'Stevie Ray Vaughan played .013 gauge strings tuned down a half step — a setup most guitarists would find physically punishing — and hit them so hard you could feel the impact from the back of a room. He grew up in Dallas absorbing Hendrix, Albert King, and Freddie King, and by the early 1980s was playing a blues so ferocious and personal it seemed to belong to another era. His 1983 debut "Texas Flood" proved the form was not dead. He fought off drug and alcohol addiction in 1986 and came back cleaner and, impossibly, better. In 1990, at 35, he was killed in a helicopter crash hours after performing one of the greatest concerts of his career.',
    links: ['1-3', '1-7', '0-5', '3-5']
  },
 
  '1-7': {
    title: 'Eric Clapton: God, Apparently',
    coord: 'A String · Fret 7',
    media: {
      type: 'image',
      src: './assets/440px-Eric_Clapton_1-749493603.jpg',
      alt: 'Eric Clapton performing'
    },
    body: 'In 1965 someone spray-painted "Clapton is God" on a London Underground wall. The graffiti was photographed and became famous. Clapton was 20. He had recently quit the Yardbirds because he felt they were going pop and had formed John Mayall\'s Bluesbreakers instead, where his playing on the 1966 album was so devastating it was nicknamed "The Beano Album" because of the comic he was photographed reading. With Cream, he pushed the blues into psychedelia and invented the power trio format. His tone — a Gibson through a Marshall, cranked — became the definition of electric blues guitar for a generation.',
    links: ['1-5', '0-7', '2-7', '4-3']
  },
 
  // ── D STRING ─────────────────────────────────────────────────────────────
 
  '2-0': {
    title: 'Joni Mitchell & The Retuned Instrument',
    coord: 'D String · Open',
    media: {
      type: 'gif',
      src: './assets/Joni-Mitchell-gif-1030563086.gif',
      alt: 'Joni Mitchell'
    },
    body: 'Joni Mitchell used over 50 different guitar tunings across her career. This was not eccentricity — it was a compositional strategy. A retuned guitar is a different instrument, with different chord shapes and different resonant possibilities. She had contracted polio as a child, which left her left hand weakened, and open tunings let her voice rich harmonies with simpler finger positions. The result was albums like "Blue" (1971) and "Court and Spark" (1974) that sound like no other guitar music. Prince cited her as his greatest influence. "She\'s able to be in the moment in a way very few rock artists are," he said. He was right.',
    links: ['1-0', '2-2', '2-3', '3-0']
  },
 
  '2-2': {
    title: 'Neil Young & Old Black',
    coord: 'D String · Fret 2',
    media: {
      type: 'gif',
      src: './assets/neil-young.gif',
      alt: 'Neil Young performing'
    },
    body: 'Neil Young has played the same 1953 Les Paul Goldtop — which he calls "Old Black" after a refinish — on virtually every major recording of his career. The guitar is famously difficult to keep in tune, and Young likes it that way. His rhythm playing is thunderously physical; his solos are wrong in all the right ways, notes bent out of key and held just long enough to feel inevitable. He uses a volume pedal and a vintage Fender amp to get a sound that howls at the edge of feedback. "The more out of tune I am," he once said, "the closer I feel to the real music."',
    links: ['2-0', '2-3', '1-2', '0-3']
  },
 
  '2-3': {
    title: 'Wes Montgomery & The Thumb',
    coord: 'D String · Fret 3',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/FqoVsAjTe-8?si=AZw7CcOaKpQyvRdz&amp;start=54',
      alt: 'Wes Montgomery performing live'
    },
    body: 'Wes Montgomery learned to play guitar by listening to Charlie Christian records and painstakingly transcribing every note. He played at night, after his factory shift, in the basement so he wouldn\'t wake his children — and because he played with his thumb instead of a pick, the tone was warm and soft enough to get away with it. The thumb was not an affectation: it gave him a uniquely round, vocal sound that no plectrum has replicated. He developed a system of playing melodies in octaves that became his signature, and then harmonizing those octaves in block chords, and the result was some of the most sophisticated improvisation ever recorded. He died of a heart attack at 45.',
    links: ['2-0', '2-2', '2-5', '4-2']
  },
 
  '2-5': {
    title: 'Carlos Santana at Woodstock',
    coord: 'D String · Fret 5',
    media: {
      type: 'image',
      src: './assets/Un+giovanissimo+Carlos+Santana+in+scena.+Salì+sul+palco+sabato+16+agosto+1969+-Arch.+Corsera_thumb[2]-2561547587.jpg',
      alt: 'Santana performing at Woodstock 1969'
    },
    body: 'Carlos Santana was 22 years old and had not yet released a studio album when he played Woodstock in August 1969. He had been given a slot due to the personal advocacy of promoter Bill Graham, and he took a tab of mescaline before going on, not knowing the schedule had moved. By the time he hit the stage he was, by his own account, hallucinating severely. He played "Soul Sacrifice" — a nine-minute percussion and guitar improvisation — and every note landed. The performance is still considered one of the greatest in rock history. His sound was a revelation: African-Cuban rhythms, blues scales, a violin-like sustain, and a tone so warm it felt physical.',
    links: ['2-3', '2-7', '1-5', '0-5']
  },
 
  '2-7': {
    title: 'Eddie Van Halen: Eruption',
    coord: 'D String · Fret 7',
    media: {
      type: 'gif',
      src: './assets/eddie-van-halen-van-halen.gif',
      alt: 'Eddie Van Halen performing'
    },
    body: 'When Van Halen\'s debut album was released in 1978, guitarists put the needle back to "Eruption" and played it again because they genuinely could not understand what they were hearing. One minute fifty-two seconds of two-handed tapping, hammer-ons, pull-offs, and tremolo arm gymnastics performed at a speed that seemed inhuman. Eddie Van Halen had developed the technique in his bedroom, alone, for years, and had no idea it was unprecedented. Other guitarists had tapped before him. None had built an entire vocabulary out of it. Within a year, every guitar magazine was running tutorials. Within five years, a generation of players had rewired their technique completely.',
    links: ['2-5', '0-7', '1-7', '4-7']
  },
 
  // ── G STRING ─────────────────────────────────────────────────────────────
 
  '3-0': {
    title: 'Keith Richards & Five Strings',
    coord: 'G String · Open',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/CSWIO_DeymU?si=U5jxDBR5mg9lDL7B',
      alt: 'How 5 Strings Changed Everything for Keith'
    },
    body: 'Sometime in the early 1970s, Keith Richards removed the low E string from his guitar, tuned the remaining five strings to open G, and discovered the Rolling Stones\' sound. "Honky Tonk Women," "Brown Sugar," "Start Me Up," "Tumbling Dice" — the riffs that define the Stones\' catalog all come from this configuration. Without the bass string, the voicings ring with a jangling, incomplete quality that forces movement. Richards calls it "a beautiful mistake." He kept the technique secret for years. When he finally showed it to other guitarists, the reaction was usually some version of: that\'s it? Yes. That\'s it.',
    links: ['2-0', '3-2', '3-5', '1-0'] 
  },
 
  '3-2': {
    title: 'Duane Allman & The Slide',
    coord: 'G String · Fret 2',
    media: {
      type: 'image',
      src: './assets/Duane_Allman.jpg',
      alt: 'Duane Allman'
    },
    body: 'Duane Allman heard Robert Johnson\'s "Crossroads" and then Elmore James and decided the slide guitar was the most expressive thing a human being could do with six strings and a piece of metal tube. He played in open E tuning, the same tuning Johnson had used, and worked the slide with an aggression and melodic inventiveness that astonished everyone who heard him. In November 1970 he played on Derek and the Dominos\' "Layla" sessions, contributing the descending guitar figure that opens the song and remains one of the most recognizable moments in rock history. He died in a motorcycle accident in October 1971. He was 24.',
    links: ['3-0', '3-5', '2-2', '0-0']
  },
 
  '3-5': {
    title: 'B.B. King & Lucille',
    coord: 'G String · Fret 5',
    media: {
      type: 'gif',
      src: './assets/abell46s-reface.gif',
      alt: 'B.B. King performing'
    },
    body: 'Every guitar B.B. King owned was called Lucille. The first one nearly killed him: in 1949 two men started a fight at a dance in Twist, Arkansas, knocked over a barrel of kerosene that was heating the building, and King ran back into the burning structure to retrieve his guitar. He named her after the woman the men had been fighting over. He never learned her last name. His vibrato — the left-hand shake he used to sustain notes — became his voice so completely that he stopped using a slide; he felt he didn\'t need one. He never played chords during solos. He said a chord was a question and he preferred to give answers.',
    links: ['3-0', '3-2', '3-7', '0-5', '1-5']
  },
 
  '3-7': {
    title: 'Prince & Purple Rain',
    coord: 'G String · Fret 7',
    media: {
      type: 'gif',
      src: './assets/prince-purple-rain.gif',
      alt: 'Prince performing Purple Rain live'
    },
    body: 'Prince was a virtuoso on every instrument he played, and he played most of them. But the guitar was where he went to say things he couldn\'t say any other way. At the 2007 Super Bowl halftime show, in a rainstorm, he opened "Purple Rain" and delivered a solo that music critics still struggle to describe adequately — part Hendrix, part Santana, part something that existed nowhere else. It ran for nearly four minutes. It climaxed with a series of bends so high and so sustained they seemed to defy physics. A roadie handed him his guitar. He walked off stage. His guitar was never recovered. Nobody is quite sure what happened to it.',
    links: ['3-5', '0-7', '1-7', '2-7']
  },
 
  // ── B STRING ─────────────────────────────────────────────────────────────
 
  '4-0': {
    title: 'Mark Knopfler: No Pick Needed',
    coord: 'B String · Open',
    media: {
      type: 'gif',
      src: "./assets/we-are-the-sultans-dire-straits.gif",
      alt: 'Dire Straits performing Sultans of Swing live'
    },
    body: 'Mark Knopfler plays with his fingers. Not the classical technique, not the thumb-and-finger style of Chet Atkins — just bare fingertips, dragged across the strings in a way that produces a tone so distinctive it was recognizable from the first few bars of "Sultans of Swing" when it appeared on the radio in 1978. That song was recorded on a four-track in a tiny London flat. It sounded like it had been recorded in a ballroom. Knopfler\'s fingerpicking approach allows him to play rhythm and lead simultaneously, a quality he shares with classical guitarists but deploys entirely in the service of storytelling. "Romeo and Juliet." "Telegraph Road." "Private Investigations." Stories, all of them.',
    links: ['3-0', '4-2', '4-3', '1-2']
  },
 
  '4-2': {
    title: 'Pat Metheny & The Guitar Orchestra',
    coord: 'B String · Fret 2',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/f-LxaJqbkTQ?si=dQhsZovO0IErXLeo',
      alt: 'Pat Metheny performing live'
    },
    body: 'Pat Metheny grew up in Missouri listening to jazz and classical music and arrived in Boston at 18 to teach at Berklee, the youngest faculty member in the school\'s history. His sound — a clean, warm tone through a Roland guitar synthesizer that he helped design — redefined what a jazz guitarist could sound like. He played with Ornette Coleman\'s harmolodic group and then made lush, almost orchestral pop records and then deconstructed everything with the avant-garde Trio 99 to 00 and then started again. He is impossible to categorize, which may be the highest compliment available. He has won 20 Grammy Awards.',
    links: ['4-0', '4-3', '2-3', '1-2']
  },
 
  '4-3': {
    title: 'David Gilmour & The Space Between Notes',
    coord: 'B String · Fret 3',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/ddHK3StK5o0?si=veR_L0gImS6saCNy',
      alt: 'Pink Floyd performing Comfortably Numb'
    },
    body: '"Comfortably Numb" has two solos. The first is restrained, searching. The second, which closes the song, is one of the most celebrated guitar performances ever recorded. Gilmour plays it in a key the rest of the song is not in — a half-step up — because the emotional pitch needed to be higher. He bends notes to the edge of breaking and holds them there. He uses vibrato the way a singer would, not as decoration but as meaning. He has said that what matters is not the notes you play but the notes you leave out. The second solo of "Comfortably Numb" is proof of concept.',
    links: ['4-0', '4-2', '4-5', '1-7']
  },
 
  '4-5': {
    title: 'Jeff Beck: The Guitar as Voice',
    coord: 'B String · Fret 5',
    media: {
      type: 'image',
      src: './assets/440px-Jeff_Beck_in_Amsterdam_1979_(cropped)-3467359714.jpg',
      alt: 'Jeff Beck performing live'
    },
    body: 'Jeff Beck never sang. He felt the guitar said everything he needed to say more precisely than words could. He used the tremolo arm — the whammy bar — not as a gimmick but as a means of inflecting notes the way a voice inflects syllables, bending pitch up and down with a sensitivity most players never achieve. His 1975 album "Blow by Blow," recorded with producer George Martin, was the first instrumental guitar album to go platinum. He then made "Wired," which went further. He never stayed in one place long enough to be categorized. He could make a Stratocaster sound like a violin, a theremin, a woman singing. He died in January 2023.',
    links: ['4-3', '4-7', '3-5', '1-5']
  },
 
  '4-7': {
    title: 'Les Paul: The Inventor',
    coord: 'B String · Fret 7',
    media: {
      type: 'image',
      src: './assets/Lester_paul_Guitare_big-2178760852.jpg',
      alt: 'Les Paul with guitar'
    },
    body: 'Before Les Paul, the electric guitar was mostly a semi-acoustic instrument prone to feedback. In the late 1930s he bolted a guitar neck to a wooden railroad tie to test whether a solid body would sustain without squealing. It worked. He called it "The Log." Gibson rejected the idea. He kept experimenting. He built a home recording studio in his garage in the 1940s, wired multiple tape heads to achieve echo and delay, and accidentally discovered that he could record multiple performances on the same tape — multitrack recording, which is how every album since has been made. He performed with his wife Mary Ford well into his eighties, arthritis in every joint, adapting his technique as his hands changed. He played until he died.',
    links: ['4-5', '0-7', '1-7', '2-7']
  },
 
  // ── HIGH e STRING ─────────────────────────────────────────────────────────
 
  '5-0': {
    title: 'Andrés Segovia & The Concert Hall',
    coord: 'High e · Open',
    media: {
      type: 'image',
      src: './assets/Andres_Segovia_in_Bestanddeelnr.jpg',
      alt: 'Andrés Segovia performing classical guitar'
    },
    body: 'When Andrés Segovia began his career in the early 1900s, the classical guitar was not considered a serious concert instrument. It was associated with cafés and folk music. Segovia changed this through pure force of personality and technique. He commissioned new works from composers who had never written for guitar. He developed a right-hand technique — alternating index and middle finger with the thumb as bass — that is still the foundation of classical guitar pedagogy. He performed his first recital at the Paris Conservatoire in 1924. The audience was not expecting much. They received something that permanently altered their understanding of what a guitar could be.',
    links: ['4-0', '5-3', '5-5']
  },
 
  '5-3': {
    title: 'Sister Rosetta Tharpe: The Godmother',
    coord: 'High e · Fret 3',
    media: {
      type: 'image',
      src: './assets/sister-rosetta-tharpe-1938-publicity-photo-with-guitar-a36048-1024.jpg',
      alt: 'Sister Rosetta Tharpe'
    },
    body: 'Sister Rosetta Tharpe was playing electric guitar with distortion in 1945. She was singing gospel music — loud, physical, ecstatic gospel music — through a Gibson SG-style guitar turned up to the edge of breakup, a decade before rock and roll had a name. Elvis Presley, Chuck Berry, Jerry Lee Lewis, and Little Richard all cited her as a primary influence. Johnny Cash said she was the first musician he ever loved. She was largely forgotten by the time she died in 1973. In 2018, she was inducted into the Rock and Roll Hall of Fame. The plaque describes her as "the original soul sister." It is accurate, and it is not enough.',
    links: ['5-0', '5-5', '0-3', '4-3']
  },
 
  '5-5': {
    title: 'Bonnie Raitt & The Slide',
    coord: 'High e · Fret 5',
    media: {
      type: 'image',
      src: './assets/340px-Bonnie_Raitt_at_John_Edwards_presidential_campaign-4044120023.jpg',
      alt: 'Bonnie Raitt'
    },
    body: 'Bonnie Raitt learned slide guitar from Mississippi Fred McDowell when she was a teenager at Radcliffe. She wore the bottle-neck on her middle finger — unusual; most players use the ring or pinky — which forced her into a different physical relationship with the strings. She became one of the finest slide players of her generation, male or female, but spent twenty years as a critical favorite and commercial obscurity. In 1989, after being dropped by her label and dealing with her own battles with alcohol, she made "Nick of Time." It sold five million copies and won four Grammy Awards. She was 40. She has never made a bad album since.',
    links: ['5-0', '5-3', '5-7', '4-5']
  },
 
  '5-7': {
    title: 'Yngwie Malmsteen: Fury & Scales',
    coord: 'High e · Fret 7',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/dmFzT_BtVLk?si=4uWGW2jwxz_3wu1t',
      alt: 'Yngwie Malmsteen performing Black Star'
    },
    body: 'Yngwie Malmsteen watched a television broadcast of Jimi Hendrix\'s death announcement when he was seven years old and decided then to become a guitarist. He spent his adolescence in Sweden learning every Hendrix solo and then every Bach partita and then figuring out how to play them both at once. When his debut album "Rising Force" appeared in 1984 the guitar world genuinely didn\'t know what to do with it: neoclassical compositions played at inhuman speed with a technique nobody had seen outside of classical concert music. He was 20. He was also completely insufferable about it, which somehow made the music more impressive.',
    links: ['5-5', '4-7', '3-7', '2-7']
  }
 
};

// FRETBOARD CONFIG 

const STRINGS     = ['e', 'B', 'G', 'D', 'A', 'E'];
const FRET_COUNT  = 13;
const INLAY_FRETS = [3, 5, 7, 9, 12];
const MARKER_FRETS = [3, 5, 7, 9, 12];

const STRING_STYLES = [
  // index 0 → high e (thinnest, rendered on top)
  { top: '#d4c8a0', mid: '#f0e0a0', bot: '#b0a070', thickness: '1px'  },
  // index 1 → B
  { top: '#c8bc94', mid: '#e4d494', bot: '#a09060', thickness: '1.5px' },
  // index 2 → G
  { top: '#beb08a', mid: '#d8c880', bot: '#968450', thickness: '1.8px' },
  // index 3 → D
  { top: '#b4a47e', mid: '#ccbc74', bot: '#8c7844', thickness: '2.2px' },
  // index 4 → A
  { top: '#a89870', mid: '#c0b068', bot: '#806c3a', thickness: '2.6px' },
  // index 5 → low E (thickest, rendered on bottom)
  { top: '#9c8c60', mid: '#b4a45c', bot: '#746030', thickness: '3px'  },
];


let visitedNodes = new Set();
let activeNode   = null;
let history      = [];


function buildFretboard() {
  const labelsEl  = document.getElementById('fretLabels');
  const linesEl   = document.getElementById('fretLines');
  const stringsEl = document.getElementById('strings');

  // Fret number labels
  for (let f = 0; f < FRET_COUNT; f++) {
    const d = document.createElement('div');
    d.className = 'fret-label' + (MARKER_FRETS.includes(f) ? ' marker' : '');
    d.textContent = f === 0 ? '○' : f;
    labelsEl.appendChild(d);
  }

  // Fret lines + inlay dots
  for (let f = 0; f < FRET_COUNT; f++) {
    const d = document.createElement('div');
    d.className = 'fret-line';
    if (INLAY_FRETS.includes(f) && f !== 0) {
      const dot = document.createElement('div');
      dot.className = 'inlay';
      d.appendChild(dot);
    }
    linesEl.appendChild(d);
  }

  // String rows — visual order: high e on top, low E on bottom
  // stringOrder[visualRow] = index into STRINGS / STRING_STYLES
  const stringOrder = [5, 4, 3, 2, 1, 0];

  stringOrder.forEach((si, visualRow) => {
    const style = STRING_STYLES[visualRow]; // thinnest at top

    const row = document.createElement('div');
    row.className = 'string-row';

    // String name label (e B G D A E)
    const nameEl = document.createElement('div');
    nameEl.className = 'string-name';
    nameEl.textContent = STRINGS[si];
    row.appendChild(nameEl);

    const track = document.createElement('div');
    track.className = 'string-track';

    // The string line itself
    const line = document.createElement('div');
    line.className = 'string-line';
    line.style.setProperty('--thickness',   style.thickness);
    line.style.setProperty('--string-top',  style.top);
    line.style.setProperty('--string-mid',  style.mid);
    line.style.setProperty('--string-bot',  style.bot);
    track.appendChild(line);

    // Node dots along this string
    const nodesEl = document.createElement('div');
    nodesEl.className = 'nodes';

    for (let f = 0; f < FRET_COUNT; f++) {
      const slot = document.createElement('div');
      slot.className = 'node-slot';

      const key = `${si}-${f}`;
      if (NODES[key]) {
        const node = document.createElement('div');
        node.className = 'node unvisited';
        node.dataset.key = key;
        node.onclick = () => activateNode(key);
        slot.appendChild(node);
      }

      nodesEl.appendChild(slot);
    }

    track.appendChild(nodesEl);
    row.appendChild(track);
    stringsEl.appendChild(row);
  });

  document.getElementById('totalCount').textContent = Object.keys(NODES).length;
  console.log('Fretboard built with', Object.keys(NODES).length, 'nodes');
}

// ── GUITAR NOTE MAPPING ───────────────────────────────────────────────
// Maps string/fret combinations to note names and frequencies
// Standard tuning: E2, A2, D3, G3, B3, E4

const NOTE_MAP = {
  // Low E string (E2 = 82.41 Hz)
  '0-0': 'E2',   '0-1': 'F2',   '0-2': 'F#2',  '0-3': 'G2',   '0-4': 'G#2',
  '0-5': 'A2',   '0-6': 'A#2',  '0-7': 'B2',   '0-8': 'C3',   '0-9': 'C#3',
  '0-10': 'D3',  '0-11': 'D#3', '0-12': 'E3',
  
  // A string (A2 = 110 Hz)
  '1-0': 'A2',   '1-1': 'A#2',  '1-2': 'B2',   '1-3': 'C3',   '1-4': 'C#3',
  '1-5': 'D3',   '1-6': 'D#3',  '1-7': 'E3',   '1-8': 'F3',   '1-9': 'F#3',
  '1-10': 'G3',  '1-11': 'G#3', '1-12': 'A3',
  
  // D string (D3 = 146.83 Hz)
  '2-0': 'D3',   '2-1': 'D#3',  '2-2': 'E3',   '2-3': 'F3',   '2-4': 'F#3',
  '2-5': 'G3',   '2-6': 'G#3',  '2-7': 'A3',   '2-8': 'A#3',  '2-9': 'B3',
  '2-10': 'C4',  '2-11': 'C#4', '2-12': 'D4',
  
  // G string (G3 = 196 Hz)
  '3-0': 'G3',   '3-1': 'G#3',  '3-2': 'A3',   '3-3': 'A#3',  '3-4': 'B3',
  '3-5': 'C4',   '3-6': 'C#4',  '3-7': 'D4',   '3-8': 'D#4',  '3-9': 'E4',
  '3-10': 'F4',  '3-11': 'F#4', '3-12': 'G4',
  
  // B string (B3 = 246.94 Hz)
  '4-0': 'B3',   '4-1': 'C4',   '4-2': 'C#4',  '4-3': 'D4',   '4-4': 'D#4',
  '4-5': 'E4',   '4-6': 'F4',   '4-7': 'F#4',  '4-8': 'G4',   '4-9': 'G#4',
  '4-10': 'A4',  '4-11': 'A#4', '4-12': 'B4',
  
  // High e string (E4 = 329.63 Hz)
  '5-0': 'E4',   '5-1': 'F4',   '5-2': 'F#4',  '5-3': 'G4',   '5-4': 'G#4',
  '5-5': 'A4',   '5-6': 'A#4',  '5-7': 'B4',   '5-8': 'C5',   '5-9': 'C#5',
  '5-10': 'D5',  '5-11': 'D#5', '5-12': 'E5',
};

// Synth instance for playing notes
let synth = null;

// Initialize audio synth
function initAudio() {
  if (!synth) {
    synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.008,
        decay: 0.1,
        sustain: 0.3,
        release: 0.5,
      }
    }).toDestination();
  }
}

// Play a guitar note
function playGuitarNote(key) {
  initAudio();
  
  // Resume audio context if suspended (browser requirement)
  if (Tone.getContext().state === 'suspended') {
    Tone.getContext().resume();
  }
  
  if (NOTE_MAP[key] && synth) {
    try {
      synth.triggerAttackRelease(NOTE_MAP[key], '0.6');
    } catch (e) {
      console.error('Error playing note:', e);
    }
  }
}

// ── NARRATIVE INTERACTION ───────────────────────────────────────────────

function renderMediaContent(media) {
  const mediaEl = document.getElementById('nodeMedia');
  mediaEl.innerHTML = '';
  
  if (!media) return;
  
  if (media.type === 'image') {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.alt || '';
    mediaEl.appendChild(img);
  } else if (media.type === 'video') {
    const iframe = document.createElement('iframe');
    iframe.src = media.src;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    mediaEl.appendChild(iframe);
  } else if (media.type === 'gif') {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.alt || '';
    img.style.borderRadius = '4px';
    mediaEl.appendChild(img);
  }
}

function activateNode(key) {
  const node = NODES[key];
  if (!node) {
    console.error('Node not found:', key);
    return;
  }
  
  console.log('Activating node:', key, node.title);
  // Play the guitar note
  playGuitarNote(key);
  
  // Update visited state
  if (!visitedNodes.has(key)) {
    visitedNodes.add(key);
    document.getElementById('visitCount').textContent = visitedNodes.size;
  }
  
  // Update active node
  if (activeNode) {
    const oldEl = document.querySelector(`[data-key="${activeNode}"]`);
    if (oldEl) {
      oldEl.classList.remove('active');
      oldEl.classList.add('visited');
    }
  }
  
  activeNode = key;
  history.push(key);
  
  // Update UI
  const nodeEl = document.querySelector(`[data-key="${key}"]`);
  if (nodeEl) {
    nodeEl.classList.remove('unvisited', 'visited');
    nodeEl.classList.add('active');
  }
  
  // Update back button
  document.getElementById('backBtn').disabled = history.length <= 1;
  
  // Render content
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('nodeContent').style.display = 'block';
  
  renderMediaContent(node.media);
  document.getElementById('nodeCoord').textContent = node.coord;
  document.getElementById('nodeTitle').textContent = node.title;
  document.getElementById('nodeBody').innerHTML = node.body;
  
  // Render links
  const linksContainer = document.getElementById('nodeLinks');
  linksContainer.innerHTML = '';
  node.links.forEach(linkedKey => {
    const linkedNode = NODES[linkedKey];
    if (linkedNode) {
      const btn = document.createElement('button');
      btn.className = 'link-btn';
      if (visitedNodes.has(linkedKey)) {
        btn.classList.add('visited-link');
      }
      btn.textContent = linkedNode.title;
      btn.onclick = () => activateNode(linkedKey);
      linksContainer.appendChild(btn);
    }
  });
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    const prevKey = history[history.length - 1];
    
    // Update active node visually
    const activeEl = document.querySelector(`[data-key="${activeNode}"]`);
    if (activeEl) {
      activeEl.classList.remove('active');
      activeEl.classList.add('visited');
    }
    
    activeNode = prevKey;
    
    const prevEl = document.querySelector(`[data-key="${prevKey}"]`);
    if (prevEl) {
      prevEl.classList.remove('unvisited', 'visited');
      prevEl.classList.add('active');
    }
    
    // Update back button
    document.getElementById('backBtn').disabled = history.length <= 1;
    
    // Render content for previous node
    const node = NODES[prevKey];
    renderMediaContent(node.media);
    document.getElementById('nodeCoord').textContent = node.coord;
    document.getElementById('nodeTitle').textContent = node.title;
    document.getElementById('nodeBody').innerHTML = node.body;
    
    const linksContainer = document.getElementById('nodeLinks');
    linksContainer.innerHTML = '';
    node.links.forEach(linkedKey => {
      const linkedNode = NODES[linkedKey];
      if (linkedNode) {
        const btn = document.createElement('button');
        btn.className = 'link-btn';
        if (visitedNodes.has(linkedKey)) {
          btn.classList.add('visited-link');
        }
        btn.textContent = linkedNode.title;
        btn.onclick = () => activateNode(linkedKey);
        linksContainer.appendChild(btn);
      }
    });
  }
}


buildFretboard();