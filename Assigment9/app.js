// Chapyer 38 to 42
//  task 1

// function power(a,b)
// {
//     var result=Math.pow(a,b);
//     document.write("the Custom power is.."+result);

// }
// power(2,3);

// task2

// function leap_year( input )
// {
//     var input=+prompt("Enter year for checking leapyear...");
//     if(input%4===0)
//     {
//         document.write("Leap year.."+input);

//     }
//     else
//     {
//         document.write("Leap year not");
//     }
// }
// leap_year();

// task 3

// function traingle()
// {
//     var a=2;
//     var b=3;
//     var c=5;
//     var s= a+b+c/2;
//     var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     document.write("the area of a traigle is.."+area)

// }
// traingle();

// task 4
// var sub1 = 89;

// 
//

// function result() {
//     var sub1=78;
//     var sub2 = 67;
//     var sub3 = 76;

//     function averageMarks() {


//         var avg =( sub1 + sub2 + sub3);
//         document.write("The obtaining marks is ..." + avg);

//     }
//     function percentage() {
//         var p = ((sub1+sub2+sub3) / 300) * 100;
//         document.write("The percentage is.." + p);

//     }
//     averageMarks();
//     percentage();
// }
// result();


// task 5
// function indexOf(customfunction, singleChar) 
// {
//   for (var i = 0; i <= customfunction.length; i++)
//    {
//     if (customfunction[i] == singleChar)
//      {
//       document.write(customfunction + "<br>" + "index of " + customfunction[i] + "is" + i);

//     }

//   }

// }
// indexOf("Noshaba", "h");
// task 6


// alert ("The sentence is not more than 25 characters...");
// function disemvowel(str) 
// {
//     var str=prompt("Enter some string..");
//     alert(str.replace(/[aeiou]+/ig, ''));
//   }
// disemvowel();

// task 7

// function findOccurrences()
//  {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   var count2 = 0;

//   for (var i = 0; i <str.length; i++)
//   {
//     switch (str.slice(i, i + 2)) 
//     {
//       case 'ea':
//         count++;
//         break;
//       case 'ui':
//         count2++;
//         break;
//     }
//   }
//   document.write("Pleases read this application and give me gratuity" + "<br>" + count+count2 )
// }
// findOccurrences();

// task 8


// function convertor(input)
// {
//   var input=+prompt("Enter your city distance in km ..?");
//   function meter()
//   {
//     var meter=parseFloat (input)*1000;
//     document.write("Conert into meter your city distance is..."+meter);
//   }
//   function centiMeter()
//   {
//     var c_meter=parseFloat (input)*10000;
//     document.write("Conert into Centemeter your city distance is..."+c_meter);
//   }
//   function feet()
//   {
//     var feet=parseFloat (input)*	3280.839895013;
//     document.write("Conert into feet your city distance is..."+feet);
//   }
//   function inch()
//   {
//     var inch=parseFloat (input)*39370.07874015;
//     document.write("Conert into inch your city distance is..."+inch);
//   }
//   feet();
//   inch();
//   centiMeter();
//   meter();

// }
// convertor();                                                                                                                          h

// task9


// var employ,otime,opay,hours;
// var hours = prompt("Enter The Number Of Hours Worked By Employee");
// for (employ=1;employ<=10; employ++);
// {
// if(hours>40)
// {
// var otime=hours-40;
// var opay=otime*12;
// document.write( + "The Overtime Pay Of Employeee Is " + opay);
// }
// else if(hours<40){
//     document.write("There Is No Overtime Pay For Employee ");
// }
// }




























































// chapter 43to48

// task1

// function showBox(){
//   alert("Thanks for clicking...");
// }

// task2
// function showImage()
// {
//   alert("Thanks for purchasing this mobile..");
// }


// task3
// function deleteNumber(e)
// {
//     var del = e.parentNode.parentNode.rowIndex;
//     document.getElementById('mytable').deleteRow(del);

// }



// task 4

// function image1()
// {
//     var img1=document.getElementById('img1')
//     img1.src='images/mb1.jpg'
// }
// function image2()
// {
//     var img1=document.getElementById('img1')
//     img1.src='images/mb2.jpg'
// }

// task 5

// count = 0;

// function increasebtn() {
//     count++;
//     document.getElementById('counting').innerHTML = count;



// }
// function decreasebtn() {

//     count--;
//     document.getElementById('counting').innerHTML = count;


// }




// chapter 52 to 57

// task 2

// imageArray=['images/modal1.jpg','images/modal2.png','images/modal3.jpg','images/modal4.jpg','images/modal5.jpg','images/modal6.jpg','images/modal7.png','images/modal8.jpg','images/moal9.jpg','images/modal11.jpg','images/modal12.jpg','images/modal13.jpg','images/modal14.png'];
// task 3


// var img1= document.getElementById('modalimage');

// for ( var i=0; i<imageArray.length;i++)
// {

//     img1.innerHTML='<img src=\"'+imageArray[i]+'\">';

// }





// chpter 58 to 67

// task1

// var a= document.getElementById('main-content');
 

// task2

// var a= document.getElementById('main-content')
// var d=a.childNodes;
// console.log(d);

// task3

// var x=document.getElementsByClassName('render');
// console.log(x)


// task4

// var val= document.getElementById('firstname').value;
// var last_name=document.getElementById('lastname').value;
// var email=document.getElementById('email').value;
// console.log(val,last_name,email)

// question2

// task1

// var f= document.getElementById('form-content').nodeType;
// console.log(f);

// task2

// var l=document.getElementById('last-name').nodeType;
// console.log(l);
// var a= document.getElementById('last-name')
// var d=a.childNodes;
// console.log(d);


// task3
















































// chapter 49 to 52

// task1

// function signup()
// {
//     var name=document.getElementById('name').value;
//     var password=document.getElementById('password').value;
//     // var signup=document.getElementById('signup');
//     console.log(name,password)
//     name.value="";
//     password.value=" ";


// }

// task2
// function readMore() {
//     var text = document.getElementById('text').innerHTML;
//     var paragraph = document.getElementById('para');
//     paragraph.innerHTML = text;
// }

// task3

// function deleteNumber(e)
// {
//     var del = e.parentNode.parentNode.rowIndex;
//     document.getElementById('mytable').deleteRow(del);

// }
// function editvalue()

// {

    // var edit =e.parentNode.firstChild.rowIndex
    // var edit_value=prompt("Enter edit value...",edit)
    // e.parentNode.firstChild.nodeValue=edit_value

    
// }






