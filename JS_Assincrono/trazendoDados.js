// TRAZENDO OS DADOS DE UM SCRIPT PHP PARA O JS
const resultado = document.querySelector('.resultado')
const ajax = obj => {
      return new Promise((resolve, reject) =>{
         const xhr = new XMLHttpRequest();
         xhr.open(obj.method, obj.url, true)
         xhr.send()
         
          xhr.addEventListener('load', (e)=> {
              if(xhr.status >= 200 && xhr.status < 300){                 
              resolve(xhr.responseText);
              // faço o objeto virar um objeto
              const data = JSON.parse(xhr.responseText)

              if (Array.isArray(data)) {
                   console.log("É um array:", data);
                   carregaPag(data)
               } else {
               console.error("A resposta não é um array.");
           }
              }else{
                  reject(xhr.statusText)
              }
          });
     })
 }

 ajax(
     {
         method :'POST',
          url : 'http://localhost/tests/get&post/postData.php'
     }
 )
function carregaPag(data){
     for(itens of data){
          const li = document.createElement('li')
          li.innerHTML = `${itens.nome} ${itens.email}`
          resultado.appendChild(li)
     }
}