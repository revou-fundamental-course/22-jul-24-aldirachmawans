function formValidation() {
    let name = document.getElementById('input-name').value;
    console.log(name);



    // Pengecekan kondisi formulir Name dan Email Address
    if (name == '') {

        // Code ini akan dijalankan apabila form tidak diisi
        alert('Please fill in the remaining blanks in the form')
    } else {
        // Code ini akan dijalankan apabila form sudah diisi
        alert('Success')
    }
}

let indexSlide = 1; // [0, 1, 2]
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);


    // Untuk mereset index dari slidenya
    if (n > listImage.length) indexSlide = 1;

    // Algoritma untuk menghilangkan image
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    // Algoritma untuk memunculkan 1 gambar
    listImage[indexSlide - 1].style.display = 'block';
}

// Algoritma untuk auto slidenya
setInterval(() => nextSlide(1), 5000);