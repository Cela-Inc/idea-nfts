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
    <!-- Main Theme Styles + Bootstrap -->
    <link rel="stylesheet" media="screen" href="{{asset('assets/css/theme.css')}}">    

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
  <body>
    <style type="text/css">
      .idea-brand{
        padding: 44px 24px;
        gap: 8px; 
        width: 100%;
        height: 200px;
        background: #081322;
      }
      .list-group-item-action{
        text-decoration: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        text-transform: capitalize;
        background: #0C192C;
        color: rgba(255, 255, 255, 0.72);
        box-shadow:unset;
      }
      .list-group-item-action.active,
      .list-group-item-action:hover,
      .list-group-item-action:focus {        
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.03);
        box-shadow:unset;
      }
      .up-next{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        font-variant: small-caps;
        /* black/dark */
        color: #000000;
      }
      .course-page-study .frame-949 {
  align-items: center;
  align-self: center;
  background-color: var(--white-2);
  border: 1px solid;
  border-color: var(--black-pearl);
  border-radius: 45px;
  display: flex;
  gap: 5px;
  height: 25px;
  margin-top: 1.0px;
  overflow: hidden;
  padding: 0 1px;
  width: 52px;
}

.course-page-study .overlap-group {
  align-items: flex-end;
  background-color: var(--black-pearl);
  border-radius: 45px 0px 0px 45px;
  display: flex;
  height: 23px;
  justify-content: flex-end;
  min-width: 26px;
  padding: 5px 6.0px;
}

.course-page-study .akar-iconssun {
  height: 12px;
  width: 12px;
}

.course-page-study .bxmoon {
  height: 12px;
  margin-top: 1.0px;
  width: 12px;
}
    </style>
    <!-- Main sidebar navigation -->
    <aside class="dark-mode">
      <div id="docsNav" class="offcanvas-lg offcanvas-start d-flex flex-column position-fixed top-0 start-0 vh-100 bg-dark border-end-lg" style="width: 300px; z-index: 1045; overflow: scroll;">
        <div class="offcanvas-header d-none d-md-block idea-brand">
          <a href="#" class="navbar-brand text-dark d-none d-lg-flex py-0">
             Understanding <br/>tokenomics
          </a>
          <!-- Warning progress bar -->
          <div class="progress my-3" style="height: 4px;">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="fs-sm mb-2">76% Complete</div>
        </div>
        <div class="offcanvas-body py-0 p-4">
          <div class="swiper-wrapper">
            <div class="swiper-slide h-auto">
              <div class="list-group list-group-flush mx-n4 pb-0">

                @livewire('course-study-sidebar') 

                route 

                <a href="{{url('course-multichoice')}}" class="list-group-item list-group-item-action border-0 py-2 px-4">Multichoice</a>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar end-0"></div>  
        </div>
        <div class="offcanvas-body border-top">
          <a href="{{url('courses')}}" class="btn btn-link w-100 text-light">
            <i class='bx bx-chevron-left fs-4 lh-1 me-1'></i> 
            &nbsp;Back to courses
          </a>
        </div>
      </div>
    </aside>

    <!-- Page container -->
    <main class="docs-container pt-5 pb-3 pb-lg-4">
      <div class="container-fluid px-xxl-8 px-lg-4 pt-4 pt-lg-5 pb-4">

        <h1 class="ps-lg-2 ps-xxl-0 mt-2 mt-lg-0 pt-4 pb-2 mb-3 mb-xl-4">Understanding tokenomics 
          <div class="frame-949 d-none">
              <div class="overlap-group">
                <img class="akar-iconssun" src="{{ asset('assets/img/icon/akar-icons-sun-1@2x.png')}}" alt="akar-icons:sun">
              </div>
              <img class="bxmoon" src="{{ asset('assets/img/icon/bx-moon-1@2x.png')}}" alt="bx:moon">
          </div>
        </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>

        <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.</p>

        <p>Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet</p>

        <div class="lesson-up-next w-100">
          <p class="up-next mb-0">Up Next</p>
          <a href="{{url('courses')}}" class="btn btn-link text-dark ps-0">
            Understanding tokenomics&nbsp; <i class='bx bx-right-arrow-alt fs-4 lh-1 ms-1'></i>            
          </a>
        </div>

      </div>
    </main>


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

    <!-- Main Theme Script -->
    <script src="{{asset('assets/js/theme.min.js')}}"></script>
  </body>
</html>