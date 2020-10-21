let body = document.querySelector('body');
let coloringArea = document.querySelector('.coloringArea');
let coloringSketch = document.querySelector('#coloringSketch');
let colorChipArea = document.querySelector('.colorChipArea');
let sketchListArea = document.querySelector('.sketchListArea');
let sketchList = document.querySelector('.sketchList');
let picker = document.querySelector('.picker');
let colorChipPicker = document.querySelector('.colorChipPicker');
let colorChipUser = document.querySelector('.colorChipUser');
let mouse = document.querySelector('.mouse');

let colorData;
let listCurrent;
let colorPickerCurrent;
let colorCurrent;

body.addEventListener("mousemove", mousePainter);
sketchListArea.addEventListener('click', onSketch);
colorChipArea.addEventListener('click', onColorChip);
colorChipPicker.addEventListener('click', onUsderColorData);
coloringSketch.addEventListener('load', () => {
    let svgFileData = coloringSketch.contentDocument;
    let svgFileDataPath = svgFileData.querySelector('g');
    svgFileDataPath.style.cursor = 'pointer';

    svgFileData.addEventListener('click', onColoring);
    function onColoring(e) {
        if (e.target.tagName === 'path') {
            e.target.setAttribute('fill', colorData);
        }
    }
})

function mousePainter(e) {
    let x = e.clientX;
    let y = e.clientY;

    mouse.style.transform = `translate(${x}px, ${y}px)`
    mouse.style.color = colorData

}

function onSketch(e) {
    let target = e.target;
    let targetParent = target.parentNode;

    let onDel = sketchListArea.querySelector('li.on');
    onDel && onDel.classList.remove('on');

    if (target.tagName === 'IMG') {
        let srcData = target.getAttribute('src');

        listCurrent && listCurrent.classList.remove('on');
        targetParent.parentNode.classList.add('on');

        coloringSketch.setAttribute('data', `${srcData}`);

        listCurrent = targetParent.parentNode;
    } else if (target.tagName === 'BUTTON') {
        let img = target.querySelector('img');
        let imgData = img.getAttribute('src');

        listCurrent && listCurrent.classList.remove('on');
        targetParent.classList.add('on');

        coloringSketch.setAttribute('data', `${imgData}`);

        listCurrent = targetParent;
    }

}


function onColorChip(e) {
    if (e.target.tagName === 'BUTTON') {
        let data = getComputedStyle(e.target).backgroundColor;
        colorData = data;
    }
}

picker.addEventListener('input', onPicker)
function onPicker(e) {
    let data = picker.value;

    colorChipPicker.style.backgroundColor = `${data}`;
    colorChipPicker.style.borderColor = `${data}`;
    colorChipPicker.innerText = data;

    lightCheck(colorChipPicker);

    colorData = data;
}

function onUsderColorData() {
    let colorChip = colorChipPicker.textContent;
    colorPickerCurrent = colorChip;
}

colorChipUser.addEventListener('click', onCreatColorChip)
function onCreatColorChip(e) {
    let target = e.target;
    let targetParent = target.parentNode.parentNode;

    if (colorPickerCurrent === undefined) {
        return;
    }
    if (colorPickerCurrent === colorCurrent) {
        return;
    }

    if (target.tagName === 'LI') {
        target.innerHTML = `
                <button>${colorPickerCurrent}</button>
            `
        target.querySelector('button').style.backgroundColor = `${colorPickerCurrent}`;
        lightCheck(target.querySelector('button'));

        colorPickerCurrent = colorCurrent

    } else if (target.tagName === 'BUTTON') {
        target.style.backgroundColor = `${colorPickerCurrent}`;
        target.innerText = `${colorPickerCurrent}`;
        lightCheck(target);
        colorPickerCurrent = colorCurrent;
    }
}


function lightCheck(rgbColor) {
    let data = getComputedStyle(rgbColor).backgroundColor;
    let dataRgbSet = data.match(/\((.*)\)/)[1];
    let dataRgb = dataRgbSet.split(",");
    let rgbNumber = 140;

    if (dataRgb[0] <= rgbNumber && dataRgb[1] <= rgbNumber && dataRgb[2] <= rgbNumber) {
        rgbColor.style.color = '#fff';
    } else {
        rgbColor.style.color = '#000';
    }
}

function sketchListData() {
    let creatUl = document.createElement('ul');
    sketchListArea.appendChild(creatUl);
    creatUl.classList.add('sketchList');

    for (let i = 0; i < svgData.length; i++) {
        let creatLi = document.createElement('li');

        creatUl.appendChild(creatLi);

        creatLi.innerHTML = `
            <button>
                <img src="${svgData[i].url}" alt="${svgData[i].name}">
            </button>
        `
    }

    let onLi = creatUl.querySelector('.sketchList li');
    onLi.classList.add('on');
}

lightCheck(colorChipPicker);
sketchListData();