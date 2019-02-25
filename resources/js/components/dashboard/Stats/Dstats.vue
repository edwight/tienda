<template>
	<div class="row">
	    <div class="col-lg-3 col-6">
	      <!-- small box -->
	      <div class="small-box bg-aqua">
	        <div class="inner">
	          <h3>150</h3>

	          <p>New Orders</p>
	        </div>
	        <div class="icon">
	          <i class="fa fa-shopping-cart"></i>
	        </div>
	        <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
	      </div>
	    </div>
	    <!-- ./col -->
	    <div class="col-lg-3 col-6">
	      <!-- small box -->
	      <div class="small-box bg-green">
	        <div class="inner">
	          <h3>53<sup style="font-size: 20px">%</sup></h3>

	          <p>Bounce Rate</p>
	        </div>
	        <div class="icon">
	          <i class="ion ion-stats-bars"></i>
	        </div>
	        <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
	      </div>
	    </div>
	    <!-- ./col -->
	    <div class="col-lg-3 col-6">
	      <!-- small box -->
	      <div class="small-box bg-yellow">
	        <div class="inner">
	          <h3>44</h3>

	          <p>User Registrations</p>
	        </div>
	        <div class="icon">
	          <i class="fa fa-user-plus"></i>
	        </div>
	        <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
	      </div>
	    </div>
	    <!-- ./col -->
	    <div class="col-lg-3 col-6">
	      <!-- small box -->
	      <div class="small-box bg-red">
	        <div class="inner">
	          <h3>65</h3>

	          <p>Unique Visitors</p>
	        </div>
	        <div class="icon">
	          <i class="ion ion-pie-graph"></i>
	        </div>
	        <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
	      </div>
	    </div>
	    <!-- ./col -->
    </div>
</template>
<script>
	export default{
		name:'Dstats',
	}
</script>
<style>
	.bg-aqua {
    	background-color: #00c0ef !important;
	}
	.bg-green{
    	background-color: #00a65a !important;
	}
	.bg-yellow {
    	background-color: #f39c12 !important;
	}
	.small-box>.inner {
    	padding: 10px;
	}
	.small-box h3, .small-box p {
    	z-index: 5;
    	color: #fff !important;
	}
	.small-box h3 {
	    font-size: 38px;
	    font-weight: bold;
	    margin: 0 0 10px 0;
	    white-space: nowrap;
	    padding: 0;
	}
	.small-box p {
    	font-size: 15px;
	}
	.small-box .icon {
	    -webkit-transition: all .3s linear;
	    -o-transition: all .3s linear;
	    transition: all .3s linear;
	    position: absolute;
	    top: -10px;
	    right: 10px;
	    z-index: 0;
	    font-size: 90px;
	    color: rgba(0,0,0,0.15);
	}
	.small-box>.small-box-footer {
	    position: relative;
	    text-align: center;
	    padding: 3px 0;
	    color: #fff;
	    color: rgba(255,255,255,0.8);
	    display: block;
	    z-index: 10;
	    background: rgba(0,0,0,0.1);
	    text-decoration: none;
	}
</style>