const comment = document.getElementById('comments-box');
const button = document.getElementById('postButton');

button.addEventListener('click', () => {
    const input = document.querySelector('#comments-box');
    const text = input.value.trim();

    if (text !== '') {
        postComment();
        input.value = '';
        input.focus();
    }
});

function postComment() {
    const place = document.querySelector('.newCommentBox');

    const inputs = document.querySelector('#comments-box');
    const texts = inputs.value.trim();

    const newComment = document.createElement('div');

    newComment.innerHTML = texts;

    place.appendChild(newComment);
}


// post button을 누르면 input text를 받아와서 올린다
// .onclick 



bring commentbox, post button, heart = variables

addeventlistener 2개 => 1) enter keyup 2) click post button
 { comment 만드는것 함수 실행 }


button.addeventlistener  .'click'
{
    
}


