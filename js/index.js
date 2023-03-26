new WOW().init();

// try {
//     $("#slide-view").css({
//         "background-image": "url(" + INDEX_SIDER_BASE64 + ")"
//     });
// } catch (error) {
//    console.log(error); 
// }

try {
    $("#index-img-1").attr("src", INDEX_1);
    $("#index-img-2").attr("src", INDEX_2);
    $("#index-img-3").attr("src", INDEX_3);
} catch (error) {
   console.log(error); 
}

try {
    $("#service-img-1").attr("src", SERVICE_1);
    $("#service-img-2").attr("src", SERVICE_2);
} catch (error) {
    console.log(error);
}
