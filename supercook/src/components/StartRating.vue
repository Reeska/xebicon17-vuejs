<template>
  <div class="star-rating">
    <label class="star-rating__star" v-for="rating in ratings"
           :class="{'is-selected': ((value >= rating) && value != null), 'is-hover': ((value_t >= rating) && value_t != null), 'is-disabled': disabled}"
           @click="set(rating)" @mouseover="star_over(rating)" @mouseout="star_out">
      <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name"
             v-model="value" :disabled="disabled">★
    </label>
  </div>
</template>
<script>
  export default {
    name: 'start-rating',
    props: {
      'name': String,
      'value': null,
      'id': String,
      'disabled': Boolean,
      'required': Boolean
    },
    data () {
      return {
        temp_value: null,
        value_t: null,
        ratings: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      /*
       * Behaviour of the stars on mouseover.
       */
      star_over (index) {
        if (!this.disabled) {
          this.temp_value = this.value_t
          this.value_t = index
          return this.value_t
        }
      },

      /*
       * Behaviour of the stars on mouseout.
       */
      star_out () {
        if (!this.disabled) {
          this.value_t = this.temp_value
          return this.value_t
        }
      },

      /*
       * Set the rating of the score
       */
      set (value) {
        if (!this.disabled) {
          // Make some call to a Laravel API using Vue.Resource
          this.temp_value = value
          this.value = value
          return this.value
        }
      }
    },
    components: {}
  }
</script>
<style lang="scss" scoped>
  /* style star ratting component */
  .star-rating__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
  .star-rating__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ABABAB;
    transition: color .2s ease-out;
  }
  .star-rating__star:hover {
    cursor: pointer;
  }
  .star-rating__star.is-selected,
  .star-rating__star.is-hover {
    color: #FFD700;
  }
  .star-rating__star.is-disabled:hover {
    cursor: default;
  }

</style>
