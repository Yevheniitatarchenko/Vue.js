<template>
  <section class="comments">
		<div class="wrapper">
			<div class="comment">
				<h1>Comments</h1>
				<div class="column">

					<div class="column__left tabs">
						<div 
							:key="item.id"
							v-for="item in lalka"
							class="tabs__content"
						>
							<div v-if="us === item.id">
								<input
									type="text"
									v-model="item.title"
								>
							</div>
							<h2 v-else>{{ item.title }}</h2>
							<div v-if="us === item.id">
								<input
									type="text"
									v-model="item.body"
								>
							</div>
							<p v-else>{{ item.body }}</p>
							<div class="btn-flex">
								<router-link
									tag="button"
									class="button"
									:to="`/comments/` + item.id"
								>
									Read more
								</router-link>
								<div class="btn-edit button-flex" v-if="us === item.id">
									<button class="button" @click="_editUser(item)">Save</button>
									<button
										class="button"
										@click="us = null"
									>Cancel</button>
								</div>
								<div class="btn-edit button-flex" v-else>
									<button class="button edit" @click="editMode(item.id)">Edit</button>
									<button class="button edit" @click="deleteComment(item.id)">Delete</button>
								</div>
							</div>
						</div>
						<!-- <div class="tabs__content">
							<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<router-link
								tag="button"
								class="button"
								:to="`/comments/`"
							>
								Read more
							</router-link>
						</div>
						<div class="tabs__content">
							<h2>Where does it come from?</h2>
							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professorat Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
							<router-link
								tag="button"
								class="button"
								:to="`/comments/`"
							>
								Read more
							</router-link>
						</div>
						<div class="tabs__content">
							<h2>If you are going to use a passage</h2>
							<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingembarrassing hidden in the middle of text.</p>
							<router-link
								tag="button"
								class="button"
								:to="`/comments/`"
							>
								Read more
							</router-link>
						</div> -->
					</div>

					<div class="column__right tabs">
						<!-- <div 
							:key="item.id"
							v-for="item in lalka"
							class="tabs__content"
						>
							<div v-if="us === item.id">
								<input
									type="text"
									v-model="item.title"
								>
							</div>
							<h2 v-else>{{ item.title }}</h2>
							<div v-if="us === item.id">
								<input
									type="text"
									v-model="item.body"
								>
							</div>
							<p v-else>{{ item.body }}</p>
							<div class="btn-flex">
								<router-link
									tag="button"
									class="button"
									:to="`/comments/` + item.id"
								>
									Read more
								</router-link>
								<div class="btn-edit button-flex" v-if="us === item.id">
									<button class="button edit" @click="_editUser(item)">Save</button>
									<button
										class="button edit"
										@click="us = null"
									>Cancel</button>
								</div>
								<div class="btn-edit button-flex" v-else>
									<button class="button edit" @click="editMode(item.id)">Edit</button>
									<button class="button edit" @click="deleteComment(item.id)">Delete</button>
								</div>
							</div>
						</div> -->
						<!-- <div class="tabs__content">
							<h2>Why do we use it?</h2>
							<p>Itis a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
							<router-link
								tag="button"
								class="button"
								:to="`/comments/`"
							>
								Read more
							</router-link>
						</div>
						<div class="tabs__content">
							<h2>There are many variations of passages of Lorem Ipsum available.</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<router-link
								tag="button"
								class="button"
								:to="`/comments/`"
							>
								Read more
							</router-link>
						</div>
						<div class="tabs__content">
							<h2>
								What is Lorem Ipsum?
							</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
							<router-link
								tag="button"
								class="button"
								:to="`/comments/`"
							>
								Read more
							</router-link>
						</div> -->

						
					</div>

				</div>
				
				
				<div class="comment__go">
					<h2>Lorem Ipsum is text of the typesetting industry</h2>
					<button @click="goBack" class="button-img">Back to homepage</button>
				</div>
				
			</div>
		</div>
		
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
			us: null,
			lalka: ''
    }
  },

	created() {
		this.$store.dispatch('comment/getComments');
		this.onStateClick();
		console.log(this.lalka);
	},

	computed: {
		...mapGetters('comment', [
			'comments'
		]),
	},

  methods: {
    editMode(id) {
      this.us = id;
    },
    _editUser(item) {
      this.editComment(item.id, item);
      this.us = null;
      console.log(item);
		},
		onStateClick() {
			this.lalka = [...this.comments];
		},
		goBack() {
      this.$router.push('/HomePage');
    },
    ...mapActions('comment', [
				'deleteComment',
        'editComment'
		]),
  },

}
</script>

<style lang="scss" scoped>
.comments {
	margin-top: 55px;
  margin-bottom: 100px;
  padding-left: 16px;
}
.comment {
	h1 {
		margin: 0 0 83px 0;
    font-size: 70px;
    font-family: 'Sofia Pro Semi Bold';
	}
	.column {
		display: flex;
		&__left {
			width: 483px;
    	padding-right: 20px;
		}
		&__right {
			width: 483px;
			padding-left: 20px;
		}
	}
  .tabs {
		&__content {
			box-shadow:13px 13px 30px 0px rgba(17, 21, 24, 0.1);  
			padding: 38px 32px 45px 29px;
    	margin-bottom: 42px;
    	border-radius: 4px;
			h2 {
				margin: 0;
    		font-size: 20px;
    		font-family: 'OpenSans-SemiBold';
			}
			p {
				margin: 18px 0px 22px 0;
				font-size: 14px;
				color: #888888;
				line-height: 24px;
				font-family: 'OpenSans-SemiBold';
			}
			.button {
				padding: 16px 36px;
			}
			.btn-flex {
				display: flex;
				.btn-edit {
					display: flex;
				}
				.button {
					margin-right: 15px;
				}
			}
			input {
				background: transparent;
				padding: 21px 0 20px 19px;
				margin-bottom: 15px;
				width: 97.1%;
				border: #60e3a1 1px solid;
				border-radius: 3px;
				font-size: 16px;
				color: #101417;
				&::placeholder {
					color: #60e3a1;
					padding: 0;
					margin: 0;
				}
				&:focus {
					border: #60e3a1 1px solid;
				}
			}
		}
	}
		

	&__go {
		text-align: center;
    margin-top: 73px;
		h2 {
			margin: 0 0 39px 0px;
    	font-size: 24px;
    	font-family: 'Sofia Pro Semi Bold';
		}
		.button-img {
			padding: 15px 26px;
		}
	}
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
	.column {
		flex-wrap: wrap;
		padding-left: 134px;
	}

	.comment {
		.column__left {
    padding-right: 0px;
		}
		.column__right {
    	padding-left: 0px;
		}
		h1 {
			margin: 0 0 83px 134px;
 		}
	}
}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
	.header {
		padding: 0px;
	}
	.comment h1 {
		margin: 0 0 55px 37px;
		font-size: 57px;
	}
	.column {
    padding-left: 37px;
	}
	.comment .column__left[data-v-5847e424] {
    width: 380px;
    padding-right: 20px;
	}
	.comment .column__left {
    width: 380px;
    padding-right: 0px;
	}	
	.comment .column__right {
    width: 380px;
	}
	.comment .tabs__content .button {
    padding: 4px 28px;
	}
}


@media only screen and (max-width: 320px) {
	.comment {
		padding-top: 0px!important;
		padding-bottom: 0px!important;
		.column__left {
			padding-right: 25px!important;
		}
		.column__right {
			padding-right: 25px;
		}
		h1 {
			margin: 0 0 55px 30px;
			font-size: 48px;
		}
	}
	.column {
    padding-left: 14px;
	}
	.comment__go {
		margin-left: -10px; 
		h2 {
    	font-size: 21px;
		}
	}
	.comment__go {
    margin-top: 36px;
	}
	.button-flex {
		display: inline-grid!important;
	} 
}


</style>
