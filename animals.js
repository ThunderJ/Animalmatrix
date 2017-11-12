function engAnimals() {
    a = ["aardvark", "aardwolf", "alligator", "albatross", "alpaca", "anaconda", "angelfish", "ant", "anteater", "antelope", "ape"];
    b = ["babirusa", "baboon", "badger", "bandicoot", "banteng", "barbet", "basilisk", "bat", "bear", "beaver", "bee", "bernard", "bonobo", "bison", "bittern", "boa", "bobcat", "bongo", "budgie", "buldog", "bunny", "buzzard", "boxer"];
    c = ["camel", "capybara", "caracal", "cardinal", "carp", "caterpillar", "catfish", "cavy", "centipede", "chameleon", "chamois", "cheetah", "chicken", "chimaera", "chimpanzee", "chinchilla", "chipmunk", "cicada", "civet", "clam", "coati", "cobra", "cocatiel", "cockatoo", "cockroach", "coot", "cougar", "cow", "coyote", "coypu", "crab", "cricket", "crocodile", "crow", "cuckoo", "culpeo", "curlew", "cuscus", "cuttlefish"];
    d = ["dalmatian", "dartfish", "deer", "degu", "dhole", "dibbler", "dingo", "dinosaur", "dodo", "doberman", "dog", "dolphin", "donkey", "dove", "dragonfly", "duck"];
    e = ["eagle", "echidna",  "eel", "egret", "eider", "elephant", "elk", "emu", "ermine"];
    f = ["falcon", "ferret", "finch", "flamingo", "flea", "fly", "fossa", "fox", "frigatebird", "frog"];
    g = ["gannet", "gaur", "gazelle", "gecko", "gerbil", "gibbon", "giraffe", "gnu", "goat", "goose", "gopher", "goral", "gorilla", "grasshopper", "grebe", "grison", "grizzly", "groundhog", "guanaco", "gull", "gundi"];
    h = ["hamster", "hartebeest", "hawk", "hedgehog", "heron", "hippopotamus", "honeyeater", "hornbill", "hornet", "horse", "hoverfly", "hummingbird", "hutia", "hyena", "hyrax"];
    i = ["ibex", "ibis", "icterid", "iguana", "impala"];
    j = ["jacana", "jack", "jackal", "jaguar", "jaguarundi", "jay", "jellyfish", "jerboa"];
    k = ["kangaroo", "kerodon", "kestrel", "kiwi", "koala", "kodkod", "koi", "kowari", "kudu", "kultarr"];
    l = ["ladybug", "lamb", "lamprey", "lapwing", "leech", "lemming", "lemur", "leopard", "liger", "lion", "lionfish", "lizard", "llama", "lobster", "longspur", "loon", "loris", "lovebird", "lynx", "lyrebird"];
    m = ["macaque", "macaw", "mallard", "mamba", "mammoth", "manakin", "manatee", "mandrill", "mantis", "mara", "margay", "markhor", "marmot", "marten", "mastiff", "mastodon", "meerkat", "millipede", "mink", "minnow", "mockingbird", "mole", "mongoose", "moose", "mosquito", "moth", "motmot", "mouse", "muskrat"];
    n = ["narwhal", "nautilus", "needlefish", "newt", "nighthawk", "numbat", "nuthatch", "nutria"];
    o = ["ocelot", "octopus", "okapi", "olingo", "onager", "opossum", "orangutan", "orca", "oriole", "oryx", "osprey", "ostrich", "otter", "ovenbird", "owl", "oyster"];
    p = ["paca", "panda", "pangolin", "panther", "parrot", "peacock", "peafowl", "peccary", "pelican", "penguin", "pheasant", "pig", "pidgeon", "pika", "piranha", "platypus", "plover", "pogona", "pony", "porcupine", "porpoise", "possum", "potto", "prawn", "pudu", "puffin", "puma", "python"];
    q = ["quagga", "quail", "quetzal", "quokka", "quoll"];
    r = ["rabbit", "raccoon", "rail", "rat", "rattlesnake", "raven", "reindeer", "rhea", "rhinoceros", "ringtail", "roadrunner", "robin", "rockfish", "roller", "rook"];
    s = ["sailfish", "salamander", "salmon", "sawfish", "scorpion", "seadragon", "seahorse", "seal", "serval", "shark", "sheep", "shelduck", "shoebill", "shrew", "shrimp", "skate", "skimmer", "skink", "skunk", "sloth", "slug", "snail", "snipe", "solenodon", "songbird", "sparrow", "spider", "sponge", "sprat", "squid", "squirrel", "starfish", "stingray", "stoat", "stonefish", "stork", "sturgeon", "sunbird", "swallow", "swamphen", "swan", "swordfish"];
    t = ["takin", "tamandua", "tamarin", "tanager", "tapir", "tarantula", "tarsier", "tayra", "tenrec", "termite", "tern", "thornbill", "thrasher", "tiger", "tit", "toad", "toadfish", "tortoise", "toucan", "treeshrew", "t-rex", "trout", "trumpeter", "tuatara", "tuna", "turaco", "turkey", "turtle"];
    u = ["urchin"];
    v = ["vanga", "vanquita", "vicuna", "viper", "viscacha", "vole", "vulture"];
    w = ["wader", "wagtail", "wallaby", "walleye", "walrus", "wapiti", "warbler", "warthog", "wasp", "waxwing", "weasel", "weaver", "whale", "whistler", "whydah", "wigeon", "wildcat", "wildebeest", "wolf", "wolverine", "wombat", "woodchuck", "woodcock", "woodpecker", "woodswallow", "worm", "wren"];
    x = ["xenopoecilus", "xenops", "xerus"];
    y = ["yak", "yapok", "yellowjacket"];
    z = ["zebra", "zebu"];
    //Firstname. If chosen, then genLName does not apply
    genFName = ["african-", "american-", "asian-", "australian-", "bald-", "bronto-", "croco-", "dragon-", "electrical-", "elephant-", "european-", "fish-", "flying-", "forest-", "giant-", "horn-", "horse-", "human-", "king-", "komodo-", "lake-", "lamb-", "land-", "lion-", "mega-", "miniature-", "night-", "oceanic-", "ordinary-", "pocket-", "poison-", "polar-", "prairie-", "proto-", "rhino-", "river-", "sea-", "snow-", "stego-", "sword-", "tasmanian-", "tyrant-"];
    //Lastname. Same as before, but vice-versa
    genLName = ["-beetle", "-bird", "-butterfly", "-cat", "-calf", "-cattle", "-dog", "-dragon", "-eagle", "-fish", "-frog", "-goat", "-insect", "-kitten", "-lizard", "-monkey", "-pig", "-puppy", "-raptor", "-ray", "-rex", "-saur", "-snake", "-spaniel", "-terrier", "-titan", "-whale"];
}engAnimals()

function estAnimals() {
     a = ["ahven", "antiloop", "ahv", "alligaator", "albatross", "alpaka", "angerjas", "ämblik"];
     b = ["bonobo", "boxer", "buldog", "berhardiin"];
     c = ["kala", "kilpkonn", "karakal", "krokodill", "kakaduu", "kotkas", "kobras", "kurg", "kägu", "kana", "krevett", "karu", "kärbes", "kiivi", "kaamel", "küülik", "känguru", "kaheksajalg"];
     d = ["dalmaatsiakoer", "dobermann", "delfiin"];
     e = ["elevant", "eesel", "emu"];
     f = ["faasan", "flamingo", "forell"];
     g = ["gepard", "gaur", "geko", "gibon", "gorilla", "grisli"];
     h = ["hamster", "haug", "harakas", "herilane", "hunt", "hirv", "huski", "hüaan", "hiir", "hobune", "heeringas", "hai", "homaar", "hüljes"];
     i = ["ilves", "iguaan"];
     j = ["jaaguar", "jakk", "jõehobu", "jänes", "jaanalind", "jääkaru", "jõesiga"];
     k = ["kala", "kaelkirjak", "kapibaara", "kajakas", "kilpkonn", "kalkun", "karakal", "krokodill", "kakaduu", "kilu", "kotkas", "kobras", "kurg", "kägu", "kana", "krevett", "karu", "kärbes", "kiivi", "kaamel", "küülik", "känguru", "kährik", "kaheksajalg"];
     l = ["lõhe", "lõvi", "lehm", "lammas", "labrador", "lambakoer", "luik", "laama", "leemur", "leevike", "leopard", "lepatriinu"];
     m = ["makaak", "metskits", "mardikas", "mammut", "mastiff", "mesilane", "merisiga", "mutt", "manul", "mink", "metssiga", "mäger", "merilõvi"];
     n = ["nugis", "nirk", "nastik", "nuuskur", "ninasarvik", "nokkloom", "naarits"];
     o = ["orav", "ööbik", "otselot", "opossum", "okassiga", "öökull", "orangutan"];
     p = ["punailves", "paavian", "papagoi", "part", "põder", "pesukaru", "pühvel", "panda", "pääsuke", "pull", "paabulind", "puudel", "pelikan", "panter", "piison", "puma", "punahirv"];
     q = ["kala", "kilpkonn", "karakal", "krokodill", "kakaduu", "kotkas", "kobras", "kurg", "kägu", "kana", "krevett", "karu", "kärbes", "kiivi", "kaamel", "küülik", "känguru", "kaheksajalg"];
     r = ["räim", "rähn", "rott", "ronk", "raisakotkas", "rohutirts"];
     s = ["siil", "silk", "surikaat", "sisalik", "sipelgas", "saarmas", "skunks", "sebra", "šaakal", "šimpans", "suslik", "sääsk", "sprott"];
     t = ["tiiger", "tigu", "tuvi", "tuukan", "tihane"];
     u = ["uruhiir", "uluk", "uss"];
     v = ["vares", "valgekurg", "vombat", "varaan", "vutt", "varblane", "viu", "valgejänes", "vähk"];
     w = ["vares", "valgekurg", "vombat", "varaan", "vutt", "varblane", "viu", "valgejänes", "vähk"];
     x = ["kala", "kaelkirjak", "kapibaara", "kajakas", "kilpkonn", "kalkun", "karakal", "krokodill", "kakaduu", "kilu", "kotkas", "kobras", "kurg", "kägu", "kana", "krevett", "karu", "kärbes", "kiivi", "kaamel", "küülik", "känguru", "kährik", "kaheksajalg"];
     y = ["jaaguar", "jakk", "jõehobu", "jänes", "jaanalind", "jääkaru", "jõesiga"];
     z = ["siil", "silk", "surikaat", "sisalik", "sipelgas", "saarmas", "skunks", "sebra", "šaakal", "šimpans", "suslik", "sääsk", "sprott"];
     genFName = ["aafrika-", "jõe-", "kala-", "meri-", "viker-", "lamba-", "järve-", "lõvi-", "kroko-", "mets-", "ahv-", "elevant-", "lend-", "nahk-", "kuning-", "elektri-", "inim-", "hobu-", "hiid-", "ookeani-", "liblik-", "okas-", "harilik-", "mõõk-", "vihma-"];
     genLName = ["-saurus", "-draakon", "-kala", "-koer", "-kotkas", "-sarvik", "-kass", "-vaal", "-siga", "-kits", "-terjer", "-tirts", "-veis", "-terjer", "-spaniel", "-konn", "-madu", "-kakk", "-vasikas", "-kutsikas"];
}