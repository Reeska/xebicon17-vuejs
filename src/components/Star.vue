<template>
  <div class="star-rating">
    <label
        class="star-rating__star"
        :class="{'is-selected': favorite, 'is-hover': favorite, 'is-disabled': !favorite}"
    >
      <input
          class="star-rating star-rating__checkbox"
          type="checkbox"
          :value="favorite"
          @change="starChange"
          :disabled="disabled"
      />★
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  favorite: Boolean,
  disabled: Boolean,
});
const emit = defineEmits(['onChange'])

const starChange = () => {
  emit('onChange', !props.favorite)
}
</script>

<style lang="scss" scoped>
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
  cursor: pointer;
}

</style>
