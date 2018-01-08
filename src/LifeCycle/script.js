var jcontent = [{
    'firstName': 'Shikhar',
    'lastName': 'Dhawan'
}]

console.log(jcontent);

var output = document.getElementById("output");
output.innerHTML = jcontent[0].firstName + ' ' + jcontent[0].lastName;