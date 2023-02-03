<script>
    import logo from "$lib/assets/myface.jpg";

    let ebbColor = "#EEEBE9";
    let copperColor = "#BE7439";
    let indianKhaki = "#C5AA91";
    let nutmegColor = "#774429";
    let lunargreenColor = "#38413B";
</script>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, intial-scale=1">
    <title>Jadon Chenard - Coding Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-nutmeg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img id="logoImage" alt="My face!" src={logo}></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link bg-ebb textcolor-copper" href="/">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="text-center">
        <h1>Welcome to my portfolio!</h1>
        <p>I'm Jadon Chenard, a first year at the University of Southern Maine! I know 6 programming languages, and I'm using three of them right now to make this website!</p>
        <ul>
            <li>Python - 4 years</li>
            <li>HTML - 5 years</li>
            <li>CSS - 5 years</li>
            <li>Javscript - 5 years</li>
            <li>C# - 3 yrs</li>
            <li>Java - 4 years</li>
        </ul>
    </div>
    <style>
        body {
            background-color: #C5AA91;
        }

        #logoImage {
            border-radius: 25%;
            width: 5%;
            height: 50%;
        }

        .bg-nutmeg {
            background-color: #774429;
        }

        .bg-ebb {
            background-color: #EEEBE9;
        }

        .bg-copper {
            background-color: #BE7439;
        }

        .bg-lunargreen {
            color: #38413B;
        }
        
        .textcolor-copper {
            color: #BE7439;
        }

        .textcolor-lunargreen {
            color: #38413B;
        }
    </style>
</body>