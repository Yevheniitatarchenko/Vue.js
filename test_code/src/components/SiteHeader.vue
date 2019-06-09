<template>
  <header class="header header_sm">
    <div class="header__logo">
      <img src="../assets/logo.png" alt="logo">
    </div>

		<div class="header__menu menu_sm">
      <ul>
				<scrollactive class="my-nav">
					<li><a href="#one_1">About Use</a></li>
					<li><a href="#one_2">Write Comment</a></li>
					<router-link v-for="(item, index) in items"
						:key="index"
						:to="item.url"
						tag="li"
					>
						<a>{{ item.text }}</a>
					</router-link>
				</scrollactive>
      </ul>
		</div>

		<div id="menuToggle">
			<input type="checkbox" />
			
			<span></span>
			<span></span>
			<span></span>
			<ul id="menu" class="header__menu">
				<scrollactive>
				<li><a href="#one_1">About Use</a></li>
				<li><a href="#one_2">Write Comment</a></li>
				<router-link v-for="(item, index) in items"
						:key="index"
						:to="item.url"
						tag="li"
					>
						<a>{{ item.text }}</a>
					</router-link>
				</scrollactive>
			</ul>
		</div>

	</header>
</template>

<script>
 import {mapGetters} from 'vuex';

  export default {
    computed: {
			menuList() {
				return this.$store.getters['menu/items'];
			},
      ...mapGetters('menu', [
        'items'
      ]),
    }
  }
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	padding: 49px 33px 0px 50px;
	height: 66px;
}

.header__logo {
	img {
		object-fit: cover;
	}
}

.header__menu {
	padding-top: 23px;
	ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}
		li {
			margin: 0;
			padding: 0;
			margin-right: 33px;
			&:last-child {
				margin-right: 0;
			}
		}
			a {
				text-decoration: none;
				font-size: 14px;
				font-family: 'Sofia Pro Medium';
				text-transform: uppercase;
				vertical-align: 70px;
				letter-spacing: 1px;
				color: #111518;
				position: relative;
				&:focus {
					transition: all 0.2s;
					&::before{
						content: '';
						position: absolute;
						top: -20px;
						height: 2px;
						width: 100%;
						background-color: #f9d10d;
					}
				}
			}
}

.my-nav {
	display: flex;
}






#menuToggle {
  display: none;
  position: relative;
  top: 6px;
  z-index: 1;
  user-select: none;
}

#menuToggle input {
  display: none;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}


#menuToggle span {
	display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}


#menu {
	position: absolute;
	width: 238px;
  margin: -53px 44px 44px -212px;
	padding-top: 85px;
	padding-bottom: 12px;
	border-radius: 100px 0 0 100px;
	background: #f7f7f7;
	list-style-type: none;
  transform-origin: 0% 0%;
	//transform: translate(100%, 0);
	transform: translateY(-300px);
	transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
	li {
		margin: -61px 0;
	}
	a {
		&:focus {
			&::before{
				top: 18px;
				height: 2px;
			}
		}
	}
}


#menuToggle input:checked ~ ul {
  transform: none;
}


@media only screen and (max-width : 1200px) {
	#menuToggle {
		display: block;
	}

	#menuToggle input { 
		display: block;
	}
}


</style>
