const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/birders"
);

const birdSeed = [
  {
    initial: "S",
    lastName: "Malone",
    area: "Alexandria",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Accipter cirrhocephalus (Collared sparrowhawk)",
    author: "BRucker",
    thumbnail: "http://imagespeeder.com/bp1/Greece/GGreece-4.jpg",
    comments: "The Northern Virginia area has diverse habitats which make it a good birding destination year around."
  },
  {
    initial: "E",
   lastName: "Serlin",
    area: "Alexandria",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "The Northern Virginia area has diverse habitats which make it a good birding destination year around.",
    title: "Accipter novaehollandiae (Grey or white goshawk)",
    author: "SMalone",
    thumbnail: "http://imagespeeder.com/bp1/Index/IndexArgentina-11.jpg",
    comments: "I am fortunate to live near some nice spring migration spots especially for warblers. Then there are the Blue Ridge Mnts. nearby."
  },
  {
    initial: "F",
   lastName: "Marenghi",
    area: "Annapolis",
   state: "MD",
    available: "Weekend",
    language: "English",
    description: "Annapolis is on the Chesapeake Bay, a 45 minute drive from Washington DC and Baltimore, an hour and half to the Delaware Bay, and 2 hours to the Atlantic Ocean. I work Monday through Friday but spend many weekends and holidays birding locally or within the region. Best birding here is late Summer through Spring.",
    title: "Haliastur indus (Brahminy Kite)",
    author: "ECarlson",
    thumbnail: "",
    comments: ""
  },
  {
    initial: "D",
   lastName: "Grosboll",
    area: "Asheville",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I have been an active birder for thirty years. I would consider myself an expert on local birding topics. I feed the birds at my house with every feed our local birds might need.",
    title: "Chrysococcyx basalis (Horsfield's Bronze Cuckoo)",
    author: "MHillman",
    thumbnail: "",
    comments: ""
  },
  {
    initial: "D",
   lastName: "Johnston",
    area: "Asheville",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "Know some good sites in the Blue Ridge mountains and surrounding area.",
    title: "Chrysococcyx osculans (Black-eared Cuckoo)",
    author: "SSemanchuk",
    thumbnail: "",
    comments: "I live in the Pisgah National Forest and love to bird all over the area: Grandfather Mountain, Table Rock NC and surrounding areas. I put anytime as available, but only because I have some times during the week and weekend free."
  },
  {
    initial: "S",
   lastName: "Semanchuk",
    area: "Asheville, North Carolina",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Chrysococcyx minutillus (Little Bronze Cuckoo)",
    author: "DGrosboll",
    thumbnail: "",
    comments: "Know some good sites in the Blue Ridge mountains and surrounding area."
  },
  {
    initial: "B",
   lastName: "Klick",
    area: "Baltimore",
   state: "MD",
    available: "Anytime",
    language: "English, Mandarin",
    description: "Not the best place in United States, but is good during spring and fall migration.",
    title: "Geopelia striata (Peaceful Dove)",
    author: "RJohnson",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "H",
   lastName: "Anu",
    area: "Baltimore",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Haliastur sphenurus (Whistling Kite)",
    author: "FMarenghi",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "J",
   lastName: "Landers",
    area: "Baltimore",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Hirundo neoxena (Welcome Swallow)",
    author: "HAnu",
    thumbnail: "",

    comments: "I have served on the Southern Maryland Audubon Society Board on two occasions and am currently a member of the education committee. I have participated in May and Christmas counts for over 15 years. I would be happy to give locations information and when I can accompany them to local areas. I live in Charles County with border on the Potomac River. It contains various creeks, swamps, streams and ponds. Several wildlife management areas/state parks in my area."
  },
  {
    initial: "M",
   lastName: "Dodson",
    area: "Baltimore",
   state: "MD",
    available: "Weekend",
    language: "English",
    description: "",
    title: "Lonchura castaneothorax (Chestnut-breasted Mannikin)",
    author: "KHarris",
    thumbnail: "",

    comments: "I am a retired birder in Maryland who would be available to take travelers birding in the Baltimore area. I have been birding most of my life. I can take birders during day trips."
  },
  {
    initial: "M",
   lastName: "Brazeau",
    area: "Baltimore",
   state: "MD",
    available: "Anytime",
    language: "English, A Little Spanish",
    description: "I am a retired birder in Maryland who would be available to take travelers birding in the Baltimore area. I have been birding most of my life. I can take birders during day trips.",
    title: "Lonchura punctulata (Nutmeg mannikin)",
    author: "MDodson",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "L",
   lastName: "Lampley",
    area: "Banner Elk",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I live in the Pisgah National Forest and love to bird all over the area: Grandfather Mountain, Table Rock NC and surrounding areas. I put anytime as available, but only because I have some times during the week and weekend free.",
    title: "Cisticola exilis (Golden-headed Cisticola)",
    author: "DJohnston",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "D",
   lastName: "Moulton",
    area: "Bethesda",
   state: "MD",
    available: "Weekdays",
    language: "English",
    description: "I lead trips for the Southern Maryland Audubon Society. I am very experienced with bird-finding in this region, which is a wonderful birding area. I know what a tremendous help it has been to me to have a local guide in new territory. I hope I can help.",
    title: "Glossopsitta pusilla (Little Lorikeet)",
    author: "CPerera",
    thumbnail: "",

    comments: "The Eastern Shore of Maryland and Delaware, Blackwater National Wildlife Refuge (Bald Eagle capital of E. North America). I am an avid Wildlife photographer with an interest is birds."
  },
  {
    initial: "J",
   lastName: "Lindenberger",
    area: "Blowing Rock (summer only)",
   state: "NC",
    available: "Anytime",
    language: "English, German, Hebrew, Spanish",
    description: "",
    title: "Collocalia spodiopygius (White-rumped swiftlet)",
    author: "LLampley",
    thumbnail: "",

    comments: "I work for The Nature Conservancy and I'm knowledgeable about public and privately protected conservation areas in North Carolina. I live in the Blue Ridge Mountains of northwestern NC and I'm available to help birders in the mountain region of northwestern NC and adjoining parts of northeastern TN, and southwestern VA."
  },
  {
    initial: "J",
   lastName: "Lynch",
    area: "Boone",
   state: "",
    available: "Weekend",
    language: "English",
    description: "I work for The Nature Conservancy and I'm knowledgeable about public and privately protected conservation areas in North Carolina. I live in the Blue Ridge Mountains of northwestern NC and I'm available to help birders in the mountain region of northwestern NC and adjoining parts of northeastern TN, and southwestern VA.",
    title: "Colluricincla megarhyncha (Little Shrike-thrush)",
    author: "JLindenberger",
    thumbnail: "",

    comments: "I am a single parent and retired Army. I live in a neighborhood, that used to be home to some 96 species of birds, so far, I've seen and heard since I moved here. I'm pretty good at bird calls having called in about seven species to include the Barred Owl, Collared Dove and a Hooded Warbler."
  },
  {
    initial: "T",
   lastName: "McGreal",
    area: "Cameron",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I am a single parent and retired Army. I live in a neighborhood, that used to be home to some 96 species of birds, so far, I've seen and heard since I moved here. I'm pretty good at bird calls having called in about seven species to include the Barred Owl, Collared Dove and a Hooded Warbler.",
    title: "Coracina novaehollandiae (Black-faced Cuckoo-shrike)",
    author: "JLynch",
    thumbnail: "",

    comments: "I'm happy to show folks birds in the area or slightly further afield. Red-cockaded Woodpeckers and Bachman's Sparrows within an hour's drive, excellent wintering birds in eastern Carolina further."
  },
  {
    initial: "N",
   lastName: "Swick",
    area: "Chapel Hill",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I'm happy to show folks birds in the area or slightly further afield. Red-cockaded Woodpeckers and Bachman's Sparrows within an hour's drive, excellent wintering birds in eastern Carolina further.",
    title: "Coracina papuensis (White-bellied cuckoo-shrike)",
    author: "TMcGreal",
    thumbnail: "",

    comments: "If you want a young, energetic, expert guide who can help you locate/identify/photograph birds/butterflies and any other wildlife in North Carolina, I am the man for the job. Send me a hit list and I'll tell you where we can go."
  },
  {
    initial: "A",
   lastName: "Kneidel",
    area: "Chapel Hill",
   state: "NC",
    available: "Anytime",
    language: "English, fluent Spanish",
    description: "If you want a young, energetic, expert guide who can help you locate/identify/photograph birds/butterflies and any other wildlife in North Carolina, I am the man for the job. Send me a hit list and I'll tell you where we can go.",
    title: "Coracina tenuirostris (Cicadabird)",
    author: "NSwick",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "M",
   lastName: "Cooper",
    area: "Charlotte",
   state: "NC",
    available: "Weekend",
    language: "English",
    description: "",
    title: "Corvus coronoides (Australian Raven)",
    author: "AKneidel",
    thumbnail: "",

    comments: "I am not an expert but serve on our local Audubon board with a lot of them! If there is a specific bird or birds that you would like to see I am sure I can find out where to go. I am in the Raleigh/Durham area (middle of the state). We have lots of very cool birds."
  },
  {
    initial: "S",
   lastName: "Gill",
    area: "Charlottesville",
   state: "VA",
    available: "Weekend",
    language: "English",
    description: "I am fortunate to live near some nice spring migration spots especially for warblers. Then there are the Blue Ridge Mnts. nearby.",
    title: "Acridotheres tristis (Common or Indian Myna)",
    author: "ESerlin",
    thumbnail: "http://imagespeeder.com/bp1/Bulgaria/GBulgaria-6.jpg",

    comments: "I live in an area where there are small towns. Blacksburg and Christiansburg and Radford, Virginia. Blacksburg is the home of the largest University in the State. Radford is the host to a smaller University, Radford. As Radford parallels New River there are ample opportunities to bird in our area. There are also birding trails in both Blacksburg and in Radford. These are a part of the Virginia Birding trail system. I have a small Jon boat and I am willing to take a fellow birder on a river trip. However I will not be interested in taking any person birding who smokes. I am an avid bird watcher as well as a photographer. When I go on trips I will always take a camera with me. I will always be more than willing to answer any inquiries that folks would like to know about the area where I live. I belong to the New River Bird Club and have many friends who also are active birders both for identification as well as for Bird Photography. I am an retired active guy who loves birds and have been a birder since I was a teenager."
  },
  {
    initial: "R",
   lastName: "Abraham",
    area: "Christiansburg",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "I live in an area where there are small towns. Blacksburg and Christiansburg and Radford, Virginia. Blacksburg is the home of the largest University in the State. Radford is the host to a smaller University, Radford. As Radford parallels New River there are ample opportunities to bird in our area. There are also birding trails in both Blacksburg and in Radford. These are a part of the Virginia Birding trail system. I have a small Jon boat and I am willing to take a fellow birder on a river trip. However I will not be interested in taking any person birding who smokes. I am an avid bird watcher as well as a photographer. When I go on trips I will always take a camera with me. I will always be more than willing to answer any inquiries that folks would like to know about the area where I live. I belong to the New River Bird Club and have many friends who also are active birders both for identification as well as for Bird Photography. I am an retired active guy who loves birds and have been a birder since I was a teenager.",
    title: "Aegotheles cristatus (Australian owlet nightjar)",
    author: "SGill",
    thumbnail: "http://imagespeeder.com/bp1/Index/IndexVeOwl.jpg",

    comments: ""
  },
  {
    initial: "K",
   lastName: "Mills",
    area: "Church Falls",
   state: "VA",
    available: "Weekend",
    language: "English",
    description: "",
    title: "Alcedo azurea (Azure Kingfisher)",
    author: "RAbraham",
    thumbnail: "http://imagespeeder.com/bp1/Index/IndexThaiHornbill.jpg",

    comments: ""
  },
  {
    initial: "M",
   lastName: "James",
    area: "Columbia",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Lophoictinia isura (Square-tailed kKte)",
    author: "MBrazeau",
    thumbnail: "",

    comments: "I work at a biological lab but not with birds. Amateur birder. 2 eagle nests water birds on lakes and saltwater Washington Capital parks many habitats"
  },
  {
    initial: "G",
   lastName: "Weinberger",
    area: "Doswell",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Alcedo pusilla (Little Kingfisher)",
    author: "KMills",
    thumbnail: "http://imagespeeder.com/bp1/Index/IndexVeCrestedEagle.jpg",

    comments: "Highland County is well-known to birders. In the winter, you can see Golden Eagles, Rough-legged Hawks and other more northern species. Also a real hot spot during migration. I have a cottage for rent (reasonal rates) and am willing to show you where to go to see birds."
  },
  {
    initial: "K",
   lastName: "Wouk",
    area: "Durham",
   state: "",
    available: "Weekend",
    language: "English, some Spanish",
    description: "I am not an expert but serve on our local Audubon board with a lot of them! If there is a specific bird or birds that you would like to see I am sure I can find out where to go. I am in the Raleigh/Durham area (middle of the state). We have lots of very cool birds.",
    title: "Corvus orru (Torresian Crow)",
    author: "MCooper",
    thumbnail: "",

    comments: "I am located near Jordan Lake. An outstanding birding location year-round, Jordan Lake seems to attract more stellar rarities, such as Long-billed Murrelet, White-tailed Tropicbird, and Smith's Longspur, than any other local spot. Jordan Lake has 13,900 acres of water to scan, nine state recreation areas, and more Bald Eagles than you can shake a stick at."
  },
  {
    initial: "K",
   lastName: "Reichart",
    area: "Durham",
   state: "NC",
    available: "Weekend",
    language: "English, Spanish",
    description: "I am located near Jordan Lake. An outstanding birding location year-round, Jordan Lake seems to attract more stellar rarities, such as Long-billed Murrelet, White-tailed Tropicbird, and Smith's Longspur, than any other local spot. Jordan Lake has 13,900 acres of water to scan, nine state recreation areas, and more Bald Eagles than you can shake a stick at.",
    title: "Coturnix ypsilophora (Brown quail)",
    author: "KWouk",
    thumbnail: "",

    comments: "There are about as many birdwatchers as birds around here, so if I happen to be busy (which has been the case lately) there is likely to be somebody else available to whom I could refer you. Southeastern US specialties: Brown-headed Nuthatch and Red-bellied Woodpecker are relatively easy to find year round. Most other species of special interest are seasonal."
  },
  {
    initial: "S",
   lastName: "Winton",
    area: "Durham",
   state: "NC",
    available: "Weekend",
    language: "English, Spanish",
    description: "There are about as many birdwatchers as birds around here, so if I happen to be busy (which has been the case lately) there is likely to be somebody else available to whom I could refer you. Southeastern US specialties: Brown-headed Nuthatch and Red-bellied Woodpecker are relatively easy to find year round. Most other species of special interest are seasonal.",
    title: "Cracticus nigrogularis (Pied butcherbird)",
    author: "KReichart",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "D",
   lastName: "Palmer",
    area: "Easton",
   state: "MD",
    available: "Weekend",
    language: "English",
    description: "The Eastern Shore of Maryland and Delaware, Blackwater National Wildlife Refuge (Bald Eagle capital of E. North America). I am an avid Wildlife photographer with an interest is birds.",
    title: "Grallina cyanoleuca (Magpie Lark)",
    author: "DMoulton",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "K",
   lastName: "Harris",
    area: "Easton",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "Places within two hours: Chesapeake Bay, Atlantic Ocean, Bombay NWR, Blackwater NWR, Pickering Creek Audubon Center, Jean Ellen dePont Shehan Audubon Sancturay, Adkins Arboretum and Tuckahoe State Park. Will gladly respond to email.",
    title: "Lichmera indistincta (Brown Honeyeater)",
    author: "JMusike",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "P",
   lastName: "Thut",
    area: "Easton",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "We regularly submit checklists to eBird. We live in Talbot County, Maryland, between Easton and St. Michaels. This is on Maryland’s Eastern Shore, approximately an hour from BWI Airport in Baltimore and the same from Washington, DC. Approximately 260 species are seen in Talbot County each year. Our area is not strong for warbler migration, but is excellent for wintering waterfowl. The Blackwater NWR is about an hour away and the Bombay Hook NWR in Delaware is an hour and a half in the other direction. Both are excellent places to bird in the cooler months. We would be happy to offer location advice to visitors and would be willing to accompany them if we are at home. Our local Bird Club also welcomes visitors on our Sunday morning walks.",
    title: "Meliphaga notata (Yellow-spotted Honeyeater)",
    author: "NKahn",
    thumbnail: "",

    comments: "Eastern shore area of Maryland, Marsh birds, ducks, beach birds in area, Eagles, cranes, swans, ospray, doves, turkey, song birds close to many hotels in our town. State and FED park near by on Assatigue Island and lots of public land, E.A. Vaun area, Pocamoke State Park, and Ward brothers center for duck lovers only 30 min away."
  },
  {
    initial: "S",
   lastName: "Nelson",
    area: "Frederick",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Milvus migrans (Black Kite)",
    author: "RCantilli",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "M",
   lastName: "Reinsel",
    area: "Greenbelt, Maryland",
   state: "MD",
    available: "Weekends",
    language: "English",
    description: "I work at a biological lab but not with birds. Amateur birder. 2 eagle nests water birds on lakes and saltwater Washington Capital parks many habitats",
    title: "Malurus melanocephalus (Red-backed Fairy Wren)",
    author: "MJames",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "D",
   lastName: "Burnette",
    area: "Greensboro",
   state: "NC",
    available: "Anytime",
    language: "English, German, French, Japanese, some Spanish",
    description: "Greensboro is in the approximate geographic center of North Carolina in Guilford County. While there are few rarities here, it is a good area in which to see nearly all of the typical southeastern bird species. Birds have been well documented in the county since the late 1930s by an active local bird club. I am a retired educator, an amateur naturalist, and a wildlife photographer interested in birds, butterflies, dragonflies, wildflowers, and other wildlife of the area. My wife and I enjoy showing visitors our little corner of the world.",
    title: "Falco cenchroides (Nankeen Kestrel, Australian Kestrel, Hoverer)",
    author: "ACoston",
    thumbnail: "",

    comments: "I really like photography, and am blank to birding. The listed \"local\" birding clubs are at a minimum of two hours or more away, so it's not feasible for me to meet with them, but I know I need the guidance of an experienced birder. I'm a Marine so scheduling can work out to where I have free weekdays, but I can't really highlight \"Anytime\" due to the unpredictability of my weekday schedule. As far as being located next to major birding areas goes, I live in the North Carolina Outer Banks so there's tons of places to bird where I live."
  },
  {
    initial: "A",
   lastName: "Rhodes",
    area: "Havelock",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I really like photography, and am blank to birding. The listed \"local\" birding clubs are at a minimum of two hours or more away, so it's not feasible for me to meet with them, but I know I need the guidance of an experienced birder. I'm a Marine so scheduling can work out to where I have free weekdays, but I can't really highlight \"Anytime\" due to the unpredictability of my weekday schedule. As far as being located next to major birding areas goes, I live in the North Carolina Outer Banks so there's tons of places to bird where I live.",
    title: "Falco longipennis (Australian hobby)",
    author: "DBurnette",
    thumbnail: "",

    comments: "I live in the Piedmont area pf NC but grew up in the Coastal Plain/Sandhills area of NC. I am a member of Sylvan Heights Waterfowl Park which is within 90 miles from Raleigh. I go there a lot. They have close to 200 waterfowls and birds from all over the world. A wonderful place dedicated to the preservation of endangered species. I have traveled to the Gallapagos Islands and Costa Rica, studying and photographing birds. I have my tickets now for a trip to South Africa, namely Zambia, Namibia and Botswana. I am current working on the Cornell University course to learn more about birds and their behaviors. I have been carving realistic birds for 20 years and teach this art form to 30 students attending classes I hold regularly in my studio in Raleigh. My wesite: www.wildfowlart.com and I administer my website, www.birdcarversonline.com."
  },
  {
    initial: "S",
   lastName: "Teague",
    area: "Hickory",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Cracticus quoyi (Black butcherbird)",
    author: "SWinton",
    thumbnail: "",

    comments: "I am a park ranger for Catawba County in the foothills of NC. I am also a bird bander."
  },
  {
    initial: "D",
   lastName: "Martin",
    area: "Hickory",
   state: "",
    available: "Anytime",
    language: "English",
    description: "I am a park ranger for Catawba County in the foothills of NC. I am also a bird bander.",
    title: "Cuculus saturatus (Oriental cuckoo)",
    author: "STeague",
    thumbnail: "",

    comments: "I have been birding for over 50 years and enjoy sharing my hobby with beginners and advanced birders. Western NC has a few specialties such as sawhet owl and red-crossbill, plus many warblers during migration."
  },
  {
    initial: "T",
   lastName: "Sinclair",
    area: "Hickory",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I have been birding for over 50 years and enjoy sharing my hobby with beginners and advanced birders. Western NC has a few specialties such as sawhet owl and red-crossbill, plus many warblers during migration.",
    title: "Dacelo leachii (Blue-winged Kookaburra)",
    author: "DMartin",
    thumbnail: "",

    comments: "Located in the northwest piedmont of North Carolina, near Greensboro and Winston Salem. We are an hour away from the NC Zoo, Raleigh, Durham, and Chapel Hill, and an hour and a half away from the Blue Ridge Mountains, and Charlotte."
  },
  {
    initial: "L",
   lastName: "Hayes",
    area: "High Point",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "Located in the northwest piedmont of North Carolina, near Greensboro and Winston Salem. We are an hour away from the NC Zoo, Raleigh, Durham, and Chapel Hill, and an hour and a half away from the Blue Ridge Mountains, and Charlotte.",
    title: "Dacelo novaeguineae (Laughing Kookaburra)",
    author: "TSinclair",
    thumbnail: "",

    comments: "Know some good sites in the Blue Ridge mountains and surrounding area."
  },
  {
    initial: "P",
   lastName: "Reum",
    area: "Highland County",
   state: "VA",
    available: "Weekend",
    language: "English",
    description: "Highland County is well-known to birders. In the winter, you can see Golden Eagles, Rough-legged Hawks and other more northern species. Also a real hot spot during migration. I have a cottage for rent (reasonal rates) and am willing to show you where to go to see birds.",
    title: "Alectura lathami (Australian Brush Turkey)",
    author: "GWeinberger",
    thumbnail: "http://imagespeeder.com/bp1/Index/Indexet-2.jpg",

    comments: "West of Richmond, VA; wooded areas, flat, some marsh, near large river. Good winter and spring birds. Amateur; several international trips. Just for fun."
  },
  {
    initial: "J",
   lastName: "Artes",
    area: "Indian Head",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "I have served on the Southern Maryland Audubon Society Board on two occasions and am currently a member of the education committee. I have participated in May and Christmas counts for over 15 years. I would be happy to give locations information and when I can accompany them to local areas. I live in Charles County with border on the Potomac River. It contains various creeks, swamps, streams and ponds. Several wildlife management areas/state parks in my area.",
    title: "Lalage leucomela (Varied Triller)",
    author: "JLanders",
    thumbnail: "",

    comments: "I'm about 15 minutes from the National Arboretum and close to several parks and wildlife refuges. Great areas for spring migration (late April- early May: warblers, orioles, tanagers, hawks, etc) and for waterfowl in the winters."
  },
  {
    initial: "R",
   lastName: "Doyle",
    area: "Laurel",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "Eastern shore area of Maryland, Marsh birds, ducks, beach birds in area, Eagles, cranes, swans, ospray, doves, turkey, song birds close to many hotels in our town. State and FED park near by on Assatigue Island and lots of public land, E.A. Vaun area, Pocamoke State Park, and Ward brothers center for duck lovers only 30 min away.",
    title: "Melithreptus albogularis (White-throated Honeyeater)",
    author: "PThut",
    thumbnail: "",

    comments: "I've been birding for nearly 30 years and consider myself a good to excellent birder. I live right outside Great Falls Park which is excellent for birding - many habitats and loads of water with the Potomac River and CO canal nearby. If people want to see Bald Eagles and Great Blue heron as well as Baltimore Orioles, Barred Owls, Yellow-throated Vireos, this is the place to see them. Plus there's the opportunity to see Great Falls and some historical sites in the park - the old tavern, the lock and barge system from the early 1800s."
  },
  {
    initial: "D",
   lastName: "Johnston",
    area: "Leicester",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "Know some good sites in the Blue Ridge mountains and surrounding area.",
    title: "Dichaeum hirundinaceum (Mistletoe Bird)",
    author: "LHayes",
    thumbnail: "",

    comments: "I'm an intermediate birder and very knowledgeable about where and when to find birds in North Carolina."
  },
  {
    initial: "C",
   lastName: "Metzgar",
    area: "Manakin Sabot",
   state: "VA",
    available: "Anytime",
    language: "English some Spanish",
    description: "West of Richmond, VA; wooded areas, flat, some marsh, near large river. Good winter and spring birds. Amateur; several international trips. Just for fun.",
    title: "Anseranus semipalmata (Magpie Goose)",
    author: "PReum",
    thumbnail: "http://imagespeeder.com/bp1/binoculars/IntroductionToBirdwatchingBinoculars.jpg",

    comments: ""
  },
  {
    initial: "R",
   lastName: "Young",
    area: "McLean",
   state: "VA",
    available: "Weekend",
    language: "English",
    description: "",
    title: "Antus novaeseelandiae (Richard's Pipit)",
    author: "CMetzgar",
    thumbnail: "",

    comments: "I have been a birder for many years and love to show people new birds whenever I can. I am close to the coast and to several good birding spots. Lots of good waterfowl and ocean birds in the winter, and there are several good spots for migrating warblers and shorebirds."
  },
  {
    initial: "J",
   lastName: "Stone",
    area: "Newport News",
   state: "VA",
    available: "Anytime",
    language: "English, some Spanish",
    description: "I have been a birder for many years and love to show people new birds whenever I can. I am close to the coast and to several good birding spots. Lots of good waterfowl and ocean birds in the winter, and there are several good spots for migrating warblers and shorebirds.",
    title: "Aplonis metallica (Metallic Starling, Shining Starling)",
    author: "RYoung",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "M",
   lastName: "Hurley",
    area: "Ocean City",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Megapodius reinwardt (Orange-footed Scrub Fowl)",
    author: "MReinsel",
    thumbnail: "",

    comments: "There are many areas within a short drive for the common East Coast species. In summer, there are yellow-crowned night herons in my neighborhood. This is a good area for those visiting D.C. and wanting to see many of America's East Coast birds for the first time. The coast, freshwater marsh, and salt marsh are only 2 hour drive away for the less common species. I have been an avid birder for about 8 years."
  },
  {
    initial: "C",
   lastName: "Perera",
    area: "Olney",
   state: "MD",
    available: "Weekend",
    language: "English",
    description: "",
    title: "Gerygone palpebrosa (Fairy gerygone)",
    author: "BKlick",
    thumbnail: "",

    comments: "I lead trips for the Southern Maryland Audubon Society. I am very experienced with bird-finding in this region, which is a wonderful birding area. I know what a tremendous help it has been to me to have a local guide in new territory. I hope I can help."
  },
  {
    initial: "J",
   lastName: "Harris",
    area: "Orlean, Virginia, USA",
   state: "VA",
    available: "Sundays and Mondays. Other times possible.",
    language: "English, Spanish, Indonesian (coversational)",
    description: "",
    title: "Aprosmictus erythropterus (Red-winged Parrot)",
    author: "JStone",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "E",
   lastName: "Carlson",
    area: "Pasadena",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "I am familiar with Northern Anne Arundel County birding sites such as Swan Creek and Fort Smallwood Park and some other sites and birds that are common in Maryland.",
    title: "Haliaeetus leucogaster (White-bellied Sea Eagle)",
    author: "DLeonnig",
    thumbnail: "",

    comments: "Annapolis is on the Chesapeake Bay, a 45 minute drive from Washington DC and Baltimore, an hour and half to the Delaware Bay, and 2 hours to the Atlantic Ocean. I work Monday through Friday but spend many weekends and holidays birding locally or within the region. Best birding here is late Summer through Spring."
  },
  {
    initial: "R",
   lastName: "Cantilli",
    area: "Potomac",
   state: "MD",
    available: "Anytime",
    language: "English\nintermediate Italian\nsome Spanish",
    description: "I've been birding for nearly 30 years and consider myself a good to excellent birder. I live right outside Great Falls Park which is excellent for birding - many habitats and loads of water with the Potomac River and CO canal nearby. If people want to see Bald Eagles and Great Blue heron as well as Baltimore Orioles, Barred Owls, Yellow-throated Vireos, this is the place to see them. Plus there's the opportunity to see Great Falls and some historical sites in the park - the old tavern, the lock and barge system from the early 1800s.",
    title: "Merops ornatus (Rainbow Bee-eater)",
    author: "RDoyle",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "C",
   lastName: "Kessler",
    area: "Radford",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Aquila audax (Wedge-tailed Eagle)",
    author: "JHarris",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "J",
   lastName: "Southern",
    area: "Raleigh",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I'm an intermediate birder and very knowledgeable about where and when to find birds in North Carolina.",
    title: "Dicrurus bracteatus (Spangled Drongo)",
    author: "DJohnston",
    thumbnail: "",

    comments: "I lead most of the birding trips for Wake Audubon Society's Meetup Group (local Wake County areas). I also enjoy birding at Mason Farm (Chapel Hill) and Howell Woods ((Johnston Co). I work Mon-Thurs so my best times are Fri-Sat-Sun, but I might be able to do short trips in the midweek too."
  },
  {
    initial: "L",
   lastName: "Beegle",
    area: "Raleigh",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I lead most of the birding trips for Wake Audubon Society's Meetup Group (local Wake County areas). I also enjoy birding at Mason Farm (Chapel Hill) and Howell Woods ((Johnston Co). I work Mon-Thurs so my best times are Fri-Sat-Sun, but I might be able to do short trips in the midweek too.",
    title: "Ducula bicolor (Pied Imperial Pigeon)",
    author: "JSouthern",
    thumbnail: "",

    comments: "Near the Croatan National Forest. In Summer Painted Buntings are seen on the coast. A couple of hours from Lake Mattamuskeet, a major wintering ground for Tundra Swans from Nov. 15 thru Feb. 15."
  },
  {
    initial: "V",
   lastName: "Kirkman",
    area: "Raleigh",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I live in the Piedmont area pf NC but grew up in the Coastal Plain/Sandhills area of NC. I am a member of Sylvan Heights Waterfowl Park which is within 90 miles from Raleigh. I go there a lot. They have close to 200 waterfowls and birds from all over the world. A wonderful place dedicated to the preservation of endangered species. I have traveled to the Gallapagos Islands and Costa Rica, studying and photographing birds. I have my tickets now for a trip to South Africa, namely Zambia, Namibia and Botswana. I am current working on the Cornell University course to learn more about birds and their behaviors. I have been carving realistic birds for 20 years and teach this art form to 30 students attending classes I hold regularly in my studio in Raleigh. My wesite: www.wildfowlart.com and I administer my website, www.birdcarversonline.com.",
    title: "Falco peregrinus (Peregrine falcon)",
    author: "ARhodes",
    thumbnail: "",

    comments: "I spend most of my free days hiking, car birding, and photographing birds and other wildlife in western NC. I know many of the great areas to see migrating, wintering and breeding birds and my wife and I would love to share those places with you."
  },
  {
    initial: "M",
   lastName: "O'Bryan",
    area: "Richmond",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Artamus leucocorynchus (White-breasted Woodswallow)",
    author: "CKessler",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "B",
   lastName: "Adams",
    area: "Richmond",
   state: "VA",
    available: "Anytime",
    language: "English, French",
    description: "",
    title: "Aviceda subcristata (Pacific Baza)",
    author: "MO'Bryan",
    thumbnail: "",

    comments: "Available, when I do not have any wild birds that I am rehabbing. Local Roanoke and local \"hot spots\" within 20/30 miles. Will answer questions about injured wild birds."
  },
  {
    initial: "M",
   lastName: "Eiger",
    area: "Roanoke",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "Available, when I do not have any wild birds that I am rehabbing. Local Roanoke and local \"hot spots\" within 20/30 miles. Will answer questions about injured wild birds.",
    title: "Burhinus grallarius (Bush Stone-Curlew)",
    author: "BAdams",
    thumbnail: "",

    comments: "Shenandoah National Park, Staunton, Waynesboro, and Harrisonburg areas are my home areas. I know locations for breeding Cerulean Warblers, wintering waterfowl, and much else."
  },
  {
    initial: "G",
   lastName: "Mapel",
    area: "Shenandoah Valley, zip 24469",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "Shenandoah National Park, Staunton, Waynesboro, and Harrisonburg areas are my home areas. I know locations for breeding Cerulean Warblers, wintering waterfowl, and much else.",
    title: "Cacatua galerita (Sulphur-crested Cockatoo)",
    author: "MEiger",
    thumbnail: "",

    comments: "Near Staunton River State Park, Staunton River Battlefield State Park, Buggs Island Lake (known as Kerr Lake in North Carolina). Only about an hour and a half from the mountains of Virginia."
  },
  {
    initial: "N",
   lastName: "Kahn",
    area: "Silver Spring",
   state: "MD",
    available: "Weekend",
    language: "English",
    description: "There are many areas within a short drive for the common East Coast species. In summer, there are yellow-crowned night herons in my neighborhood. This is a good area for those visiting D.C. and wanting to see many of America's East Coast birds for the first time. The coast, freshwater marsh, and salt marsh are only 2 hour drive away for the less common species. I have been an avid birder for about 8 years.",
    title: "Meliphaga gracilis (Graceful honeyeater)",
    author: "MHurley",
    thumbnail: "",

    comments: "We regularly submit checklists to eBird. We live in Talbot County, Maryland, between Easton and St. Michaels. This is on Maryland’s Eastern Shore, approximately an hour from BWI Airport in Baltimore and the same from Washington, DC. Approximately 260 species are seen in Talbot County each year. Our area is not strong for warbler migration, but is excellent for wintering waterfowl. The Blackwater NWR is about an hour away and the Bombay Hook NWR in Delaware is an hour and a half in the other direction. Both are excellent places to bird in the cooler months. We would be happy to offer location advice to visitors and would be willing to accompany them if we are at home. Our local Bird Club also welcomes visitors on our Sunday morning walks."
  },
  {
    initial: "R",
   lastName: "Johnson",
    area: "Smoky Mountains, North Carolina",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "I spend most of my free days hiking, car birding, and photographing birds and other wildlife in western NC. I know many of the great areas to see migrating, wintering and breeding birds and my wife and I would love to share those places with you.",
    title: "Geopelia humeralis (Bar-shouldered Dove)",
    author: "VKirkman",
    thumbnail: "",

    comments: "Not the best place in United States, but is good during spring and fall migration."
  },
  {
    initial: "J",
   lastName: "Blalock",
    area: "South Boston",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "Near Staunton River State Park, Staunton River Battlefield State Park, Buggs Island Lake (known as Kerr Lake in North Carolina). Only about an hour and a half from the mountains of Virginia.",
    title: "Cacatua roseicapilla (Galah)",
    author: "GMapel",
    thumbnail: "",

    comments: "Been birding for twenty plus years. Do bird surveys for the Forest Service."
  },
  {
    initial: "D",
   lastName: "Holsinger",
    area: "Timberville",
   state: "VA",
    available: "Anytime",
    language: "English, some Spanish",
    description: "Been birding for twenty plus years. Do bird surveys for the Forest Service.",
    title: "Cacatua sanguinea (Little Corella)",
    author: "JBlalock",
    thumbnail: "",

    comments: "I have been birding for 10+ years. I am a member of the Northern Virginia Bird Club and previously a member of Potomac Valley Audubon Society, where I used to live. I currently travel for work and have had the chance to bird in Italy, Austria, Singapore, and Seoul. I have birded with birding pals in San Francisco and Vienna this year and would like to get the chance to go birding with visitors of N. VA or even DC."
  },
  {
    initial: "J",
   lastName: "Smith",
    area: "Trenton",
   state: "NC",
    available: "Anytime",
    language: "English, some Spanish",
    description: "Near the Croatan National Forest. In Summer Painted Buntings are seen on the coast. A couple of hours from Lake Mattamuskeet, a major wintering ground for Tundra Swans from Nov. 15 thru Feb. 15.",
    title: "Entomyzon cyanotis (Blue-faced Honeyeater)",
    author: "LBeegle",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "D",
   lastName: "Leonnig",
    area: "Upper Marlboro",
   state: "MD",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Gymnorhina tibicen (Australian Magpie)",
    author: "DPalmer",
    thumbnail: "",

    comments: "I am familiar with Northern Anne Arundel County birding sites such as Swan Creek and Fort Smallwood Park and some other sites and birds that are common in Maryland."
  },
  {
    initial: "L",
   lastName: "Meade",
    area: "Vienna",
   state: "VA",
    available: "Anytime",
    language: "English",
    description: "I am an active birder and photographer who often leads trips for the Northern Virginia Bird Club. This area has many birdy locations especially during migration.",
    title: "Cacomantis variolosus (Brush Cuckoo)",
    author: "JGozart",
    thumbnail: "",

    comments: "Most parks like Shenandoah National Park. Like hiking trails. Hawk MT.PA -and WV some."
  },
  {
    initial: "M",
   lastName: "Hillman",
    area: "Wallops Island",
   state: "VA",
    available: "Weekends (generally Friday and Saturday), Open to other days.",
    language: "English",
    description: "I am a young professional with a passion for birding and nature. My background is in the zoo and aquarium field, where I have spent the last 6 years working as an educator, presenter, tour leader, and zookeeper. Currently, I coordinate and lead educational programs on the Eastern Shore of Virginia, including as a Birding Guide for Road Scholar. I am avid birder, though with a degree in Zoology I can get just as excited by any other class of animal. I'm always trying to add species to my bird/mammal/reptile/amphibian/fish lists and that gets me outdoors and traveling as much as possible in my spare time. If you are looking for adventure on a long trek or simply some easy birding at a couple prime local spots, I would love to take you out in the Delmarva region. Happy Birding!",
    title: "Chlamydera nuchalis (Great Bowerbird)",
    author: "TBrill",
    thumbnail: "",

    comments: "I have been an active birder for thirty years. I would consider myself an expert on local birding topics. I feed the birds at my house with every feed our local birds might need."
  },
  {
    initial: "J",
   lastName: "Gozart",
    area: "Warrenton (Northern VA)",
   state: "VA",
    available: "Weekend",
    language: "English",
    description: "I have been birding for 10+ years. I am a member of the Northern Virginia Bird Club and previously a member of Potomac Valley Audubon Society, where I used to live. I currently travel for work and have had the chance to bird in Italy, Austria, Singapore, and Seoul. I have birded with birding pals in San Francisco and Vienna this year and would like to get the chance to go birding with visitors of N. VA or even DC.",
    title: "Cacomantis flabelliformis (Fan-tailed Cuckoo)",
    author: "DHolsinger",
    thumbnail: "",

    comments: "I am an active birder and photographer who often leads trips for the Northern Virginia Bird Club. This area has many birdy locations especially during migration."
  },
  {
    initial: "J",
   lastName: "Dorothy",
    area: "Washington DC metro area",
   state: "MD",
    available: "Weekend",
    language: "English, some Spanish",
    description: "I'm about 15 minutes from the National Arboretum and close to several parks and wildlife refuges. Great areas for spring migration (late April- early May: warblers, orioles, tanagers, hawks, etc) and for waterfowl in the winters.",
    title: "Lichenostomus flavus (Yellow Honeyeater)",
    author: "JArtes",
    thumbnail: "",

    comments: "I am not a professional bird guide but run a professional charter sailboat. I think bird watchers would really enjoy both. We see ospreys, eagles, herons, egrets, and a host of other birds, both water and land, migrating and resident. You can find my bio and rates at www.experiencesail.com This is a great way to view wildlife and spend time with family and friends."
  },
  {
    initial: "C",
   lastName: "Jeschke",
    area: "Winchester",
   state: "VA",
    available: "Weekend",
    language: "English",
    description: "Most parks like Shenandoah National Park. Like hiking trails. Hawk MT.PA -and WV some.",
    title: "Calyptorhynchus banksii (Red-tailed black cockatoo)",
    author: "LMeade",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "T",
   lastName: "Brill",
    area: "Winchester",
   state: "VA",
    available: "Weekend",
    language: "English",
    description: "",
    title: "Centropus phasianinus (Pheasant Coucal)",
    author: "CJeschke",
    thumbnail: "",

    comments: "I am a young professional with a passion for birding and nature. My background is in the zoo and aquarium field, where I have spent the last 6 years working as an educator, presenter, tour leader, and zookeeper. Currently, I coordinate and lead educational programs on the Eastern Shore of Virginia, including as a Birding Guide for Road Scholar. I am avid birder, though with a degree in Zoology I can get just as excited by any other class of animal. I'm always trying to add species to my bird/mammal/reptile/amphibian/fish lists and that gets me outdoors and traveling as much as possible in my spare time. If you are looking for adventure on a long trek or simply some easy birding at a couple prime local spots, I would love to take you out in the Delmarva region. Happy Birding!"
  },
  {
    initial: "B",
   lastName: "Sugg",
    area: "Winston-Salem",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Eudynamys scolopacea (Common Koel)",
    author: "JSmith",
    thumbnail: "",

    comments: ""
  },
  {
    initial: "F",
   lastName: "Shelton",
    area: "Winston-Salem",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "",
    title: "Eurystomus orientalis (Dollarbird)",
    author: "BSugg",
    thumbnail: "",

    comments: "Winston-Salem is centrally located in NC, near Greensboro and High Point, and about 1.5 hours from Charlotte or Raleigh, NC."
  },
  {
    initial: "A",
   lastName: "Coston",
    area: "Winston-Salem",
   state: "NC",
    available: "Anytime",
    language: "English",
    description: "Winston-Salem is centrally located in NC, near Greensboro and High Point, and about 1.5 hours from Charlotte or Raleigh, NC.",
    title: "Falco berigora (Brown Falcon)",
    author: "FShelton",
    thumbnail: "",

    comments: "Greensboro is in the approximate geographic center of North Carolina in Guilford County. While there are few rarities here, it is a good area in which to see nearly all of the typical southeastern bird species. Birds have been well documented in the county since the late 1930s by an active local bird club. I am a retired educator, an amateur naturalist, and a wildlife photographer interested in birds, butterflies, dragonflies, wildflowers, and other wildlife of the area. My wife and I enjoy showing visitors our little corner of the world."
  },
  {
    initial: "J",
   lastName: "Musike",
    area: "Worton",
   state: "MD",
    available: "Anytime",
    language: "English, Pirate",
    description: "I am not a professional bird guide but run a professional charter sailboat. I think bird watchers would really enjoy both. We see ospreys, eagles, herons, egrets, and a host of other birds, both water and land, migrating and resident. You can find my bio and rates at www.experiencesail.com This is a great way to view wildlife and spend time with family and friends.",
    title: "Lichenostomus unicolor (White-gaped Honeyeater)",
    author: "JDorothy",
    thumbnail: "",

    comments: "Places within two hours: Chesapeake Bay, Atlantic Ocean, Bombay NWR, Blackwater NWR, Pickering Creek Audubon Center, Jean Ellen dePont Shehan Audubon Sancturay, Adkins Arboretum and Tuckahoe State Park. Will gladly respond to email."
  },
];

db.Birder
  .remove({})
  .then(() => db.Birder.collection.insertMany(birdSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
