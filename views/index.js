LIMO.namespace('MYAPP.VIEWS.INDEX')(function(ns){
  ns.init = function(){
    $(function(){
      // クラスっぽくしているが、簡単ならもちろん関数でも良い。
      // 大抵はコンポーネントのルートになるCSSセレクタを指定する。
      var popupper = new MYAPP.COMPONENTS.Popupper('.mytrigger');
      popupper.setup();


      // 同じ型のコンポーネントを呼んでもそれぞれの状態を持っているので混乱しない。

      var counter1 = new MYAPP.COMPONENTS.Counter('.counter');
      counter1.setup();

      var counter2 = new MYAPP.COMPONENTS.Counter('.counter2');
      counter2.setup();

      // 簡単なものならここに書いても良い。ただしやり過ぎるとわかりにくくなる。
      // 丁寧にやるなら例えば counterのインスタンスをもらって初期化する別のコンポーネントを作る
      $('.plus').on('click', function(){
        alert('カウンター足したら？:'　+ (counter1.count + counter2.count));
      })
    });
  }
});