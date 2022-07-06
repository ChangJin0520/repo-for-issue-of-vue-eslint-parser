<template>
  <span>test</span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'TestComponent'
})
export default class TestComponent extends Vue {
    [x: string]: any;
}
</script>

<style lang="less" scoped>
</style>
