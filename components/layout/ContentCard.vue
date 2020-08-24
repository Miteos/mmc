<template>
  <div class="content-card">
    <slot name="content" />
  </div>
</template>

<style lang="scss">
  .content-card{
    display: flex !important;
    margin: 80px 0 0 0;
    background-color: white;
    border:1px solid #0092C8;
    border-radius: 10px;
    min-height: 400px;
    width: 100%;
    transition: 0.2s ease-in-out;
      &:hover{
        box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
        background-color: #0092C8;
        color: white;
      }
  }

</style>
