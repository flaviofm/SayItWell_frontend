$(document).ready(()=>{
    $("#prevMenu").fadeOut(0);
    $("#fromLanguageMenu").fadeOut(0);
    $("#toLanguageMenu").fadeOut(0);
    $("#topicMenu").fadeOut(0);
    $("#inserisciMenu").fadeOut(0);
});

$("#prevMenuBtn").click(()=>{
    if($("#prevMenu").is(":visible")) {
        $("#prevMenu").fadeOut();
    } else {
        $("#prevMenu").fadeIn();
    }
})


function openFromMenu() {
    $("#fromLanguageMenu").fadeIn(0);
    $("#toLanguageMenu").fadeOut(0);
    $("#topicMenu").fadeOut(0);
    $(".langBox").removeClass("active")
    $(".langBox:nth-of-type(1)").addClass("active")

    $("#searchbarFrom").focus();
}
function openToMenu() {
    $("#toLanguageMenu").fadeIn(0);
    $("#fromLanguageMenu").fadeOut(0);
    $("#topicMenu").fadeOut(0);
    $(".langBox").removeClass("active")
    $(".langBox:nth-of-type(2)").addClass("active")

    $("#searchbarTo").focus();
}
function openTopicMenu() {
    $("#topicMenu").fadeIn(0);
    $("#fromLanguageMenu").fadeOut(0);
    $("#toLanguageMenu").fadeOut(0);
    $(".langBox").removeClass("active")
    $(".langBox:nth-of-type(3)").addClass("active")

    $("#searchbarTopic").focus();
}
function openInserisciMenu() {
    $("#inserisciMenu").fadeIn(0);
    $("#topicMenu").fadeOut(0);
    $("#fromLanguageMenu").fadeOut(0);
    $("#toLanguageMenu").fadeOut(0);
    $("#uploadType span:first-of-type").removeClass("active");
    $("#uploadType span:last-of-type").addClass("active");
    $("#swapLang").addClass("active");
    $("#uploadTesto").fadeOut(0);
    $(".langBox").removeClass("active")
}
function closeInserisciMenu() {
    $("#inserisciMenu").fadeOut(0);
    $("#topicMenu").fadeOut(0);
    $("#fromLanguageMenu").fadeOut(0);
    $("#toLanguageMenu").fadeOut(0);
    $("#uploadType span:first-of-type").addClass("active");
    $("#uploadType span:last-of-type").removeClass("active");
    $("#swapLang").removeClass("active");
    $("#uploadTesto").fadeIn(0);
}