let globalDiv;
let globalPointer;

export function StartDrag(div) {
    globalDiv = div;

    document.querySelector('.page').addEventListener('pointermove', OnPointerMove);
    document.querySelector('.page').addEventListener('pointerup', OnPointerUp);
}

export function OnPointerMove(event) {
    let DragItem = document.getElementById(globalDiv);
    DragItem.style.left = event.clientX - (DragItem.clientWidth / 2) + "px";
    DragItem.style.top = event.clientY - (DragItem.clientHeight / 2) + "px";
}

export function OnPointerUp(event) {

    document.querySelector('.page').removeEventListener('pointermove', OnPointerMove);
    document.querySelector('.page').removeEventListener('pointerup', OnPointerMove);

    globalPointer = null;
    globalDiv = null;
}