import Register from './components/User/Register';
import Profile from './components/User/Profile';
import Home from './components/Home';
import Login from './components/User/Login';
import About from './components/About.js';
import Contact from './components/Query/Contact';
import ZodiacCal from './components/Zodiac/ZodiacCal';
import Display from './components/User/Display';
import ZodiacPlay from './components/Zodiac/ZodiacPlay';
import Zodiac from './components/Zodiac/ZodiacSign/Zodiac';
import Defaulthome from './components/Defaulthome';
import ZodiacChar from './components/ZodiacChar';
import Love from './components/Compatability';
import Numerology from './components/Numerology/Numerology';
import Admin from './components/Admin/admin';
import Tarot from './components/Tarot';
/*import MyNavbar from './components/Navbar';

import Defualtpage from './components/Defualtpage';
import Planet from './components/Planet';
<Route path='/play' element={<ZodiacPlay/>} />
import Numerology from './components/Numerology';
*/
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App({store}) {
  
  return (

  <div> 
    
     <BrowserRouter>
            <Routes>
            <Route path='/admin' element={<Admin/>} /> 
            <Route path='/' element={<Defaulthome/>} /> 
            <Route path='/reg' element={<Register />} /> 
            <Route path='/Zod' element={<Zodiac />} /> 
            <Route path='/profile' element={<Profile />} />
            <Route path='/Home' element={<Home />} /> 
            <Route path='/Login' element={<Login store={store}/>} />
            <Route path='/StarLines' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/Zodiac' element={<ZodiacCal/>} />
            <Route path='/display' element={<Display/>} />
            <Route path='/Love' element={<Love/>} />
            <Route path='/num' element={<Numerology/>} />
            <Route path='/char' element={<ZodiacChar/>} /> 
            <Route path='/tarot' element={<Tarot/>} />
            </Routes>
           </BrowserRouter>

  </div>
  );
}

export default App;


/*
 

<Route path='/Num' element={<Numerology />} />
<Route path='/Planet' element={<Planet />} />


<Route path='/' element={<Defualtpage/>} />

*/