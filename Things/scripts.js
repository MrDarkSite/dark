$(function () {
        $('#addButton')
           .on("click",function () {
               // alert($('#name_thing').val()); //чтение названия
               // alert($('#description').val()); //чтение описания

               $('#nothing').remove();

               const NewName = $('<h3></h3>');
               NewName.text($('#name_thing').val());
               const NewDescription = $('<div id="text"></div>');
               NewDescription.text($('#description_thing').val());
               const Cross = $('<img src="img/cross.png" id="cross">');
               const Arrow = $('<img src="img/arrow.png" id="arrow">');

               const NewThing = $('<div class="thing"></div>');
               NewName.prependTo($(NewThing));
               Cross.appendTo($(NewThing));
               Arrow.appendTo($(NewThing));
               NewDescription.appendTo($(NewThing));
               $('#things-to-do').prepend(NewThing);

           });

        $(document).ready(function () {
                $("body").on("click", "#cross", function () {
                        $(this).parents(".thing").remove();
                });
        });


        $(document).ready(function () {
                $("body").on("click", "#arrow", function () {
                    $(this).prev().slideToggle(300);
                });
            });

    // $(document).ready(function () {
    //     $("body").on("click", "#arrow", function (event) {
    //         if ($(arrow).classList.contains("transform") == true) {
    //             $(this).css("transform", "rotate(-90deg)");
    //             $(".text").css("display");
    //         }
    //     });
    // });

    // $(document).ready(function () {
    //     $("body").on("click", "#arrow", function () {
    //         var NewDescription = $('<div class="text"></div>');
    //         $(this).css("transform", "rotate(-90deg)");
    //         $(".text").css("display", "block");
    //     });
    // });

});
