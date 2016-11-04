> 首先声明本文仅做前端技术交流，非恶意获取答案，如有使用该产品的同学答案仅供参考。

扇贝作为国内比较出名的英语测试平台，吸引了大量的爱学习的同学在上面做题，因为本人也是用户之一，最近要考六级，交了一份“保险”，你懂的~~。但是看是很便宜的一份保险，却要每天要完成固定的任务，还要连续打卡60天，好吧，我承认这是为了咱们好啊，每天抽出一两个小时来做英语，六级不过还真对不起自己哈哈。

但是有个问题就是平时课比较多的时候还真的没法腾出太多的时间来看英语，可是计划不完成，英语怎么有把握的提高，咱为了学（bao）习（xian）可不能放弃啊。当然这也难不倒作为程序猿的我啊，我也是腾出一个多小时的时间来写一个js脚本，用来获取阅读答案，因为一篇阅读题太多了，所以就拿它为例子，废话不多说，开始实战。
####准备篇
首先咱得登陆[扇贝官网](https://www.shanbay.com/)，之后会看到一个学习计划，点击听力里面的文章训练会看到这样的一个听力文章列表。好啦它们就是今天的测试对象。

![听力文章列表.png](http://upload-images.jianshu.io/upload_images/3502567-fecb7c02454fea21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####原理
在写js脚本之前，我们先来分析一下如何才能获取到所有听力的答案：
1. 一般网站要通过异步请求来获取数据，那么一定会暴露出一个接口，我们要找到这个接口。
2. 分析这个接口返回的值，不出意外的话，我们可以直接通过返回值来找到所需要的参数的位置。
3. 如果能顺利找到返回的位置，那就好办了，直接遍历这个json,拿到每一道题的答案并输出。
4. 把该脚本注入到浏览器中来实现我们想要的效果：点击哪道题，就打印出那道题的答案。

####开发
原理说完了，那么就开始实战吧
**1. 找接口**
调出chrome开发者工具，我们切换到Network目录下的“XHR”，这时候我们点击听力文章列表的一篇文章，这时候观察所有返回来的接口，一个一个的点，看能不能发现一个比较像所有题目的接口。
![找请求接口.png](http://upload-images.jianshu.io/upload_images/3502567-a611273f64559ee4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

幸运的是我找到了想要的接口，点击下那个链接，通过Preview发现这个返回的json对象很丰富，它就是我们想要的。

![Preview.png](http://upload-images.jianshu.io/upload_images/3502567-1455d13d4b229040.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**2. 分析返回值信息**
通过Headers可以查看本次请求的url地址，请求参数，请求类型，并进行记录。

![Headers.png](http://upload-images.jianshu.io/upload_images/3502567-34e9e7d0d5e42e1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

通过Response可以查看本次返回的内容，这个内容不好看我们把这一大串返回的内容复制粘贴到[Json.cn](http://json.cn/)进行查看，这里会格式化这个大json比较方便查看。为了能快速找到我们想要的答案的位置，可以先自己做一道题，看看答案是什么，然后在到json.cn 里面搜索。比较顺利的是，我很快的找到了答案所在的位置。

![Response.png](http://upload-images.jianshu.io/upload_images/3502567-65bc000cab44a4aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**3. 遍历整个大json循环输出答案**
上一步已经找到答案在data.blanks.content这个位置，所有我要做的一件事找到所有这个位置的key和value，并且对一个blanks对象下的多个子对象分类，说白了，让一道题的答案显示在一起。
这个为了方便我直接用jquery的$ajax()做,这里写一个方法，参数就是点击不同的文章传递不同的参数来拼接一个完整的url
```
$(function(){
	function shanbeiKey(url){
		$.ajax({
		 url: "https://www.shanbay.com/api/v1/listen/usersentence/"+url, 
		 type: "GET",
		 contentType:"application/json",
		 success: function(data){
	        var allResult=data.data;
	        var blank=[]; //存放每一道题对象数组
	        var count=0; //统计题目数量
	        for(var i in allResult){
	        	var blank=allResult[i].blanks;
	        	var oneResult=[];  //存放不同答案
	        	count++;
	        	for(var j in blank){
	        		oneResult.push(blank[j].content) //将答案添加到该题的数组中
	        	}
	        	console.log('第'+count+'题:  '+oneResult.join(' 、 '));  //输出
	        }
	      }
	  });
	}
})
```
现在该方法已经写好了，但是参数传什么呢？
我们分析下这个文章列表dom结构，刚才我们点击的参数是148，正好他把所有列表都加上了用于区分不同参数的数字，我们要的就是这个数字。

![dom结构.png](http://upload-images.jianshu.io/upload_images/3502567-61789a7cc8c16abd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后这个打印出所有答案的事件在什么时候触发呢？点进一个列表会有个“开始测试”，就是点击这个按钮开始触发，然后打印答案。这样正好进入做题界面了，答案也刷出来了。

![触发打印事件.png](http://upload-images.jianshu.io/upload_images/3502567-bc13ef12343f7cdc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
所以我们添加这个点击事件，而且还发现这个页面隐藏了改编号，正好我们可以直接拿来用，获取该值作为参数传入刚才写的方法里
```
//页面中隐藏的带有参数信息的值
<span class="hide" id="reviewing-article-id">148</span>
```
```
//在开始测试点击事件里面把该值传入请求方法中
$("#btn-start-listen-test").click(function(){
	console.log("=========================================阅读参考答案=========================================")
	shanbeiKey($("#reviewing-article-id").text());
})
```
好啦这时候js里面的改写的已经写完了，现在我们来看下完整的代码
```
$(function(){
	function shanbeiKey(url){
		$.ajax({
		 url: "https://www.shanbay.com/api/v1/listen/usersentence/"+url, 
		 type: "GET",
		 contentType:"application/json",
		 success: function(data){
	        var allResult=data.data;
	        var blank=[];
	        var count=0;
	        for(var i in allResult){
	        	var blank=allResult[i].blanks;
	        	var oneResult=[];
	        	count++;
	        	for(var j in blank){
	        		oneResult.push(blank[j].content)
	        	}
	        	console.log('第'+count+'题:  '+oneResult.join(' 、 '));
	        }
	      }
	  });
	}
	$("#btn-start-listen-test").click(function(){
		console.log("=========================================阅读参考答案=========================================")
		shanbeiKey($("#reviewing-article-id").text());
	})
})
```
**4. 把脚本植入谷歌浏览器中运行**
代码已经写完了，需要在浏览器中的当前页面中运行。首先打开刚刚那个开发者工具，切换到Source,左边有个Snippets。这个就是专门用来运行代码片段的。

![执行环境.png](http://upload-images.jianshu.io/upload_images/3502567-e14f4f482c13b6d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这时候我们准备好刚才那个“开始测试”点击按钮，鼠标放在左边片段上右击“run”,控制台会打印 init 即表示现在生效了。

![run.png](http://upload-images.jianshu.io/upload_images/3502567-ace721d33e4fe8cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

现在开始点击那个“开始测试”按钮，关注下控制台

![运行效果.png](http://upload-images.jianshu.io/upload_images/3502567-b6fa17c735d9b59c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

效果很好，完美的把该篇文章的每一题的所有答案都打印出来了，终于可以欢快的“参考”了，哈哈。

本项目也告一段落，用此方法同样适用于其他答案，这里还是要告诫广大同学，作业尽量一定要独立完成喔，这样才能付出才有收获嘛。本项目也放在了GitHub中，童鞋们可以直接下载js文件，也可以直接拷贝，也欢迎大家交流探讨前端知识。
GitHub地址





