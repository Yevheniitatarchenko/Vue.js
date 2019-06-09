<template>
  <section id="one_2" class="comment">
    <div class="wrapper">

      <div class="write">
        <div class="write__title">
          <h2>Write comment</h2>
        </div>
        <div class="write__form">
          <form 
            class="form"
            @submit.prevent="handleSubmit"
          >
            <div class="form__text">
              <input 
                type="text" 
                placeholder="Title"
                name="title"
                v-validate="validations.title"
                v-model="form.title"
              />
              <span class="error">{{ errors.first('title') }}</span>
            </div>

            <div class="form__comment form__text">
              <input 
                type="text" 
                placeholder="Your comment"
                name="comment"
                v-validate="validations.comment"
                v-model="form.body"
              />
              <span class="error">{{ errors.first('comment') }}</span>
            </div>

						<button class="button">Send</button>
					</form>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'HomePage',
  data () {
    return {
      form: {
        title: '',
        body: ''
      },

      validations: {
        title: {
          required: true,
          max: '20'
        },

        comment: {
          required: true,
          max: '2000'
        },
      }
    }
  },

  methods: {
    handleSubmit() {
      this.addComment(this.form)
      this.form = {
        title: '',
        body: '',
      }
		},
		...mapActions('comment', [
				'addComment'
		]),
	}
}
</script>


<style lang="scss" scoped>
.comment {
  padding-top: 140px;
  padding-bottom: 145px;
  background: #1d1e25;
  color: #fff;
  .write {
    display: flex;
    &__title {
      width: 23.3%;
      padding-left: 8px;
      h2 {
        font-size: 55px;
        line-height: 49px;
        margin: -6px 0px 0px 7px;
        font-family: 'Sofia Pro Bold';
        margin: 0;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          bottom: -40px;
          height: 5px;
          width: 70px;
          left: 1px;
          background-color: #f9d10d;
        }
      }
    }
    &__form {
      width: 76.7%;
      margin-left: 180px;
    }
  }
}

.form {
  margin-top: 6px;
  input {
    background: transparent;
    padding: 15px 0 15px 19px;
    margin-bottom: 11px;
    width: 98%;
    border: #60e3a1 1px solid;
    border-radius: 3px;
    font-size: 16px;
    font-family: 'Sofia Pro Regular';
    color: #fff;
    &::placeholder {
      color: #60e3a1;
    }
    &:focus {
      border: #60e3a1 1px solid;
    }
  }
  &__comment {
    input {
      padding-bottom: 114px;
    }
    .button {
      margin-top: 2px;
    }
  }
}

.error {
  color: #f9d10d;
}

.form__text {
  margin-bottom: 4px;
}



@media only screen and (max-width : 320px) {
  .comment {
    padding-top: 76px !important;
    padding-bottom: 76px !important;
  }
}


</style>
