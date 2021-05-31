$(document).ready(function(){
        $.ajax({
      type: "GET",
      url: "http://localhost:8080/v1/classregisters",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      success: function(data){  
         console.log("Request response",data)  

         for(var i = 0 ; data.length ; i++){
         	$(".tbody").append('<tr>'+
            '<td>'+
              '<span class="custom-checkbox">'+
                '<input type="checkbox" id="checkbox1" name="options[]" value="1">'+
                '<label for="checkbox1"></label>'+
              '</span>'+
            '</td>'+
            '<td>'+data[i].studentModel.studentName+'</td>'+
            '<td>'+new Date(data[i].createDateTime).toLocaleString()+'</td>'+
            '<td>'+data[i].classModel.className+'</td>'+
            '<td>'+data[i].present+'</td>'+
            '<td>'+
              '<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>'+
              '<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'+
            '</td>'+
          '</tr>');
         }
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#studentId",function(){
        $.ajax({
      type: "GET",
      url: "http://localhost:8080/v1/students",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      success: function(data){  
         console.log("Request response",data)  

         for(var i = 0 ; data.length ; i++){
         	$(".student").append('<a class="dropdown-item" href="#" id="'+data[i].studentId+'"  onClick="dropDownStudent(this.id)">'+data[i].studentName+'</a>');
         }
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#studentId",function(){
        $.ajax({
      type: "GET",
      url: "http://localhost:8080/v1/classes",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      success: function(data){  
         console.log("Request response",data)  

         for(var i = 0 ; data.length ; i++){
         	$(".class").append('<a class="dropdown-item" href="#" id="'+data[i].classId+'"  onClick="dropDownClass(this.id)">'+data[i].className+'</a>');
         }
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });


$(document).on("click","#studentModalId",function(){
        $.ajax({
      type: "GET",
      url: "http://localhost:8080/v1/classes",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      success: function(data){  
         console.log("Request response",data)  

         for(var i = 0 ; data.length ; i++){
         	$(".classForStudent").append('<a class="dropdown-item" href="#" id="'+data[i].classId+'"  onClick="dropDownClassForStudent(this.id)">'+data[i].className+'</a>');
         }
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#studentModalId",function(){
        $.ajax({
      type: "GET",
      url: "http://localhost:8080/v1/grades",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      success: function(data){  
         console.log("Request response",data)  

         for(var i = 0 ; data.length ; i++){
         	$(".gradeForStudent").append('<a class="dropdown-item" href="#" id="'+data[i].gradeId+'"  onClick="dropDownGradeForStudent(this.id)">'+data[i].gradeName+'</a>');
         }
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });


function dropDownStudent(id){
  $("#name").val(id)
}

function dropDownClass(id){
  $("#class").val(id)
}

function dropDownAttendence(id){
  $("#attendence").val(id)
}

function dropDownClassForStudent(id){
  $("#classForStudent").val(id)
}

function dropDownGradeForStudent(id){
  $("#gradeForStudent").val(id)
}