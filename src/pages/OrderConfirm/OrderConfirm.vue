<template>
<div class="fotile_orderconfirm page-container">
  <div class="confirm_wrapper">
    <ul class="list">
      <li class="item editing">
        <div class="title">
          1/送货选项
          <a href="javascript:void(0)" class="toEdit">编辑</a>
        </div>
        <div class="content">
          <ul class="goodList">
            <li class="goodItem">
              <img class="img" src="//img001.efotile.com/201741312547875.JPG" width="270">
              <div class="text">
                <p class="nameDesc">方太水槽洗碗机 JBSD3T-Q6 （不带超声波）水槽+洗完机+果蔬净化机跨界三合一神器</p>
                <a href="javascript:void(0)" class="goodLink">查看产品详情</a>
              </div>
              <div class="price">¥ 6888.00</div>
            </li>
            <li class="goodItem">
              <img class="img" src="//img001.efotile.com/201741312547875.JPG" width="270">
              <div class="text">
                <p class="nameDesc">方太水槽洗碗机 JBSD3T-Q6 （不带超声波）水槽+洗完机+果蔬净化机跨界三合一神器</p>
                <a href="javascript:void(0)" class="goodLink">查看产品详情</a>
              </div>
              <div class="price">¥ 6888.00</div>
            </li>
          </ul>
          <div class="content-bottom">
            <div>
              <a href="javacript:void(0)" class="btn default">返回购物车</a>
              <a href="javacript:void(0)" class="btn default">在线咨询</a>
            </div>
            <div>
              <a href="javascript:void(0)" style="font-size:12px;text-decoration:underline;display:inline-block;margin-right:12px;">查看预约服务条款</a>
              <a href="javascript:void(0)" class="btn red">继续</a>
            </div>
          </div>
        </div>
      </li>
      <li class="item editing">
        <div class="title">
          2/送货地址
          <a href="javascript:void(0)" class="toEdit">编辑</a>
        </div>
        <div class="content">
          <div class="addressAndRules">
            <div class="address" style="display:block;">
              <h6>送货地址</h6>
              <div class="topInput-wrapper">
                <div class="input-wrapper">
                  <el-input placeholder="姓氏" style="width:250px;margin-right:10px;"></el-input>
                  <el-input placeholder="名字" style="width:170px;"></el-input>
                </div>
                <div class="input-wrapper">
                  <el-input placeholder="区号" style="width:90px;margin-right:10px;"></el-input>
                  <el-input placeholder="联系号码" style="width:330px;"></el-input>
                </div>
              </div>
              <div class="radio-wrapper">
                <el-radio class="radio" v-model="addressType" label="1">选择已有收货地址</el-radio>
                <el-radio class="radio" v-model="addressType" label="2">添加新的收货地址</el-radio>
              </div>
              <div class="select-wrapper" v-if="addressType==='1'">
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="(item,index) in options" :label="item.label" :value="item.value" :key="index"></el-option>
                </el-select>
              </div>
              <div class="addInput-wrapper" v-if="addressType==='2'">
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
              </div>
            </div>
            <div class="address edited" style="display:none;">
              <div class="content-label">送货地址</div>
              <div class="lines">
                <p>公司加</p>
                <p>18616154465</p>
                <p>上海／上海／黄埔</p>
                <p>哪儿哪儿哪儿</p>
                <p>201108</p>
              </div>
            </div>
            <div class="rules">
              <h6>送货政策 | <a href="javascript:void(0)">了解更多</a></h6>
              <ul>
                <li>签收时需要签名。</li>
                <li>如果您所在的城市不再下拉菜单中的城市范围内。我们目前无法送货。请<a href="javascript:void(0)">点击这里</a>查看您附近的方太授权经销商。</li>
                <li>送活时间按照送货至市中心地区进行估算。送货至边远地区可能需要更长时间。</li>
                <li>对于军事禁区，保税监管区或其他任何政府监管区域，（我们）将无法提供运送服务。</li>
                <li>送货时间：星期一至星期日 上午 8:30 至下午 5:30 （公众假期暂停交货）</li>
                <li>请<a href="javascript:void(0)">点击这里</a>查看“快速送货”的区域及付款时间详情。</li>
              </ul>
            </div>
          </div>
          <div class="content-bottom">
            <div>
              <a href="javacript:void(0)" class="btn default" style="display:inline-block;margin-right:12px;">在线咨询</a>
              <el-checkbox>保存为默认收货地址</el-checkbox>
            </div>
            <div>
              <a href="javascript:void(0)" class="btn red">继续</a>
            </div>
          </div>
        </div>
      </li>
      <li class="item editing">
        <div class="title">
          3/付款方式
          <a href="javascript:void(0)" class="toEdit">编辑</a>
        </div>
        <div class="content">
          <div class="payradio-wrapper">
            <div class="single-radio-wrapper">
              <el-radio class="radio" v-model="payType" label="1">
                <div class="imgText">
                  <div class="flex-wrapper">
                    <img src="../../assets/alipay.jpg" width="170">
                    <div class="text">
                      <p>下单后会转向支付宝网站，<br />按支付宝的提示支付款到商家的支付宝账号。</p>
                    </div>
                  </div>
                </div>
              </el-radio>
            </div>
            <div class="single-radio-wrapper">
              <el-radio class="radio" v-model="payType" label="2">
                <div class="imgText">
                  <div class="flex-wrapper">
                    <img src="../../assets/jdpay.jpg" width="170">
                    <div class="text">
                      <p>下单后会转向京东支付网站，<br />按京东支付的提示支付款到商家的京东账号。</p>
                    </div>
                  </div>
                </div>
              </el-radio>
            </div>
            <div class="single-radio-wrapper">
              <el-radio class="radio" v-model="payType" label="3">
                <div class="imgText">
                  <div class="flex-wrapper">
                    <img src="../../assets/bankpay.jpg" width="170">
                    <div class="text">
                      <p>支付宝转账：ecfotile2@fotile.com<br />银行汇款账户：3901302519100000134<br>户名：宁波方太营销有限公司<br>开户行：中国工商银行慈溪宗汉支行</p>
                    </div>
                  </div>
                </div>
              </el-radio>
            </div>
            <div class="single-radio-wrapper">
              <el-radio class="radio" v-model="payType" label="4">
                <div class="imgText">
                  <div class="flex-wrapper">
                    <img class="img" src="../../assets/sendpay.jpg" width="170">
                    <div class="text">
                      <p>购买前请与客服确认您所在的区域是否支持货到付款；<br />如需刷卡，需要和快递师傅确认当地是否支持POS机</p>
                    </div>
                  </div>
                </div>
              </el-radio>
            </div>
          </div>
          <div class="choosed">
            <div class="lable">支付方式</div>
            <img src="../../assets/alipay.jpg">
          </div>
          <div class="content-bottom">
            <div>
              <a href="javacript:void(0)" class="btn default" style="display:inline-block;margin-right:12px;">在线咨询</a>
            </div>
            <div>
              <a href="javascript:void(0)" class="btn red">继续</a>
            </div>
          </div>
        </div>
      </li>
      <li class="item editing">
        <div class="title">
          4/发票
          <a href="javascript:void(0)" class="toEdit">编辑</a>
        </div>
        <div class="content">
          <div class="repecit-wrapper">
            <div class="radio">
              <el-radio class="radio" v-model="repecitType" label="1">
                <div class="inline-wrapper">
                  <span style="vertical-align:middle;">电子发票</span>
                  <el-autocomplete :disabled="repecitType!=='1'" class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="填选发票抬头" @select="handleSelect"></el-autocomplete>
                  <p>电子发票是经过国家税务局机关认可的有效凭证，同样具有方太商城保修与财务报销的效力。<br>当电子发票开具后,将不可更改发票信息及更换方太商城其他种类发票。<br>电子发票会在物流显示签收或者确 认收货后7个工作日开票。
                    <br>开具成功后，您可登录方太商城订单详情页下载电子发票，或登录方太电子发票查询平台<a href="http://invoice.efotile.com">http://invoice.efotile.com</a>查询。</p>
                </div>
              </el-radio>
            </div>
            <div class="radio">
              <el-radio class="radio" v-model="repecitType" label="2">增值税专用发票</el-radio>
            </div>
          </div>
          <div class="edited">
            <p>发票类型：电子发票</p>
            <p>发票抬头：上海牛邦网络科技有限公司</p>
          </div>
          <div class="content-bottom">
            <div>
              <a href="javacript:void(0)" class="btn default" style="display:inline-block;margin-right:12px;">在线咨询</a>
            </div>
            <div>
              <a href="javascript:void(0)" class="btn red">继续</a>
            </div>
          </div>
        </div>
      </li>
      <li class="item editing">
        <div class="title">
          5/送货优惠信息
          <a href="javascript:void(0)" class="toEdit">编辑</a>
        </div>
        <div class="content">
          <div class="redpackets-wrapper">
            <div class="item">
              <div class="input-label">优惠选择</div>
              <div class="right">
                <el-select v-model="value" clearable placeholder="选择红包">
                  <el-option v-for="(item,index) in options" :label="item.label" :value="item.value" :key="index">
                  </el-option>
                </el-select>
                <p>每笔订单仅限使用一个红包</p>
              </div>
            </div>
            <div class="item">
              <div class="input-label">积分抵现金</div>
              <div class="right">
                <el-input type="number" placeholder="请积分输入数量"></el-input>
                <p>共有3000积分，可使用1000积分<span class="minus">-¥ 30.00</span></p>
              </div>
            </div>
          </div>
          <div class="edited">
            <p>使用红包抵扣¥30.00，使用积分抵扣¥30.00</p>
          </div>
          <div class="content-bottom">
            <div>
              <a href="javacript:void(0)" class="btn default" style="display:inline-block;margin-right:12px;">在线咨询</a>
            </div>
            <div>
              <a href="javascript:void(0)" class="btn red">继续</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="cart-count">
    <p><span class="fixWidth">商品总金额：</span>¥ 6888.00</p>
    <p><span class="fixWidth">红包优惠：</span>¥ -0.00</p>
    <p><span class="fixWidth">积分抵扣：</span>¥ -0.00</p>
    <p style="font-size:24px;">实际支付金额：¥&nbsp;&nbsp;&nbsp;&nbsp;<span class="red">6888.00</span>&nbsp;&nbsp;元</p>
  </div>
  <div class="content-bottom">
    <div>
      <a href="javacript:void(0)" class="btn default" style="display:inline-block;margin-right:12px;">在线咨询</a>
    </div>
    <div>
      <a href="javascript:void(0)" class="btn red disabled">提交订单</a>
    </div>
  </div>
  <FotileQuestions></FotileQuestions>
</div>
</template>

<script>
import FotileQuestions from '../../components/FotileQuestions/FotileQuestions.vue';

export default {
  data() {
    return {
      repecitType: "1",
      payType: "1",
      addressType: "1",
      options: [{
        value: '选项1',
        label: '地址1'
      }, {
        value: '选项2',
        label: '地址2'
      }, {
        value: '选项3',
        label: '地址3'
      }, {
        value: '选项4',
        label: '地址4'
      }, {
        value: '选项5',
        label: '地址5'
      }],
      value: '',
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
      }],
      restaurants: [],
      state1: '',
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [{
          "value": "三全鲜食（北新泾店）",
          "address": "长宁区新渔路144号"
        },
        {
          "value": "Hot honey 首尔炸鸡（仙霞路）",
          "address": "上海市长宁区淞虹路661号"
        },
        {
          "value": "新旺角茶餐厅",
          "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        {
          "value": "泷千家(天山西路店)",
          "address": "天山西路438号"
        },
        {
          "value": "胖仙女纸杯蛋糕（上海凌空店）",
          "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        {
          "value": "贡茶",
          "address": "上海市长宁区金钟路633号"
        },
        {
          "value": "豪大大香鸡排超级奶爸",
          "address": "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          "value": "茶芝兰（奶茶，手抓饼）",
          "address": "上海市普陀区同普路1435号"
        },
        {
          "value": "十二泷町",
          "address": "上海市北翟路1444弄81号B幢-107"
        },
        {
          "value": "星移浓缩咖啡",
          "address": "上海市嘉定区新郁路817号"
        },
        {
          "value": "阿姨奶茶/豪大大",
          "address": "嘉定区曹安路1611号"
        },
        {
          "value": "新麦甜四季甜品炸鸡",
          "address": "嘉定区曹安公路2383弄55号"
        },
        {
          "value": "Monica摩托主题咖啡店",
          "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          "value": "浮生若茶（凌空soho店）",
          "address": "上海长宁区金钟路968号9号楼地下一层"
        },
        {
          "value": "NONO JUICE  鲜榨果汁",
          "address": "上海市长宁区天山西路119号"
        },
        {
          "value": "CoCo都可(北新泾店）",
          "address": "上海市长宁区仙霞西路"
        },
        {
          "value": "快乐柠檬（神州智慧店）",
          "address": "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          "value": "Merci Paul cafe",
          "address": "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          "value": "猫山王（西郊百联店）",
          "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        {
          "value": "枪会山",
          "address": "上海市普陀区棕榈路"
        },
        {
          "value": "纵食",
          "address": "元丰天山花园(东门) 双流路267号"
        },
        {
          "value": "钱记",
          "address": "上海市长宁区天山西路"
        },
        {
          "value": "壹杯加",
          "address": "上海市长宁区通协路"
        },
        {
          "value": "唦哇嘀咖",
          "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        {
          "value": "爱茜茜里(西郊百联)",
          "address": "长宁区仙霞西路88号1305室"
        },
        {
          "value": "爱茜茜里(近铁广场)",
          "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          "value": "鲜果榨汁（金沙江路和美广店）",
          "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          "value": "开心丽果（缤谷店）",
          "address": "上海市长宁区威宁路天山路341号"
        },
        {
          "value": "超级鸡车（丰庄路店）",
          "address": "上海市嘉定区丰庄路240号"
        },
        {
          "value": "妙生活果园（北新泾店）",
          "address": "长宁区新渔路144号"
        },
        {
          "value": "香宜度麻辣香锅",
          "address": "长宁区淞虹路148号"
        },
        {
          "value": "凡仔汉堡（老真北路店）",
          "address": "上海市普陀区老真北路160号"
        },
        {
          "value": "港式小铺",
          "address": "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          "value": "蜀香源麻辣香锅（剑河路店）",
          "address": "剑河路443-1"
        },
        {
          "value": "北京饺子馆",
          "address": "长宁区北新泾街道天山西路490-1号"
        },
        {
          "value": "饭典*新简餐（凌空SOHO店）",
          "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          "value": "焦耳·川式快餐（金钟路店）",
          "address": "上海市金钟路633号地下一层甲部"
        },
        {
          "value": "动力鸡车",
          "address": "长宁区仙霞西路299弄3号101B"
        },
        {
          "value": "浏阳蒸菜",
          "address": "天山西路430号"
        },
        {
          "value": "四海游龙（天山西路店）",
          "address": "上海市长宁区天山西路"
        },
        {
          "value": "樱花食堂（凌空店）",
          "address": "上海市长宁区金钟路968号15楼15-105室"
        },
        {
          "value": "壹分米客家传统调制米粉(天山店)",
          "address": "天山西路428号"
        },
        {
          "value": "福荣祥烧腊（平溪路店）",
          "address": "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          "value": "速记黄焖鸡米饭",
          "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        {
          "value": "红辣椒麻辣烫",
          "address": "上海市长宁区天山西路492号"
        },
        {
          "value": "(小杨生煎)西郊百联餐厅",
          "address": "长宁区仙霞西路88号百联2楼"
        },
        {
          "value": "阳阳麻辣烫",
          "address": "天山西路389号"
        },
        {
          "value": "南拳妈妈龙虾盖浇饭",
          "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  components: {
    FotileQuestions
  }
}
</script>

<style scoped lang="less">@import './index.less';</style>
