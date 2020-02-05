document.getElementById('myform').addEventListener('submit',saveDuLieu);
function saveDuLieu(e){

  var Tenweb = document.getElementById('tenweb').value;
  var Tenurl = document.getElementById('tenurl').value;

  var DuLieu={
    name: Tenweb,
    url : Tenurl
  };

   if(localStorage.getItem('dulieu')===null){
        var dulieu =[];

        dulieu.push(DuLieu);

        localStorage.setItem('dulieu',JSON.stringify(dulieu));
    }else{
        var dulieu = JSON.parse(localStorage.getItem('dulieu'));
        dulieu.push(DuLieu);
        localStorage.setItem('dulieu',JSON.stringify(dulieu));
        //tạo dữ liệu trong bảng 
   }

   document.getElementById('myform').reset(); //trả về lại hiện trạng ban đầu

   DoDulieu();
  e.preventDefault();
}

function deleteBookmark(url){
    var dulieu = JSON.parse(localStorage.getItem('dulieu'));
    for (var i = 0; i < dulieu.length; i++) {
        if(dulieu[i].url == url){
            dulieu.splice(i,1);
            //xóa object thứ i, 1 lần
        }
    }
    localStorage.setItem('dulieu',JSON.stringify(dulieu));
    DoDulieu();

}

function DoDulieu(){
       var dulieu = JSON.parse(localStorage.getItem('dulieu'));
        var ketqua = document.getElementById('ketqua');
        ketqua.innerHTML ='';
        for(var i = 0; i < dulieu.length; i++){
        var name = dulieu[i].name;
        var url = dulieu[i].url;
            ketqua.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href='+url+' >Visit</a> '+
                                  ' <a class="btn btn-danger" href="#" onclick="deleteBookmark(\''+url+'\')">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
        }
    }