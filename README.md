# date
微信小程序预约日期，未来n天日期+星期提醒组件
![image](https://github.com/你的github账号名称/你的图片仓库的名称/blob/master/要传入的图片的名称.png?raw=true)
引入组件：  
1、下载源文件至本地，把components/date移至项目根目录  
2、在对面页面json文件引入：  
{  
  "usingComponents": {  
    "date": "../../components/date/date"  
  },  
  "navigationBarTitleText": "门店预约"  
}  
3、对应wxml页面引入:  
<date day="18" bindtap="click"></date>  
属性说明：  
day:未来n天  
bindtap:点击事件，返回月+日+星期  
