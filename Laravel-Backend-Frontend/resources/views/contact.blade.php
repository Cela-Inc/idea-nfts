<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Contact</title>
    <!-- SEO Meta Tags-->
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <!-- Viewport-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon and Touch Icons
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('assets/favicon/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('assets/favicon/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('assets/favicon/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('assets/favicon/site.webmanifest')}}">
    <link rel="mask-icon" color="#6366f1" href="{{asset('assets/favicon/safari-pinned-tab.svg')}}">
    <meta name="msapplication-TileColor" content="#080032">
    <meta name="msapplication-config" content="{{asset('assets/favicon/browserconfig.xml')}}">
    <meta name="theme-color" content="white">-->
    <!-- Theme mode-->
    <script>
      let mode = window.localStorage.getItem('mode'),
          root = document.getElementsByTagName('html')[0];
      if (mode !== undefined && mode === 'dark') {
        root.classList.add('dark-mode');
      } else {
        root.classList.remove('dark-mode');
      }
    </script>
    <!-- Vendor styles-->
    <link rel="stylesheet" media="screen" href="{{asset('assets/vendor/swiper/swiper-bundle.min.css')}}"/>
    <!-- Main Theme Styles + Bootstrap-->
    <link rel="stylesheet" media="screen" href="{{asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" media="screen" href="{{asset('css/style.css')}}">

</head>
<body class="contact-page">
<div class="header-site">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="{{url('/')}}">
                <img src="{{asset('assets/img/logo/logo.svg')}}">
            </a>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="{{url('about')}}">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                       aria-expanded="false">Courses</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{{url('leaderboard')}}">Leaderboard</a></li>
                        <li><a class="dropdown-item" href="{{url('showcase')}}">Showcase</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Apply</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                       aria-expanded="false">Leaderboard</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{{url('leaderboard')}}">Leaderboard</a></li>
                        <li><a class="dropdown-item" href="{{url('showcase')}}">Showcase</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://idea.thecela.com/creator/" target="_blank">Create</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('contact')}}">Contact</a>
                </li>
            </ul>
            <div class="social_login">
                <ul class="navbar-nav ml-auto">
                    <li><a href="#"><img src="image/header_03.png"></a></li>
                    <li><a href="#"><img src="image/header_01.png"></a></li>
                    <a href="#" class="btn">Connect Wallet</a>
                </ul>
            </div>
        </div>
    </nav>
</div>
<section class="hero">
    <div class="container">
         <div class="row align-items-center justify-content-center">
            <div class="col-md-7 col-lg-7 text-center">
                <h1 class="my-5">Contact Us</h1>
                <p class="raleway-normal-black-16px mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <a class="btn button-success mt-2 my-5">Apply to Create</a>
            </div>
        </div>
    </div>
    <!-- <div class="overlap-group">
        <img alt="vector" class="vector-3" src="{{asset('assets/img/pages/about/about-hero-vector-3.svg')}}"/>
        <img alt="vector" class="vector-4" src="{{asset('assets/img/pages/about/about-hero-vector-4.svg')}}"/>
    </div> -->
</section>

<section class="apply-section py-5">
    <div class="container">
        <div class="row ">
            <div class="col">
                <div class="card card-body">
                  <div class="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center h-90">
                    <h3 class="h3 mb-md-0">Are you an aspiring entrepreneur that wants to get involved?</h3>
                    <a class="btn button-primary">Apply Here</a>
                  </div>
                </div>
            </div>
        </div>

        <div class="row ">
            <div class="col">
                <div class="card card-body">
                  <div class="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center h-90">
                    <h3 class="h3 mb-md-0">Register to attend a Startup Week</h3>
                    <a class="btn button-warning">Apply Here</a>
                  </div>
                </div>
            </div>
        </div>

        <div class="row ">
            <div class="col">
                <div class="card card-body">
                  <div class="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center h-90">
                    <h3 class="h3 mb-md-0">Are you an early- stage startup investor wanting to learn how IDEADAO works?</h3>
                    <a class="btn button-strawberry">Learn More</a>
                  </div>
                </div>
            </div>
        </div>

        <div class="row ">
            <div class="col">
                <div class="card card-body">
                  <div class="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center h-90">
                    <h3 class="h3 mb-md-0">Register to participate in a IDEADAO Hackathon weekend in October</h3>
                    <a class="btn button-success">Register Now</a>
                  </div>
                </div>
            </div>
        </div>

    </div>
</section>

<section class="form-section py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!-- Form START -->
                <form class="contact-from my-5" method="post">
                    <div class="mb-3"> 
                        <label class="form-control-inline-text">Hello, I'm</label>
                        <span class="d-inline-block">
                            <input type="text" name="name">
                        </span>
                    </div>
                    <div class="mb-3"> 
                        <label class="form-control-inline-text">My email is</label>
                        <span class="d-inline-block">
                            <input type="email" name="email">
                        </span> 
                    </div>
                    <div class="mb-3">
                        <label class="form-control-inline-text">I’d like to contact you about</label>
                        <span class="d-inline-block">
                            <input type="text" name="message">
                        </span>
                    </div>
                    <div class="mb-3">
                        <label class="form-control-inline-text">Thank You</label> 
                    </div> 
                    <!-- Button -->
                    <button class="btn btn-send border-primary rounded-circle mt-4" type="submit">Send Message</button>
                </form>
                <!-- Form END -->
            </div>
        </div>
    </div>
</section>











 
<div class="footer_section">
    <div class="row">
        <div class="col col-md-1"></div>
        <div class="col col-md-3.3 p-4"><a href="#"><img src="image/footer_logo.png"></a></div>
        <div class="col col-md-3.3 p-4">
            <div class="community_sec">
                <h5 class="footer_title">Community</h5>
                <div class="social_login">
                    <ul class="navbar-nav ml-auto">
                        <li><a href="#"><img src="image/footer_01.png"></a></li>
                        <li><a href="#"><img src="image/footer_02.png"></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col col-md-3.3 p-4">
            <div class="link_sec">
                <h5 class="footer_title">Links</h5>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <ul class="navbar-nav">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="col col-md-1"></div>
    </div>
    <div class="copyright_text">
        <p>© IDEADAO. All Rights Reserved</p>
    </div>
</div> 
<script src="{{asset('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
</body>
</html>
