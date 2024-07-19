// get dom element
const gameContainer = document.querySelector(".container"),
    userResut = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector('.result'),
    optionImage = document.querySelectorAll('.option_image')

    // console.log(gameContainer,userResut,cpuResult,result,optionImage)

    // setiap elemnt gambar di beri inisialsisasi 
    // image => gambar yang di tekan || index => penurutan
    optionImage.forEach((image, index) => {
        // ketika ada 'click' tambahkan semua class active di class name
        image.addEventListener('click', () => {
            image.classList.add("active");


            // setiap baris jika image dan index berbeda hapus active
            optionImage.forEach((image2, index2) => {
                // console.log(index,index2) // image => gambar yang di tekan || index => pengurutan gambar dari 0
                index !== index2 && image2.classList.remove('active');
            })

            // ambil source gambar yang di tekan 
            let imageSrc = event.target.querySelector("img").src;
            // rubah gambar dengan mengambil source gambar yang di tekan
            userResut.src = imageSrc
            // console.log(imageSrc);

            // buat random angka dengan angka < 3
            let randomNumbor = Math.floor(Math.random() * 3)
            //  console.log(randomNumbor)
            let cpuImages = [
                "images/batu.png",
                "images/guntingg.png",
                "images/kertas.png"
            ]
            cpuResult.src = cpuImages[randomNumbor]

            let cpuValue = ["R", "P", "S"][randomNumbor];
            let userValue = ["R", "P", "S"][index];

            let outcomes = {
                RR : "DRAW",
                RP : "Cpu",
                RS : "USER",
                PP : "Draw",
                PR : "CPU",
                PS : "USER",
                SS : "DRAW",
                SR : "CPU",
                SP : "USER"
            }
            let ComeValue = outcomes[userValue + cpuValue]
            
            result.textContent = userValue === cpuValue ? "Seri " : `${ComeValue} Menang !!`
            // console.log(ComeValue)

        })
    })
