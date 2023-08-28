$( document ).ready(function() {
    if($("#ispresident").val() != 1 ){
        $("#ispresident").prop('checked', false);
    }
    if($("#copresident").val() != 1 ){
        $("#copresident").prop('checked', false);
    }
    $( ".type_sub" ).change() ;
    // var clubsname=null;
    if (typeof clubsname !== "undefined") {
        autocomplete(document.getElementById("serachfield"), clubsname);
    }
});
    $('.select2').select2({
        width: "100%"
    });
  if ($("#select2categories").length) {

            if ($("#select2categories").val() != "") {
 $('.select2cat').val($("#select2categories").val().split(',')).trigger('change');
        }
    }
        if ($("#select2sport").length) {
            if ($("#select2sport").val() != "") {
                $('.select2sport').val($("#select2sport").val().split(',')).trigger('change');
            }
        }


$('.select2cat').on("change", function (e) {
    if($(this).val()=="" ){
        $("#select2categories").val(0);
    }else{
        $("#select2categories").val($(this).val() );
    }
});

$('.select2sport').on("change", function (e) {

    if($(this).val()=="" )
       $("#select2sport").val(0);
   else
    $("#select2sport").val($(this).val());
});
$('.rowbox').masonry({
    itemSelector: '.boxbb'
});
$(window).resize(function () {
    $('.rowbox').masonry('reload');
});
$(".search-filter-box .filter-list li a ").click(function () {
    var data = $(this).attr("attr-data");

    if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        if ($(this).hasClass("type")) {

            $(".choosen_filter ").append("<li><a attr-data='" + data + "' class='type'>" + $(this).text() + "<i onclick='removefromfilter(\"type\"  ," + data + " )' class='icon-close-big'></i></a></li>");
            return true;
        } else {
            $(".choosen_filter ").append("<li><a attr-data='" + data + "' class='cat' >" + $(this).text() + "<i onclick='removefromfilter( \"cat\" ," + data + ")' class='icon-close-big'></i></a></li>");
            return true;
        }
    } else {
        $(this).removeClass("active");
        $(".choosen_filter li a[attr-data = '" + data + "' ]").parent().remove();
    }

});
$('.ckeditor').each(function (e) {
   /* if (this.id == "entraineursnew")
        CKEDITOR.replace(this.id).setData("<ul><li></li></ul>");
    else*/

      var config = { extraPlugins: 'confighelper' };
      CKEDITOR.replace(this.id , config );


});

$(".searchform").submit(function (e) {
    var categories = [];
    var type = [];
    $(".filter-list-cat li a.active").each(function () {
        categories.push($(this).attr("attr-data"));

    });
    $(".filter-list-sport li a.active").each(function () {
        type.push($(this).attr("attr-data"));

    });

    $("#categories").val(categories);
    $("#type").val(type);

});

function removefromfilter(type, data) {

    if (type == "type") {
        $(".choosen_filter li .type[attr-data = '" + data + "' ]").parent().remove();
        $(".search-filter-box .filter-list li .type[attr-data = '" + data + "' ]").removeClass("active");
    } else {
        $(".choosen_filter li .cat[attr-data = '" + data + "' ]").parent().remove();
        $(".search-filter-box .filter-list li .cat[attr-data = '" + data + "' ]").removeClass("active");
    }

}
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
            typeof define === 'function' && define.amd ? define(['jquery'], factory) :
                (factory(global.jQuery));
    }(this, (function ($) {
        'use strict';

        $.fn.datepicker.languages['fr-FR'] = {
            format: 'dd/mm/yyyy',
            days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            daysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            daysMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            weekStart: 1,
            months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec']
        };
    })));
$('.tx-wng-sport input[type="checkbox"]').change(function(){
if(this.checked){
    $(this).val(1);
}else{
    $(this).val(0);
}
});
var  today = new Date();

    $(".form_datetime").datepicker({
        language: 'fr-FR' ,
        format: "d/m/yyyy" ,
        startDate : new Date(today.getFullYear(), today.getMonth()  , today.getDate() )
    });

    $( ".dropdownclub_sub" ).change(function() {
        if($(this).val() != 0 ){

            var ajaxUri = $( ".dropdownclub_sub" ).attr("data-url") ;
            $.ajax({
                async: 'true',
                url: ajaxUri ,
                type: 'POST',
                data : 'tx_wngsport_clubsportif[newSubvention][clubid]='+$(this).val()+'&tx_wngsport_clubsportif[newSubvention][pidedit]='+$(this).attr("data-pidedit")  ,
                success: function (result) {
                $(".validateclub").show();
                $(".ajax_club").html(result) ;
                },
                error: function (error) {
                    console.log(error);
                }
            });



        }else{
            $(".ajax_club").html("") ;
        }
    });
    $( ".type_sub" ).change(function() {
        var type = $(this).val();
        $(".type_3 ,.type_2 , .type_1 ,.type_4 , .intro ,.submitsub ").hide();
        $(".intro"+type ).show();
        if( type == 1 ){
            $(".type_1 ,.submitsub").show();
        }else if( type == 2 || type == 7){
            $(".type_2 ,.submitsub").show();
        }else if( type == 3){
            $(".type_3 ,.submitsub").show();
        } else if( type == 4 || type == 5  || type == 6 ){
           $(".type_4 ,.submitsub").show();
       }else{
            $(".type_1 ,.type_4 , .intro  ,.submitsub ").hide();
        }


    });
$('.copresident').change(function () {
    if($('.copresident input').is(":checked")) {
        $(".copresidentblock").show() ;
        $("#copresident").val(1) ;
        return;
    }else{
        $(".copresidentblock").hide() ;
        $("#copresident").val(0) ;
        return;
    }
});
$('.pcispresident').change(function () {
    if($('.pcispresident input').is(":checked")) {
        $(".presidentblock").show() ;
        $("#ispresident").val(1) ;
        return;
    }else{
        $(".presidentblock").hide() ;
        $("#ispresident").val(0) ;
        return;
    }
});
$( ".formclubentity" ).submit(function( event ) {
    console.log(8888888888);
    if(!$('.pcispresident input').is(":checked")) {
        $("#presidentnamenew").val($( "#pcfirstnamenew").val() );
        $("#presidentlastnamenew").val($( "#pclastnamenew").val() );
        $("#presidenttelnew").val($( "#pctelnew").val() );
        $("#presidentemailnew").val($( "#pcemailnew").val() );
        return;
    }
});
  /*  $( ".validateclub" ).click(function(e) {
$(".validateclub , .dropdownclub_sub ").hide();
$(".ajax_club").hide();
e.preventDefault();
    });*/