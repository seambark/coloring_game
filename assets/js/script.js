let body = document.querySelector('body');
let coloringArea = document.querySelector('.coloringArea');
let coloringSketch = document.querySelector('#coloringSketch');
let colorChipArea = document.querySelector('.colorChipArea');
let sketchListArea = document.querySelector('.sketchListArea');
let sketchList = document.querySelector('.sketchList');

let colorData;
let listCurrent;

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

    sketchListArea.addEventListener('click', onSketch);
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

})

colorChipArea.addEventListener('click', onColorChip);

function onColorChip(e) {
    if (e.target.tagName === 'BUTTON') {
        let data = getComputedStyle(e.target).backgroundColor;
        colorData = data;

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

sketchListData();