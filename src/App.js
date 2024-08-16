import React, {useState , useEffect} from 'react'


function ToggleButton () {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);


useEffect(() => {
  document.body.style.backgroundColor = isOn ? 'lightgreen' : 'lightcoral';

  return () => {
    document.body.style.backgroundColor = '';
  };
}, [isOn]);

return (
  <div style={{ padding: '20px', textAlign: 'center' }}>
 <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
 <button onClick={toggle} style={{ padding: '10px', fontSize: '16px' }}>
 {isOn ? 'Turn OFF' : 'Turn ON'}
 </button>
 </div>
 );
};



  
  export default ToggleButton