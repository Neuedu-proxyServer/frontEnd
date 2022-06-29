import {
  Container,
  Header,
  Main,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  RadioGroup,
  RadioButton
} from 'element-ui';
import {
  Input as AntInput,
  Button as AntButton,
  Icon as AntIcon
} from 'ant-design-vue';
export default {
  install(Vue) {

    //element-UI
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Main)
    Vue.use(Aside)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItemGroup)
    Vue.use(MenuItem)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Card)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(RadioGroup)
    Vue.use(RadioButton)
    //antd
    Vue.use(AntInput)
    Vue.use(AntButton)
    Vue.use(AntIcon)
  }
}