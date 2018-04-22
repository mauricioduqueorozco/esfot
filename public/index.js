window.onload = function(){

  var fileInput_TET317L_CPR2 = document.getElementById("fileInput_TET317L_CPR2");
  var fileInput_TEM425L_CPR1 = document.getElementById("fileInput_TEM425L_CPR1");
  var fileInput_TEM425L_CPR2 = document.getElementById("fileInput_TEM425L_CPR2");
  var fileInput_TEM315L_CPR1 = document.getElementById("fileInput_TEM315L_CPR1");
  var fileInput_TEM315L_CPR2 = document.getElementById("fileInput_TEM315L_CPR2");
  var fileInput_TEM212_GR2 = document.getElementById("fileInput_TEM212_GR2");
  var fileInput_TEM212_GR4 = document.getElementById("fileInput_TEM212_GR4");
  var fileInput_TET412_GR2 = document.getElementById("fileInput_TET412_GR2");

  fileInput_TET317L_CPR2.addEventListener('change',e=>{
    var file = fileInput_TET317L_CPR2.files[0];
    sendInfo(file, 'TET317L_CPR2')
  })

  fileInput_TEM425L_CPR1.addEventListener('change',e=>{
    var file = fileInput_TEM425L_CPR1.files[0];
    sendInfo(file, 'TEM425L_CPR1')
  })

  fileInput_TEM425L_CPR2.addEventListener('change',e=>{
    var file = fileInput_TEM425L_CPR2.files[0];
    sendInfo(file, 'TEM425L_CPR2')
  })

  fileInput_TEM315L_CPR1.addEventListener('change',e=>{
    var file = fileInput_TEM315L_CPR1.files[0];
    sendInfo(file, 'TEM315L_CPR1')
  })

  fileInput_TEM315L_CPR2.addEventListener('change',e=>{
    var file = fileInput_TEM315L_CPR2.files[0];
    sendInfo(file, 'TEM315L_CPR2')
  })

  fileInput_TEM212_GR2.addEventListener('change',e=>{
    var file = fileInput_TEM212_GR2.files[0];
    sendInfo(file, 'TEM212_GR2')
  })

  fileInput_TEM212_GR4.addEventListener('change',e=>{
    var file = fileInput_TEM212_GR4.files[0];
    sendInfo(file, 'TEM212_GR4')
  })

  fileInput_TET412_GR2.addEventListener('change',e=>{
    var file = fileInput_TET412_GR2.files[0];
    sendInfo(file, 'TET412_GR2')
  })

  function sendInfo(file , url) {
    var formData = new FormData();
    var size = (file.size/1000024).toFixed(2); //1000024 -> MB

    formData.append("image", file);
    formData.append("current_directory", this.current_directory);

    axios.post('/' + url, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(function(response){
        console.log(response);
        if(response.status == 200) alert("Archivo subido con exito")
        else alert("Error: vuelva a subir el archivo")

    }).catch(function(error){
        console.log(error);
    });
  }

}
