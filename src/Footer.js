import React from 'react'

const Footer = () => {
    const year= new Date();


// const hloo = [-2,3,-1,0,1,2]
// const vanga = hloo.filter((soo) => soo<=0).map((soo) =>({age:soo}))
// console.log(vanga)


  return (
    <footer>Footer &copy; {year.getFullYear()}</footer>
  )
}

export default Footer
