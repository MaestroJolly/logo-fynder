var form, companyLink, grayScale, logoSize, content;

form = $("form");
companyLink = $("#company-link");
grayScale = $("#gray-scale");
logoSize = $("#logo-size");
content = $("#content");

form.submit(function(event){
    if (!content.hasClass("result-animation")){
        content.height("50%");
        content.toggleClass("result-animation");
    }
    console.log(companyLink.val());
    console.log(grayScale.val());
    console.log(logoSize.val());
    event.preventDefault();
});