import React from 'react'

const Content = () => {
    function handleNamechange(){
        const numbers = [231,232,123,121,123];
        const int = Math.floor(Math.random()*5);
        return numbers[int]
      }
      
        return ( 
          <main>
            <p>Your Token Number is {handleNamechange()}</p>
            </main>
        );
      }
      

export default Content
