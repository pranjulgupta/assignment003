
function solution1(a, b,c) {
    var s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
function solution2(f)
{
   var c =5*(f-32)/9
   return c;
   
}
function solution3(a,b,c){   if (a > b)
    {
        if (a > c)
        {
            console.log("a is the greatest among three ")
        }
        else
        {
            console.log("c is the greatest among three ")
        }
    }
    else if (b > c)
        console.log("b is the greatest among three")
    else
        console.log("c is the greatest among three")
}
function solution4()
{ var ch=[]
    var str = "how are you doing today";
    var res = str.split(" ");

//    var a="pranjul"
for(var i=0;i<res.length;i++){
    ch[i] = res[i].charAt(0).toUpperCase()+res[i].substring(1)
}

  return ch.join(" ")

}
function solution5(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true
  } 
  else {
    return false
  }
}
function solution8(str)
{ var strArr = str
    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr.length; j++) {
            if(i!=j){
              if (strArr[i] == strArr[j]) {
                  return false
              }
            }
        }
    }
    return true

}
function solution7()
{
    var flag=true
    var c1="a"
    var c2=c1.charCodeAt()
    var str="the quick brown fox jumps over the lazy dog"
    var c=new Array(30)
    for(var i=0;i<c.length;i++)
    c[i]=0
    for(var i=0;i<str.length;i++)
    c[str[i].toLowerCase().charCodeAt()-c2]++
    for( var i=0;i<26;i++)
    {
    if(c[i]==0)
flag=false
}
if(flag==true)
console.log("string is panagram")
else
console.log("string is not panagram")
}
function solution9()
{
    var ch=""
    var str = "White anglo saxon protestant"
    var res = str.split(" ");

//    var a="pranjul"
for(var i=0;i<res.length;i++){
    ch+= res[i].charAt(0).toUpperCase().concat()
    
}console.log(ch)
}
function solution10()
{
var count=0
var ct=0
var cnt=0
var temp1 = []
    posts=[
{post:[
    {user:"u1",name:"post1",content:"zxcv",like:["abc,def,ghi"],comment:[{name:"jhj"}]},
    {user :"u3",name:"post2",content:"zxcvbnnm",like:["abc,qwe,tyu"],comment:[{name:"abc"}]},
    {user:"u3",name:"post3",content:"zxcv",like:["jgh,gdf,loi"],comment:[{name:"abc"}]},
    {user:"u4",name:"post4",content:"fghjk",like:["poi,trq,uyei"],comment:[{name:"klikj"}]},
     {user:"u5",name:"post5",content:"likm",like:[{name:["abc" ,"def" ,"asx"]}],comment:[{name:["abc"]}]}
    ]}]

for(var i=0;i<posts[0].post.length;i++)
{
if(posts[0].post[i].user == "u3")
       count++
}
    console.log(count)
    console.log(posts[0].post[4].like[0].name.length)
    console.log(posts[0].post[4].like[0].name)
    console.log(posts[0].post[4].like[0].name[0])

for(var i=0;i<posts[0].post[4].like[0].name.length;i++)
{
    for(j=0;j<posts[0].post[4].comment[0].name.length;j++)
    if(posts[0].post[4].like[0].name[i] == posts[0].post[4].comment[0].name[j])
    ct++
}
console.log(ct)
for(var i=0;i<posts[0].post.length;i++)
{
    temp1.push(posts[0].post[i].comment[0].name)
}
var str = temp1.slice().sort()
var result=[]
for (var i = 0; i < str.length - 1; i++)
{
    if(str[i+1] == str[i])
    {
result.push(str[i])
    }
}
console.log(result)
}
function solution11()
{
    var friends=[

            {fname:"pranjul",lname:"gupta"},
            {fname:"raju",lname:"gupta"},
            {fname:"fake",lname:"singh"},
            {fname:"deepak",lname:"suman"},
            {fname:"raju",lname:"kumar"},
            {fname:"fake",lname:"singh"}
            ]
for(var i=0;i<friends.length;i++)
{
    friends[i].len=new Array();
}

    
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i].fname+" "+friends[i].lname)
    }
    console.log(friends.length)

    var c=0
    for(i=0;i<friends.length;i++)
    {
        if(friends[i].fname=="fake")
        {
        delete friends[i]
        friends.splice(i,1);
        c++
        }
    }
    console.log("after deleting fake id, list is")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }
    
    friends.push({fname:"raju",lname:"sharma"})
    friends.push({fname:"pappu",lname:"raj"})
    console.log("after adding two id, list is")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }

    function compare(a,b)
    {
        if(a.fname>b.fname)
        return 1
        if(a.fname<b.fname)
        return -1
        return 0
    }
    friends.sort(compare)
   
    console.log("after sorting list is ")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }


    for(i=0;i<friends.length;i++)
    {
        friends[i].len=friends[i].fname.length+friends[i].lname.length
    }
    function compare1(a,b)
    {
        if(a.len<b.len)
        return 1
        if(a.len>b.len)
        return -1
        return 0
    }
    console.log(friends)
    friends.sort(compare1)
    console.log("after sorting by length,list is ")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }


    for(i=0;i<friends.length;i++)
    {
        console.log(friends[i].fname.charAt(0)+friends[i].lname.charAt(0))
    }

    console.log("list of friends who have same first name")
    for(i=0;i<friends.length;i++)
    {
        for(j=i+1;j<friends.length;j++)
        {
            if(friends[i].fname==friends[j].fname)
            {
                console.log(friends[i].fname)
              //  console.log(friends[j].fname+" "+friends[j].lname)
            }
        }
            
    }

    

}