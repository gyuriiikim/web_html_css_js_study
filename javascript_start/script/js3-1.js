// 사이트에 미리 저장된 회원정도 변수(배열)
let userId = ['a', 'b', 'c', 'd', 'e', 'f']
let userPw = ['1', '2', '3', '4', '5', '6']
// DOM 제어 변수
const id_pq_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(id_pq_result, answer_btn)
console.log(id_pq_result[0], id_pq_result[1])
answer_btn.addEventListener('click',function(){
    // console.log(this)
    id_pq_result[0].innerHTML = userId[1]
    id_pq_result[1].innerHTML = userPw[1]
})
