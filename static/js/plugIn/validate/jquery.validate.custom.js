(function($) {
    
    $.validator.addMethod("phoneProc", function(value, element) {
        var phone = ssoMain.attr.regExp.phone;
        return phone.test(value);
    });

	$.validator.addMethod("pwdProc", function(value, element) {
	  var pwd = ssoMain.attr.regExp.pwd;
	  return pwd.test(value);
	});

})(jQuery);
