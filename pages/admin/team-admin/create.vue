<template>
<admin-form-page-template
  ref="formPage"
  :title="`${$route.params.id ? 'Uređivanje' : 'Kreiranje'} članova teama`"
  return-path="/admin/team-admin"
></admin-form-page-template>
</template>

<script>
export default {
  layout:'admin'
}
</script>
