<script>
    import logo from "$lib/assets/myface.jpg";

    import "$lib/assets/style.css";

    export let homeActive = '';
    export let worksActive = '';
    export let githubActive = '';

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

<body class="bg-ebb">
    <nav class="navbar navbar-expand bg-copper">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img class="roundedcorners" alt="My face!" src={logo} width=30 height=50>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class=" nav-item">
                        <a class="nav-link {homeActive} textcolor-copper" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {worksActive} textcolor-copper" href="/works">Works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {githubActive} textcolor-copper" href="/github">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</body>