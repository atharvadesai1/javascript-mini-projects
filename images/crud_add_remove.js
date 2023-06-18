let addState = document.getElementById('addBtn');
        addState.addEventListener('click',addBook);
        let parentList = document.getElementById('parentList');
        // removeState.addEventListener('click',removeBook);

        if(parentList.childElementCount===0){
            let msgIntend = document.getElementById('msgImp');
            const h3 = document.createElement("h3");
            const textNode = document.createTextNode("Please insert your desire books !");
            h3.appendChild(textNode);
            msgIntend.appendChild(h3);

        }

        function addBook(e){
            let currentButton = e.currentTarget;
            let currentInput = currentButton.previousElementSibling.value;
            console.log(currentInput);

            let displayInput = document.createElement('li');
            displayInput.classList.add('list-group-item');
            displayInput.className="list-group-item d-flex justify-content-center";
            displayInput.innerHTML = `<p class="flex-grow-1">${currentInput}</p> 
                <button id="yellowBtn" class="btn btn-warning">Edit</button> 
                <button id="redBtn" class="btn btn-danger mx-1" onclick="removeBook(this)">Remove</button>`

            let parentBlock = document.getElementById('parentList');
            parentBlock.appendChild(displayInput);
        }

        function removeBook(currentEle){
            if(parentList.childElementCount===0){
                let msgIntend = document.getElementById('msgImp');
                const h3 = document.createElement("h3");
                const textNode = document.createTextNode("Please insert your desire books !");
                h3.appendChild(textNode);
                msgIntend.appendChild(h3);
    
            }
            else{
            console.log(currentEle.parentElement)
            currentEle.parentElement.remove();
            }
        }
