//&nbsp; is used to give space
import axios from 'axios';
import '../../css/Zodiac.css';
import React, { useState, useEffect } from 'react';



export default function Zodiac() {
  function opencont(i){
    document.getElementById(i).style.display = "block";
    document.getElementById('intro').style.display = "none";
  }
  function closecont(i){
    document.getElementById(i).style.display = "none";
    document.getElementById('intro').style.display = "block";
  }

    return (
      <div>   
  <body>
      <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Dancing+Script" rel="stylesheet" />
<style type="text/css">
</style>
<center>
<div id="Wrapper">
<div id="ContantWrapper">
<div class="contant" id="intro">
<div class="header"><img src="https://us.123rf.com/450wm/peshkov/peshkov1712/peshkov171200058/91104218-creative-glowing-astrologic-zodiac-horoscope-backdrop-astrology-concept-3d-rendering-.jpg?ver=6" />
<center><br />
<span class="h1"><big>Zodiacs</big></span><br />
&nbsp;</center>
</div>

<div class="cont" style="height: 500px">
<div class="box fleft click" onclick="opencont('aquarius')" style="background: url('https://abload.de/img/aquariusf2jzf.jpg'); background-size: 100%;"><span>Aquarius</span></div>

<div class="box fright click" onclick="opencont('pisces')" style="background: url('https://abload.de/img/piscesmfk09.jpg'); background-size: 101%;"><span>Pisces</span></div>

<div class="box fleft click" onclick="opencont('aries')" style="background: url('https://abload.de/img/ariesypk4t.jpg'); background-size: 100%"><span>Aries</span></div>

<div class="box fright click" onclick="opencont('taurus')" style="background: url('https://abload.de/img/taurus4zj4r.jpg'); background-size: 112%; background-position: -30px"><span>Taurus</span></div>

<div class="box fleft click" onclick="opencont('gemini')" style="background: url('https://abload.de/img/geminiv4j2g.jpg'); background-size: 100% auto"><span>Gemini</span></div>

<div class="box fright click" onclick="opencont('cancer')" style="background: url('https://abload.de/img/cancer47km1.jpg'); background-size: 100% auto;"><span>Cancer</span></div>

<div class="box fleft click" onclick="opencont('leo')" style="background: url('https://abload.de/img/leoock24.jpg'); background-size: 115%; background-position: -30px"><span>Leo</span></div>

<div class="box fright click" onclick="opencont('virgo')" style="background: url('https://abload.de/img/virgorskbk.jpg'); background-size: 100% auto;"><span>Virgo</span></div>

<div class="box fleft click" onclick="opencont('libra')" style="background: url('https://abload.de/img/librakhkg6.jpg'); background-size: 100% auto"><span>Libra</span></div>

<div class="box fright click" onclick="opencont('scorpio')" style="background: url('https://abload.de/img/scorpiojaj36.jpg'); background-size: 100% auto;"><span>Scorpio</span></div>

<div class="box fleft click" onclick="opencont('sagittarius')" style="background: url('https://abload.de/img/saggitariusp5j6h.jpg'); background-size: 100% auto"><span>Sagittarius</span></div>

<div class="box fright click" onclick="opencont('capricorn')" style="background: url('https://abload.de/img/capricorn3wk5q.jpg'); background-size: 100%;"><span>Capricorn</span></div>
</div>
</div>

<div class="contant" id="cancer">
<div class="header ofWater"><img src="https://abload.de/img/cancer47km1.jpg" />
<center><span class="h1">Children of Water</span><br />
<br />
Cancer<br />
June 22 - July 22</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Tenacious<br />
highly imaginative<br />
loyal<br />
emotional<br />
sympathetic<br />
persuasive</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Moody<br />
pessimistic<br />
suspicious<br />
manipulative<br />
insecure</div>

<div class="box fleft"><span><strong>Cancer likes: </strong></span> Art<br />
home-based hobbies<br />
relaxing near or in water<br />
helping loved ones<br />
a good meal with friends</div>

<div class="box fright"><span><strong>Cancer dislikes: </strong></span> Strangers<br />
any criticism of Mom<br />
revealing of personal life</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Cancer: </strong></span><br />
Deeply intuitive and sentimental, Cancer can be one of the most challenging Zodiac signs to get to know. Cancer is very emotional and sensitive, and they care about family and home. Cancer is sympathetic and is very attached to the people who surround him. People born under the Cancer sign are very loyal and empathetic people, able to empathize with your pain and suffering.<br />
<br />
Because of the ruling planet the Moon, the many phases of its lunar cycle can deepen Cancers internal mysteries and create fleeting emotional patterns that the sensitive Cancer cannot control, especially when a child. This can show itself as mood swings, selfishness, manipulation and fits of rage. Cancer is quick to help others and avoid conflicts. One of his greatest strengths is persistent determination. Cancer doesn&#39;t have great ambitions, because they are happy and content to have a loving family and tranquil and harmonious home. They often take good care of their co-workers and treat them as family.</div>
</div>
<span class="menubtn" onclick="closecont('cancer')">back</span></div>

<div class="contant" id="scorpio">
<div class="header ofWater"><img src="https://abload.de/img/scorpiojaj36.jpg" />
<center><span class="h1">Children of Water</span><br />
<br />
Scorpio<br />
October 24 - November 22</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Resourceful<br />
brave<br />
passionate<br />
stubborn<br />
a true friend</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Distrusting<br />
jealous<br />
secretive<br />
violent</div>

<div class="box fleft"><span><strong>Scorpio likes: </strong></span> Truth<br />
facts<br />
being right<br />
longtime friends<br />
teasing<br />
a grand passion</div>

<div class="box fright"><span><strong>Scorpio dislikes: </strong></span> Dishonesty<br />
revealing secrets<br />
passive people</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Scorpio: </strong></span><br />
Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.<br />
<br />
Pluto is the planet of transformation and regeneration, and also the ruler of this zodiac sign. Scorpios are known by their calm and cool behavior, and by their mysterious appearance. People often say that Scorpio-born are fierce, probably because they understand very well the rules of the universe. Some Scorpio-born can look older than they actually are. They are excellent leaders because they are very dedicated to what they do. Scorpios hate dishonesty and they can be very jealous and suspicious, so they need to learn how to adapt more easily to different human behaviors. Scorpios are brave and therefore they have a lot of friends.</div>
</div>
<span class="menubtn" onclick="closecont('scorpio')">back</span></div>

<div class="contant" id="pisces">
<div class="header ofWater"><img src="https://abload.de/img/piscesmfk09.jpg" />
<center><span class="h1">Children of Water</span><br />
<br />
Pisces<br />
February 19 - Martch 20</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Compassionate<br />
artistic<br />
intuitive<br />
gentle<br />
wise<br />
musical</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Fearful<br />
overly trusting<br />
sad<br />
desire to escape reality<br />
can be victim or a martyr</div>

<div class="box fleft"><span><strong>Pisces likes: </strong></span> Being alone<br />
sleeping<br />
music<br />
romance<br />
visual media<br />
swimming<br />
spiritual themes</div>

<div class="box fright"><span><strong>Pisces dislikes: </strong></span> Know-it-all<br />
being criticized<br />
the past coming back to haunt<br />
cruelty of any kind</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Pisces: </strong></span><br />
Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity. Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent. Neptune is connected to music, so Pisces reveal music preferences in the earliest stages of life. They are generous, compassionate and extremely faithful and caring. People born under the Pisces sign have an intuitive understanding of the life cycle and thus achieve the best emotional relationship with other beings.<br />
<br />
Pisces-born are known by their wisdom, but under the influence of Uranus, Pisces sometimes can take the role of a martyr, in order to catch the attention. Pisces are never judgmental and always forgiving. They are also known to be most tolerant of all the zodiac signs.</div>
</div>
<span class="menubtn" onclick="closecont('pisces')">back</span></div>

<div class="contant" id="gemini">
<div class="header ofAir"><img src="https://abload.de/img/geminiv4j2g.jpg" />
<center><span class="h1">Children of Air</span><br />
<br />
Gemini<br />
May 22 - June 21</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Gentle<br />
affectionate<br />
curious<br />
adaptable<br />
ability to learn quickly and exchange ideas</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Nervous<br />
inconsistent<br />
indecisive</div>

<div class="box fleft"><span><strong>Gemini likes: </strong></span> Music<br />
books<br />
magazines<br />
chats with nearly anyone<br />
short trips around the town</div>

<div class="box fright"><span><strong>Gemini dislikes: </strong></span> Being alone<br />
being confined<br />
repetition and routine</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Gemini: </strong></span><br />
Expressive and quick-witted, Gemini represents two different sides of personality and you will never be sure with whom you will face. Gemini can be sociable,communicative and ready for fun, while on the other hand it can be very serious, thoughtful, restless and even indecisive.<br />
<br />
As an air sign, Gemini is concerned with all aspects of the mind. This zodiac sign is ruled by Mercury, which is a planet that represents communication, writing and teaching others. They get fascinated by almost everything in the world and they have a feeling as if there is not enough time to experience everything they want to see. This makes them excellent artists, writers and journalists. Gemini sign means that sometimes people born under this sign have a feeling that their other half is missing, so they are forever seeking for new friends, mentors and colleagues. Gemini is versatile, inquisitive, fun loving and wants to experience everything out there, so their company is never boring.</div>
</div>
<span class="menubtn" onclick="closecont('gemini')">back</span></div>

<div class="contant" id="libra">
<div class="header ofAir"><img src="https://abload.de/img/librakhkg6.jpg" />
<center><span class="h1">Children of Air</span><br />
<br />
Libra<br />
September 24 - October 23</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Cooperative<br />
diplomatic<br />
gracious<br />
fair-minded<br />
social</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Indescisive<br />
avoids confrontations<br />
will carry a grudge<br />
self-pity</div>

<div class="box fleft"><span><strong>Libra likes: </strong></span> Harmony<br />
gentleness<br />
sharing with others<br />
the outdoors</div>

<div class="box fright"><span><strong>Libra dislikes: </strong></span> Violence<br />
injustice<br />
loudmouths<br />
conformity</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Libra: </strong></span><br />
People born under the sign of Libra are peaceful and fair, and they hate being alone. Partnership is very important for Libra -born, and with their victorious mentality and cooperation, they cannot stand to be alone. The Libra is an Air sign, with expressed intellect and a keen mind. They can be inspired by good books, insurmountable discussions and interesting people.<br />
<br />
The ruling planet of Libra is Venus, who is a lover of beautiful things, so the quality is always more important than the quantity for people born under the Libra sign. They are often surrounded by art, music and beautiful places. They are cooperative by nature, so they often work in teams. Libra is fascinated by the balance and symmetry. Libra-born prefer justice and equality, and they cannot tolerate injustice. They avoid indulging in all types of conflicts and prefer to keep the peace, where this is possible. They like to do everything in pairs and not alone. The biggest problem for Libra-born, is when they are forced to choose sides, because they are very indecisive and sometimes they forget that they have their own opinion.</div>
</div>
<span class="menubtn" onclick="closecont('libra')">back</span></div>

<div class="contant" id="aquarius">
<div class="header ofAir"><img src="https://abload.de/img/aquariusf2jzf.jpg" />
<center><span class="h1">Children of Air</span><br />
<br />
Aquarius<br />
January 21 - February 18</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Progressive<br />
original<br />
independent<br />
humanitarian</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Runs from emotional expression<br />
temperamental<br />
uncompromising<br />
aloof</div>

<div class="box fleft"><span><strong>Aquarius likes: </strong></span> Fun with friends<br />
helping others<br />
fighting for causes<br />
intellectual conversations<br />
a good listener</div>

<div class="box fright"><span><strong>Aquarius dislikes: </strong></span> Limitations<br />
broken promises<br />
being lonely<br />
dull or boring situations<br />
people who disagree with them</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Aquarius: </strong></span><br />
Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities. Aquarius is an air sign, and as such, uses his mind at every opportunity. If there is no mental stimulation, they are bored and lack a motivation to achieve the best result.<br />
<br />
The ruling planet of Aquarius, Uranus has a timid, abrupt and sometimes aggressive nature, but it also gives Aquarius visionary quality. They are capable of perceiving the future and they know exactly what they want to be doing five or ten years from now. Uranus also gave them the power of quick and easy transformation, so they are known as thinkers, progressives and humanists. They feel good in a group or a community, so they constantly strive to be surrounded by other people. The biggest problem for Aquarius-born is the feeling that they are limited or constrained. Because of the desire for freedom and equality for all, they will always strive to ensure freedom of speech and movement. Aquarius-born have a reputation for being cold and insensitive persons, but this is just their defence mechanism against premature intimacy. They need to learn to trust others and express their emotions in a healthy way.</div>
</div>
<span class="menubtn" onclick="closecont('aquarius')">back</span></div>

<div class="contant" id="taurus">
<div class="header ofEarth"><img src="https://abload.de/img/taurus4zj4r.jpg" />
<center><span class="h1">Children of Earth</span><br />
<br />
Taurus<br />
April 21 - May 21</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Reliable<br />
patient<br />
practical<br />
devoted<br />
responsible<br />
stable</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Stubborn<br />
possessive<br />
uncompromising</div>

<div class="box fleft"><span><strong>Taurus likes: </strong></span> Gardening<br />
cookig<br />
music<br />
romance<br />
high quality clothes<br />
working with hands</div>

<div class="box fright"><span><strong>Taurus dislikes: </strong></span> Sudden changes<br />
complications<br />
insecurity of any kind<br />
synthetic fabrics</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Taurus: </strong></span><br />
Powerful and reliable, Taurus is the first when it comes to harvesting the fruits of his labor. They love everything that is good and beautiful, and they are often surrounded by material pleasures. People born under the Taurus sign are very sensual and tactile. Touch is extremely important for them, both in business and in romance. Stable and conservative, Taurus is among the most reliable signs of the zodiac. Stubbornness is a trait that is forcing him to expel things to the end, in order to comply with the standards. As an earth sign, Taurus can be overprotective of their loved ones. They are great in making money and they will stick to their projects until it is successfully completed. Bulls are often known for their stubbornness, but it can also be interpreted as a complete commitment to the execution of tasks. This makes them excellent workers and great friends, because they are always there, no matter what.<br />
<br />
Their ruling planet Venus, represents love, attraction, beauty and creativity. Thus, Taurus can be an excellent cook, entertainer and artist. He is loyal and doesn&#39;t like sudden and unwanted changes. Taurus is the most dependable sign of the zodiac. Although some may have very conservative views of the world or can be too fond of money and wealth, they have the ability to bring practical voice of reason in any chaotic and unhealthy situation.</div>
</div>
<span class="menubtn" onclick="closecont('taurus')">back</span></div>

<div class="contant" id="virgo">
<div class="header ofEarth"><img src="https://abload.de/img/virgorskbk.jpg" />
<center><span class="h1">Children of Earth</span><br />
<br />
Virgo<br />
August 24 - September 23</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Loyal<br />
analytical<br />
kind<br />
hardworking<br />
practical</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Shyness<br />
worry<br />
overly critical of self and others<br />
all work and no play</div>

<div class="box fleft"><span><strong>Virgo likes: </strong></span> Animals<br />
healthy food<br />
books<br />
nature<br />
cleanliness</div>

<div class="box fright"><span><strong>Virgo dislikes: </strong></span> Rudeness<br />
asking for help<br />
taking center stage</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Virgo: </strong></span><br />
Virgos are always paying attention to smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance. Virgos are often tender but also very careful. Virgo is an Earth sign, which prefers conservative and organized things, and those dependent on them. People born under the Virgo sign have very organized life, and even if they are very messy, their goals and dreams are put on strictly defined points in their mind.<br />
<br />
Since Mercury is the ruling planet of Virgo, this sign has a well-developed sense of speech and writing, as well as all other forms of communication. Many Virgos may choose to pursue a career as a writer or journalist.Virgo is often misunderstood, because of the symbolism of the name of this sign. Virgo experiences everything for the first time. Virgos always want to serve and please others, so they often choose to work as caregivers. On the other hand, this zodiac sign sometimes can be very critical and overly concerned.</div>
</div>
<span class="menubtn" onclick="closecont('virgo')">back</span></div>

<div class="contant" id="capricorn">
<div class="header ofEarth"><img src="https://abload.de/img/capricorn3wk5q.jpg" />
<center><span class="h1">Children of Earth</span><br />
<br />
Capricorn<br />
December 22 - January 20</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Responsible<br />
disciplined<br />
self-control<br />
good managers</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Know-it-all<br />
unforgiving<br />
condescending<br />
expecting the worst</div>

<div class="box fleft"><span><strong>Capricorn likes: </strong></span> Family<br />
tradition<br />
music<br />
understated status<br />
quality craftmanship</div>

<div class="box fright"><span><strong>Capricorn dislikes: </strong></span> Almost everything at some point</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Capricorn: </strong></span><br />
When it comes to professionalism and traditional values, Capricorn is the first. Capricorn is practical and is considered to be the most serious sign of the zodiac, who possess an independence that enables significant progress both on the personal level and in business. As an Earth sign, for a Capricorn there is nothing more important in life than family. Capricorn is a master of self-control and has the potential to be a great leader or manager as long as it is in the sphere of business.<br />
<br />
Saturn is the ruling planet of Capricorn, and this planet represents restrictions of all kinds. The influence of Saturn makes Capricorn-born practical and responsible, so they know how to save money for the future.They are masters when they need to prove that they are right. People born under the Capricorn sign sometimes can be really stubborn. They strive to get to the top only with their experience. Problems may occur when the Capricorn is forced to be very close with his associates. Capricorn-born have a hard time accepting others&#39; differences, and in these situations, there is a need to control people or to impose their traditionalist values. They think that they are the only ones who know how to solve a problem, but they must learn how to forgive others, to allow them to be who they are and to stop condemning them.</div>
</div>
<span class="menubtn" onclick="closecont('capricorn')">back</span></div>

<div class="contant" id="aries">
<div class="header ofFire"><img src="https://abload.de/img/ariesypk4t.jpg" />
<center><span class="h1">Children of Fire</span><br />
<br />
Aries<br />
Marts 21 - April 20</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Courageous<br />
determined<br />
confident<br />
enthusiastic<br />
optimistic<br />
honest<br />
passionate</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Impatient<br />
moody<br />
short-tempered<br />
implulsive<br />
aggressive</div>

<div class="box fleft"><span><strong>Aries likes: </strong></span> Comfortable clothes<br />
taking on leadership roles<br />
physical challenges<br />
individual sports</div>

<div class="box fright"><span><strong>Aries dislikes: </strong></span> Inactivity<br />
delays<br />
work that does not use one&#39;s talents</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Aries: </strong></span><br />
As the first sign in the zodiac, the presence of Aries almost always marks the beginning of something energetic and turbulent.They are continuously looking for dynamic, speed and competition. They are always first in everything - from work to social gatherings. Thanks to its ruling planet Mars, Aries is one of the most active zodiac signs. People born under the Aries sign, are meant to emphasize the search for answers to personal and metaphysical questions. This is the biggest feature of this incarnation.<br />
<br />
Aries is a fire sign, just like Leo and Sagittarius. This means that it is in their nature to take action, sometimes before they think about it well. Their fiery ruler affects their excellent organizational skills, so you&#39;ll rarely meet an Aries who doesn&#39;t like to finish more things at once, often even before the lunch break! The challenges are increased when they are impatient, aggressive and vent anger on others. Aries rules the head and leads with the head, often literally walking head first, leaning forwards for speed and focus. They are naturally brave and rarely afraid of trial and risk. They possess youthful strength and energy, regardless of age and they perform tasks in record time. By aligning with themselves they could achieve the best results.</div>
</div>
<span class="menubtn" onclick="closecont('aries')">back</span></div>

<div class="contant" id="leo">
<div class="header ofFire"><img src="https://abload.de/img/leoock24.jpg" />
<center><span class="h1">Children of Fire</span><br />
<br />
Leo<br />
July 23 - August 23</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Creative<br />
passionate<br />
generous<br />
warm-hearted<br />
cheerful<br />
humorous</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Arrogant<br />
stubborn<br />
self-centered<br />
lazy<br />
inflexible</div>

<div class="box fleft"><span><strong>Leo likes: </strong></span> Theater<br />
taking holidays<br />
being admired<br />
expensive things<br />
bright colors<br />
fun with friends</div>

<div class="box fright"><span><strong>Leo dislikes: </strong></span> Being ignored<br />
facing difficult reality<br />
not being treated like a king or queen</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Leo: </strong></span><br />
People born under the sign of Leo are natural born leaders. They are dramatic, creative self-confident, dominant and extremely difficult to resist. They can achieve anything they want, whether it&#39;s about work or time spent will family and friends. Leo is a fire sign, which means that he loves life and expects to have a good time. Like other fire signs, Sagittarius and Aries, Leo is also able to use his mind to solve even the most difficult problems and take the initiative in solving various complicated situations.<br />
<br />
Ruled by the Sun, Leo worships the Sun in all is forms which is also a metaphorical expression of the state of his ego. This can be good, because Leos can easily search for what they need. But, on the other hand it can be problematic when Leos ignore the problems and needs of others in order to fulfill their desires. Leo has a specific strength and &quot;king of the jungle&quot; status. Leo often has too many friends because he is very generous and loyal. Self-confident and attractive, Leo is able to unite many groups of people at every opportunity. Problems can arise, when Leo becomes too fond of his achievements. This zodiac sign can also be arrogant, lazy and inflexible, because he assumes that someone else will clean up after him. A healthy sense of humor can make the collaboration with other people, easier.</div>
</div>
<span class="menubtn" onclick="closecont('leo')">back</span></div>

<div class="contant" id="sagittarius">
<div class="header ofFire"><img src="https://abload.de/img/saggitariusp5j6h.jpg" />
<center><span class="h1">Children of Fire</span><br />
<br />
Sagittarius<br />
November 23 - December 21</center>
</div>

<div class="cont">
<div class="box fleft"><span><strong>Strengths: </strong></span> Generous<br />
idealistic<br />
great sense of humor</div>

<div class="box fright"><span><strong>Weaknesses: </strong></span> Generous<br />
idealistic<br />
great sense of humor</div>

<div class="box fleft"><span><strong>Sagittarius likes: </strong></span> Freedom<br />
travel<br />
philosophy<br />
being outdoors</div>

<div class="box fright"><span><strong>Sagittarius dislikes: </strong></span> Clingy people<br />
being constrained<br />
off-the-wall theories<br />
details</div>

<p class="clb">&nbsp;</p>

<div class="bigbox"><span><strong>About Sagittarius: </strong></span><br />
Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.<br />
<br />
Like the other fire signs, Sagittarius needs to be constantly in touch with the world to experience as much as possible. The ruling planet of Sagittarius is Jupiter, the largest planet of the zodiac. Their enthusiasm has no bounds, and therefore people born under the Sagittarius sign possess a great sense of humor and an intense curiosity. Freedom is their greatest treasure, because only then they can freely travel and explore different cultures and philosophies. Because of their honesty, Sagittarius-born are often impatient and tactless when they need to say or do something, so it&#39;s important to learn to express themselves in a tolerant and socially acceptable way.</div>
</div>
<span class="menubtn" onclick="closecont('sagittarius')">back</span></div>
</div>

<div><span class="footer">Last updated 11/30/2017 by A.P. || Coding by Verity Beaumont</span></div>
</div>
</center>
       <script src="/components/iframe-resizer/js/iframeResizer.contentWindow.min.js"></script>
        </body>
      </div>

      );
} 