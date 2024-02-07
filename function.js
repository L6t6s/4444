const node_for_click = document.getElementById("for_click")

function find_edit(){
const p0 = document.getElementsByTagName('p')[0]
const p1 = document.getElementsByTagName('p')[1]
const p2 = document.getElementsByTagName('p')[2]
const p3 = document.getElementsByTagName('p')[3]

p0.innerText = 'Muradov'
p1.innerText = 'Sahban'
p2.innerText = 'Islamovich'
p3.innerText = '2004'
}

node_for_click.addEventListener("click",find_edit)