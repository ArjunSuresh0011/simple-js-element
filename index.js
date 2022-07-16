function add_tag(){
    content = document.getElementById('input1').value   //fetching data from input

    para = document.createElement('p')  // created paragraph element

    data = document.createTextNode(content)  // Dom holding content

    para.appendChild(data)   // adding data to paragraph

    myDiv = document.getElementById('div1')
    myDiv.appendChild(para);

}

function clearContent(){
    document.getElementById('div1').innerHTML=""
}