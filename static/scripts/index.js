const cursor = document.getElementById('cursor')


cursor.addEventListener('mousemove', (e) => {
    x = e.clientX - cursor.offsetWidth / 2
    y = e.clientY - cursor.offsetHeight / 2

    cursor.style.left = `${x}px `
    cursor.style.top = `${y}px`
})