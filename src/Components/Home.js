import React from 'react'
import Header from './Header'

const Home = () => {
  return (
<>
<div className="row">
<div className="col-sm-4"> 
<Header/>
</div>
<div className="col-sm-8">
<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
<img width={"100%"} height={"100%"} src="../assets/img/Reactjs.jpg" alt="" />
    <div class="hero-container" data-aos="fade-in">
    </div>
  </section>
  </div>
</div>
</>  )
}

export default Home