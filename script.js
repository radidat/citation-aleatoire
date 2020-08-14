let quotes = [
     
    {
    
        citation: 'La seule façon de faire du bon travail est d’aimer ce que vous faites.',
        auteur: 'Steve jobs '
    },
     { 
        auteur:'Bill cosby',
        citation: 'Pour réussir, votre désir de réussite doit être plus grand que votre peur de l’échec. ',
    },
    {
          auteur:"Joel Brown",
          citation:"La seule chose qui se dresse entre vous et votre rêve, c’est la volonté d’essayer et la conviction qu’il est réellement possible.  ",
    },
    {
         auteur:"Winston Churchill",
         citation:"Pour réussir, retenez bien ces trois maximes: voir c’est savoir, vouloir c’est pouvoir, oser c’est avoir.  ",
    },
    { 
         auteur:"Alfred de Musset", 
         citation:"Le succès c’est d’aller d’échec en échec sans perdre son enthousiasme."
    },
    {
         auteur:"F. D. Roosevelt",
         citation: "Les gagnants trouvent des moyens, les perdants des excuses."
    },
    {
    auteur:"Thomas Fuller",
    citation:"Celui qui attend que tout danger soir écarté pour mettre les voiles ne prendra jamais la mer.",
    },
    { 
       auteur:"Sénèque",
       citation:" Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles. "
    },
    {
      auteur:"Michael Jordan",
      citation:"Certains veulent que ça arrive, d’autres aimeraient que ça arrive et d’autres font que ça arrive. "
    },
    
    {
       auteur:"Elbert Hubbard",
       citation:"La plus grande erreur que puisse faire un homme est d’avoir peur d’en faire une. "
    },
    { 
        auteur:"Thomas Edison ",
        citation:"Le génie est fait d’un pour cent d’inspiration et de quatre-vingt-dix-neuf pour cent de transpiration.  "
    },
    {
        auteur:"Marcel Proust",
        citation:"Il n’y a pas de réussites faciles ni d’échecs définitifs. "
    }
    ]

    let color = ["#30B061","#30B099", "#574E8E", "#BE7154","69D558", "#C22B92", "#82B4BA", "#F0D631", "#DE2828", "#EA7D0A"]
/*fonctionnalité générale: lorsque je clique sur le boutton autre citation, je veux que la citation présente change pour une autre citation
 */


let quote= document.querySelector("#quote")
let autor = document.querySelector("#autor")
let button = document.querySelector("#button")
let body = document.body

function random (e){
    return Math.floor(Math.random()*e.length);
}
let newQuote = function (){
    
        let randomQuote = random(quotes)
        let randomColor = random(color)
      
         quote.innerText= quotes[randomQuote].citation 
         autor.innerText = quotes[randomQuote].auteur
         
         body.style.backgroundColor = color[randomColor]
         quote.style.color = color[randomColor]
        autor.style.color = color[randomColor]
        button.style.backgroundColor = color[randomColor]
}
button.addEventListener('click',newQuote)
/* je veux une nouvelle citation lorque je clique sur le boutton " autre citation"
*/


