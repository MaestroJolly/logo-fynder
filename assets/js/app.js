var form, companyLink, greyScale, logoSize, content, logoResult, timeout, img;

form = $("form");
companyLink = $("#company-link");
greyScale = $("#greyscale");
logoSize = $("#logo-size");
logoResult = $("#logo-result");
content = $("#content");
img = $("#img");
timeout = 1000;

form.submit(function(event){
    event.preventDefault();
    if (!content.hasClass("result-animation")){
        content.toggleClass("result-animation");
        content.height("50%");
        logoResult.css("display", "block");
        setTimeout(function(){
            $.ajax({
                type: "POST",
                url: "/fetch-logo",
                responseType: 'blob',
                data: {
                    link: companyLink.val(),
                    size: logoSize.val(),
                    greyscale: greyScale.prop("checked")
                },
                success: function(data){
                    // console.log(data);
                    console.log("worked");
                    // logoResult.html(data);
                    var blob = new Blob([data], { type: 'image/png' });
                    var url = window.URL || window.webkitURL;
                    console.log(url.createObjectURL(blob));
                    // img.src = url.createObjectURL(blob);
                    img.attr("src", url.createObjectURL(blob));
                    console.log(img);
                },
                error: function(error){
                    console.log(error);
                }
            })
        }, timeout);
    }
    console.log(companyLink.val());
    console.log(greyScale.prop("checked"));
    console.log(logoSize.val());
});