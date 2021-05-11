const colors = {
    p: '#388e3c',
    body: '#c4c4c4',
    span: 'rgb(255, 228, 196)',
    div: 'aquamarine',
    ul: 'rgb(129, 216, 114)',
    ol: 'rgb(202, 106, 221)',
    form: 'rgb(44, 105, 161)',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll(`.tag`).forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})