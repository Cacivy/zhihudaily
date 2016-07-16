    //图片懒加载
    export default () => {
      var imgs = document.getElementsByTagName('img');

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var viewportSize = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      
      for(var i=0; i<imgs.length; i++) {
        var data=imgs[i].getAttribute('data')
        if(data){
          var x =scrollTop+viewportSize-imgs[i].parentNode.offsetTop
          if(x>0){
            imgs[i].src = data;
            imgs[i].setAttribute('data','')
            imgs[i].classList.add('opacity')
          }
        }
      }
    }


