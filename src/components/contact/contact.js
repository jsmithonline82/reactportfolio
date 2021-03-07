function Contact() {
    return (

<div className="container flex-fill">
    <div className="row justify-content-center aboutMe">
      <div className="opa col-md-8 mb-5 overflow:auto text-white border border-light rounded-lg mt-5 shadow-lg">
        <h1 className="border-bottom mt-2 pt=2 pb=2">Contact Me</h1>
        <address>
          <form style={{alignContent:"center"}} action="mailto:jsmithbootcamp2020@gmail.com" method="post" enctype="text/plain">
              Name:<br/>
              <input type="text" name="name"/><br/>
              E-mail:<br/>
              <input type="text" name="mail"/><br/>
              Comment:<br/>
              <input type="text" name="comment" size="50"/><br/><br/>
              <input type="submit" value="Send"/>
              <input type="reset" value="Reset"/>
          </form>
        </address>
      </div>
      <div className="opa col-md-8 mb-5 overflow:auto text-white border border-light rounded-lg mt-5 shadow-lg">
        <p className="p-2">
          <i className="fa fa-phone"></i> (929)
          434-9082
        </p>
        <p className="p-2">
          <i className="fa fa-linkedin"></i
          ><a href="https://www.linkedin.com/in/jackson-smith-8536971ab/">
            LinkedIn</a
          >
        </p>
        <p className="p-2">
          <i className="fa fa-github-square"></i
          ><a href="https://github.com/jsmithonline82"> GitHub</a>
        </p>

      </div>
    </div>
</div>

);
}

export default Contact;