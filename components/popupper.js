// ネームスペースを指定して、外に露出させない
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

  // ns に付けたものはネームスペースに結合されて公開される
  ns.Popupper = Popupper;
});