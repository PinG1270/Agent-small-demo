// elementui 按需导入的插件
import Vue from 'vue'
import { Icon, Form, FormItem, Input, Button, Message, MessageBox,Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Icon);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;