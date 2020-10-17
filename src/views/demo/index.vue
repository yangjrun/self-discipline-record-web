<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 px-1 position-fixed " id="sticky-sidebar" style="overflow-y:auto" :style="{ height: clientHeight + 'px' }">
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
      <div class="col offset-3" id="main" :style="{ height: clientHeight + 'px' }">
        <h1>Main Area</h1>

        <b-card title="Card title" sub-title="Card subtitle">
          <b-card-text> Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content. </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
        <b-card title="Card title" sub-title="Card subtitle">
          <b-card-text> Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content. </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
        <b-card title="Card title" sub-title="Card subtitle">
          <b-card-text> Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content. </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
        <b-card title="Card title" sub-title="Card subtitle">
          <b-card-text> Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content. </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data: function() {
    return {
      navbarHight: 56,
      clientHeight: 0
    }
  },
  created() {
    this.windowsListener()
  },
  methods: {
    windowsListener() {
      const resizeObserver = new ResizeObserver(entries => {
        this.clientHeight = document.documentElement.clientHeight
      })
      resizeObserver.observe(document.body)
      this.$once('hook:beforeDestroy', () => {
        resizeObserver.disconnect()
      })
    }
  }
}
</script>

<style>
ul li {
  list-style-type: none;
}
</style>
