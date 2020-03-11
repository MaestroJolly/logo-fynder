var form, companyLink, companyUrl, greyScale, logoSize, content, link, size, logoResult, timeout, img, imgDiv;

form = $("form");
companyLink = $("#company-link");
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
            companyUrl = $("<p>");
            companyUrl.attr("class", "company-url");
            companyUrl.text(companyLink.val());
            imgDiv.attr("class", "img-border");
            img.appendTo(imgDiv);
            companyUrl.appendTo(imgDiv);
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
            companyUrl = $("<p>");
            companyUrl.attr("class", "company-url");
            companyUrl.text(companyLink.val());
            imgDiv.attr("class", "img-border");
            img.appendTo(imgDiv);
            companyUrl.appendTo(imgDiv);
        }, timeout);
    }
});