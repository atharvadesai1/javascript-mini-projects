let addState = document.getElementById('addBtn');
addState.addEventListener('click',addBook);
let parentList = document.getElementById('parentList');
let msgIntend = document.getElementById('msgImp');
let msgImp = document.getElementById('msgImp');

        // removeState.addEventListener('click',removeBook);

        if(parentList.childElementCount===0){
            let msgIntend = document.getElementById('msgImp');
            const h3 = document.createElement("h3");
            const textNode = document.createTextNode("Please insert your desire books !");
            h3.appendChild(textNode);
            msgIntend.appendChild(h3);

        }

        function addBook(e){
            if(msgImp.childElementCount!==0){
                let removeElement = msgImp.firstElementChild;
                console.log(removeElement);
                removeElement.remove();
            }

            let currentButton = e.currentTarget;
            let currentInput = currentButton.previousElementSibling.value;
            console.log(currentInput);

            let displayInput = document.createElement('li');
            displayInput.classList.add('list-group-item');
            displayInput.className="list-group-item d-flex justify-content-center";
            displayInput.innerHTML = `<h5 class="flex-grow-1">${currentInput}</h5> 
                <button id="yellowBtn" class="btn btn-warning" onclick="editBook(this)">Edit</button> 
                <button id="redBtn" class="btn btn-danger mx-1" onclick="removeBook(this)">Remove</button>`

            let parentBlock = document.getElementById('parentList');
            parentBlock.appendChild(displayInput);
        }

        function removeBook(currentEle){
            console.log(currentEle.parentElement)
            currentEle.parentElement.remove();
            
            if(parentList.childElementCount===0){
                let msgIntend = document.getElementById('msgImp');
                const h3 = document.createElement("h5");
                const textNode = document.createTextNode("Please insert your desire books !");
                h3.appendChild(textNode);
                msgIntend.appendChild(h3);
    
            }
        }

        function editBook(currentElement){
            if(currentElement.textContent=="Done"){
                currentElement.textContent = "Edit";
                let prevInput = currentElement.previousElementSibling.value;
                let editedElement = document.createElement('h4');
                editedElement.className = "flex-grow-1";
                editedElement.textContent = prevInput;
                currentElement.parentElement.replaceChild(editedElement,currentElement.previousElementSibling);

            }
            else{
                let prevInput = currentElement.previousElementSibling.textContent;
                currentElement.textContent = "Done"
                let newInput = document.createElement('input');
                newInput.type = "text";
                newInput.placeholder = "Book Name";
                newInput.className = "form-control";
                newInput.value = prevInput;
                currentElement.parentElement.replaceChild(newInput,currentElement.previousElementSibling);
            }
        }

