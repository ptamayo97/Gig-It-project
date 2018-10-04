
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5acI7HtRSJyoYt1tNK7aSoHQOJFGaK4M",
    authDomain: "gig-it-fafd1.firebaseapp.com",
    databaseURL: "https://gig-it-fafd1.firebaseio.com",
    projectId: "gig-it-fafd1",
    storageBucket: "gig-it-fafd1.appspot.com",
    messagingSenderId: "660146414559"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// 
$("#submitEvent").on("click", function (event) {
    event.preventDefault();

    var eventName = $("#eventInput").val().trim();
    var bandName = $("#bandInput").val().trim();
    var eventLocation = $("#locationInput").val().trim();
    var eventDate = $("#dateInput").val().trim();
    var eventTime = $("#timeInput").val();
//     let locationType = $(".btn").click(function() {
//         event.preventDefault();

//       var fired_button = $(".btn").val();
  
//       locationType = fired_button
//   });

    var newEvent = {
        eventName: eventName,
        bandName: bandName,
        location: eventLocation,  
        eventDate: eventDate,
        eventTime: eventTime,
        // locationType:locationType
        
    }

    database.ref("Event").push(newEvent)

    $("#eventInput").val("");
    $("#bandInput").val("");
    $("#locationInput").val("");
    $("#dateInput").val("");
});


// get elements
const emailInput = $("#userEmail");
const passInput = $("#userPassword");

// add login event
$("#submitUser").on("click", e => {
    e.preventDefault();
    // get email and password
    const email = emailInput.val();
    const pass = passInput.val();
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
})

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        console.log("welcome");

        $("#artistBtn").removeClass("hide");
        $("#signOutBtn").removeClass("hide");
    } else {
        console.log("not logged in");
        $("#artistBtn").addClass("hide");
        $("#signOutBtn").addClass("hide");
    }
});

// Add a realtime listener
$("#signOutBtn").on("click", e => {
    firebase.auth().signOut();
    signOut.replaceWith(signIn);
});


// picture upload
// $(document).ready(function () {
//     $(document).on('change', '.btn-file :file', function () {
//         var input = $(this),
//             label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
//         input.trigger('fileselect', [label]);
//     });

//     $('.btn-file :file').on('fileselect', function (event, label) {

//         var input = $(this).parents('.input-group').find(':text'),
//             log = label;

//         if (input.length) {
//             input.val(log);
//         } else {
//             if (log) alert(log);
//         }

//     });
//     function readURL(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('#img-upload').attr('src', e.target.result);
//             }

//             reader.readAsDataURL(input.files[0]);
//         }
//     }

//     $("#imgInp").change(function () {
//         readURL(this);
//     });
// });


