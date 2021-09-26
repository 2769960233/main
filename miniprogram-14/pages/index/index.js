// index.js
var start,end,sum;
Page({
  startNum:function(e){
    start=parseInt(e.detail.value);
  },
  endNum:function(e){
    end=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=start*end*1+start;
    for(var i=2;i<=5;i++){
      sum=sum*end*1+sum
    }
    this.setData({
      sum:sum
    })
  }
})