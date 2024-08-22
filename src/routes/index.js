

 
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
// import  NavBar  from '../Components/Navbar';
// import  Work  from '../Components/Work';
// import  Footer  from '../Components/Footer'
 

// const App = () => {
//   return (
//     <Router>
//       <>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={
//             <>
             
               
//              <Work/>
//              <info/>
//               <Footer />
//             </>
//           } />
           
         
//         </Routes>
         
//       </>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
 

import  NavBar  from '../Components/Navbar';
import  Work  from '../Components/Work';
import  Footer  from '../Components/Footer'
import Info from '../Components/Info';
 

const App = () => {
  return (
    <Router>
      <>
      <NavBar />
 <Routes>
          <Route  exact="true" path="/" element={<Work />} />
          <Route  exact="true" path="/Info" element={<Info />} />
           
       </Routes>

 
      </>
      <Footer />
    </Router>
  )
}

export default App
