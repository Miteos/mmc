<template>
  <div style="height: 100%;width: 100%;">
    <iframe
      :src="
          `https://maps.google.com/maps?q=45.3495423,19.00364079999997&z=14&amp;output=embed`
        "
      class="google-map"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>

</template>

<style lang="scss">
.google-map{
  display: block;
  width: 100%;
  height: 400px;
  padding:20px;

}

</style>
