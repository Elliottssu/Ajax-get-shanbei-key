> �����������Ľ���ǰ�˼����������Ƕ����ȡ�𰸣�����ʹ�øò�Ʒ��ͬѧ�𰸽����ο���

�ȱ���Ϊ���ڱȽϳ�����Ӣ�����ƽ̨�������˴����İ�ѧϰ��ͬѧ���������⣬��Ϊ����Ҳ���û�֮һ�����Ҫ������������һ�ݡ����ա����㶮��~~�����ǿ��Ǻܱ��˵�һ�ݱ��գ�ȴҪÿ��Ҫ��ɹ̶������񣬻�Ҫ������60�죬�ðɣ��ҳ�������Ϊ�����Ǻð���ÿ����һ����Сʱ����Ӣ�������������Բ����Լ�������

�����и��������ƽʱ�αȽ϶��ʱ�����û���ڳ�̫���ʱ������Ӣ����Ǽƻ�����ɣ�Ӣ����ô�а��յ���ߣ���Ϊ��ѧ��bao��ϰ��xian���ɲ��ܷ���������Ȼ��Ҳ�Ѳ�����Ϊ����Գ���Ұ�����Ҳ���ڳ�һ����Сʱ��ʱ����дһ��js�ű���������ȡ�Ķ��𰸣���Ϊһƪ�Ķ���̫���ˣ����Ծ�����Ϊ���ӣ��ϻ�����˵����ʼʵս��
####׼��ƪ
�����۵õ�½[�ȱ�����](https://www.shanbay.com/)��֮��ῴ��һ��ѧϰ�ƻ�������������������ѵ���ῴ��������һ�����������б��������Ǿ��ǽ���Ĳ��Զ���

![���������б�.png](http://upload-images.jianshu.io/upload_images/3502567-fecb7c02454fea21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####ԭ��
��дjs�ű�֮ǰ��������������һ����β��ܻ�ȡ�����������Ĵ𰸣�
1. һ����վҪͨ���첽��������ȡ���ݣ���ôһ���ᱩ¶��һ���ӿڣ�����Ҫ�ҵ�����ӿڡ�
2. ��������ӿڷ��ص�ֵ����������Ļ������ǿ���ֱ��ͨ������ֵ���ҵ�����Ҫ�Ĳ�����λ�á�
3. �����˳���ҵ����ص�λ�ã��Ǿͺð��ˣ�ֱ�ӱ������json,�õ�ÿһ����Ĵ𰸲������
4. �Ѹýű�ע�뵽���������ʵ��������Ҫ��Ч��������ĵ��⣬�ʹ�ӡ���ǵ���Ĵ𰸡�

####����
ԭ��˵���ˣ���ô�Ϳ�ʼʵս��
**1. �ҽӿ�**
����chrome�����߹��ߣ������л���NetworkĿ¼�µġ�XHR������ʱ�����ǵ�����������б��һƪ���£���ʱ��۲����з������Ľӿڣ�һ��һ���ĵ㣬���ܲ��ܷ���һ���Ƚ���������Ŀ�Ľӿڡ�
![������ӿ�.png](http://upload-images.jianshu.io/upload_images/3502567-a611273f64559ee4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

���˵������ҵ�����Ҫ�Ľӿڣ�������Ǹ����ӣ�ͨ��Preview����������ص�json����ܷḻ��������������Ҫ�ġ�

![Preview.png](http://upload-images.jianshu.io/upload_images/3502567-1455d13d4b229040.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**2. ��������ֵ��Ϣ**
ͨ��Headers���Բ鿴���������url��ַ������������������ͣ������м�¼��

![Headers.png](http://upload-images.jianshu.io/upload_images/3502567-34e9e7d0d5e42e1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

ͨ��Response���Բ鿴���η��ص����ݣ�������ݲ��ÿ����ǰ���һ�󴮷��ص����ݸ���ճ����[Json.cn](http://json.cn/)���в鿴��������ʽ�������json�ȽϷ���鿴��Ϊ���ܿ����ҵ�������Ҫ�Ĵ𰸵�λ�ã��������Լ���һ���⣬��������ʲô��Ȼ���ڵ�json.cn �����������Ƚ�˳�����ǣ��Һܿ���ҵ��˴����ڵ�λ�á�

![Response.png](http://upload-images.jianshu.io/upload_images/3502567-65bc000cab44a4aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**3. ����������jsonѭ�������**
��һ���Ѿ��ҵ�����data.blanks.content���λ�ã�������Ҫ����һ�����ҵ��������λ�õ�key��value�����Ҷ�һ��blanks�����µĶ���Ӷ�����࣬˵���ˣ���һ����Ĵ���ʾ��һ��
���Ϊ�˷�����ֱ����jquery��$ajax()��,����дһ���������������ǵ����ͬ�����´��ݲ�ͬ�Ĳ�����ƴ��һ��������url
```
$(function(){
	function shanbeiKey(url){
		$.ajax({
		 url: "https://www.shanbay.com/api/v1/listen/usersentence/"+url, 
		 type: "GET",
		 contentType:"application/json",
		 success: function(data){
	        var allResult=data.data;
	        var blank=[]; //���ÿһ�����������
	        var count=0; //ͳ����Ŀ����
	        for(var i in allResult){
	        	var blank=allResult[i].blanks;
	        	var oneResult=[];  //��Ų�ͬ��
	        	count++;
	        	for(var j in blank){
	        		oneResult.push(blank[j].content) //������ӵ������������
	        	}
	        	console.log('��'+count+'��:  '+oneResult.join(' �� '));  //���
	        }
	      }
	  });
	}
})
```
���ڸ÷����Ѿ�д���ˣ����ǲ�����ʲô�أ�
���Ƿ�������������б�dom�ṹ���ղ����ǵ���Ĳ�����148���������������б��������������ֲ�ͬ���������֣�����Ҫ�ľ���������֡�

![dom�ṹ.png](http://upload-images.jianshu.io/upload_images/3502567-61789a7cc8c16abd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Ȼ�������ӡ�����д𰸵��¼���ʲôʱ�򴥷��أ����һ���б���и�����ʼ���ԡ������ǵ�������ť��ʼ������Ȼ���ӡ�𰸡��������ý�����������ˣ���Ҳˢ�����ˡ�

![������ӡ�¼�.png](http://upload-images.jianshu.io/upload_images/3502567-bc13ef12343f7cdc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
������������������¼������һ��������ҳ�������˸ı�ţ��������ǿ���ֱ�������ã���ȡ��ֵ��Ϊ��������ղ�д�ķ�����
```
//ҳ�������صĴ��в�����Ϣ��ֵ
<span class="hide" id="reviewing-article-id">148</span>
```
```
//�ڿ�ʼ���Ե���¼�����Ѹ�ֵ�������󷽷���
$("#btn-start-listen-test").click(function(){
	console.log("=========================================�Ķ��ο���=========================================")
	shanbeiKey($("#reviewing-article-id").text());
})
```
������ʱ��js����ĸ�д���Ѿ�д���ˣ��������������������Ĵ���
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
	        	console.log('��'+count+'��:  '+oneResult.join(' �� '));
	        }
	      }
	  });
	}
	$("#btn-start-listen-test").click(function(){
		console.log("=========================================�Ķ��ο���=========================================")
		shanbeiKey($("#reviewing-article-id").text());
	})
})
```
**4. �ѽű�ֲ��ȸ������������**
�����Ѿ�д���ˣ���Ҫ��������еĵ�ǰҳ�������С����ȴ򿪸ո��Ǹ������߹��ߣ��л���Source,����и�Snippets���������ר���������д���Ƭ�εġ�

![ִ�л���.png](http://upload-images.jianshu.io/upload_images/3502567-e14f4f482c13b6d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

��ʱ������׼���øղ��Ǹ�����ʼ���ԡ������ť�����������Ƭ�����һ���run��,����̨���ӡ init ����ʾ������Ч�ˡ�

![run.png](http://upload-images.jianshu.io/upload_images/3502567-ace721d33e4fe8cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

���ڿ�ʼ����Ǹ�����ʼ���ԡ���ť����ע�¿���̨

![����Ч��.png](http://upload-images.jianshu.io/upload_images/3502567-b6fa17c735d9b59c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Ч���ܺã������İѸ�ƪ���µ�ÿһ������д𰸶���ӡ�����ˣ����ڿ��Ի���ġ��ο����ˣ�������

����ĿҲ��һ���䣬�ô˷���ͬ�������������𰸣����ﻹ��Ҫ�����ͬѧ����ҵ����һ��Ҫ�������ร��������ܸ��������ջ������ĿҲ������GitHub�У�ͯЬ�ǿ���ֱ������js�ļ���Ҳ����ֱ�ӿ�����Ҳ��ӭ��ҽ���̽��ǰ��֪ʶ��
GitHub��ַ





