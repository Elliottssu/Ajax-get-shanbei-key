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