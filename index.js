     // innerText()를 누르면 호출해서 실행
     function innerText1() {
        // DOM = Document Object Model
        // DOM을 통해서 HTML태그에 접근가능
        let contents = document.getElementById('content');
        contents.innerText = "<div style='color:green'>그린</div>";
    }
    // innerHTML()를 누르면 호출해서 실행
    function innerHtml1() {
        let contents = document.getElementById('content');
        contents.innerHTML = "<div style='color:green'>그린</div>";
    }