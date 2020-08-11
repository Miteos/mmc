<template>
  <div class=" nav-wrapper">
    <nav>
      <nuxt-link to="/">
        <img src="@/static/images/main-logo.png" alt="logo" />
      </nuxt-link>
      <ul>
        <li v-for="l in links"><nuxt-link :to="l.to">{{l.name}}</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        links:[
          {name: 'Contact us', to:'/contact-us'},
          {name: 'About us', to:'/about-us'},
          {name: 'Documents', to:'/documents'},
          {name: 'Gallery', to:'/gallery'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 2rem;
    max-width: 150rem;
    width: 90%;
    & img {
      max-height: 100px;
    }
  }

  .nav-wrapper{
    width: 100%;
    background-color: white;
  }
  .nav-title{
    font-size: 4rem;
    font-weight: 300;
    transform: translateX(-100rem);
    animation: slideIn .5s forwards;
    color: green;
  }
  nav ul{
    display: flex;
  }

  nav ul li{
    list-style: none;
    cursor:pointer;
  }
  nav ul li a{
    padding: 1.5rem 0;
    font-size: 18px;
    margin: 0 3rem;
    position: relative;
    letter-spacing: 2px;
    color:black;
  }

  nav ul li a:last-child{
    margin-right: 0;
  }

  nav ul li a::before,
  nav ul li a::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #77BE43;
    left: 0;
    transform: scaleX(0);
    transition: all .5s;
  }

  nav ul li a::before{
    top: 0;
    transform-origin: left;
  }

  nav ul li a::after{
    bottom: 0;
    transform-origin: right;
  }

  nav ul li a:hover::before,
  nav ul li a:hover::after{
    transform: scaleX(1);
  }

  @keyframes slideIn {
    from{

    }
    to{
      transform: translateX(0);
    }
  }
</style>
