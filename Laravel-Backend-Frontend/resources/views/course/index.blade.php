<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Courses | {{ config('app.name') }}</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

    <!-- Viewport -->
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

    <!-- Vendor Styles -->
    <link rel="stylesheet" media="screen" href="{{asset('assets/vendor/boxicons/css/boxicons.min.css')}}"/>
    <link rel="stylesheet" media="screen" href="{{asset('assets/vendor/swiper/swiper-bundle.min.css')}}"/>
    <link rel="stylesheet" media="screen" href="{{asset('assets/vendor/lightgallery/css/lightgallery-bundle.min.css')}}"/>

    <!-- Main Theme Styles + Bootstrap -->
    <link rel="stylesheet" media="screen" href="{{asset('assets/css/theme.css')}}">
    <!-- <link rel="stylesheet" media="screen" href="{{asset('css/style.css')}}"> -->
    <link rel="stylesheet" media="screen" href="{{asset('assets/css/course.css')}}">

     
    @livewireStyles

    <!-- Theme mode -->
    <script>
      let mode = window.localStorage.getItem('mode'),
          root = document.getElementsByTagName('html')[0];
      if (mode !== null && mode === 'dark') {
        root.classList.add('dark-mode');
      } else {
        root.classList.remove('dark-mode');
      }
    </script>
  </head>
  <!-- Body -->
  <body class="">

    

    <!-- Page wrapper for sticky footer -->
    <!-- Wraps everything except footer to push footer to the bottom of the page if there is little content -->
    <main class="page-wrapper">


      <!-- Navbar -->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
      <header class="header navbar navbar-expand-lg position-absolute navbar-sticky header-site course-page">
        <div class="container px-3">
          <a href="{{url('/')}}" class="navbar-brand pt-3 pe-3">
            <img src="{{asset('assets/img/logo/logo.svg')}}"  alt="{{config('app.name')}}"> 
          </a>
          <div id="navbarNav" class="offcanvas offcanvas-end">
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title">Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="{{url('about')}}">About</a>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Courses</a>
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
            </div>
            <div class="offcanvas-header border-top">
              <a href="#" class="btn btn-warning rounded-pill w-100" target="_blank" rel="noopener">  Connect Wallet </a>
            </div>     
          </div>
          <div class="form-check form-switch mode-switch pe-lg-1 ms-auto me-3" data-bs-toggle="mode">
            <input type="checkbox" class="form-check-input" id="theme-mode">
            <!-- <label class="form-check-label d-none d-sm-block" for="theme-mode">Light</label>
            <label class="form-check-label d-none d-sm-block" for="theme-mode">Dark</label> -->
          </div>
          <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a href="#" class="btn btn-primary-outline btn-icon me-2"><img src="{{asset('assets/img/icon/akar-icons_discord-fill.svg')}}"></a>
          <a href="#" class="btn btn-primary-outline btn-icon me-3"><img src="{{asset('assets/img/icon/ant-design_user-outlined.svg')}}"></a>
          <a href="#" class="btn btn-warning rounded-pill d-none d-lg-inline-flex ">Connect Wallet</a>
        </div>
      </header>

      
      <!-- Hero -->
      <section class="position-relative pt-5 course-page">

        <!-- Background
        <div class="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0" style="background-image: url(assets/img/about/hero-bg.svg);">
          <div class="d-lg-none" style="height: 960px;"></div>
          <div class="d-none d-lg-block" style="height: 768px;"></div>
        </div> -->

        <!-- Content -->
        <div class="container position-relative zindex-5 pt-5">
          <div class="row">
            <div class="col-lg-10">              
              <!-- Breadcrumb -->
              <div class="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4"> </div>
              <!-- Text -->     

               <p class="pb-2 pb-md-3 sequel100black-95-regular-normal-onyx-20px">
                <span class="sequel100black-95-regular-normal-onyx-20px">Immerse yourself with </span><span class="span1">Web3 knowledge</span
                ><span class="sequel100black-95-regular-normal-onyx-20px">; from basic to Pro. Learn about</span><span class="span3">&nbsp;</span
                ><span class="span4">NFTs</span><span class="sequel100black-95-regular-normal-onyx-20px">, </span><span class="span6">IDEAs</span
                ><span class="sequel100black-95-regular-normal-onyx-20px"> and create your own from scratch. We’ll lead you every step of the way.</span>
              </p>

            </div>
            <!-- text group -->
            <div class="col-lg-2">
              <div class="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4"> </div>
              <img src="{{asset('assets/img/courses/course-mark.svg')}}" class="d-block ms-md-auto  pb-2 pb-md-3 " alt="...">
            </div>
          </div> 
          <div class="row  pt-4 pt-md-5 mt-2 mt-xl-4">
            <div class="col-lg-7">
              <h1 class="pb-4 mb-1 mb-md-2 mb-lg-3 whats-included-in-the-courses sequel100black-95-regular-normal-new-car-32px"> WHAT’S included in the Courses </h1>
            </div>
            <div class="col-lg-5">             
              <div class="row row-cols-3">
                <div class="col">
                    <div class="mb-2 course-number">
                      <div class="number sequel100black-95-regular-normal-white-32px">
                        <span class="sequel100black-95-regular-normal-white-32px-2">40</span>
                      </div>
                      <div class="text raleway-medium-jaffa-24px">
                        <span class="raleway-medium-jaffa-24px">+</span>
                      </div>
                    </div> 
                  <p class="mb-0 raleway-medium-onyx-14px">Lessons</p>
                </div>
                <div class="col"> 
                    <div class="mb-2 course-number">
                      <div class="number-1 sequel100black-95-regular-normal-white-32px">
                        <span class="sequel100black-95-regular-normal-white-32px-2">18</span>
                      </div>
                      <div class="text raleway-medium-wild-strawberry-24px">
                        <span class="raleway-medium-wild-strawberry-24px">+</span>
                      </div>
                    </div>
                  <p class="mb-0 raleway-medium-onyx-14px">Hours of content</p>
                </div>
                <div class="col">
                    <div class="mb-2 course-number">
                      <div class="number-2 sequel100black-95-regular-normal-white-32px">
                        <span class="sequel100black-95-regular-normal-white-32px-2">29</span>
                      </div>
                      <div class="text raleway-medium-chateau-green-24px">
                        <span class="raleway-medium-chateau-green-24px">+</span>
                      </div>
                    </div> 
                  <p class="mb-0 raleway-medium-onyx-14px">Hours of content</p>
                </div>
              </div>
            </div>
          </div> 

        </div>
      </section>

      <section class="container mt-3 mb-5 pt-lg-5" > 
        @livewire('courses')
      </section>

      <section class="container pb-5 mb-2 mb-md-4 mb-lg-5" style="padding-top: 80px;">
        <div class="bg-secondary border-2 shadow rounded-4 ">
          <div class="row align-items-center">
            <div class="col-xl-5 col-md-6 offset-xl-1 mb-4 mb-md-0">  
                <h2 class="h4">Ready to dive in?</h2> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia</p>
                <a href="" class="btn btn-link m-0 p-0 text-upper">START CREATING <img src="https://idea.thecela.com/assets/img/icon/right-arrow-rounded-icon.svg" class="ms-2"></a> 
            </div>
            <div style="margin-top: -80px;" class="col-xl-5 col-md-6 pb-4 pb-md-0 mb-2 mb-md-0 d-flex justify-content-end"> 
                <img src="https://idea.thecela.com/assets/img/courses/test.svg" alt="Image" class="" style="max-width: 384px;">
              
            </div>
          </div>
        </div>
      </section>
    </main>


    <!-- Footer -->
    <footer class="footer pt-5 pb-4 pb-lg-5">
      <div class="container-fluid pt-lg-4">
        <div class="row pb-3">
          <div class="col col-md-1 border-2"></div>
          <div class="col col-md-3.3 p-4 border-2 ">
             <a href="{{url('/')}}" class="navbar-brand pt-3 pe-3">
                <img src="{{asset('assets/img/logo/logo.svg')}}"  alt="{{config('app.name')}}"> 
              </a> 
          </div> 
          <div class="col col-md-3.3 p-4 border-2"> 
            <h6 class="mb-2">Community</h6>            
            <a href="#" class="btn btn-primary-outline btn-icon me-2 mb-2"><img src="{{asset('assets/img/icon/akar-icons_discord-fill.svg')}}"></a>
            <a href="#" class="btn btn-primary-outline btn-icon me-2 mb-2"><img src="{{asset('assets/img/icon/ant-design_user-outlined.svg')}}"></a>
          </div> 
          <div class="col col-md-3.3 p-4 border-2"> 
            <h6 class="mb-2">Links</h6> 
              <nav class="navbar navbar-expand-lg navbar-light">
                  <ul class="navbar-nav">
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms</a></li>
                  </ul>
              </nav>
          </div>
          <div class="col col-md-1 border-2"></div>
        </div>
        <p class="nav d-block fs-x text-md-center pb-2 pb-lg-0 mb-0 "> © IDEADAO. All Rights Reserved</p>
      </div>
    </footer>
    


    <!-- Back to top button -->
    <a href="#top" class="btn-scroll-top" data-scroll>
      <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i class="btn-scroll-top-icon bx bx-chevron-up"></i>
    </a>


    <!-- Vendor Scripts -->
    <script src="{{asset('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js')}}"></script>
    <script src="{{asset('assets/vendor/swiper/swiper-bundle.min.js')}}"></script>
    <script src="{{asset('assets/vendor/lightgallery/lightgallery.min.js')}}"></script>
    <script src="{{asset('assets/vendor/lightgallery/plugins/video/lg-video.min.js')}}"></script>

@livewireScripts
    <!-- Main Theme Script -->
    <script src="{{asset('assets/js/theme.min.js')}}"></script>
  </body>
</html>