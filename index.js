
function clicked() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank")
}

function clicked1() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank")
}

function clicked2(){
    if(document.getElementById("pic1").src === "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"){
        document.getElementById("pic1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"
    }
    else if(document.getElementById("pic1").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10") {
        document.getElementById("pic1").src = "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
    }
    else if(document.getElementById("pic1").src === "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"){
        document.getElementById("pic1").src = "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"
    }
}

function clicked3(){
    if(document.getElementById("pic1").src === "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"){
        document.getElementById("pic1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"
    }
    else if(document.getElementById("pic1").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10") {
        document.getElementById("pic1").src = "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"
    }
    else if(document.getElementById("pic1").src === "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"){
        document.getElementById("pic1").src = "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
    }
}

function sideBar(id){
    window.location.href="#"+id;
}

function openMe(){
    let x = document.getElementById("hidden1");
    if(x.style.display === "none"){
        x.style.display = "block"
        document.getElementById("hidden2").style.display = "none"
    } else {
        x.style.display = "none"
    }

}

function openMe2(){
    let x = document.getElementById("hidden2");
    if(x.style.display === "none"){
        x.style.display = "block"
        document.getElementById("hidden1").style.display = "none"
    } else {
        x.style.display = "none"
    }
}

function buttonSmall(){
    let hid = document.querySelector(".sb");
        if(hid.style.display === "none"){
            hid.style.display = "block";

            document.getElementById("buttonSmall").style.color= "black";

        }
        else{
            hid.style.display = "none";
            document.getElementById("buttonSmall").style.color= "white";
        }
}

