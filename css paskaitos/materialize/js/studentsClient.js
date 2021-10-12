function getStudents(){
    return fetch("http://sielinas-001-site1.etempurl.com/api/students/list")
        .then(response => response.json())
}

function createStudent(student){
    return fetch(
        "http://sielinas-001-site1.etempurl.com/api/students",
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(student)
        }
    ).then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            alert("Yra bėdų");
        }
    })
}