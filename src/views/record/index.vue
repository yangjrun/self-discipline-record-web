<template>
  <!-- <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="标题记录:" label-for="input-1" description="标题记录"> </b-form-group>
      <b-form-group id="input-group-1" label="需要完成的内容:" label-for="input-1" description="需要完成的内容"> </b-form-group>
      <b-form-group id="input-group-1" label="批注（备注）:" label-for="input-1" description="批注（备注）"> </b-form-group>

      
      
      <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div> -->
  <b-container fluid>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <b-col sm="2">
          <label for="textarea-small">标题记录:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-1" v-model="form.title" required placeholder="标题记录"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col sm="2">
          <label for="textarea-small">需要完成的内容:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-1" v-model="form.content" required placeholder="需要完成的内容"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col sm="2">
          <label for="textarea-small">状态:</label>
        </b-col>
        <b-col sm="10">
          <b-form-select v-model="form.status" :options="options" size="sm"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col sm="2">
          <label for="textarea-small">批注（备注）:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea v-model="form.remark" id="textarea-small" size="sm" placeholder="批注（备注）"></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-2" align-h="end">
        <b-col sm="2">
          <b-button type="submit" variant="primary">确认</b-button>
          <b-button type="reset" variant="danger">清空</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        remark: '',
        status: ''
      },
      options: [
        { value: 'UNDOME', text: '未完成' },
        { value: 'COMPLETED', text: '已完成' }
      ],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$api.save('record', this.form)
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.content = ''
      this.form.remark = ''
      this.form.status = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style></style>
