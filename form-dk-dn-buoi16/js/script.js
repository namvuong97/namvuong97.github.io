function checkDn(event,minkitu,maxkitu) {
	event.preventDefault();
	var message = $("#texterror");
	var username = $("#tendangnhap").val();
	if(username == '') {
		$('#tendangnhap').css('background-color', 'red');
		message.html(message.html() + 'Tên Đăng nhập Không Được để Trống');
	}else if ((username.length > 0 && username.length<minkitu) || username.length>maxkitu) {
		$('#tendangnhap').css('background-color', 'red');
		message.html(message.html() + 'Tên Đăng Nhập Phải từ 5-20 kí tự');
	}else message.html(message.html() +' Tên Đăng Nhập Là :'  + username + '');

}


function checkPassword(event) {
		event.preventDefault();
		var message = $("#texterror1");
		var password = $("#mk").val();
		if (password == "") {
			$("#mk").css('background-color', 'red');
			message.html(message.html() + "Mật Khẩu Không Được Để Trống");
		}else  message.html(message.html() + "Mật Khẩu Của Bạn Là :" + Array(password.length +1 ).join("*"));

}


function checkEmail(event) {
	event.preventDefault();
	var message =$("#texterror2");
	var let = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3,5})+$/;
	var emails = $("#email").val();
	if (emails == "") {
		$("#email").css('background-color', 'red');
		message.html(message.html() + "Bạn Không Được Để Trống Email");
	}else if (!emails.match(let)) {
		$("#email").css('background-color', 'red');
		message.html(message.html() + "Bạn Nập Sai Định Dang Email");
	}else message.html(message.html() + "Email của Bạn là :" +emails+ "");

}


function checkTuoi(event) {
	event.preventDefault();
	var message =$("#texterror3");
	var age = $("#tuoi").val();
	parseInt(age);
	if (age == "") {
		$("#tuoi").css('background-color', 'red');
		message.html(message.html() + "Tuổi Không Được Để Trống");
	}else if (age <18 || age >60) {
		$("#tuoi").css('background-color', 'red');
		message.html(message.html() + "Tuổi Phải từ 18 Đến 60, Bạn Vui Lòng Nhập Đúng" + "");
	}else if (isNaN(age)) {
		$("#tuoi").css('background-color', 'red');
		message.html(message.html() + "Bạn Chỉ Được Nhập Số Thôi" + "");
	}else message.html(message.html() + "Tuổi Của Bạn Là :" +age);
	
}

	var btnDn = $("#btndangnhap");
	btnDn.click(function btn() {
		var message = $("#texterror");
		message.html("");
		checkDn(event, 5, 20);
		checkPassword(event);
		checkEmail(event);
		checkTuoi(event);
	});

var btnxoa = $("#btnxoa");

btnxoa.click(function deleteForm() {

    $("input[type=text], input[type=password], input[type=email").val("");

    $("select").prop('selectedIndex', 0);;

});