<template>
  <h2 class="!mt-0">{{ props.msg }}</h2>
  <button class="btn-primary" @click="increment">count is: {{ count }}</button>
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
