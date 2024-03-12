import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
   const [sum, setSum] = useState(0);
  

  

  return (
    <div>
     
      
      <h1>Sum Calculator</h1>
 <input type="number" onChange={(e)=>(setSum(parseInt(sum) + parseInt(e.target.value)))} />
  <p>Sum: {sum}</p>

    </div>
  );
}

export default App;
