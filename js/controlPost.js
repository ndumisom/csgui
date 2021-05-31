$(document).on("click","#addClassRegister",function(){
        $.ajax({
      type: "POST",
      url: "http://localhost:8080/v1/classregister",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
   "classModel":{
      "classId":$("#class").val(),
      "className":"string",
      "createDateTime":"2021-05-31T14:30:17.352Z",
      "updateDateTime":"2021-05-31T14:30:17.352Z"
   },
   "createDateTime":"2021-05-31T14:30:17.352Z",
   "present":$("#attendence").val(),
   "studentModel":{
      "classModel":{
         "classId":$("#class").val(),
         "className":"string",
         "createDateTime":"2021-05-31T14:30:17.352Z",
         "updateDateTime":"2021-05-31T14:30:17.352Z"
      },
      "gradeModel":{
         "createDateTime":"2021-05-31T14:30:17.352Z",
         "gradeId":0,
         "gradeName":0,
         "updateDateTime":"2021-05-31T14:30:17.352Z"
      },
      "studentId":$("#name").val(),
      "studentName":"string",
      "studentSurname":"string"
   },
   "updateDateTime":"2021-05-31T14:30:17.352Z"
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
      } else {
      }
      // window.location.href="http://localhost/dreams/cocamzansi";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });


$(document).on("click","#addClass",function(){
        $.ajax({
      type: "POST",
      url: "http://localhost:8080/v1/class",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
   "classId":0,
   "className":$("#className").val(),
   "createDateTime":"2021-05-31T14:30:17.351Z",
   "updateDateTime":"2021-05-31T14:30:17.351Z"
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
      } else {
      }
      // window.location.href="http://localhost/dreams/cocamzansi";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });

$(document).on("click","#addGrade",function(){
        $.ajax({
      type: "POST",
      url: "http://localhost:8080/v1/grade",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
   "gradeId":0,
   "gradeName":$("#gradeName").val(),
   "createDateTime":"2021-05-31T14:30:17.351Z",
   "updateDateTime":"2021-05-31T14:30:17.351Z"
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
      } else {
      }
      // window.location.href="http://localhost/dreams/cocamzansi";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });


$(document).on("click","#addStudent",function(){
        $.ajax({
      type: "POST",
      url: "http://localhost:8080/v1/student",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
   "classModel":{
      "classId":$("#classForStudent").val(),
      "className":"string",
      "createDateTime":"2021-05-31T11:32:00.683Z",
      "updateDateTime":"2021-05-31T11:32:00.683Z"
   },
   "gradeModel":{
      "createDateTime":"2021-05-31T11:32:00.683Z",
      "gradeId":$("#gradeForStudent").val(),
      "gradeName":0,
      "updateDateTime":"2021-05-31T11:32:00.683Z"
   },
   "studentId":0,
   "studentName":$("#gradeNameForStudent").val(),
   "studentSurname":$("#gradeSurnameForStudent").val()
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
      } else {
      }
      // window.location.href="http://localhost/dreams/cocamzansi";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });
