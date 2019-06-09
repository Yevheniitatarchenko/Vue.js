<template>
  <section class="footer">
		<div class="content footer__content">
			<div class="content__contact">
				<p>mail@mailtest.com</p>
				<p>+30-6977664062 </p>
			</div>
			<div class="content__test">
				<p>Copyright © 2019 Test All Rights Reserved.</p>
			</div>
		</div>
		
	</section>
</template>


<style lang="scss" scoped>
.footer {
	background: #1d1e25;
	color: #fff;
	&__content {
		max-width: 1266px;
		width: 100%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		padding-bottom: 30px;
		padding-top: 27px;
		padding-left: 16px;
		border-top: 1px solid #2b2c36;
		
	}
}

.content {
	p {
		margin: -3px 0px 0px 0px;
	}
	&__contact {
		p {
			font-size: 16px;
			margin-bottom: 16px;
			font-family: 'Sofia Pro Regular';
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
	&__test {
		p {
			font-size: 13px;
			font-family: 'Sofia Pro Regular';
			color: #4a4d5e;
			margin-top: 15px;

		}
	}
}

</style>
