<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="bg-indigo-500 h-dvh">
        <div class="flex flex-row justify-center h-[100vh]">
            <div id="para" class="w-[600px] h-[800px] bg-slate-50 text-center p-4">
                <button id="btn" class="bg-black text-white px-4 py-2 mt-4">Fetch Data</button>
            </div>
        </div>
    </div>
    <script>
        const para = document.getElementById('para');
        const btn = document.getElementById('btn');

        btn.addEventListener('click', () => {
            fetch('https://baconipsum.com/api/?type=all')
                .then((resp) => resp.json())
                .then((data) => {
                    // Display the fetched data inside the paragraph
                    para.textContent = data.join('\n\n'); // Joining array elements into a readable format
                })
                .catch((error) => {
                    console.error(`Error: ${error}`);
                    para.textContent = "Failed to fetch data. Please try again.";
                });
        });
    </script>
</body>
</html>
