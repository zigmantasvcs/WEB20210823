function displayStudents(students, element){

    let allItems = "";
    for (let index = 0; index < students.length; index++) {
        const student = students[index];

        let template = '<div class="col m4 s12"> <div class="card"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="{{photo}}"> </div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">{{name}} {{surname}}<i class="material-icons right">more_vert</i></span> <p><a href="#">Daugiau</a></p></div><div class="card-reveal"> <span class="card-title grey-text text-darken-4">{{name}} {{surname}}<i class="material-icons right">close</i></span> <p>Dokumentas: {{documentId}}</p></div></div></div>';

        template = template.replaceAll("{{name}}", student.name);
        template = template.replaceAll("{{surname}}", student.surname);
        template = template.replaceAll("{{documentId}}", student.documentId);
        template = template.replaceAll("{{photo}}", student.photo);

        allItems += template;
    }

    element.innerHTML = allItems;
}