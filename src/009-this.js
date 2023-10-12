var obj = {
  checkThis: function () {
    console.log(this);
  }
};

obj.checkThis();
console.log(obj);

var func = obj.checkThis;
func();

var obj2 = {
  logThis: function () {
    var self = this;
    console.log(self);

    function innerFunc() {
      console.log(self);
      self.moo = 1;
    }

    innerFunc();
    console.log(self.moo);
    console.log(global.moo);
  }
};

obj2.logThis();

function test(param1, param2) {
  console.log(this);
}

test.moo = 1;
console.log(test.name);
console.log(test);

test.call({});

let obj3 = {
    name : "John Doe",
    sayLater : function(){
        setTimeout(() => {
            console.log(`${this.name}`);
        }, 1000);
    }
}

obj3.sayLater();
