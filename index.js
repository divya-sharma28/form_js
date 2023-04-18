
// -------------------------- CREATING FORM --------------------------
// SELECT INPUT TYPE 
var mySelect = document.getElementById("myselect");



let addField = () => {
    if (mySelect.value == "") {
        alert("Please select an input Field!")
    }


    else {
        var mainDiv = document.getElementById('maindiv'); //html div in screen one :mainDiv
        mainDiv.style.display = "block"

        var divIn = document.createElement('div');
        mainDiv.appendChild(divIn);  //div created and appended in mainDiv :divIn 
        divIn.className = "d-flex divIn align-items-center";
        var innerDivLabel = document.createElement('div');
        var innerDivInput = document.createElement('div')
        divIn.appendChild(innerDivLabel); //div for label created and appended in divIn :innerDivLabel 
        divIn.appendChild(innerDivInput); //div for input created and appended in divIn :innerDivInput 
        innerDivLabel.className = "innerDivLabel";
        innerDivInput.className = "innerDivInput";
        innerDivInput.id = "innerDivInput";
        innerDivLabel.id = "innerDivLabel";

        // CROSS BUTTON
        var cross = document.createElement("span");
        divIn.appendChild(cross); //span created and appended in divIn :cross
        cross.innerHTML = "&times;";
        cross.onclick = () => {  //onclick event on span removes a divIn 
            mainDiv.removeChild(divIn);
        }




        // -----------------------------------------

        // LABEL ON SCREEN ONE 
        var inpLabel = document.createElement('input');
        var addLabelBtn = document.createElement('button')
        innerDivLabel.appendChild(inpLabel); //input created and appended to div --> innerDivLabel : inpLabel
        innerDivLabel.appendChild(addLabelBtn); //button created and appended to div --> innerDivLabel : addLabelBtn
        inpLabel.type = "text";
        inpLabel.placeholder = "Enter Label"
        addLabelBtn.innerText = "ADD";

        addLabelBtn.onclick = () => { // on click event on addLabelBtn
            if (inpLabel.value == "") {
                alert("Enter your label!")
            }
            else {
                var showLabel = document.createElement('label');
                showLabel.id = "showLabel"
                innerDivLabel.appendChild(showLabel);
                showLabel.innerText = inpLabel.value + ":-";
                innerDivLabel.removeChild(inpLabel);
                innerDivLabel.removeChild(addLabelBtn);
            }

        }

        // INPUT FIELD BASED ON SELECT VALUE

        // TEXT NUMBER EMAIL
        var inputData = document.createElement('input');
        innerDivInput.appendChild(inputData);
        inputData.type = mySelect.value;
        inputData.placeholder = mySelect.value;
        inputData.id = "inputData";
        inputData.className = "inputData";



        // RADIO
        if (mySelect.value == "radio") {
            var optAddBtn = document.createElement('button')
            var brk1 = document.createElement("br");

            brk1.id = "brk1";
            inputData.style.display = "none";
            var enterOpt = document.createElement("input");
            enterOpt.placeholder = "Option"
            innerDivInput.appendChild(enterOpt);
            innerDivInput.appendChild(optAddBtn);
            innerDivInput.appendChild(brk1)

            optAddBtn.innerText = "ADD";
            optAddBtn.onclick = () => {
                if (inpLabel.value == "") {
                    alert("Please add Label");

                }
                else if (enterOpt.value == "") {
                    alert("Please add options")
                }

                else {

                    var optInput = document.createElement('input');
                    var optLabel = document.createElement('label');
                    innerDivInput.appendChild(optInput);
                    optInput.type = "radio";
                    optInput.name = inpLabel.value;
                    optInput.className = "optInput";
                    optInput.id = "optInput";
                    innerDivInput.appendChild(optLabel);
                    var brk2 = document.createElement("br")
                    innerDivInput.appendChild(brk2);
                    optLabel.innerHTML = enterOpt.value;
                    // enterOpt.value = optLabel.innerHTML ;
                    optInput.setAttribute("value", optLabel.innerHTML)

                    enterOpt.value = ""
                }


            }
        }

        // CHECKBOX
        if (mySelect.value == "checkbox") {
            var optAddBtn2 = document.createElement('button')
            var brk12 = document.createElement("br");

            brk12.id = "brk1";
            inputData.style.display = "none";
            var enterOpt2 = document.createElement("input");
            enterOpt2.placeholder = "Option"
            innerDivInput.appendChild(enterOpt2);
            innerDivInput.appendChild(optAddBtn2);
            innerDivInput.appendChild(brk12)

            optAddBtn2.innerText = "ADD";
            optAddBtn2.onclick = () => {
                if (inpLabel.value == "") {
                    alert("Please add Label");

                }
                else if (enterOpt2.value == "") {
                    alert("Please add options")
                }

                else {

                    var optInput2 = document.createElement('input');
                    var optLabel2 = document.createElement('label');
                    innerDivInput.appendChild(optInput2);
                    optInput2.type = "checkbox";
                    optInput2.name = inpLabel.value;
                    optInput2.className = "optInput1";
                    optInput2.id = "optInput1";
                    innerDivInput.appendChild(optLabel2);
                    var brk22 = document.createElement("br")
                    innerDivInput.appendChild(brk22);
                    optLabel2.innerHTML = enterOpt2.value;
                    // enterOpt.value = optLabel.innerHTML ;
                    optInput2.setAttribute("value", optLabel2.innerHTML)
                    enterOpt2.value = ""
                }


            }
        }

        // SELECT

        else if (mySelect.value == "Select") {
            inputData.type = "hidden"
            inputData.style.display = "none";
            var selinp = document.createElement("input");
            innerDivInput.appendChild(selinp);
            selinp.placeholder = "Option";

            var selBtn = document.createElement("button");
            innerDivInput.appendChild(selBtn);
            selBtn.innerText = "ADD"
            var selTag = document.createElement('select');
            innerDivInput.appendChild(selTag);
            selTag.id = "selTag"


            if (selTag.innerHTML == "") {
                selTag.style.display = "none"
            }


            selBtn.onclick = () => {
                if (inpLabel.value == "") {
                    alert("Please add Label");

                }
                else if (selinp.value == "") {
                    alert("Please add options")
                }
                else {
                    selTag.style.display = "block"
                    selTag.style.marginTop = "10px"

                    var selOpt = document.createElement('option');
                    selTag.appendChild(selOpt)

                    selOpt.innerText = selinp.value;
                    selOpt.value = selinp.value;
                    selinp.value = "";
                }






            }



        }


        //SUBMIT 
        else if (mySelect.value == "Submit") {
            var bool = confirm("Is your form complete?");
            if (bool == false) {
                mainDiv.removeChild(divIn);
            }


            else {
                mainDiv.appendChild(inputData);
                mainDiv.removeChild(divIn);



            }

            // SECOND SCREEN ON CLICK
            inputData.onclick = () => {
                var screenOne = document.getElementById("screenOne");
                var screenTwo = document.getElementById("screenTwo");
                screenTwo.style.display = "block";




                for (i = 0; i < mainDiv.childElementCount - 1; i++) {

                    var s2Div = document.createElement("div")
                    var mylabeldiv = document.createElement("div");
                    var myInputdiv = document.createElement("div");

                    myInputdiv.id = "myInputdiv"
                    mylabeldiv.id = "mylabeldiv"

                    myInputdiv.className = "myInputdiv"
                    mylabeldiv.className = "mylabeldiv"

                    screenTwo.appendChild(s2Div);
                    s2Div.appendChild(mylabeldiv);
                    s2Div.appendChild(myInputdiv);

                    s2Div.className = "s2Div";
                    a = document.getElementsByClassName("innerDivLabel");
                    b = document.getElementsByClassName("innerDivInput");
                    mylabeldiv.innerHTML += a[i].innerHTML;
                    myInputdiv.innerHTML += b[i].innerHTML;

                }

                screenOne.remove()



                var submisson = document.createElement("button");
                screenTwo.append(submisson);
                submisson.innerText = "Submit"
                submisson.addEventListener("click", fun1)

                //THIRD SCREEN ON CLICK
                function fun1() {

                    const data = document.getElementsByClassName('inputData');
                    // var d = document.getElementById("inputData");
                    var v = document.getElementById("optInput");
                    var w = document.getElementById("optInput1");
                    console.log(data[0].value)

                    for (i = 0; i < screenTwo.childElementCount - 2; i++) {


                        // console.log(data[i].type);

                        var screenThree = document.getElementById("screenThree");
                        screenThree.style.display = "block";
                        screenTwo.style.display = "none";

                        var s3div = document.createElement('div');
                        screenThree.appendChild(s3div);
                        s3div.className = "s3div"
                        var flabel1 = document.createElement('label');
                        var flabel2 = document.createElement('label');
                        var l1div = document.createElement('div');
                        var l2div = document.createElement('div');
                        l1div.className = "l1div";
                        l2div.className = "l2div";
                        s3div.appendChild(l1div);
                        s3div.appendChild(l2div);
                        l1div.appendChild(flabel1);
                        l2div.appendChild(flabel2);

                        var abc = document.getElementsByClassName("mylabeldiv")
                        flabel1.innerHTML += abc[i].innerHTML;

                        //for select
                        if (data[i].type == "hidden") {
                            flabel2.innerHTML += document.getElementById("selTag").value
                        }
                        // for text number or email
                        if (data[i].type == "text" || data[i].type == "number" || data[i].type == "email") {
                            flabel2.innerHTML += data[i].value;
                        }
                        // for radio and check box
                        else if (data[i].type == "radio") {

                            var selectedVal = document.getElementsByName(v.name);


                            for (var j = 0; j < selectedVal.length; j++) {
                                if (selectedVal[j].checked == true) {
                                    flabel2.innerHTML += selectedVal[j].value + "<br>";
                                }


                            }

                        }
                        // for check box

                        else if (data[i].type == "checkbox") {


                            var selectedVal2 = document.getElementsByName(w.name);


                            for (var k = 0; k < selectedVal2.length; k++) {
                                if (selectedVal2[k].checked == true) {
                                    flabel2.innerHTML += selectedVal2[k].value + "<br>";
                                }
                            }
                        }
                    }




                }
            }


        }
    }
}















