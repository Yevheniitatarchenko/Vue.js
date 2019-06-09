<template>
  <div>
    <section class="lorem">
      <div class="wrapper">
        <div class="lorem__text">
          <h1>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry
          </h1>
        </div>
      </div>

      <div class="lorem__img">
        <img src="../assets/home.png" alt="image">
      </div>
    </section>

    <section id="one_1" class="about">
      <div class="wrapper">
        <div class="description">

          <div class="content description__we">
            <img src="../assets/we.png" alt="image">
            <h2>Who we are</h2>
            <div class="content__text">
              <p>• It is a long established fact that a reader will be distracted</p> 
              <p>• The readable content of a page when looking at its layout</p> 
              <p>• The point of using Lorem Ipsum</p>
              <p>• As opposed to using 'Content here, content here'.</p>
            </div>
          </div>

          <div class="content description__do">
            <div class="description__do-content">
              <img src="../assets/comp.png" alt="image">
              <h2>What we do</h2>
              <div class="content__text">
                <p>• Many desktop publishing packages and web page</p> 
                <p>• There are many variations of passages of Lorem Ipsum available, 
                  but the majority have </p> 
                <p>• Various versions have evolved over the years, sometimes by accident</p>
              </div>
            </div>
          </div>

          <div class="content description__technology">
            <img src="../assets/technology.png" alt="image">
            <h2>Technology</h2>
            <div class="content__text">
              <p>• The point of using Lorem Ipsum</p> 
              <p>• As opposed to using 'Content here, content here'</p> 
              <p>• Contrary to popular belief, Lorem Ipsum is not simply random text</p>
              <p>• A Latin professor at Hampden-Sydney College in Virginia</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <write-comment/>
  </div>
</template>

<script>
import WriteComment from './WriteComment'

export default {
  name: 'HomePage',
  
  components: {
    WriteComment
  },
}
</script>


<style lang="scss" scoped>
.lorem {
	&__text {
		padding: 59px 143px 71px 7px;
		h1 {
			margin: 7px 0px 0px 0;
      font-size: 70px;
      line-height: 74px;
      font-family: 'Sofia Pro Semi Bold';
			color: #111518;
		}
	}
	&__img {
		img {
			object-fit: cover;
      height: 100%;
      width: 100%;
			display: block;
		}
	}
}


.about {
	background: #f7f7f7;
	padding-top: 112px;
	padding-bottom: 74px;
	.description {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
}

.description {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	&__we {
    width: 26%;
    padding-left: 9px;
	}
	&__do {
		width: 48%;
		&-content {
			width: 231px;
			margin: auto;
		}
	}
	&__technology {
    width: 26%;
    padding-left: 22px;
	}
}

.content {
	img {
		object-fit: cover;
		margin-bottom: 15px;
	}
	h2 {
    font-size: 36px;
    font-family: 'Sofia Pro Bold';
		margin: 0px 0 28px 0;
	}
	&__text {
		p {
      font-size: 16px;
      font-family: 'Sofia Pro Regular';
			color: #101417;
			margin: 0 0 13px 0;
		}	
	}
}
</style>
