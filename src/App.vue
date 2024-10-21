<template>
  <div id="app" class="d-flex flex-column">
    <header>
    <!-- META DATA -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

		<!--font-family-->
		<link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

		<!-- TITLE OF SITE -->
		<title>Travel</title>

		<!-- favicon img -->
		<link rel="shortcut icon" type="image/icon" href="./assets/logo/favicon.png"/>

		<!--font-awesome.min.css-->
		<link rel="stylesheet" href="./assets/css/font-awesome.min.css" />

		<!--animate.css-->
		<link rel="stylesheet" href="./assets/css/animate.css" />

		<!--hover.css-->
		<link rel="stylesheet" href="./assets/css/hover.min.css">

		<!--datepicker.css-->
		<link rel="stylesheet"  href="./assets/css/datepicker.css" >

		<!--owl.carousel.css-->
        <link rel="stylesheet" href="./assets/css/owl.carousel.min.css">
		<link rel="stylesheet" href="./assets/css/owl.theme.default.min.css"/>

		<!-- range css-->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

		<!--bootstrap.min.css-->
		<link rel="stylesheet" href="./assets/css/bootstrap.min.css" />

		<!-- bootsnav -->
		<link rel="stylesheet" href="./assets/css/bootsnav.css"/>

		<!--style.css-->
		<link rel="stylesheet" href="./assets/css/style.css" />

		<!--responsive.css-->
		<link rel="stylesheet" href="./assets/css/responsive.css" />
    

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
    <router-view class="flex-grow-1"></router-view>
  </header>
    <main>
        <HeaderMenu />
		<!-- <router-view /> -->
		<AboutPage />
        <TravelPage />
		<ServicePage />
		<PromotionPage />
		<NewPage />
		<SubPage />
		<AppFooter />
	</main>
</div>
</template>
  
<script>
import HeaderMenu from './components/HeaderMenu.vue';
import AppFooter from './components/AppFooter.vue'; 
import AboutPage from './components/AboutPage.vue'; 
import TravelPage from './components/TravelPage.vue';
import ServicePage from './components/ServicePage.vue';
import SubPage from './components/SubPage.vue';
import PromotionPage from './components/PromotionPage.vue';
import NewPage from './components/NewPage.vue';

export default {
  name: 'App',
  components: {
	HeaderMenu,
	AppFooter,
	AboutPage,
	TravelPage,
	ServicePage,
	SubPage,
	PromotionPage,
	NewPage,

  },
};
</script>

  


<style>
.background-image {
  width: 100%;
  height: auto;
}

.your-element {
  background-color: lightblue;
  padding: 10px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 15px;
}

nav li.active {
  font-weight: bold;
}
</style>
