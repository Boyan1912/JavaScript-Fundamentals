//Problem 9. Extract e-mails
//
//Write a function for extracting all email addresses from given text.
//    All sub-strings that match the format @… should be recognized as emails.
//    Return the emails as array of strings.

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscinge@svns.com elit. Aenean bibendum libero urna, ac tincidunt ligula@djvbk.nl feugiat quis. Donec elementum magna dui, ut pretium tortor sagittis sit amet. Suspendisse dui augue, sagittis vel tristique ac, lacinia id nulla. Etiam luctus risus nec rhoncus ultrices. Integer dapibus lacinia erat, maximus auctor sem tincidunt sed@fdvb.bg Aliquam est sem, hendrerit vel pellentesque aliquam, feugiat non dui. Quisque egestas eros@skjvns.net quis finibus facilisis. Fusce ut iaculis leo@mail.com Praesent varius nulla sed orci@uni.co.uk posuere pharetra. Aliquam et sodales sapien. Fusce risus elit, interdum eget pellentesque ac, porta@sdvv.com eget ipsum.'

function extractEmails(text){
    return text.match(/\w+@\w+\.\w+\.?\w+/g);
}
console.log(extractEmails(text));