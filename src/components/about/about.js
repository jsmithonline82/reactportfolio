function About() {
    return (

<section className="container d-flex align-items-center h-100 py-5">
      <div className="row justify-content-center aboutMe">
        <div className="opa col-md-8 text-white mt-2 mb-5 border border-light shadow-lg rounded-lg ">
            <h1 className="border-bottom pt-2 pb-2">About Me</h1>
            <img className="mr-3 mb-3 rounded float-left" style={{width:'50%'}} src="./assets/FB_IMG_1593437633330.jpg" alt="Jackson Smith Here"/>
            <p><em>I'm Jackson Smith, a man of many hats</em> based in Royal Oak, Michigan. I am a full stack Developer, currently with Rievan Design as well as taking freelance work. I've been playing music profesionally for 14 years, having been able to play with international
              legends like Elton John, as well as hometown heroes like Vin Dombroski of Platinum artist Sponge. I am a licensed Real Estate professional here in Michigan with Johnstone and Johnstone, 
              and have expertise in several areas around the state. How can I help you today?
            </p>
            
             <p className="text-center">Click the links below to check out some of my work.</p> 
             <div className="row justify-content-center">
                  <a href="https://github.com/jsmithonline82" target="_blank" rel="noreferrer" className="col btn btn-dark btn-lg active float-left m-2">SEE MY WORK ON GITHUB</a>
                  <a href="/portfolio" className="col float-right btn btn-dark btn-lg active m-2">SEE SOME FEATURED PROJECTS</a>
                </div>
             
        </div>
        
      </div>
      
    </section>

);
}

export default About;