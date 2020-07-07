// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      like_count:{
        type:Number,
        value:9
      },
      like_flag:{
        type:Boolean,
        value:false
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      likeImg:'../images/喜欢icon@2x.png',
      dislikeImg:'../images/书单-详情-喜欢@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(){
        let {like_count,like_flag} = this.data;
        this.setData({
          like_count:like_flag?like_count - 1 :like_count + 1,
          like_flag:!like_flag 

        })
    }
  }
})
