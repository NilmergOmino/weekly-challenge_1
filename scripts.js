document.addEventListener("DOMContentLoaded", function(){
    var formElements = document.getElementsByClassName('form-element'),
        formElementsLength = formElements.length;
    for(var i =0; i<formElementsLength; i++){
        formElements[i].addEventListener('focus', function(){
            var formGroup = this.parentNode,
                image = formGroup.getElementsByClassName('label__img');
            formGroup.classList.add('group_active');
            image[0].classList.add('label__img_active')

        })
        formElements[i].addEventListener('blur', function(){
            var formGroup = this.parentNode,
                image = formGroup.getElementsByClassName('label__img');
            formGroup.classList.remove('group_active');
            image[0].classList.remove('label__img_active')
        })
    }
})
