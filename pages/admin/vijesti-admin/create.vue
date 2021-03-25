<template>
  <admin-form-page-template
    ref="formPage"
    :title="`${$route.params.id ? 'Uređivanje' : 'Kreiranje'} vijesti`"
    return-path="/admin/vijesti-admin"
  ></admin-form-page-template>
  </template>

  <script>
    export default {
      layout:'admin'
    }
  </script>
