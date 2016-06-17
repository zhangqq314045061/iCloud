bower install angular
bower install angular-route
bower install angular-animate
bower install angular-touch



模块
控制器
作用域
表达式
(ng开头的指令中都可以直接使用angular表达式)
不能使用if和for循环 只能 使用赋值 运算一类的简单操作

Math.max.apply(null,$scope.students.map(function(v,i){
          return v.id;
        }))+1

Math.max.apply(null,$scope.stu.map(function(v,i){
	returan v.id
}))


<!-- --source-map  map-->
{{}} ng-bind 的简写


ng-click="toggle=!toggle"
ng-class="{green:toggle}"
ng-init="toggle=false"

valign-wrappe valign


@each $color in map-keys($colors){}