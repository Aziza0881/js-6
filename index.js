let name = prompt("Как вас зовут").trim()
if (name.charAt(0).toLowerCase() === 'a') {
    let age =prompt("Сколько вам лет?")

    if (age >= 20 && age <= 40){
     
        let money = prompt("какой у вас лимит")
        if (money > 99){
        
            let people = prompt('сколько чел?')
            if (people > 0 && people < 3) {
                alert('Welcome')
            } else {
                alert('Уходи')
            }

        }else {
            alert('Уходи')
        }

    }else{
      alert('уходи')
    }



}else{
  alert('уходи')
}