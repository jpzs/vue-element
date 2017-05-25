<template lang="html">
  <div id="aside" class="icons">
    <ul>
      <li v-for="item in menus">
        <router-link :to="item.to">
          <div class="aside-link-wrap flex center direction-column">
              <div>
                <svg> <use :href="item.icon"></use> </svg>
              </div>
              <div> {{item.name}} </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [
        {
          to: '/admin/current',
          icon: '#icon-write',
          name: '新建文章'
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
  .icons svg
    height: 20px
    width: 20px
  #aside
    width: 100px
    color: #fff
    background: #4f556e
    position: fixed
    top: 80px
    left: 0
    bottom: 0
    right: 0
    .aside-link-wrap
      width: 100%
      height: 100%
    svg
      margin-bottom: 12px
      fill: white
    ul
      margin: 0
      padding: 0
    ul li
      display: list-item
      text-align: center
      margin: 0
      height: 80px
      a
        color: #fff
        display: inline-block
        text-decoration: none
        width: 100%
        height: 100%
        &.router-link-active
          background: #454b64
          position: relative
          &:before
            position: absolute
            left: 0
            top: 0
            bottom: 0
            right: 0
            content: ''
            display: inline-block
            border-left: 3px solid #f8ff37

</style>
