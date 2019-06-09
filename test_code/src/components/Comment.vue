<template>
  <section class="comment">
		<div class="wrapper">
			<div class="content">
				<button @click="goBack" class="button-img button-comment">Back to Comments</button>
				<div class="content__text">
					<h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br> <br> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.</p>
					<!-- <h1>{{ comment.title }}</h1>
					<p>{{ comment.body }}</p> -->
				</div>
				
				<div class="content__go">
					<h2>Lorem Ipsum is text of the typesetting industry</h2>
					<button @click="goBack" class="button-img">Back to homepage</button>
				</div>
				
			</div>
		</div>
		
	</section>
</template>

<script>
export default {
	computed: {
		id(){
			return this.$route.params.id;
		},
		comment(){
			return this.$store.getters[`comment/item`](this.id);
		}
	},
	methods: {
		goBack() {
      this.$router.push('/HomePage');
    }
  },

}
</script>

<style lang="scss" scoped>
.comment {
	margin-top: 89px;
	margin-bottom: 100px;
}
.content {
	padding: 0px 120px 0px 127px;
	&__text {
		h1 {
			font-size: 48px;
			line-height: 57px;
			color: #101417;
			font-family: 'Sofia Pro Bold';
			margin: 38px 0px 0px 1px;
		}
		p {
			font-size: 16px;
			line-height: 28px;
			margin: 43px 0px 0px 1px;
			color: #101417;
			font-family: 'Sofia Pro Regular';
		}
	}
	&__go {
		text-align: center;
    font-family: 'Sofia Pro Semi Bold';
    margin: 184px 0px 0px 5px;
		h2 {
			margin: 0px 0 39px 0px;
		}
		.button-img {
			padding: 16px 25px;
    	margin-left: 7px;
		}
	}
}

.content__contact {
	p {
		font-size: 16px;
	}
} 

.content__text {
	p {
    font-size: 14px;
    margin-top: 12px;
	}
} 

@media only screen and (max-width : 768px) {
	.content__text h1 {
    font-size: 42px;
    line-height: 49px;
	}	
	.content__go {
    margin: 100px 0px 0px 5px;
	}
}

@media only screen and (max-width : 480px) {
	.content {
    padding: 0px 48px 0px 48px;
	}
	.content__text h1 {
    font-size: 31px;
    line-height: 40px;
	}
	.content__go {
    margin: 79px 0px 0px 4px;
	}
	.comment {
    margin-top: 51px;
    margin-bottom: 90px;
	}
}

@media only screen and (max-width : 320px) {
	.comment {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
	}
	.content__text h1 {
    font-size: 24px;
    line-height: 31px;
	}
	.content__text p {
    font-size: 13px !important;
	}
}



</style>
