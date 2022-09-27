<script>
export default {
  props: { 
    text: {
      type: String,
      required: true
    }
  },
}
</script>

<template>
  <div class="tooltip-container">
    <slot />
    <div
      class="tooltip"
    >
      <span
        class="text"
      >{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
.tooltip-container { 
  position: relative;
  display: inline-block;
  margin:100px;
}

.tooltip-container:hover .tooltip{
  opacity: 1;

}

.tooltip { 
  color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 2px;

  width: 200px;
  bottom: 100%;
  left: 50%;
  margin-left: -100px;

  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;

  background: #000000;
}

.text::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #000000 transparent transparent transparent;

}
</style>