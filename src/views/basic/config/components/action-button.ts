import { Button } from '@arco-design/web-vue';
export default {
  components: {
    Button,
  },
  template: `
        <div>        
            <Button type="text" status="primary" v-on:click="clickEvent">设置</Button>
        </div>
    `,
  methods: {
    clickEvent(){
      console.log(this.params, 'this.params');
    }
  },
};
