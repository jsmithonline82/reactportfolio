function Contact() {
    return (

<div class="container flex-fill">
    <div class="row justify-content-center aboutMe">
      <div class="opa col-md-8 mb-5 overflow:auto text-white border border-light rounded-lg mt-5 shadow-lg">
        <h1 class="border-bottom mt-2 pt=2 pb=2">Contact Me</h1>
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
      <div class="opa col-md-8 mb-5 overflow:auto text-white border border-light rounded-lg mt-5 shadow-lg">
        <p class="p-2">
          <i class="fa fa-phone"></i> (929)
          434-9082
        </p>
        <p class="p-2">
          <i class="fa fa-linkedin"></i
          ><a href="https://www.linkedin.com/in/jackson-smith-8536971ab/">
            LinkedIn</a
          >
        </p>
        <p class="p-2">
          <i class="fa fa-github-square"></i
          ><a href="https://github.com/jsmithonline82"> GitHub</a>
        </p>

      </div>
    </div>
</div>

);
}

export default Contact;