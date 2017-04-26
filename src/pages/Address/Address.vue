<template>
<div class="fotile_address">
  <TitleWithNTALKER title="我的收货地址"></TitleWithNTALKER>
  <div class="btnAndForm">
    <a v-if="!editing" href="javascript:void(0);" class="addBtn" @click="toEdit">+&nbsp;&nbsp;添加新的收货地址</a>
    <form class="form" v-if="editing">
      <i class="iconfont icon-cha close" @click="closeEdit"></i>
      <div class="input-wrapper">
        <el-input placeholder="姓氏" style="width:250px;margin-right:10px;"></el-input>
        <el-input placeholder="名字" style="width:170px;"></el-input>
      </div>
      <div class="input-wrapper">
        <el-input placeholder="区号" style="width:90px;margin-right:10px;"></el-input>
        <el-input placeholder="联系号码" style="width:330px;"></el-input>
      </div>
      <div class="input-wrapper">
        <el-cascader :options="fotile_area" style="width:430px;" placeholder="选择省市区"></el-cascader>
      </div>
      <div class="input-wrapper">
        <el-input placeholder="区，街道编号／名称，楼宇名称" style="width:430px;"></el-input>
      </div>
      <div class="input-wrapper">
        <el-input placeholder="房间、套房、单元、楼层或街区" style="width:430px;"></el-input>
      </div>
      <div class="input-wrapper">
        <el-input placeholder="邮政编码" style="width:430px;"></el-input>
      </div>
      <div class="input-wrapper" style="margin-top:40px;">
        <el-checkbox>保存为默认收货地址</el-checkbox>
        <a href="javascript:void(0)" class="btnSave">保存新收货地址</a>
      </div>
    </form>
  </div>
  <table class="ft_table">
    <thead class="thead">
      <tr class="tr">
        <td class="td">姓名</td>
        <td class="td">电话</td>
        <td class="td">收货地址</td>
        <td class="td">邮编</td>
      </tr>
    </thead>
    <tbody class="tbody">
      <tr class="tr">
        <td class="td">王思聪</td>
        <td class="td">18616154465</td>
        <td class="td">七宝万科</td>
        <td class="td">201108</td>
      </tr>
      <tr class="tr">
        <td class="td">王健林</td>
        <td class="td">18616154465</td>
        <td class="td">七宝万科</td>
        <td class="td">201108</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import TitleWithNTALKER from '../../components/TitleWithNTALKER/TitleWithNTALKER.vue';
export default {
  data() {
    return {
      editing: false,
      fotile_area: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]
    }
  },
  methods: {
    toEdit() {
      this.editing = true;
    },
    closeEdit() {
      this.editing = false;
    }
  },
  components: {
    TitleWithNTALKER
  }
}
</script>

<style scoped lang="less">@import './index.less';</style>
