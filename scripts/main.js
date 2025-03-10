document.addEventListener('DOMContentLoaded', () => {
    const rotate = document.querySelector('.fa-rotate');
    const formContainer = document.querySelector('.formContainer');
    const welcome = document.querySelector('.bigHeadliner');
    const me = document.querySelector('.textAboutMe');
    const submitButton = document.querySelector('.submitButton');
    

    me.style.visibility = 'hidden';
    
    rotate.addEventListener('click', () => {
        if(formContainer.classList.contains('flip')) {
            formContainer.classList.remove('flip');
            formContainer.classList.add('reverseFlip');
            setTimeout(() => {
                welcome.innerHTML = 'Schreib mir eine Mail und ich melde mich bei Dir!';
            }, 200)
            me.style.visibility = 'hidden';  // Zeigen beim Zurückdrehen
        } else {
            formContainer.classList.remove('reverseFlip');
            formContainer.classList.add('flip');
            me.innerHTML = `
                <p>Ich bin 20 Jahre alt, komme aus Köln und studiere Medieninformatik!</p>
                <ul>
                    <li class = "listObjects">3 Semester Tutor für Mathe 1 & 2</li>
                    <li class = "listObjects">Momentan im 5. Semester an der TH Köln</li>
                    <li class = "listObjects">Abi im Jahr 2022 mit Schwerpunkt Mathemathik</li>
                </ul>
            `;
            setTimeout(() => {
                welcome.innerHTML = 'Hi, ich bin Yassin! 👋';
                me.style.visibility = 'visible';  // Zeigen beim Hindrehen
            }, 200)
        }
    });

    submitButton.addEventListener('click', () => {
        const userInputTopic = document.querySelector('.topics').value;
        const userInputName = document.querySelector('.name').value;
        const userInputMail = document.querySelector('.email').value;
        if(
            userInputTopic !== '' &&
            userInputName !== '' &&
            userInputMail !== ''
        ){
            submitButton.innerHTML = `
                <div class="loader"></div>
            `;
            console.log('Geaddet')
        }
    });
});