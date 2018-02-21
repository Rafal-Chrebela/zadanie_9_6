
var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function () {

    var element = document.createElement('li'),
        itemNumber = document.getElementsByTagName('li').length;

    element.innerHTML = 'item' + itemNumber;

    list.appendChild(element);
});