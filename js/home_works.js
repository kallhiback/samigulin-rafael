const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }
    else  {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}



function moveBlock(block, steps) {
    if (steps === 0) {
        return;
    } else {
        const smallBlock = block.querySelector('.child_block');
        const leftPosition = parseInt(getComputedStyle(smallBlock).left);
        const maxWidth = block.clientWidth - smallBlock.clientWidth;

        if (leftPosition < maxWidth) {
            smallBlock.style.left = (leftPosition + 10) + 'px'

            if (leftPosition + 10 < maxWidth) {
                setTimeout(function() {
                    moveBlock(block, steps - 1)
                }, 100);
            }
        }
    }
}

const largeBlock = document.querySelector('.parent_block');
moveBlock(largeBlock, 50)

