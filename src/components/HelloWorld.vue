<template>
  <h2 class="!mt-0">{{ props.msg }}</h2>
  <div class="flex flex-col gap-y-1 place-items-start">
    <button class="btn-primary btn-small" @click="increment">count is: {{ count }}</button>
    <button class="btn-primary" @click="increment">count is: {{ count }}</button>
    <button class="btn-primary btn-large" @click="increment">count is: {{ count }}</button>
  </div>
  <div class="flex flex-col gap-y-1 place-items-start">
    <button class="btn-outline-primary btn-small" @click="increment">count is: {{ count }}</button>
    <button class="btn-outline-primary" @click="increment">count is: {{ count }}</button>
    <button class="btn-outline-primary btn-large" @click="increment">count is: {{ count }}</button>
  </div>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore, Mutation } from '@/store/index';

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
    optionalProp: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const store = useStore();
    const count = computed(() => store.state.count);

    const increment = () => {
      store.commit(Mutation.INCREMENT, 1);
    };
    return {
      count,
      props,
      increment,
    };
  },
});
</script>
