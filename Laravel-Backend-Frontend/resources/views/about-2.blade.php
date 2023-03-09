<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>About</title>
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
<body class="about-page">
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
<style type="text/css">
    .hero{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom right;
    } 

</style>
<!-- Hero --> 

<section class="hero d-flex align-items-center min-vh-100 bg-light pt-lg-5 pt-5" style="background-image: url(assets/img/888.png);">
<div class="container position-relative zindex-5 py-5">
  <div class="row justify-content-md-start justify-content-center">
    <div class="col-md-6 col-sm-8 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
      <div class="mb-md-5 pb-xl-5 mb-4">

        <!-- Text -->
        <h1 class="display-2 mb-md-5 mb-3 pb-3">
          We are Building 3D NFT Projects for web3
        </h1>
        <div class="d-md-flex align-items-md-start"> 
          <a class="btn btn-lg button-primary mb-md-0 mb-sm-4 mb-3">Apply to Create</a>
        </div>
      </div>
 
    </div>

    <!-- Animated gfx -->
    <div class="col-sm-6 col-sm-6 col-9">
       <div class="card card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <p>Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                </div>
    </div>
  </div>
</div>
</section>

<!-- <section class="hero">
    <div class="container">
        <div class="row justify-content-between align-items-center h-100">
            <div class="col-xl-5 col-md-6 left">
                <h1 class="my-5">We are Building 3D NFT Projects for web3</h1>
                <div>
                    <a class="btn button-primary mt-2 my-5">Apply to Create</a> 
                </div>
            </div>      
            <div class="col-xl-5 col-md-6">          
                <div class="card card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <p>Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                </div>
            </div>
        </div>
    </div>
</section> -->
<section class="creativity-innov sequel100black-95-regular-normal-wild-strawberry-24px py-5">
  <span class="sequel100black-95-regular-normal-wild-strawberry-24px"> . Creativity . </span>
  <span class="span1">Innovation</span>
  <span class="sequel100black-95-regular-normal-wild-strawberry-24px"> . web3 . </span>
  <span class="span3">IDEAdao</span>
  <span class="sequel100black-95-regular-normal-wild-strawberry-24px"> . 3D NFTs . </span>
  <span class="span5">Community</span>
</section>
<section class="our-team pt-120 pb-130">
    <div class="container">
        <div class="row justify-content-between align-items-center">
            <div class="col-lg-4">
                <h2 class="m-0 section-title">Our super innovative team</h2>
            </div>
            <div class="col-lg-6 offset-lg-2">
                <p class="raleway-normal-dove-gray-14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
        </div>
   </div> 
   <style type="text/css">
 
.swiper-slide .team-member {
    /*background-color: var(--white);
    border: 1px solid;
    border-top-color: currentcolor;
    border-right-color: currentcolor;
    border-bottom-color: currentcolor;
    border-left-color: currentcolor;
    border-color: var(--black);
    border-radius: 16px;
    box-shadow: 3px 3px 0px #1a1a1a;*/
    height: 347px;
    left: 26px; 
    top: 0;
    width: 350px;
}


    .swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: calc((100% - 30px) / 2);

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;


    background-color: var(--white);
    border: 1px solid;
    border-top-color: currentcolor;
    border-right-color: currentcolor;
    border-bottom-color: currentcolor;
    border-left-color: currentcolor;
    border-color: var(--black);
    border-radius: 16px;
    box-shadow: 3px 3px 0px #1a1a1a;
    }
.btn-prev{
    z-index: 10;
}
.btn-prev:focus {
    outline: none;
}
   </style>
   <div class="container"> 

                 <!-- Multiple slides responsive slider with external Prev / Next buttons and bullets outside -->
                <div class="position-relative px-5 mt-5">

                  <!-- External slider prev/next buttons -->
                  <button type="button" id="prev" class="btn btn-prev btn-icon btn-sm rounded-circle position-absolute top-50 start-0 translate-middle-y mt-n3">
                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="51" height="51" rx="25.5" fill="black"/>
                        <path d="M27.3334 19.3335L20.6667 26.0002L27.3334 32.6668" stroke="#E3E3E3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <button type="button" id="next" class="btn btn-prev btn-icon btn-sm rounded-circle position-absolute top-50 end-0 translate-middle-y mt-n3">
                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="51" height="51" rx="25.5" fill="black"/>
                    <path d="M22.6667 19.3335L29.3334 26.0002L22.6667 32.6668" stroke="#E3E3E3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>

                  <!-- Slider -->
                  <div class="swiper" >
                    <div class="swiper-wrapper">

                      <!-- Item -->
                      <div class="swiper-slide">
                        <div class="team-member">
                          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"></div>
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="swiper-slide">
                        <div class="team-member">
                          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"></div>
                        </div>
                      </div>

                      <!-- Item -->
                      <div class="swiper-slide">
                        <div class="team-member">
                          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4"></div>
                        </div>
                      </div> 

                    <!-- Pagination (Bullets) -->
                    <div class="swiper-pagination position-relative bottom-0 mt-4"></div>
                  </div>
                </div>  
 
    </div>
</section>
 
<section class="pt-5 pb-5">
    <div class="container pt-5">
        <div class="row justify-content-between align-items-center">
            <div class="col-lg-12">
                <h2 class="reach-out-to-idea-da"> 
                    <span>Reach out to IDEA DAO Team via <br></span>
                    <span class="span1-1">email@ideadao.com</span>
                </h2>
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
<script src="{{asset('assets/vendor/swiper/swiper-bundle.min.js')}}"></script>
<script type="text/javascript">
    var swiper = new Swiper(".swiper", { 

        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: "#prev",
          prevEl: "#nex",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
            "600": {
                "slidesPerView": 2
              },
              "1000": {
                "slidesPerView": 3
              }
        }
      });
</script> 
</body>
</html>
