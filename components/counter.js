// ネームスペースを指定して、外に露出させない
LIMO.namespace('MYAPP.COMPONENTS')(function(ns){

  function Counter(el) {
    this.$el = $(el);
    this.count = 0;
  }

  Counter.prototype.setup = function(){
    var self = this;

    // privateメソッドにしたければこの辺とか？
    // こだわらない方は好きなようにやって良いと思います。
    function update() {
      self.$el.find('.count').text(self.count);
    }
  
    // ちゃんとObserverで実装したい人はうまいことやってください。
    // 文脈が違うので今回は頑張りません。

    this.$el.find('.up').on('click', function(){
       self.count++;
       update();
       return false;
    });

    this.$el.find('.down').on('click', function(){
      self.count--;
      update();
      return false;
    });

    this.$el.find('.reset').on('click', function(){
      self.count = 0; 
      update();
      return false;
    });

    update();
  }

  // ns に付けたものはネームスペースに結合されて公開される
  ns.Counter = Counter;
});