let arr=[
    {name: 'a b', date: '29/04/2022 12:00', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'b c', date: '20/01/2022 15:30', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'c d', date: '18/03/2022 16:00', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'd e', date: '12/04/2022 17:06', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'e f', date: '31/06/2021 15:50', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'f g', date: '02/05/2020 11:10', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'g h', date: '08/09/2021 19:20', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'h i', date: '25/08/2022 10:06', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'i j', date: '21/07/2021 07:09', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'},
    {name: 'j k', date: '20/02/2021 05:10', image: 'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam, esse impedit. Magnam voluptatem rem voluptatum mollitia ipsam tenetur facilis laborum tempore animi.Atque ea, aliquam voluptates earum unde perferendis iure.'}
]  

function show()
{
    let i=1;
    let count=0;

    setInterval(()=>
    {
        for(;i<=arr.length; i++, count++)
        {      
            if(count<3)
            {
                var currentDiv = document.getElementById(i);
                let name= document.createElement('span');
                let msg= document.createElement('div');
                let date= document.createElement('div');
                let img= document.createElement('img');
                let content = document.createTextNode(arr[i-1].name); 
                let moreContent = document.createTextNode(arr[i-1].msg);
                let dateMsg = document.createTextNode(arr[i-1].date);
                
                img.src=arr[i-1].image;
                img.setAttribute('width', '50px');
                img.setAttribute('height', '60px');
                
                date.appendChild(dateMsg);
                msg.appendChild(moreContent);
                name.appendChild(content);

                currentDiv.appendChild(img);
                currentDiv.appendChild(name);
                currentDiv.appendChild(date);
                currentDiv.appendChild(msg);
                
                currentDiv.style.backgroundImage= 'url(./assets/bg.png)';
                name.style='padding: 5px 0 5px 5px; font-size: 24px; vertical-align: 20px;';
                msg.style='padding: 5px 0 0 0; margin-bottom: 10px;';
                date.style='padding: 5px 0 0 0; color: red;';
                img.style.border='2px solid red';

                if(i==10)
                {
                    count=3;
                    i=0;
                }
            }

            else
            {
                setTimeout(()=>
                {
                    i--;
                    count=0;

                    for(var j=currentDiv.id; j>0; j--)
                    {                        
                        let list = document.getElementById(j);

                        while (list.hasChildNodes())
                        list.removeChild(list.firstChild);
                    }
                }, 5000);
            }
        }
    }, 0);
}