import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'

function App() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid mx-2">
    <a className="navbar-brand " id="logo" href="#"><img src="creative-ar-letter-with-luxury-concept-modern-ar-logo-design-for-business-and-company-identity-vector.jpg" alt="Logo" ></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="about">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="services">services</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="contact">contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark text-blue " id="search1" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="container3"id="home">
  <div className="ajay1"><img src="1_YZ2fsT9k1CmlMil-Fda0Zg.png"></img>
  
 
  
  </div>
  <div className="ajay1">
 
  </div>

</div>

<div className="container1"  id="about">
<h1>About</h1>
<div div className="first2">
  <div className="first1">
    <img src="images (2).jpg"></img>
  </div>
  <div className="first1" id="about">
    <p>
    Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
 </p>
  </div>
  </div>
  <div div className="first2">
 
  <div className="first3" >
    <p>
    Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
 </p>
  </div>
  <div className="first3">
    <img src="images (3).jpg"></img>
  </div>
  </div>

</div>

<h1>services</h1>
<div className="container" id="services">

  <div className="first" >
    <img src="download (1).jpg"></img>
    <p>A developer is a professional who builds and creates software and applications. They are also known as software developers, computer programmers, programmers, software coders, or software engineers.</p>
    <button type="button">product</button>
  </div>
  <div className="first" >
    <img src="download (2).jpg"></img>
    <p>A developer is a professional who builds and creates software and applications. They are also known as software developers, computer programmers, programmers, software coders, or software engineers.</p>
    <button type="button">product</button>
  </div>
  <div className="first" >
    <img src="download (3).jpg"></img>
    <p>A developer is a professional who builds and creates software and applications. They are also known as software developers, computer programmers, programmers, software coders, or software engineers.</p>
    <button type="button">product</button>
  </div>
</div>
<div className="container"id="services">
  <div className="first" >
    <img src="download (2).jpg"></img>
    <p>A developer is a professional who builds and creates software and applications. They are also known as software developers, computer programmers, programmers, software coders, or software engineers.</p>
    <button type="button">product</button>
  </div>
  <div className="first" >
    <img src="download (3).jpg"></img>
    <p>A developer is a professional who builds and creates software and applications. They are also known as software developers, computer programmers, programmers, software coders, or software engineers.</p>
    <button type="button">product</button>
  </div>
  <div className="first" >
    <img src="download (1).jpg"></img>
    <p>A developer is a professional who builds and creates software and applications. They are also known as software developers, computer programmers, programmers, software coders, or software engineers.</p>
    <button type="button">product</button>
  </div>
</div>


<div className="container5">
<h1>contact</h1>
  <div className="form">
  <div className="content">
  <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"/>
</div>
  <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="" placeholder="Enter your message"></textarea>
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit">Submit</button>
  </div>
  <div className="map">
  
  </div>

  </div>

</div>

   </>
  );
}

export default App;
