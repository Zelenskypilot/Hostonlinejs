    const fileInput = document.getElementById('fileInput');
    const uploadLabel = document.querySelector('.upload-label');

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            uploadLabel.style.pointerEvents = 'none';
            document.querySelector('.remove-icon').style.display = 'block';
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-icon')) {
            fileInput.value = '';
            uploadLabel.style.pointerEvents = 'auto';
            event.target.style.display = 'none';
        }
    });


  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('fileInput');
    var errorMessage = document.getElementById('errorMessage');
    if (!fileInput.files.length) {
      event.preventDefault();
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  });


    function toggleName() {
        const nameElement = document.getElementById('name');
        const numberElement = document.getElementById('number');
        const toggleIcon = document.getElementById('toggleIcon');

        nameElement.classList.toggle('blur'); // Toggle blur effect for name
        numberElement.classList.toggle('blur'); // Toggle blur effect for number

        if (nameElement.classList.contains('blur')) {
            toggleIcon.classList.remove('ri-eye-line');
            toggleIcon.classList.add('ri-eye-off-line'); // Remix Icon for show
        } else {
            toggleIcon.classList.remove('ri-eye-off-line');
            toggleIcon.classList.add('ri-eye-line'); // Remix Icon for hide
        }
    }


    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      if(document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('ri-sun-line');
        themeIcon.classList.add('ri-moon-line');
      } else {
        themeIcon.classList.remove('ri-moon-line');
        themeIcon.classList.add('ri-sun-line');
      }
    });


        document.addEventListener("DOMContentLoaded", () => {
            const fileInput = document.getElementById("fileInput");
            const uploadBox = document.getElementById("uploadBox");

            const handleFileSelect = (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const imgContainer = document.createElement("div");
                        imgContainer.className = "uploaded";

                        const img = document.createElement("img");
                        img.src = e.target.result;

                        const removeIcon = document.createElement("div");
                        removeIcon.className = "remove-icon";
                        removeIcon.addEventListener("click", () => {
                            uploadBox.removeChild(imgContainer);
                            if (uploadBox.childElementCount === 1) {
                                uploadBox.classList.remove("uploaded");
                            }
                        });

                        imgContainer.appendChild(img);
                        imgContainer.appendChild(removeIcon);
                        uploadBox.insertBefore(imgContainer, uploadBox.childNodes[1]);
                        uploadBox.classList.add("uploaded");
                    };
                    reader.readAsDataURL(file);
                }
            };

            document.getElementById("fileInput").addEventListener("change", handleFileSelect);
        });
