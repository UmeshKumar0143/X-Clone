const linediv = document.querySelectorAll('.underdiv')
const follow = document.querySelectorAll('.Follow')
const text = document.querySelectorAll('.text-inside')



let flag =0;
function hide(div1,div2,text1,text2){
    if(flag == 0){
    div1.style.display = 'inline'
    div2.style.display = 'none'
    flag = 1;
    console.log(flag)
}
else {
    div1.style.display = 'none';
    div2.style.display = 'inline'
    flag =0;
    console.log(flag)
    }
}
follow.forEach((e)=>{
    e.addEventListener('click',function(){
        hide(linediv[0],linediv[1],text[0],text[1])
        text[0].style.fontWeight = 'Bold'
    })
})