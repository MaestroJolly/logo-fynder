var form, companyLink, greyScale, logoSize, content, logoResult, timeout;

form = $("form");
companyLink = $("#company-link");
greyScale = $("#greyscale");
logoSize = $("#logo-size");
logoResult = $("#logo-result");
content = $("#content");
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
                data: {
                    link: companyLink.val(),
                    size: logoSize.val(),
                    greyscale: greyScale.prop("checked")
                },
                success: function(data){
                    // console.log(data);
                    console.log("worked");
                    logoResult.html(data);
                    console.log(typeof data);
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