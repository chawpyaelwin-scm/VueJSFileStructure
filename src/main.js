import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./stores/index";
// import "./registerServiceWorker";
import sanitizeHTML from "sanitize-html";

import ja from "element-ui/lib/locale/lang/ja";
import locale from "element-ui/lib/locale";
locale.use(ja);

import "element-ui/lib/theme-chalk/index.css";

// ElementUi
import Tooltip from "element-ui/lib/tooltip";
import Table from "element-ui/lib/table";
import TableColumn from "element-ui/lib/table-column";
import Row from "element-ui/lib/row";
import Col from "element-ui/lib/col";
import DatePicker from "element-ui/lib/date-picker";
import Button from "element-ui/lib/button";
import Dropdown from "element-ui/lib/dropdown";
import DropdownMenu from "element-ui/lib/dropdown-menu";
import DropdownItem from "element-ui/lib/dropdown-item";
import Form from "element-ui/lib/form";
import FormItem from "element-ui/lib/form-item";
import Dialog from "element-ui/lib/dialog";
import Input from "element-ui/lib/input";
import Checkbox from "element-ui/lib/checkbox";
import CheckboxGroup from "element-ui/lib/checkbox-group";
import Tabs from "element-ui/lib/tabs";
import TabPane from "element-ui/lib/tab-pane";
import Radio from "element-ui/lib/radio";
import RadioGroup from "element-ui/lib/radio-group";
import Divider from "element-ui/lib/divider";
import Select from "element-ui/lib/select";
import Option from "element-ui/lib/option";
import Tag from "element-ui/lib/tag";
import Switch from "element-ui/lib/switch";
import Container from "element-ui/lib/container";
import Main from "element-ui/lib/main";
import Loading from "element-ui/lib/loading";
import Collapse from "element-ui/lib/collapse";
import CollapseItem from "element-ui/lib/collapse-item";
import Menu from "element-ui/lib/menu";
import MenuItem from "element-ui/lib/menu-item";
import SubMenu from "element-ui/lib/submenu";
import Steps from "element-ui/lib/steps";
import Step from "element-ui/lib/step";
import Card from "element-ui/lib/card";
import Upload from "element-ui/lib/upload";
import Notification from "element-ui/lib/notification";
import Badge from "element-ui/lib/badge";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Tooltip);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Divider);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tag);
Vue.use(Switch);
Vue.use(Container);
Vue.use(Main);
Vue.use(Loading);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Badge);

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(SubMenu);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Card);
Vue.use(Upload);
Vue.prototype.$notify = Notification;
// amplify
const AMPLIFY_CONFIG = {
  identityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
  region: process.env.VUE_APP_REGION,
  userPoolId: process.env.VUE_APP_USER_POOL_ID,
  userPoolWebClientId: process.env.VUE_APP_USER_POOL_WEB_CLIENT_ID
};
import Amplify from "aws-amplify";
Amplify.configure(AMPLIFY_CONFIG);

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/pro-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/pro-regular-svg-icons";
import {
  faChevronRight,
  faChevronLeft,
  faBell,
  faCommentDots,
  faCircle,
  faTriangle,
  faTimes,
  faAngleLeft,
  faHome,
  faClipboardList,
  faStoreAlt,
  faBells,
  faComment,
  faCheck
} from "@fortawesome/pro-light-svg-icons";

// import { faCheck } from "@fortawesome/pro-light-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faChevronRight,
  faChevronLeft,
  faBell,
  faCommentDots,
  faCircle,
  faTriangle,
  faTimes,
  faAngleLeft,
  faHome,
  faClipboardList,
  faStoreAlt,
  faBells,
  faComment,
  faCheck
);
Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.prototype.$sanitize = sanitizeHTML;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
