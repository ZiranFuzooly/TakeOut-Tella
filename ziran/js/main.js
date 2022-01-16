var phoneNumber;
var mailBody;


function enableButton(id) {
    len = document.getElementById(id).value.length;

    if (len == 10) {
        document.getElementById("btnOTPtest").disabled = false;
        phoneNumber = document.getElementById(id).value;

    } else {
        document.getElementById("btnOTPtest").disabled = true;
    }
}

function enableButtonRating(id) {
    document.getElementById("btnRating").disabled = false;
}

function enableButtonName(id) {
    document.getElementById("btnname").disabled = false;
}

function enableButtonEmail(id) {
    document.getElementById("btnemail").disabled = false;
}

function submitPhone() {
    var otpTimer = 45;
    var timer = setInterval(countdown, 1000);

    function countdown() {
        if (otpTimer == -1) {
            clearTimeout(timer);
            window.location.href = "login.html";
        } else {
            document.getElementById('otpTimermsg').innerHTML = 'Resend code in 00:' + otpTimer;
            otpTimer--;
        }
        //todo remove
        if (otpTimer == 1) {
            clearTimeout(timer)
        }
    }

    phoneNumber = document.getElementById('inputTel').value;

    //todo send otp to phone
    message = " We sent it to the number +94 " + phoneNumber;

    //   document.location = "#otpCode";
    window.location.href = "#otpCode";
    document.getElementById(
        "otptelno"
    ).innerHTML = message;
}

function verifyOTP(id) {
    var otp = 1111;
    value = document.getElementById(id).value;
    otpMessage = " Did you enter the correct phone number? ";

    if (value.length == 4) {
        if (value == otp) {
            window.location.href = "BioDet.html";
        } else {
            document.getElementById(
                "resendOTPtext"
            ).innerHTML = otpMessage;
        }
    }
}

function verifyOTPSignup(id) {
    var otp = 2222;
    value = document.getElementById(id).value;
    otpMessage = " Did you enter the correct phone number? ";

    if (value.length == 4) {
        if (value == otp) {
            window.location.href = "#enterName";
        } else {
            document.getElementById(
                "resendOTPtext"
            ).innerHTML = otpMessage;
        }
    }
}

function sendFavList() {
    mailBody =
        '<html> ' +
        '  <body>' +
        '<h1><u>Favourite List of Ziran - TakeOut Tella</u></h1>' +
        '  <div id="restuarants" class="ui-body-d">' +
        '     <div class="search-tiles dioni-delight">' +
        '        <div>' +
        '         <p class="category-name" style="' +
        '"><b>Shrimp Submarine </b><br/>LKR 690 <br/><i> Sub More</i></p>' +
        '        </div>' +
        '     </div>' +
        '     <div class="search-tiles meraki-by-asi">' +
        '         <p class="category-name"><b>Chocolate Roll</b> <br/>LKR 750<br/> <i>Cake House</i></p>' +
        '     </div>' +
        '<div class="search-tiles meraki-by-asi">' +
        '         <p class="category-name"><b>Chicken Fried Rice</b> <br/>LKR 530<br/> <i>Bath Kade</i></p>' +
        '     </div>' +
        '   </div>' +
        '  </body>' +
        '</html>'
    sendEmail()
}

function sendEmail() {
    // var mailSubject = document.getElementById("mailSubject").value

    Email.send({
        Host: "smtp.gmail.com",
        Username: "takeouttella@gmail.com",
        Password: "Takeout123@",
        To: 'anas.2017443@iit.ac.lk,ziranfuzooly@gmail.com',
        From: "takeouttella@gmail.com",
        Subject: "Ziran's Favourites List - TakeOut Tella",
        Body: mailBody

    })

    .then(function(message) {
        alert("Your Favourites Shared Successfully!!!")
    });


}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#image-preview').attr('src', e.target.result);
            $('#image-preview').hide();
            $('#image-preview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#file-input").change(function() {
    readURL(this);
});