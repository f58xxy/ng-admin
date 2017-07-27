import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  insurances:Array<any> = [
    {"plan":"重大疾病保险",
    "name":"王明",
      "sex":"Male",
      "age":20,
      "address":"吉林省长春市",
      "suffer":"刘丽",
      "payperiod":"2070年10月"},
      {"plan":"生命保障保险",
      "name":"小明",
      "sex":"Male",
      "age":62,
      "address":"辽宁省沈阳市",
      "suffer":"",
      "payperiod":"2070年10月"},
      {"plan":"养老保险",
      "name":"Chunk",
      "sex":"Male",
      "age":41,
      "address":"辽宁省大连市",
      "suffer":"",
      "payperiod":"2070年10月"},
      {"plan":"医疗保险",
      "name":"Chunk",
      "sex":"FeMale",
      "age":64,
      "address":"吉林省通化市",
      "suffer":"",
      "payperiod":"2070年10月"},
      {"plan":"人寿保险",
      "name":"Chunk",
      "sex":"Male",
      "age":18,
      "address":"辽宁省丹东市",
      "suffer":"",
      "payperiod":"2070年10月"}
  ]
deleteLast(){
  this.insurances.pop()
}
saveNewUser(){
  this.insurances.push({
     "plan":"",
      "name":"New User",
      "sex":"Male",
      "age":30,
      "address":"A省B市",
      "suffer":"new_user",
      "payperiod":"2023年",
      "insuranceperiod":"2050年"
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
      this.insurances.sort(function (a, b) {
        if (a.age > b.age) {
          return 1;
        }
  
        // a 必须等于 b
        return 0;
      });
  }

  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
      this.insurances.sort(function (a, b) {
        if (a.age < b.age) {
          return 1;
        }
  
        // a 必须等于 b
        return 0;
      });
  }

  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

      var length = this.insurances.length;
      for(var i=0; i<length; i++){
          var random = Math.random() * this.insurances.length;
          this.insurances.push(this.insurances.splice(random, 1)[0]);
      }
      return this.insurances;
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
