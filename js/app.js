function addText(type, amount) {
    for (var i = 1; i <= amount; i++) {
        $('#' + type + ' > ul').append('<li class="size-' + i + '"><div>' + (10 + i) +  'px' + '</div><span>!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWYZ[\]_abcdefghijklmnopqrstuvwxyz{|}‑–—“”„…£€©®¡«»¿ÀàÂâÄäÁáÅåÃãÆæßÈèÉéÊêËëÌìÎîÏïÍíÒòÔôÖöÓóÕõØøŒœÙùÛûÜüÚúŸÿÇçÑñĲĳŠšŽžАаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя<br>The quick brown fox jumps over the lazy dog.<sup>The quick brown fox jumps over the lazy dog.</sup></span></li>');
    }
}

var data = {'font': 'full-woff', 'type': '1'};

addText('full-woff1', 20); // amount should reflect that of styles.less
addText('full-woff2', 20);

addText('base-woff1', 20);
addText('base-woff2', 20);

addText('euro-woff1', 20);
addText('euro-woff2', 20);

addText('cy-woff1', 20);
addText('cy-woff2', 20);

function showSection(fontValue) {
  $('.example-font').each(function () {
    if (!$(this).hasClass("hidden")) {
      $(this).addClass("hidden");
    }
  });

  if (fontValue !== undefined && fontValue !== null) {
    data.font = fontValue;
  }

  var divToShow = data.font + data.type;

  $('section[data-font="' + divToShow + '"]').removeClass("hidden");
}

function typefaceButton(showSection, hideSection){
    if(!$(showSection).is(":visible")){
        $(showSection).removeClass("hidden")
        $(hideSection).addClass("hidden")
    }
}

$('#woff-type').on('change', function() {

  if ($(this).prop('checked')) {
     data.type = "2";
  }
  else {
    data.type = "1";
  }

  showSection();
});

$("#button-unidayspro-full").click(function(){
    showSection("full-woff")
});

$("#button-unidayspro-base").click(function(){
    showSection("base-woff")
});

$("#button-unidayspro-euro").click(function(){
    showSection("euro-woff")
});

$("#button-unidayspro-cy").click(function(){
    showSection("cy-woff")
});

function modifierButton(modifier, selector){
    if(!$(selector).hasClass(modifier)){
        $(selector).addClass(modifier)
    }else{
        $(selector).removeClass(modifier)
    }
}

$("#button-underline").click(function(){
    modifierButton("underline", "#full-woff1 li span, #full-woff2 li span, #base-woff1 li span, #base-woff2 li span, #euro-woff1 li span, #euro-woff2 li span, #cy-woff1 li span, #cy-woff2 li span")
});

$("#button-background").click(function(){
    modifierButton("background", "#full-woff1 li span, #full-woff2 li span, #base-woff1 li span, #base-woff2 li span, #euro-woff1 li span, #euro-woff2 li span, #cy-woff1 li span, #cy-woff2 li span")
});

$("#button-pseudo-bold").click(function(){
    modifierButton("pseudo-bold", "#full-woff1 li span, #full-woff2 li span, #base-woff1 li span, #base-woff2 li span, #euro-woff1 li span, #euro-woff2 li span, #cy-woff1 li span, #cy-woff2 li span")
});

$("#button-italic").click(function(){
    modifierButton("italic", "#full-woff1 li span, #full-woff2 li span, #base-woff1 li span, #base-woff2 li span, #euro-woff1 li span, #euro-woff2 li span, #cy-woff1 li span, #cy-woff2 li span")
});
