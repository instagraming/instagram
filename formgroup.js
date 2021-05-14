/*HTML input password match checker
 *   Wrap the password elements with password_match class.
 *   Contents of data-msg attribute will used by browser on password mismatch.
 *   It is defined that way for i8n reasons (you can change the message while page is generated)
 */
function comparePassword(event) {
    var pass1, pass2;
    if (event.type == 'change') {
        // this = pass1, el = pass2
        pass1 = $(this);
        pass2 = $(event.data.el);
    } else {
        // this = pass2, el = pass1
        pass2 = $(this);
        pass1 = $(event.data.el);
    }
    if (pass1.val() != pass2.val()) {
        pass2[0].setCustomValidity(event.data.msg);
    } else {
        pass2[0].setCustomValidity('');
    }
    $(".password_match").each(function(i, e) {
        var msg = $(e).data('msg');
        if ($("input[type=password]", e).length == 2) {
            var elem = $("input[type=pasword]", e);
            $(elem[0]).change({ el: elem[1], msg: msg }, comparePassword);

            $(elem[1]).keyup({ el: elem[0], msg: msg }, comparePassword);
        }
    });

}