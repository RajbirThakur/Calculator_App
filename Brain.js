let content = document.getElementById('content');
let contentInfo = document.getElementById('contentInfo');
let Str = '',a = '';
Array.from(document.getElementsByClassName('box')).forEach((e)=>{
    e.addEventListener('click',(ele)=>{
        if(ele.target.innerHTML == "=")
        {
            let c = 0;
            a = Str;
            try {
                Str = eval(Str);
            } catch (error) {
                content.innerHTML = "Invalid Input";
                console.log("balle balle");
                ++c;
            }
            if(c==0)
            {
                content.innerHTML = Str;
                contentInfo.innerHTML = a + "=";
            }
        }
        else if(ele.target.innerHTML == "C")
        {
            Str = '';
            content.innerHTML = Str;
            contentInfo.innerHTML = '';
        }
        else if(ele.target.innerHTML == "+/-")
        {
            Str = "-" + Str;
            content.innerHTML = Str;
            contentInfo.innerHTML = '';
        }
        else if(ele.target.id == "1")
        {
            Str = Str.substring(0,Str.length - 1);
            content.innerHTML = Str;
        }
        else
        {
            Str = Str + ele.target.innerHTML;
            content.innerHTML = Str;
            contentInfo.innerHTML = '';
        }
    })
})
