<template>
  <div class="content-card">
    <slot name="content" />
  </div>
</template>

<style lang="scss">
  .content-card{
    display: flex !important;
    margin: 80px 0;
    width: 100%;
    background-color: rgb(255 255 255);
    transition:  0.2s ease-in;
    border-radius: 10px;
      &:hover{
        box-shadow: 0 20px 80px 0 rgba(0,0,0,.05) !important;
        border-radius: 10px;
      }
  }

</style>
