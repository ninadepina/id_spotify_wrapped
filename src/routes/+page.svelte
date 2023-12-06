<script>
    import { onMount, afterUpdate, onDestroy } from 'svelte';

    // article 3
    import Cube from '$lib/Cube.svelte';
    import Bread from '$lib/Bread.svelte';
    import Genres from '$lib/Genres.svelte';

    const articleColors = {
        1: '--color-intro',
        2: '--color-taste',
        3: '--color-genres'
    };

    let currentArticle = 1;
    let interval;
    let main;

    const switchArticle = () => {
        currentArticle = (currentArticle % 3) + 1;
    };

    const intervalTime = { 1: 7080, 2: 8000, 3: 15000 };

    const calculateInterval = () => {
        return intervalTime[currentArticle] || 8000;
    };

    onMount(() => {
        main.style.backgroundColor = `var(${articleColors[currentArticle]})`;
        interval = setInterval(() => {
            switchArticle();
            clearInterval(interval);
            interval = setInterval(switchArticle, calculateInterval());
        }, calculateInterval());
    });

    afterUpdate(() => {
        main.style.backgroundColor = `var(${articleColors[currentArticle]})`;
        clearInterval(interval);
        interval = setInterval(switchArticle, calculateInterval());
    });

    onDestroy(() => {
        main.style.backgroundColor = `var(${articleColors[currentArticle]})`;
        clearInterval(interval);
    });
</script>

<svelte:head>
    <title>ID Spotify Wrapped</title>
</svelte:head>

<main bind:this={main}>
    <section id="wrapped">
        <header>
            <img src="spotify2.png" alt="" />
            <div>
                <h3>Hello you</h3>
                <p>It's Wrapped time. Ready? Let's do this.</p>
            </div>
        </header>
        {#if currentArticle === 1}
            <article id="intro" key="intro">
                <span class="rect" />
                <span class="flower">
                    <svg viewBox="0 0 1230 1102" fill="none">
                        <path
                            d="M585.946 565.138C518.446 391.971 401.446 41.838 473.447 26.6381C611.446 -2.49498 625.446 364.305 656.446 542.638C681.113 413.471 879.473 89.2286 1059.95 279.638C1114.44 337.138 915.945 494.638 790.946 635.638C923.446 590.638 1191.65 551.938 1204.45 757.138C1217.25 962.338 934.113 859.638 790.946 782.638C877.279 830.971 1033.35 949.338 966.946 1036.14C883.946 1144.64 636.946 1020.14 611.446 856.638C615.613 920.805 607.946 1046.54 543.946 1036.14C406.445 1013.79 470.28 811.805 473.447 706.138C349.613 779.971 87.8461 883.338 31.4461 706.138C-24.9539 528.938 302.613 570.305 473.447 613.138C334.779 594.971 -22.1146 493.184 60.4453 424.138C255.945 260.638 411.779 473.305 585.946 565.138Z"
                            stroke="#62F551"
                            stroke-width="50"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
                <span class="line">
                    <img src="line.png" alt="" />
                </span>
                <span class="line">
                    <img src="line.png" alt="" />
                </span>
                <span class="amoebe">
                    <img src="amoebe.png" alt="" />
                </span>

                <div>
                    <h2><span>2023</span> Wrapped</h2>
                    <img src="spotify.png" alt="Spotify logo" />
                </div>
                <div>
                    <h3>Hello you</h3>
                    <p>It's Wrapped time. Ready? Let's do this.</p>
                </div>
            </article>
        {/if}
        {#if currentArticle === 2}
            <article id="taste" key="taste">
                <span class="conic">
                    <span />
                </span>
                <span class="rainbow">
                    <img src="rainbow.png" alt="" />
                </span>
                <span class="squiggle">
                    <svg viewBox="0 0 1331 805" fill="none">
                        <path
                            d="M40 320L320 99.5L188.5 392L498 256.5L239.5 765L1291 40L947.5 765"
                            stroke="#62F551"
                            stroke-width="80"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>

                <h2><span>2023</span> was a feast for our ears</h2>
                <h2>How did our tastes stack up?</h2>
            </article>
        {/if}
        {#if currentArticle === 3}
            <article id="genres" key="genres">
                <span class="rainbow2">
                    <img src="rainbow2.png" alt="" />
                </span>
                <Cube />
                <Bread />
                <Genres />
            </article>
        {/if}
    </section>
</main>

<style>
    header {
        position: fixed;
        top: 0;
        left: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 430px;
        padding: 1em;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        transform: translateX(-50%);
        z-index: 9999;
    }

    header > img {
        width: 6em;
    }

    header > div {
        display: flex;
        gap: 1em;
    }

    header button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5em;
        height: 2.5em;
        padding: 0.25em;
        background-color: #0d0020a8;
        border: none;
        border-radius: 50%;
    }

    header button img {
        width: 75%;
    }

    #wrapped {
        font-family: var(--font-family);
    }

    article {
        width: 100%;
        max-width: 430px;
        height: 100svh;
        margin: 0 auto;
        overflow: hidden;
    }

    #intro {
        position: relative;
        background-color: var(--color-intro);
    }

    #intro > span,
    #taste > span,
    #genres > span {
        position: absolute;
    }

    /* rectangle */
    #intro .rect {
        top: 0;
        left: -20%;
        width: 100px;
        height: 180px;
        background: rgb(255, 255, 255);
        background: linear-gradient(
            227deg,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46,
            #ffffff,
            #245cff,
            #63ff46
        );
        background-size: 1000% 1000%;
        animation: gradient 8s linear;
    }

    @keyframes gradient {
        0% {
            left: -20%;
            background-position: 100% 50%;
        }
        5%,
        95% {
            left: 0;
        }
        100% {
            left: -20%;
            background-position: 0% 50%;
        }
    }

    /* line */
    #intro .line {
        width: 25em;
    }
    #intro span:nth-of-type(3) {
        left: -28%;
        bottom: -2%;
    }
    #intro span:nth-of-type(4) {
        right: -8%;
        top: -4%;
        transform: rotate(208deg) scaleX(-1);
        width: 20em;
    }

    #intro .line img {
        width: 100%;
    }

    /* amoebe */
    #intro .amoebe {
        top: -6%;
        left: 5%;
        width: 16em;
    }

    #intro .amoebe img {
        width: 100%;
        animation: zoom 1s ease infinite alternate;
    }

    @keyframes zoom {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2);
        }
    }

    /* flower */
    #intro .flower {
        right: -10%;
        bottom: -5%;
        width: 16em;
    }

    #intro .flower svg path {
        stroke-dasharray: 6800;
        stroke-dashoffset: 0;

        animation-name: drawPathFlower, removePathFlower;
        animation-duration: 1s, 1s;
        animation-delay: 0s, 7s;
        animation-timing-function: forwards, forwards;
    }

    @keyframes drawPathFlower {
        from {
            stroke-dashoffset: 6500;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
    @keyframes removePathFlower {
        to {
            stroke-dashoffset: 6700;
        }
    }

    #intro div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* first text */
    #intro > div:first-of-type h2,
    #intro > div:first-of-type img,
    #intro > div:last-of-type h3,
    #intro > div:last-of-type p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
    }

    #intro h2 {
        top: 13%;
        font-size: 2.8em;
        white-space: nowrap;
        line-height: 42px;
        color: var(--text-color-dark);
        animation: slideIntroHeadingTwo 4s ease-in-out;
    }
    #intro h2 span {
        font-size: 1.2em;
    }

    #intro > div:first-of-type img {
        top: 20%;
        width: 10em;
        animation: slideIntroOther 4s ease-in-out;
    }

    /* second text */
    #intro > div:last-of-type h3 {
        top: 16%;
        font-size: 2.1em;
        animation: slideIntroHeadingThree 4.5s ease-in-out;
        animation-delay: 3.5s;
    }

    #intro > div:last-of-type p {
        top: 20%;
        max-width: 225px;
        font-size: 1.2em;
        text-align: center;
        animation: slideIntroOther 3.5s ease-in-out;
        animation-delay: 4.5s;
    }

    @keyframes slideIntroHeadingTwo {
        0% {
            top: 70%;
            opacity: 0;
        }
        20%,
        80% {
            top: 40%;
            opacity: 1;
        }
        100% {
            top: 13%;
            opacity: 0;
        }
    }
    @keyframes slideIntroHeadingThree {
        0% {
            top: 70%;
            opacity: 0;
        }
        20% {
            top: 45%;
            opacity: 1;
        }
        40%,
        80% {
            top: 40%;
            opacity: 1;
        }
        100% {
            top: 16%;
            opacity: 0;
        }
    }
    @keyframes slideIntroOther {
        0% {
            top: 70%;
            opacity: 0;
        }
        20%,
        80% {
            top: 47%;
            opacity: 1;
        }
        100% {
            top: 20%;
            opacity: 0;
        }
    }

    #taste {
        position: relative;
        background-color: var(--color-taste);
    }

    /* conic */
    #taste .conic {
        top: 0;
        left: 0;
        width: 150px;
        height: 250px;
        overflow: hidden;
        animation: moveConic 1.5s ease-out;
        animation-delay: 6.5s;
    }

    @keyframes moveConic {
        to {
            top: -30%;
        }
    }

    #taste .conic span {
        position: relative;
        top: -125px;
        left: -100px;
        display: block;
        width: 500px;
        height: 500px;
        background: conic-gradient(
            from 90deg,
            #0d0020,
            #490083,
            #2f2efa,
            #98f55d,
            #dade64,
            #f07c44,
            #f23f41,
            #f07c44,
            #dade64,
            #98f55d,
            #2f2efa,
            #490083,
            #0d0020
        );
        animation: rotateGradient 5s linear infinite;
    }

    @keyframes rotateGradient {
        to {
            transform: rotate(-360deg);
        }
    }

    /* rainbow line */
    #taste .rainbow {
        top: -5%;
        left: -10%;
        width: 25em;
    }

    #taste .rainbow img {
        width: 100%;
    }

    /* squiggle */
    #taste .squiggle {
        right: -1%;
        bottom: -4%;
        width: 17em;
    }

    #taste .squiggle svg path {
        stroke-dasharray: 3600;
        stroke-dashoffset: 3600;
        animation: drawPathSquiggle 1s ease-in forwards,
            reversePathSquiggle 1s ease-in 7s forwards;
    }

    @keyframes drawPathSquiggle {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes reversePathSquiggle {
        to {
            stroke-dashoffset: 3600;
        }
    }

    #taste h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 340px;
        font-size: 2.4em;
        font-weight: 500;
        text-align: center;
        line-height: 42px;
        color: var(--text-color-light);
        animation: slideTasteHeading 4s ease-in-out;
        opacity: 0;
    }

    #taste h2:last-of-type {
        animation-delay: 3.8s;
    }

    #taste h2 span {
        font-size: 1.1em;
    }

    @keyframes slideTasteHeading {
        0% {
            top: 60%;
            opacity: 0;
        }
        20%,
        80% {
            top: 50%;
            opacity: 1;
        }
        100% {
            top: 40%;
            opacity: 0;
        }
    }

    #genres {
        position: relative;
        background-color: var(--color-genres);
    }

    #genres .rainbow2 {
        left: -10%;
        right: -24%;
        bottom: -12%;
    }
    #genres .rainbow2 img {
        width: 100%;
    }
</style>
