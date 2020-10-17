<template>
  <b-container fluid>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-datetime-local">起床时间:</label>
      </b-col>
      <b-col sm="5">
        <b-form-datepicker id="datepicker-full-width" v-model="value" menu-class="w-100" calendar-width="50%" class="mb-2"></b-form-datepicker>
      </b-col>
      <b-col sm="5">
        <b-form-input id="input-datetime-local" menu-class="w-100" calendar-width="100%" class="mb-2" type="datetime-local"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="input-valid">Valid State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-valid" :state="true" placeholder="Valid input"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="input-invalid">Invalid State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-invalid" :state="false" placeholder="Invalid input"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'from'
}
</script>
<style scoped>
.datepicker,
.table-condensed {
  width: 500px;
  height: 500px;
}
</style>
