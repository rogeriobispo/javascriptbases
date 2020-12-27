// async defer are attributes from script tags
// Async Downloads while the html file is loading and parsing. once downloaded pauses
// html in order to execute the code.
// defer - Download while the html file is loading and parsing wont execute
// the code until the html file is completed
<script src="index.js" defer></script>
<script src="index.js" async></script>
