<template>
  <admin-form-page-template
    ref="formPage"
    :title="`${$route.params.id ? 'Uređivanje' : 'Kreiranje'} posla`"
    return-path="/admin/poslovi-admin"
  ></admin-form-page-template>
</template>

<script>
export default {
  layout:'admin'
}
</script>
