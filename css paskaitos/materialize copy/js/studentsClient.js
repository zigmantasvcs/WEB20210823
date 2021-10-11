function getStudents(){
    return fetch('http://sielinas-001-site1.etempurl.com/api/students/list')
        .then(response => response.json());
}

function saveResult(student) {
    return fetch(
        "http://sielinas-001-site1.etempurl.com/api/students", 
        { 
            method: "POST", 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(student) //'{"name":"aa", "surname":"bb", "photo":"asdasd", "documentId":"asdasd", "birthDay":"1981-07-23"}'
        }
    );
}