var guestname = []
function addname(){
    var htmldata;
    var item=document.getElementById("guest_name").value;
    guestname.push(item);
    htmldata="<section class='cards'>"
    for(var i=0;i<guestname.length;i++){

        htmldata=htmldata+'<div id="list">'  + guestname[i] + '</div>'
    }
      htmldata=htmldata+"</div>"
      document.getElementById("list").innerHTML = htmldata;
}
function sort(){
guestname.sort();
document.getElementById("sort_list").innerHTML = guestname;
}
function search(){
    var s = document.getElementById("search_input").value;
    var found = 0;
    var j;
    for(j=0; j<guestname.length; j++){
        if(s==guestname[j]){
            found = found+1;
        }
    }
    document.getElementById("found_0").innerHTML="name found"+found+" time/s";
    console.log("found name"+found+"time/s");
}

