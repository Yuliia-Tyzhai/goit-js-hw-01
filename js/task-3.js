function getElementWidth(content, padding, border) {
    const cont = Number.parseFloat(content);
    const pad = Number.parseFloat(padding);
    const bord = Number.parseFloat(border);
    const elementWidth = cont+ 2 * pad + 2 * bord;
    return elementWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200