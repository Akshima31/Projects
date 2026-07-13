
const books = [
  //-------Romance-------
  {
  id: 7,
  title: "The Love Hypothesis",
  author: "Ali Hazelwood",
  genre: "Romance",
  price: 389,
  image: "https://i.pinimg.com/736x/ff/8e/fa/ff8efa1e5ed74d52a3f60180ccb1c456.jpg",
  description: "A fake relationship between a PhD student and a young professor turns into something much more real."
},
{
  id: 8,
  title: "Icebreaker",
  author: "Hannah Grace",
  genre: "Romance",
  price: 245,
  image: "/images/icebreaker.webp",
  description: "A figure skater and a hockey captain are forced to work together, leading to an unexpected romance."
},
{
  id: 9,
  title: "Dressed in Deception",
  author: "ILMA A",
  genre: "Romance",
  price: 449,
  image: "/images/deception.jpg",
  description: "A story filled with secrets, lies, and unexpected romance where nothing is as it seems."
},
{
  id: 10,
  title: "Things We Never Got Over",
  author: "Lucy Score",
  genre: "Romance",
  price: 449,
  image: "https://i.pinimg.com/736x/16/cf/d0/16cfd075f0ea7cf4fd8968249f6a5abf.jpg",
  description: "A runaway bride and a grumpy small-town barber discover that opposites can attract."
},
{
  id: 11,
  title: "The Deal",
  author: "Elle Kennedy",
  genre: "Romance",
  price: 499,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQXrwQ9FCzDSFKo6P9gazrAE0Rm4BC8fvh4gXfisZ1q1iH9N6lonP_FCE&s=10", 
  description: "A college hockey star makes a deal with a smart student, but their arrangement soon becomes complicated"
},
//---------Thriller---------
{
  id: 12,
  title: "The Silent Patient",
  author: "Alex Michaelides",
  genre: "Thriller",
  price: 573,
  image: "https://i.pinimg.com/736x/65/bc/7e/65bc7e580e28a66d2b35374be74ecec9.jpg",
  description: "A woman shoots her husband and never speaks another word, leaving a psychotherapist determined to uncover the truth."
},
{
  id: 13,
  title: "Verity",
  author: "Colleen Hoover",
  genre: "Thriller",
  price: 449,
  image: "https://i.pinimg.com/736x/9a/ab/e6/9aabe6ce390d77c162d248a1e9c73f7e.jpg",
  description: "A struggling writer discovers disturbing secrets while completing a famous author's unfinished manuscript."
},
{
  id: 14,
  title: "The Housemaid",
  author: "Freida McFadden",
  genre: "Thriller",
  price: 402,
  image: "https://i.pinimg.com/originals/ea/9e/a0/ea9ea0394536cadfb55973406a1e4349.jpg?nii=t",
  description: "A housemaid takes a seemingly perfect job, only to uncover dark secrets hidden behind closed doors."
},
{
  id: 15,
  title: "The Couple Next Door",
  author: "Shari Lapena",
  genre: "Thriller",
  price: 280,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxt2kstYFdGdRaSC8N0hNO4HD0A53CQcPUSN_tqz0a59ofc3FebRQ0Amw&s=10",
  description: "A couple's life falls apart when their baby disappears, revealing shocking secrets and lies."
},
{
  id: 16,
  title: "A Good Girl's Guide to Murder",
  author: "Holly Jackson",
  genre: "Thriller",
  price: 349,
  image: "https://i.pinimg.com/videos/thumbnails/originals/39/26/24/39262428178686ad2aac8b50592162fb.0000000.jpg",
  description: "A determined student reopens a closed murder case and uncovers truths no one expected."
},
//------Dark Romance-------
{
  id: 17,
  title: "Twisted Lies",
  author: "Ana Huang",
  genre: "Dark Romance",
  price: 499,
  image: "https://i.pinimg.com/236x/64/dc/14/64dc146a5faca6e819986fdd69a09fb9.jpg",
  description: "A charming billionaire and a guarded influencer find themselves caught in a dangerous game of secrets and love."
},
{
  id: 18,
  title: "Haunting Adeline",
  author: "H.D. Carlton",
  genre: "Dark Romance",
  price: 780,
  image: "https://rukminim2.flixcart.com/image/480/640/xif0q/regionalbooks/4/i/0/haunting-adeline-paperback-carlton-h-d-original-imagwzz7ezwshdg3.jpeg?q=90",
  description: "An author becomes entangled in a dark and obsessive relationship while uncovering disturbing family secrets."
},
{
  id: 19,
  title: "God of Malice",
  author: "Rina Kent",
  genre: "Dark Romance",
  price: 699,
  image: "https://i.pinimg.com/736x/fa/25/ab/fa25abf116b5dc3a68e4015a03e6f291.jpg",
  description: "A ruthless and dangerous man becomes obsessed with a girl who unexpectedly challenges his control."
},
{
  id: 20,
  title: "King of Envy",
  author: "Ana Huang",
  genre: "Dark Romance",
  price: 499,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp_EldlThNfeFE7DyP7XWgXzx-9RVsJdEM723B7_80uF56DgX1CqPxsaK&s=10",
  description: "A powerful man struggles between loyalty and forbidden desire when he falls for someone he can never have."
},
{
  id: 21,
  title: "The Ritual",
  author: "Shantel Tessier",
  genre: "Dark Romance",
  price: 425,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnig3aBqZ6EXEPCvah5li0o8vsNv4q4FzcdAzAI1CFuyZsNPUbMoh8xQ&s=10",
  description: "A secret society's traditions pull a young woman into a world of power, danger, and forbidden attraction."
},
//-------Fantasy--------
{
  id: 22,
  title: "Powerless",
  author: "Lauren Roberts",
  genre: "Fantasy",
  price: 549,
  image: "https://i.pinimg.com/originals/65/60/63/6560639fec4eb92500c8248d8829b719.jpg",
  description: "An ordinary girl hides among the powerful while competing in deadly trials that could expose her secret."
},
{
  id: 23,
  title: "Fourth Wing",
  author: "Rebecca Yarros",
  genre: "Fantasy",
  price: 449,
  image: "https://i.pinimg.com/236x/84/95/4a/84954a7a8de6c644d4855521990123fe.jpg",
  description: "A determined young woman enters a brutal dragon-rider academy where survival is never guaranteed."
},
{
  id: 24,
  title: "The Cruel Prince",
  author: "Holly Black",
  genre: "Fantasy",
  price: 399,
  image: "/images/cruelprince.jpg",
  description: "A mortal girl living in the world of faeries fights for power, respect, and her place in a dangerous court."
},
{
  id: 25,
  title: "A Court of Thorns and Roses",
  author: "Sarah J. Maas",
  genre: "Fantasy",
  price: 470,
  image: "https://i.pinimg.com/736x/a9/aa/dd/a9aadd1ea523f744f91189949f6ff5a4.jpg",
  description: "A young huntress is taken to a magical land where she discovers love, danger, and a deadly curse."
},
{
  id: 26,
  title: "Iron Flame",
  author: "Rebecca Yarros",
  genre: "Fantasy",
  price: 449,
  image: "https://i.pinimg.com/736x/23/2d/97/232d97251da36f0c380dcc2d429f85d7.jpg",
  description: "As war approaches, a dragon rider must face dangerous challenges, secrets, and impossible choices."
},
//-------SELF HELP---------
{
  id: 27,
  title: "Atomic Habits",
  author: "James Clear",
  genre: "Self-Help",
  price: 299,
  image: "https://i.pinimg.com/736x/2f/5d/49/2f5d495d232ce095f85797df8417a84b.jpg",
  description: "A practical guide to building good habits, breaking bad ones, and achieving lasting personal growth."
},
{
  id: 28,
  title: "The Psychology of Money",
  author: "Morgan Housel",
  genre: "Self-Help",
  price: 409,
  image: "https://i.pinimg.com/736x/92/c8/27/92c82779d9715930b51b162bc90576ac.jpg",
  description: "Explores how people's behavior and mindset influence financial decisions and long-term wealth."
},
{
  id: 29,
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
  genre: "Self-Help",
  price: 326,
  image: "https://i.pinimg.com/736x/f2/79/bf/f279bfb96f51baaeeb5f6227fc7c3fa9.jpg",
  description: "Shares lessons on money, investing, and financial independence through two contrasting life perspectives."
},
{
  id: 30,
  title: "Ikigai",
  author: "Héctor García & Francesc Miralles",
  genre: "Self-Help",
  price: 150,
  image: "https://i.pinimg.com/736x/e5/52/ef/e552ef7fe37d7f78a8f79f04d3f6e992.jpg",
  description: "Introduces the Japanese concept of finding purpose, happiness, and balance in everyday life."
},
{
  id: 31,
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  genre: "Self-Help",
  price: 349,
  image: "https://i.pinimg.com/736x/a2/00/6e/a2006ec8381a2e767502763e01326a15.jpg",
  description: "Encourages focusing on what truly matters and letting go of unrealistic expectations."
}


];

export default books;