/*
Question :
Bir stringdeki tüm harfleri alfabetik sıraya göre yeniden düzenleyen ve ardından her iki harften birini büyük harf yapan bir JavaScript fonksiyonu yazın
 */

const convertAlfabetich = (str) => {
    return (str.toLowerCase()
        .split(' ')
        .filter(word => word !== '')
        .join('')
        .split('')
        .sort((a,b)=>{return a.localeCompare(b)}))
        .map((item,index)=>{return index%2!==0?item.toUpperCase():item.toLowerCase()})
        .join('')

}

const str = 'SElam kanka Naber iyi msiin ben de iyiim'
console.log(convertAlfabetich(str))

