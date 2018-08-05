LIMO.namespace('MYAPP.COMPONENTS')(function(ns){

  function Popupper(el){
    this.$el = $(el)
  }

  Popupper.prototype.setup = function() {
    // 簡単のためalertだけにしているが、ボタンを押したら起きる動作を
    // ここでまとめるようなイメージ。
    this.$el.on('click', function(){
      alert('test');
      return false;
    });
  }

  ns.Popupper = Popupper;
});