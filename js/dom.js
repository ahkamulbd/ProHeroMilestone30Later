//console.log('DOM.js File');

document.getElementById('apply-bg').addEventListener('click', function () {
    //console.log('Apply BG Button Clicked');
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
        friend.style.padding = '10px';
        friend.style.margin = '5px';
    }
})

document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Something new added</p>
    `
    friendContainer.appendChild(friend);
})