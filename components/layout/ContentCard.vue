<template>
  <div class="content-card">
    <slot name="content" />
  </div>
</template>

<style lang="scss">
  .content-card{
    display: flex;
    margin: 40px 0 0 0;
    background-color: white;
    border-radius: 10px;
    max-height: 500px;
    min-height: 400px;
    width: 100%;
  }

</style>
