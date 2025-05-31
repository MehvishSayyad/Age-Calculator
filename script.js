<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #91dbf0, #3b71b3);
            margin: 0;
        }
        .container {
            width: 600px;
            height: 400px;
            padding: 30px;
            background: #8bb8df;
            border-radius: 12px;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        h2 {
            color: #13406f;
            font-size: 40px;
            margin-bottom: 20px;
        }
        input {
            width: 100%;
            padding: 12px;
            font-size: 35px;
            border: 2px solid #ddd;
            border-radius: 10px;
            margin-bottom: 30px;
        }
        button {
            width: 100%;
            padding: 12px;
            font-size: 25px;
            background: blue;
            color: white;
            border: none;
            border-radius: 7px;
            cursor: pointer;
            transition: 0.3s;
        }
        button:hover {
            background: #0056b3;
        }
        #ageResult {
            margin-top: 20px;
            font-size: 45px;
            font-weight: bold;
            color: #16417a;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Age Calculator</h2>
        <input type="date" id="dob">
        <button onclick="calculateAge()">Calculate Age</button>
        <h3 id="ageResult"></h3>
    </div>

    <script src="script.js"></script>

</body>
</html>
