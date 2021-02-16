$(document).ready(function () {
    var currentDate;

    // Display calendar 
    $('#calendar').datepicker({
        showButtonPanel: true,
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEXT', 'SAB'],
        appendText: "hell",
        // Select date and show the add event card
        onSelect: function (selectedDate) {
            //$("#event-form").show().css("left", $(this).find('.ui-datepicker-current-day').position().left).css("top", ($(this).find('.ui-datepicker-current-day').position().top + 100))
            $("#event-form").show().css("position: fixed; left: 0px; top: 0px;");
            
            currentDate = selectedDate;
        }
    });

    // Take response from the user
    $("#submit").click(function (e) {
        e.preventDefault();
        var name = $('#name-field').val();
        var desc = $('#desc-field').val();
        var remindBefore = $('#remind-field').val();
        $('#events-list').find('tbody').append(
            "<tr><td>" + currentDate + "</td><td>" + name + "</td><td>" + desc + "</td><td><button class='btn btn-success' onclick='agendarApp("+'"'+currentDate+'"'+',"'+name+'","'+desc+'"'+")'>Agentar</button></td></tr>"
        );
        reservarApp(currentDate)
        $('#name-field').val("");
        $('#desc-field').val("");
        $('.card').hide();
    });

    // Toggle remind me checkbox
    $("#remind").click(function () {
        if ($(this).is(':checked')) {
            $('.remind-before').show();
        } else {
            $('.remind-before').hide();
        }
    })

    // Using simple jQuery filer function to search events
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#events-list tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
