const HeroSection = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"white"}}>
      <div className="row align-items-center">
        <div className="col-12 col-md-5 col-lg-6 text-container d-flex justify-content-center">
          <div className="px-3 ps-lg-5">
            <h1 className="herosec pt-3" style={{color:"black"}}><b>Founders of Pakistan </b></h1>
            <p>Visionaries of Pakistan: The Founders Who Shaped a Nation</p>
          </div>
        </div>
        <div className="col-12 col-md-6 image-container d-flex justify-content-center">
          <img src=".\images\founder_main.jpeg" alt="Illustration" className="image_main mt-3"/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
