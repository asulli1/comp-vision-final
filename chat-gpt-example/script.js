document.addEventListener('DOMContentLoaded', function() {
    var currentPage = 1;
    var totalPages = document.querySelectorAll('.page').length;

    document.getElementById('book').addEventListener('click', function(event) {
        console.log("Click detected");
        var bookWidth = this.offsetWidth;
        var clickX = event.pageX - this.offsetLeft;

        if (clickX < bookWidth / 2 && currentPage > 1) {
            // Clicked on left half of the book and not on the first page
            currentPage--;
            console.log("Going to previous page. Current page: " + currentPage);
        } else if (clickX >= bookWidth / 2 && currentPage < totalPages) {
            // Clicked on right half of the book and not on the last page
            currentPage++;
            console.log("Going to next page. Current page: " + currentPage);
        }

        showPage(currentPage);
    });

    function showPage(pageNumber) {
        document.querySelectorAll('.page').forEach(function(page) {
            page.style.display = 'none'; // Hide all pages
        });
        document.querySelector('.page:nth-of-type(' + pageNumber + ')').style.display = 'flex'; // Show the current page
    }
});
