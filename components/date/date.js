Component({
  properties: {
    day: {
      type: Number,
      value: 7,
      observer: function(newVal, oldVal) {
        // 属性值变化时执行
        this.start()
      }
    }
  },
  data:{
    dayList:[],
    id:0
  },
  ready(){
    console.log('ready')
    this.start()
  },
  methods:{
    start(){
      let dayList = []
      let base = new Date().getDay()
      for(let i=0;i<this.data.day;i++){
        let week = i + base
        week = week > 6? week%7:week
        dayList.push(this.getDay(i)+this.week(week))
      }
      this.setData({
        dayList:dayList
      })
    },
    week(i){
        var week
        week = " 周" + "日一二三四五六".charAt(i)
        return week
    },
    getDay(day){
        var today = new Date()
        var targetday_milliseconds=today.getTime() + 1000*60*60*24*day             
        today.setTime(targetday_milliseconds)            
        var tYear = today.getFullYear()      
        var tMonth = today.getMonth()       
        var tDate = today.getDate()     
        tMonth = this.doHandleMonth(tMonth + 1)      
        tDate = this.doHandleMonth(tDate)
        return tMonth+"-"+tDate
    },
    doHandleMonth(month){
        var m = month  
        if(month.toString().length == 1){            
            m = "0" + month    
        } 
        return m
    },
    getId(e){
      this.setData({
        id:e.currentTarget.dataset.id
      })
      let day = e.currentTarget.dataset.day.split(' ')
      let week = day[1]
      let month = day[0].split('-')[0]
      let d = day[0].split('-')[1]
      this.triggerEvent('tap', {
        week:week,
        month:month,
        day:d
      })
    }
  }
})
