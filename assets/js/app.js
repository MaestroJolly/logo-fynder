var form, companyLink, companyUrl, greyScale, logoSize, content, link, size, logoResult, timeout, img, imgDiv;

form = $("form");
companyLink = $("#company-link");
companyUrl = $(".company-url");
greyScale = $("#greyscale");
logoSize = $("#logo-size");
logoResult = $(".result");
content = $("#content");
imgDiv = $("#img-div");
timeout = 1000;

form.submit(function(event){
    event.preventDefault();
    if (!content.hasClass("result-animation")){
        content.toggleClass("result-animation");
        content.height("100%");
        logoResult.css("display", "block");
        setTimeout(function(){
            size = logoSize.val();
            greyscale = greyScale.prop("checked");
            link = "https://logo.clearbit.com/";
            link += companyLink.val();

            if(size && greyscale){
                link += '?size=' + size + '&greyscale=' + greyscale;
            }else{
                if(size){
                    link += '?size=' + size;
                }
                if(greyscale){
                    link += '?greyscale=' + greyscale;
                }
            }
            img = $('<img>');
            img.attr("src", link);
            companyUrl.text(companyLink.val());
            img.appendTo(imgDiv);
        }, timeout);
    }else{
        img.remove();
        link = "https://logo.clearbit.com/";
        setTimeout(function(){
            size = logoSize.val();
            greyscale = greyScale.prop("checked");
            link += companyLink.val();

            if(size && greyscale){
                link += '?size=' + size + '&greyscale=' + greyscale;
            }else{
                if(size){
                    link += '?size=' + size;
                }
                if(greyscale){
                    link += '?greyscale=' + greyscale;
                }
            }
            img = $('<img>');
            img.attr("src", link);
            companyUrl.text(companyLink.val());
            img.appendTo(imgDiv);
        }, timeout);
    }
});