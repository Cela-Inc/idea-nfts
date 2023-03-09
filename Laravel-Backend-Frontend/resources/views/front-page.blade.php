@extends('layouts.app')
@push('custom-css')
<link rel="stylesheet" media="screen" href="{{asset('assets/css/home.css')}}">
@endpush
@section('content')
<!-- Hero section -->
<div class="banner">
	<div class="container">
	<div class="row">
		<div class="col-md-6">			
			<h1>Create &amp; Contribute <br/> to IDEAs through <br/> 3D NFTs.</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
			<a href="" class="btn btn-light me-4 mb-3">Create Project</a>
			<a href="" class="btn btn-warning mb-3">How It Works</a>
			<span class="b_i_1"><img src="{{ asset('home/images/b_i_1.png')}}" class="scaling_animation"></span>
			<span class="b_i_2"><img src="{{ asset('home/images/b_i_2.png')}}" class=""></span>
			<span class="b_i_3"><img src="{{ asset('home/images/b_i_3.png')}}" class="floating_animation"></span>
		</div>		
		<div class="col-md-6">			
			<div style="position: relative;">
				<div class="boxy">
					<div class="boxy_img">
						<!-- Use image dimensions of 340px width and 342px height -->
						<img src="{{ asset('home/images/m1.jpg')}}" class="img-fluid">
						<img src="{{ asset('home/images/bitcoin.svg')}}" width="36px" height="36px" style="position: absolute; bottom: 10px; left: 20px;">
						<img src="{{ asset('home/images/logo.svg')}}" width="96px" height="20px" style="position: absolute; bottom: 10px; right: 20px;">
					</div>
					<span class="boxy_txt_1">Helix Auto</span>
					<span class="boxy_txt_2">1.4K Owners</span>
				</div>			
				<div class="boxy2">
					<!-- Use image dimensions of 210px width and 158px height -->
					<img src="{{ asset('home/images/zebra.jpg')}}" class="img-fluid">
					<span class="boxy2_txt_1">Humanity Rocks</span>
					<span class="boxy2_txt_2"><img src="{{ asset('home/images/heart.svg')}}" width="14px" height="14px" vspace="20"> 1.4K </span>
					<span class="boxy2_txt_3"><img src="{{ asset('home/images/ethereum.svg')}}" width="20px" height="20px" vspace="20"> 1.4K </span>
				</div>
			</div>
		</div>
		</div>
	</div>
	</div>
</div>

<div class="skew-section">
	 <span class="strawberry">.Creativity</span>
	 <span class="blue">.Innovation</span>
	 <span class="strawberry">.web3</span>
	 <span class="jaffa">.IDEA NFT<small>s</small></span>
	 <span class="strawberry">.3D NFTs</span>
	 <span class="chateau-green">.Community</span>
</div>

<div class="divider">
	<img src="{{ asset('home/images/divider.png')}}" class="img-fluid">
</div>

<section>
	<div class="container">
		<div class="row">
			<div class="col-md-10">
				<!-- Swiper  -->
				<div class="swiper-container two" >
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="slider-image">
								<img src="https://theme-land.com/sapp/demo/assets/img/screenshots/3.jpg" alt="slide 1">
							</div>
						</div>
						<div class="swiper-slide">
							<div class="slider-image">
								<img src="https://theme-land.com/sapp/demo/assets/img/screenshots/1.jpg" alt="slide 2">
							</div>
						</div>
						<div class="swiper-slide">
							<div class="slider-image">
								<img src="https://theme-land.com/sapp/demo/assets/img/screenshots/5.jpg" alt="slide 3">
							</div>
						</div>
						<div class="swiper-slide">
							<div class="slider-image">
								<img src="https://theme-land.com/sapp/demo/assets/img/screenshots/4.jpg" alt="slide 4">
							</div>
						</div>
						<div class="swiper-slide">
							<div class="slider-image">
								<img src="https://theme-land.com/sapp/demo/assets/img/screenshots/2.jpg" alt="slide 5">
							</div>
						</div>
						<!-- Add Pagination -->
					</div>
					<div class="swiper-pagination"></div>
				</div>
				
			</div>
		</div>
	</div>
</section>
@endsection
@push('custom-scripts')
<!-- Initialize Swiper -->
  <script>
    var swiper = new Swiper( '.swiper-container.two', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 0,
			stretch: 100,
			depth: 150,
			modifier: 1.5,
			slideShadows : false,
		}
} );

  </script>
@endpush