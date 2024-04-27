import React from 'react';
import MyNavbar from '../Navbar';
import '../css/ZodiacPlay.css';



const ZodiacPlay = () => {
    class Star {
        constructor(name, distance, constellation, description) {
            this.name = name;
            this.distance = distance;
            this.constellation = constellation;
            this.description = description;
            stars.push(this); // populates main object array
        }
    }
    
    const stars = []; // main object array from class constructor
    
    document.addEventListener('DOMContentLoaded', getSVGs);
    
    // array of star names, light year distances and constellations
    const names_distances = [
        ["sirius", 8.6, "canis major"],
        ["canopus", 310, "carina"],
        ["rigil kentaurus", 4.3, "centaurus"],
        ["arcturus", 37, "boötis"],
        ["vega", 25, "lyra"],
        ["capella", 43, "Auriga"],
        ["rigel", 860, "orion"],
        ["procyon", 11, "canis major"],
        ["achernar", 139, "eridanus"],
        ["betelgeuse", 700, "orion"],
        ["hadar", 390, "centaurus"],
        ["altair", 17, "aquila"],
        ["acrux", 320, "crux"],
        ["aldebaran", 65, "taurus"],
        ["antares", 550, "scorpius"],
        ["spica", 250, "virgo"],
        ["pollux", 34, "gemini"],
        ["fomalhaut", 25, "piscis austrinus"],
        ["deneb", 2615, "cygnus"],
        ["mimosa", 280, "crux"],
        ["regulus", 79, "leo"],
        ["adhara", 430, "canis major"],
        ["shaula", 570, "scorpius"],
        ["castor", 52, "gemini"],
        ["gacrux", 88, "crux"],
        ["bellatrix", 240, "orion"],
        ["elnath", 130, "taurus"],
        ["miaplacidus", 110, "carina"],
        ["alnilam", 2000, "orion"],
        ["regor", 840, "vela"],
        ["alnair", 100, "grus"],
        ["alioth", 81, "ursa major"],
        ["alnitak", 820, "orion"],
        ["dubhe", 120, "ursa major"],
        ["mirfak", 590, "perseus"],
        ["wezen", 1800,"canis major"],
        ["sargas", 270, "scorpius"],
        ["kaus australis", 140, "sagittarius"],
        ["avior", 630, "carina"],
        ["alkaid", 100, "ursa major"],
        ["menkalinan", 100, "auriga"],
        ["atria", 420, "tiangulum australe"],
        ["alhena", 100, "gemini"],
        ["alpha pavonis", 180, "pavo"],
        ["alsephina", 80, "vela"],
        ["mirzam", 500, "canis major"],
        ["alphard", 180, "hydra"],
        ["polaris", 430, "ursa minor"],
        ["hamal", 66, "aries"],
        ["algieba", 130, "leo"],
        ["diphda", 96, "cetus"],
        ["mizar", 78, "ursa major"],
        ["nunki", 220, "sagittarius"],
        ["menkent", 61, "centaurus"],
        ["mirach", 200, "andromeda"],
        ["alpheratz", 97, "andromeda"],
        ["rasalhague", 47, "ophiuchus"],
        ["kochab", 130, "ursa minor"],
        ["saiph", 720, "orion"],
        ["denebola", 36, "leo"],
        ["algol", 93, "perseus"],
        ["tiaki", 170, "grus"],
        ["muhlifain", 130, "centaurus"],
        ["aspidiske", 690, "carina"],
        ["suhail", 570, "vela"],
        ["alphecca", 75, "corona borealis"],
        ["mintaka", 900, "orion"],
        ["sadr", 1500, "cygnus"],
        ["eltanin", 150, "draco"],
        ["schedar", 230, "cassiopeia"],
        ["naos", 1080, "puppis"],
        ["almach", 350, "andromeda"],
        ["caph", 54, "cassiopeia"],
        ["izar", 202, "boötes"],
        ["alpha lupi", 550, "lupis"],
        ["epsilon centauri", 380, "centaurus"],
        ["dschubba", 400, "scorpius"],
        ["larawag", 65, "scorpius"],
        ["eta centauri", 310, "centaurus"],
        ["merak", 79, "ursa major"],
        ["ankaa", 77, "phoenix"],
        ["girtab", 460, "scorpius"],
        ["enif", 670, "pegasus"],
        ["scheat", 200, "pegasus"],
        ["sabik", 88, "ophiuchus"],
        ["phecda", 84, "ursa major"],
        ["aludra", 2000, "canis major"],
        ["markeb", 540, "vela"],
        ["navi", 610, "cassiopeia"],
        ["markab", 140, "pegasus"],
        ["aljanah", 72, "cygnus"],
        ["acrab", 404, "scorpius"],
        ["delta centauri", 410, "centaurus"],
        ["menkar", 250, "cetus"],
        ["zosma", 58, "leo"],
        ["zeta ophiuchi", 366, "ophiuchus"],
        ["arneb", 2200, "lepus"],
        ["gienah", 154, "corvus"],
        ["ascella", 88, "sagittarius"],
        ["kraz", 146, "corvus"]
    
    ];
    
    const descriptions = [
        "Sirius is the brightest star in the night sky. Its name is derived from the Greek word Σείριος Seirios meaning \"glowing\". Sirius is almost twice as bright as Canopus, the next brightest star. Sirius is also known as <em>\"the dog star\"</em>.",
    
        "Canopus, AKA Alpha Carinae, is the brightest star in the southern constellation of Carina and the second-brightest star in the night sky.",
    
        "Rigil Kentaurus is in a triple star system, consisting of: itself, Toliman and Proxima Centauri. In the constellation Centaurus, it contitutes one of the front hooves (Hadar being the other).",
    
        "Arcturus, (AKA Alpha Boötis) is the brightest star in the constellation of Boötes, the fourth-brightest in the night sky.",
    
        "Vega is the brightest star in the northern constellation of Lyra. It has the Bayer designation α Lyrae, which is Latinised to Alpha Lyrae and abbreviated Alpha Lyr or α Lyr. This star is relatively close to us, at only 25 light-years from the Sun, and together with Arcturus and Sirius, one of the most luminous stars in the Sun's neighborhood. It is the fifth-brightest star in the night sky.",
    
        "Capella, (Latinized to Alpha Aurigae, abbreviated <abbr>Alpha Aur</abbr>), is the brightest star in the constellation of Auriga, the sixth-brightest star in the night sky and the third-brightest in the northern celestial hemisphere. A prominent object in the northern winter sky. Although it appears to be a single star to the naked eye, Capella is actually a quadruple star system organized in two binary pairs.",
    
        "Rigel, (Beta Orionis) is a blue supergiant star in the constellation of Orion, approximately 860 light-years from Earth. Rigel is calculated to be anywhere from 61,500 to 363,000 times as luminous as the Sun, and 18 to 24 times as massive.",
    
        "Procyon is the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky. It is situated at a distance of just 11 light-years away and is therefore one of Earth's nearest stellar neighbours.",
    
        "Achernar is the primary (or 'A') component of the binary system designated Alpha Eridani, which is the brightest star in the constellation of Eridanus, and the ninth-brightest in the night sky. Of the ten apparent brightest stars in the night-time sky, Alpha Eridani is the hottest and bluest in color.",
    
        "Betelgeuse is usually the tenth-brightest star in the night sky and after Rigel, the second-brightest in the constellation of Orion. Classified as a red supergiant of spectral type M1-2, Betelgeuse is one of the largest stars visible to the naked eye. Calculations of Betelgeuse’s mass range between 10 to 20 times that of the Sun.",
    
        "Beta Centauri, officially called Hadar, is a triple star system in the southern constellation of Centaurus. It is the second-brightest object in Centaurus and one of the brightest stars in the night sky.",
    
        "Atair (Latinised to Alpha Aquilae), is the brightest star in the constellation of Aquila. It is currently in the G-cloud—a nearby interstellar cloud, an accumulation of gas and dust. Altair is one of the closest stars visible to the naked eye.",
    
        "Acrux is a multiple star system around 320 light-years from the Sun in the constellation of Crux and part of the asterism known as the Southern Cross. To the naked eye Acrux appears as a single star, but it is actually a multiple star system containing six components.",
    
        "Aldebaran (Alpha Tauri), is a giant star in the zodiac constellation Taurus. Aldebaran is believed to host a planet several times the mass of Jupiter, named \"Aldebaran b\". It is a red giant, cooler than the sun but about 44 times the size. It is the brightest star in Taurus.",
    
        "Antares (Latinised to Alpha Scorpii, <abbr>Alpha Sco</abbr>, <abbr>α Sco</abbr>), is the brightest object in the constellation of Scorpius. Often referred to as <em>\"the heart of the scorpion\"</em>, Antares is flanked by Sigma Scorpii and Tau Scorpii, near the center of the constellation. Antares is a red supergiant, one of the largest stars visible to the naked eye.",
    
        "Spica (Alpha Virginis), is the brightest object in the constellation Virgo. Spica, is part of the asterisms of the <em>\"Spring Triangle\"</em> and the <em>\"Great Diamond.\"</em>",
    
        "Pollux (Beta Geminorum, abbreviated <abbr>Beta Gem</abbr>, <abbr>β Gem</abbr>), is an orange-hued evolved giant star about 34 light-years from the Sun in the constellation of Gemini. It is the brightest star in Gemini and also the closest. Castor and Pollux were the twin sons of Zeus and Leda in Greek and Roman mythology.",
    
        "Fomalhaut is the brightest star in the constellation of Piscis Austrinus, known as the <em>\"Southern Fish\"</em>. Piscis Austrinus is a constellation in the southern celestial hemisphere. Not to be confused with zodiacal constellation Pisces, which represents a pair of fishes in the northern celestial hemisphere.",
    
        "Deneb is a first-magnitude star in the constellation of Cygnus, <em>\"the swan\"</em>. Deneb is one of the vertices of the asterisms known as the  <strong>\"Summer Triangle\"</strong> and the  <strong>\"Northern Cross\"</strong>, of which it is the top (or head) of. It is the brightest star in Cygnus.",
    
        "Mimosa (Beta Crucis), is the second-brightest object in the constellation of Crux, after Acrux (Alpha Crucis), and the 20th-brightest star in the night sky. It forms part of the prominent asterism called the <strong>\"Southern Cross\"</strong>. Mimosa is thought to be a binary star or a possibly even a triple star system.",
    
        "Regulus (Alpha Leonis), is the brightest object in the constellation Leo and is also part of the asterism known as <em>\"the sickle\".</em>",
    
        "Epsilon Canis Majoris is a binary star with blue or blueish-white hue and the second-brightest object in the constellation of Canis Major.",
    
        "Lambda Scorpii (Latinised from λ Scorpii, abbreviated Lambda Sco, λ Sco), formally named Shaula the second-brightest star system in the constellation of Scorpius. It taks it's name <em>\"Shaula\"</em> from arabic, meaning <em>\"raised tail\"</em> as it's situated at the tail of the scorpion.",
    
        "Castor is the second-brightest object in the zodiac constellation of Gemini. Castor and Pollux are the twin stars that give the constellation Gemini (meaning twins in Latin) its name, Castor and Pollux were the sons of Zeus and Leda in Greek and Roman mythology.",
    
        "Gacrux (Gamma Crucis) is the nearest class M giant star to the Sun. Gacrux is represented in the flags of Australia, New Zealand and Papua New Guinea as one of five stars which comprise the asterism of the Southern Cross.",
    
        "Bellatrix (Gamma Orionis), is the third-brightest star in the constellation of Orion and constitutes the top right position of the main constellation, 5° west of the red supergiant, Betelgeuse. The word <em>\"Bellatrix\"</em> means <em>\"female warrior\"</em> in latin.",
    
        "Beta Tauri, officially named Elnath, is the second-brightest star located in the constellation of Taurus. It constitutues one of horns of the bull of Taurus.",
    
        "Beta Carinae (Beta Carr), officially named Miaplacidus, is the second-brightest star in the constellation of Carina.",
    
        "Alnilam (Latinized to Epsilon Orionis) is a large blue supergiant star some 2,000 light-years distant in the constellation of Orion. It is estimated to be 275,000 to 832,000 times as luminous as the Sun, and 30 to 64.5 times as massive. It's positioned as the middle star in the 3 stars of <em>Orions Belt</em>",
    
        "Gamma Velorum (AKA Regor) is in the constellation Vela. It's also been refered to as the <em>Spectral Gem of Southern Skies.</em> because of the bright emission lines and dark absorption lines it creates.",
    
        "Alpha Gruis, AKA alnair, is a single star in the southern constellation of Grus. It takes it's name from arabic, meanin <em>the bright one</em>.",
    
        "Alioth (Ursae Majoris) is the brightest star in the constellation of Ursa Major and is part of the asterism of <em>the big dipper</em>: of which; it's the star in the handle closest to the bowl.",
    
        "Alnitak (Zeta Orionis) is in the constellation of Orion. It is one of the three main stars of Orion's Belt (the smallest & on the left) along with Alnilam and Mintaka.",
    
        "Alpha Ursae Majoris (Dubhe) is the second-brightest object in the constellation of Ursa Major. Dubhe also forms part of asterism <em>the Big Dipper</em> (AKA the Plough), and is the northern of the two stars of Ursa Major which point towards Polaris, the North Star.",
    
        "Alpha Persei, formally named Mirfak, is the brightest star in the northern constellation of Perseus. Alpha Persei lies in the midst of a cluster of stars named the <em>Melotte 20</em>",
    
        "Delta Canis Majoris, officially named Wezen, is a star in the constellation of Canis Major. It is a yellow-white F-type supergiant. Since 1943, the spectrum of this star has served as one of the stable anchor points by which other stars are classified.",
    
        "Theta Scorpii (AKA Saras) is a binary star in the southern zodiac constellation of Scorpius. It's readily visible to the naked eye and one of the brightest stars in the night sky.",
    
        "Epsilon Sagittarii, formally named Kaus Australis, takes its traditional name, which derived from the Arabic word for 'bow' and Latin \"austrālis\" meaning southern.",
    
        "Epsilon Carinae (ε Carinae, abbreviated Epsilon Car), officially named Avior is a binary star in the southern constellation of Carina. ",
    
        "Eta Ursae Majoris , formally named Alkaid, is a star in the constellation of Ursa Major. It is the most eastern (leftmost) star in the Big Dipper (or Plough) asterism. It is the third-brightest star in the constellation of Ursa Major.",
    
        "Beta Aurigae, officially named Menkalinan, is in the northern constellation of Auriga. It's the second-brightest member of the constellation of Auriga after Capella.",
    
        "Alpha Trianguli Australis, officially named Atria, is the brightest star in the southern constellation of Triangulum Australe, forming an apex of a triangle with Beta Trianguli Australis and Gamma Trianguli Australis that gives the constellation its name (Latin for southern triangle).",
    
        "Gamma Geminorum,, formally named Alhena, is the third-brightest object in the constellation of Gemini.",
    
        "Alpha Pavonis (α Pavonis, abbreviated Alpha Pav, α Pav), formally named Peacock, is a binary star in the southern constellation of Pavo, near the border with the constellation Telescopium.",
    
        "Delta Velorum (δ Velorum, abbreviated Delta Vel, δ Vel) is a triple star system in the southern constellation of Vela, near the border with Carina.",
    
        "Beta Canis Majoris (β Canis Majoris, abbreviated Beta CMa), also named Mirzam,[13] is a star in the southern constellation of Canis Major, the \"Great Dog\"",
    
        "Alphard, designated Alpha Hydrae (α Hydrae, abbreviated Alpha Hya, α Hya), is the brightest star in the constellation of Hydra. It is a single giant star, cooler than the sun but larger and more luminous.",
    
        "Polaris, designated α Ursae Minoris, commonly the <strong><em>North Star</em></strong> or Pole Star, is the brightest star in the constellation of Ursa Minor. It is very close to the north celestial pole, making it the current northern pole star.",
    
        "Hamal, designation Alpha Arietis, is the brightest star in the northern zodiacal constellation of Aries. It is a giant star that may host an orbiting planet with a mass greater than Jupiter.",
    
        "Gamma Leonis (γ Leonis, abbreviated Gamma Leo, γ Leo), also named Algieba, is a binary star system in the constellation of Leo. In 2009, a planetary companion around the primary was announced. Algieba is part of a collective of stars know as 'the Sickle', which is an asterism that marks the head of Leo.",
    
        "Beta Ceti, also named Diphda is the brightest star in the constellation of Cetus. Although designated 'beta', it is actually brighter than the 'alpha' star in the constellation (Alpha Ceti) and is an orange giant.",
    
        "Mizar star in the handle of the Big Dipper asterisma and is in the constellation of Ursa Major and is part of the Ursa Major Moving Group.",
    
        "Sigma Sagittarii (σ Sagittarii, abbreviated Sigma Sgr, σ Sgr), formally named Nunki, is the second-brightest star in the constellation of Sagittarius. It has an apparent magnitude of +2.05, making it readily visible to the naked eye.",
    
        "Theta Centauri (θ Centauri, abbreviated Theta Cen, θ Cen), officially named Menkent is a star in the southern constellation of Centaurus, the centaur. With an apparent visual magnitude of +2.06, it is the fourth-brightest member of the constellation.",
    
        "Beta Andromedae (β Andromedae, abbreviated Beta And, β And), officially named Mirach is a prominent star in the northern constellation of Andromeda. It is northeast of the Great Square of Pegasus. It is commonly used by stargazers to find the Andromeda Galaxy.",
    
        "Alpha Andromedae (α Andromedae, abbreviated Alpha And or α And), officially named Alpheratz, is located 97 light-years from the Sun and is the brightest star in the constellation of Andromeda. Located immediately northeast of the constellation of Pegasus, it is the upper left star of the Great Square of Pegasus.",
    
        "Alpha Ophiuchi (α Ophiuchi, abbreviated Alpha Oph, α Oph), also named Rasalhague is a binary star and the brightest star in the constellation of Ophiuchus. The name <em>Rasalhague</em> comes from the arabic meaning <em>head of the serpent bearer</em>.",
    
        "Beta Ursae Minoris, formally named Kochab is the brightest star in the bowl of the Little Dipper asterism (which is part of the constellation of Ursa Minor). It's thought to have a planetary companion around 6 times more massive as Jupiter with an orbit of 522 days.",
    
        "Saiph, designation Kappa Orionis, is the sixth-brightest star in the constellation of Orion and of the four bright stars that compose Orion's main quadrangle.",
    
        "Denebola, designated Beta Leonis (beta leo), is the second-brightest star in the zodiac constellation of Leo. It's name is from the arabic meaning <em>\"tail of the lion\"</em>.",
    
        "Algol, designated Beta Persei (β Persei, abbreviated Beta Per, β Per), known colloquially as <em>the Demon Star</em>. It's name is thouht to be derived from the arabic for <em>ghoul</em>.",
    
        "Beta Gruis, formally named Tiaki, is the second brightest star in the southern constellation of Grus. It's a red giant about 2 and a half times the mass of the Sun.",
    
        "Gamma Centauri (γ Cen, γ Centauri) is a star in the southern constellation Centaurus. It has the proper name Muhlifain.",
    
        "Iota Carinae, officially named Aspidiske, is a star in the southern circumpolar constellation of Carina with an apparent visual magnitude of 2.2. It's thouht tobe around 43 times the size of the Sun.",
    
        "Lambda Velorum, officially named Suhail, is a star in the southern constellation of Vela. With a mean apparent visual magnitude of 2.21, it's the third-brightest star in its constellation.",
    
        "Alpha Coronae Borealis, officially named Alphecca is an eclipsing binary star in the constellation of Corona Borealis.",
    
        "Mintaka, AKA Delta Orionis, is a star in the constellation of Orion. Together with Alnitak (Zeta Orionis) and Alnilam (Epsilon Orionis), the three stars form Orion's Belt.",
    
        "Gamma Cygni, officially named Sadr is a star in the northern constellation of Cygnus, forming the intersection of an asterism of five stars called the Northern Cross. Compared to the Sun this is an enormous star, with 12 times the Sun's mass and about 150 times the Sun's radius and is emitting over 33,000 times as much energy.",
    
        "Gamma Draconis, formally named Eltanin, is a star in the northern constellation of Draco. Since 1943, the spectrum of this star has served as one of the stable anchor points by which other stars are classified.",
    
        "Alpha Cassiopeiae (Alpha Cas, α Cas), also named Schedar, is a second magnitude star in the constellation of Cassiopeia. It derives from the Arabic word meaning \"breast\", in relation to its relative position in the heart of the mythological queen Cassiopeia.",
    
        "Zeta Puppis (ζ Puppis, abbreviated Zeta Pup, ζ Pup), formally named Naos, is a star in the constellation of Puppis.  It is a blue supergiant, one of the most luminous stars in the Milky Way. It is esitmated to be over 10,000 times brighter than the Sun.",
    
        "Gamma Andromedae (γ Andromedae, abbreviated Gamma And, γ And) is the third-brightest point of light in the constellation of Andromeda.",
    
        "Beta Cassiopeiae (Beta Cas), officially named Caph, is a Delta Scuti variable star in the constellation of Cassiopeia. It is a giant star belonging to the spectral class F2.",
    
        "Epsilon Boötis, officially named Izar, is a binary star in the northern constellation of Boötes.",
    
        "Alpha Lupi is a blue giant star, and the brightest star in the southern constellation of Lupus.",
    
        "Epsilon Centauri (ε Cen, ε Centauri) is a star in the southern constellation of Centaurus. It is one of the brightest stars in the constellation. Its a massive star with nearly 12 times the mass of the Sun and a spectrum matches a stellar classification of B1 III",
    
        "Delta Scorpii (Latinised from δ Scorpii, abbreviated Delta Sco, δ Sco) is a star in the constellation of Scorpius. It's also known as Dschubba.",
    
        "Epsilon Scorpii (ε Scorpii, abbreviated Eps Sco, ε Sco), formally named Larawag, is a star in the southern zodiac constellation of Scorpius. It's fifth-brightest member of the constellation.",
    
        "Eta Centauri, Latinized from η Centauri, is a star in the southern constellation of Centaurus. It is thought to have about 12 times the mass of the Sun.",
    
        "Beta Ursae Majoris, formally named Merak, is a star in the northern circumpolar constellation of Ursa Major. It is more familiar to northern hemisphere observers as one of the \"pointer stars\" in the Big Dipper, or the Plough (UK), which is a prominent asterism of stars that forms part of the larger constellation.",
    
        "Alpha Phoenicis (α Phoenicis, abbreviated Alpha Phe or α Phe), formally named Ankaa, is the brightest star in the constellation of Phoenix. It's thought to have derived it's name from the arabic word for phoenix.",
    
        "Kappa Scorpii, Latinized from κ Scorpii, (AKA Girtab) is a star system in the constellation of Scorpius. With an apparent visual magnitude of 2.4, this star system is readily visible to the naked eye.",
    
        "Epsilon Pegasi, formally named Enif, is the brightest star in the northern constellation of Pegasus. It is thougt to have derived it's traditional name from the Arabic word for 'nose', due to its position in Pegasus.",
    
        "Beta Pegasi (β Pegasi, abbreviated Beta Peg, β Peg), formally named Scheat, is a red giant star and the second-brightest star in the constellation of Pegasus. It forms the upper right corner of the Great Square of Pegasus, a prominent rectangular asterism.",
    
        "Eta Ophiuchi (η Ophiuchi, abbreviated Eta Oph, η Oph), AKA Sabik, is a binary star in the constellation of Ophiuchus.",
    
        "Gamma Ursae Majoris, formally named Phecda, is a star in the constellation of Ursa Major. Since 1943, the spectrum of this star has served as one of the stable anchor points by which other stars are classified.",
    
        "Eta Canis Majoris, also named Aludra, is a star in the constellation of Canis Major. Since 1943, the spectrum of this star has served as one of the stable anchor points by which other stars are classified.",
    
        "Kappa Velorum, formally named Markeb is a binary star system in the southern constellation of Vela. The two components are designated Kappa Velorum A and B.",
    
        "Gamma Cassiopeiae, Latinized from γ Cassiopeiae, is a star at the center of the distinctive \"W\" asterism in the northern circumpolar constellation of Cassiopeia.",
    
        "Alpha Pegasi (α Pegasi, abbreviated Alpha Peg, α Peg), formally named Markab, is the third-brightest star in the constellation of Pegasus and one of the four stars in the asterism known as the Great Square of Pegasus.",
    
        "Epsilon Cygni (ε Cygni, abbreviated Epsilon Cyg, ε Cyg) is multiple star system in the constellation of Cygnus. With an apparent visual magnitude of 2.48, it is readily visible to the naked eye at night as one of the brighter members of Cygnus.",
    
        "Beta Scorpii (β Scorpii, abbreviated Beta Sco, β Sco) is a multiple star system in the southern zodiac constellation of Scorpius. It takes the traditional name of Acrab, from arabic - meaning <em>scorpion</em> but it has also been known as <em>Graffias</em> - Italian for <em>\"claws\"</em>.",
    
        "Delta Centauri, Latinized from δ Centauri, is a star in the southern constellation of Centaurus. It is readily visible to the naked eye.",
    
        "Alpha Ceti, officially named Menkar, is the second-brightest star in the constellation of Cetus. It is a cool luminous red giant about 250 light years away.",
    
        "Delta Leonis (δ Leonis, abbreviated Delta Leo, δ Leo), also named Zosma, is a star in the zodiac constellation of Leo.",
    
        "Zeta Ophiuchi (ζ Oph, ζ Ophiuchi) is a star located in the constellation of Ophiuchus. It has an apparent visual magnitude of 2.57, making it the third-brightest star in the constellation. Its an enormous star with more than 19 times the Sun's mass and 8 times its radius.",
    
        "Alpha Leporis (α Leporis, abbreviated Alpha Lep, α Lep), formally named Arneb, is the brightest star in the constellation of Lepus.",
    
        "Gamma Corvi (γ Corvi, abbreviated Gamma Crv, γ Crv) is a binary star and the brightest star in the southern constellation of Corvus, having an apparent visual magnitude of 2.59.",
    
        "Zeta Sagittarii (ζ Sagittarii, abbreviated Zeta Sgr, ζ Sgr) is a triple star system and the third-brightest star in the constellation of Sagittarius.",
    
        "Beta Corvi (β Corvi, abbreviated Beta Crv, β Crv), officially named Kraz, is the second-brightest star in the southern constellation of Corvus. It's almost 4 times the mass of the Sun."
    ];
    
    // creates new objects for each star
    names_distances.forEach( (star, index) => {
        const newStarObject = new Star(star[0], star[1], star[2], descriptions[index]);
    });
    
    function populateDom() {
        let output = '';
    
        stars.forEach( (star) => {
    
            output += `
            <details class="star-details">
                <summary class="titles">${star.name}</summary>
                
                <div class="svg-container">
                </div>
                
                <div class="info">
                    <p>${star.description}</p>
                    <ul class="info-list">
                        <li>${star.distance} ly</li>
                        <li>${star.constellation}</li>
                    </ul>
                </div>
                
            </details>`;
    
        });
    
        document.body.innerHTML += output;
    
    } populateDom();
    
    
    function getSVGs() { // called on DOM Content loaded
    
        const svgContainers = document.querySelectorAll('.svg-container');
        const hosted_url = 'https://www.robinmartin.gq/external/100brighteststars/';
    
            stars.forEach( (star, index) => {
    
                let starName = star.name;
    
                if (starName.includes(' ') === true) {
                    
                    starName = starName.replace(' ', '_'); // replacing the spaces with underscores for URLs
                    
                }
    
                svgContainers[index].innerHTML = `
                <img src="${hosted_url}${starName}.svg" alt="star map of ${star.name} in ${star.constellation}" class="star-maps" />
                `;
           
            });
    }
    
  return (
    <div>
        <MyNavbar/>
        <header>
    <h1>The 100 brightess stars in the night sky</h1>
    <p>CodePen Challenge: 100 details/summary elements.</p>
</header>
        

</div>
  );
}

export default ZodiacPlay;


