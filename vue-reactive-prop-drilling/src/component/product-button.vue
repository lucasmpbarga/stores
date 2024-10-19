<template>
  <div style="display: flex; gap: 16px">
    <p>{{ label }}</p>
    <p>Price: ${{ price }}</p>
    <button @click="handleClick">Add</button>
  </div>
</template>

<script>
export default {
  name: "ProductButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  setup(props) {
    const handleClick = () => {
      if (props.onClick) {
        props.onClick(props.label, props.price);
      }
    };

    return {
      handleClick,
    };
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
