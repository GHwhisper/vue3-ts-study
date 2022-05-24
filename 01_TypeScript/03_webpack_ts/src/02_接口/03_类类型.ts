// 类 类型：类的类型，可以通过接口来实现
(() => {
  // 定义一个接口
  interface IFly {
    // 该方法没有任何实现（方法中什么也没有）
    fly()
  }

  // 定义一个类，该类的类型就是上面定义的接口（实际上也可以理解为 IFly 接口约束了当前这个 Person 类）
  class Person implements IFly {
    // 实现接口中的方法
    fly() {
      console.log('我会飞了，我是超人')
    }
  }

  // 实例化对象
  const person = new Person()
  person.fly()

  // 定义一个接口
  interface ISwim {
    swim()
  }

  // 定义一个类，这个类的类型就是 IFly 和 ISwim（当前这个类可以实现多个接口，一个类同时可以被多个接口进行约束）
  class Person2 implements IFly, ISwim {
    fly() {
      console.log('我会飞了2')
    }
    swim() {
      console.log('我会游泳了2')
    }
  }

  const person2 = new Person2()
  person2.fly()
  person2.swim()

  // 总结：类可以通过接口的方式，来定义当前这个类的类型
  // 类可以实现一个接口，也可以实现多个接口，但要注意，接口中的内容都要真正地实现

  // 接口可以继承其他的多个接口
  // 定义了一个接口，继承其他的多个接口
  interface IMyFlyAndSwim extends IFly, ISwim { }

  // 定义一个类，直接实现 IMyFlyAndSwim 这个接口
  class Person3 implements IMyFlyAndSwim {
    fly() {
      console.log('我会飞了3')
    }
    swim() {
      console.log('我会游泳了3')
    }
  }

  const person3 = new Person3()
  person3.fly()
  person3.swim()

  // 总结：接口和接口之间叫继承（使用 extends 关键字），类和接口之间叫实现（使用 implements 关键字）
})()
