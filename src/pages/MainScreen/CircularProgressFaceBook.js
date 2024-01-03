import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import DataDemo from './apiData.json'
import { useApi } from '../../ContextApi/ContextApi';

import "./Circular.scss"

function CircularProgressFaceBook() {
  // progress
  const [percentage, setPercentage] = useState(0);
  // api
  const {fetchData,DataDemo} = useApi();
  useEffect (()=> {
    fetchData();
  },[])

  useEffect(() => {
    const maxDataValue = 10000; // placed maximum value is 100,000
    const normalizedValue = (DataDemo.data.Facebook / maxDataValue) * 100; // Normalize the value to a percentage
  
    const timer = setTimeout(() => {
      if (percentage < normalizedValue) {
        setPercentage(percentage + 1);
      }
    }, 4);
  
    return () => clearTimeout(timer);
  }, [percentage, DataDemo.data.Google]);
  
  // end
  return (
    <>
    

    <div style={{textAlign:"center"}}>
      
      <div style={{}} className='faceBookDiv'>
        <CircularProgressbar value={percentage} text={`${DataDemo.data.Facebook}`} 
         styles={{
            // Customize the root svg element
            // root: {},
            // Customize the path, i.e. the "completed progress"
            // path: {
            //   // Path color
            //   stroke: `rgba(62, 152, 199, ${DataDemo.data / 40})`,
            //   // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            //   strokeLinecap: 'round',
            //   // Customize transition animation
            //   transition: 'stroke-dashoffset 0.1s ease 0s',
            //   // Rotate the path
            //   // transform: 'rotate(0.25turn)',
            //   transformOrigin: 'center center',
            // },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#ffff',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              // strokeLinecap: 'butt',
              // // Rotate the trail
              // transform: 'rotate(0.25turn)',
              // transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#9C9C9C',
              // Text size
              fontSize: '14px',
              textAlign: "center",
              fontFamily: "Lato",              
              fontWeight: "600"           
            },
            
  }}
        />
      </div>
    </div>
    </>
    
  );
}
export default CircularProgressFaceBook;