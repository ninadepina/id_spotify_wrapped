<script>
    import { onMount, afterUpdate, onDestroy } from 'svelte';

    // effects
    import Rect from '$lib/Rect.svelte';

    // article 3
    import Cube from '$lib/Cube.svelte';
    import Bread from '$lib/Bread.svelte';
    import Genres from '$lib/Genres.svelte';

    const articleColors = {
        1: '--color-intro',
        2: '--color-taste',
        3: '--color-genres',
        4: '--color-minutes',
        5: '--color-artist',
        6: '--color-waiting',
        7: '--color-hero'
    };

    let numberOfSpans = 16;

    let main;
    let backwards;
    let forwards;

    let currentArticle = 1;
    let amountArticles = 7;
    let interval;

    const intervalTime = {
        1: 8000,
        2: 8000,
        3: 15000,
        4: 8000,
        5: 8000,
        6: 7200,
        7: 8500
    };

    const switchArticle = () => {
        currentArticle = (currentArticle % amountArticles) + 1;
    };

    const calculateInterval = () => {
        return intervalTime[currentArticle] || 8000;
    };

    const handleClickForwards = () => {
        if (currentArticle < amountArticles) {
            switchArticle();
            clearInterval(interval);
            interval = setInterval(switchArticle, calculateInterval());
        }
    };

    const handleClickBackwards = () => {
        if (currentArticle > 1) {
            currentArticle = ((currentArticle - 2 + 3) % 3) + 1;
            clearInterval(interval);
            interval = setInterval(switchArticle, calculateInterval());
        }
    };

    onMount(() => {
        interval = setInterval(() => {
            switchArticle();
            clearInterval(interval);
            interval = setInterval(switchArticle, calculateInterval());
        }, calculateInterval());

        if (main) {
            main.style.backgroundColor = `var(${articleColors[currentArticle]})`;
            forwards.addEventListener('click', handleClickForwards);
            backwards.addEventListener('click', handleClickBackwards);
        }
    });

    afterUpdate(() => {
        clearInterval(interval);
        interval = setInterval(switchArticle, calculateInterval());

        if (main) {
            main.style.backgroundColor = `var(${articleColors[currentArticle]})`;
            forwards.addEventListener('click', handleClickForwards);
            backwards.addEventListener('click', handleClickBackwards);
        }
    });

    onDestroy(() => {
        clearInterval(interval);

        if (main) {
            main.style.backgroundColor = `var(${articleColors[currentArticle]})`;
            forwards.addEventListener('click', handleClickForwards);
            backwards.addEventListener('click', handleClickBackwards);
        }
    });

    let isPlaying = false;
    let isMuted = false;

    const togglePlay = () => {
        isPlaying = !isPlaying;
    };

    const toggleMute = () => {
        isMuted = !isMuted;
    };
</script>

<svelte:head>
    <title>ID Spotify Wrapped</title>
</svelte:head>

<main bind:this={main}>
    <div id="clicker">
        <div id="backwards" bind:this={backwards} />
        <div id="forwards" bind:this={forwards} />
    </div>

    <section id="wrapped">
        <header>
            <div id="counter">
                {#each Array(amountArticles) as _, index (index)}
                    <span
                        style={`--interval-time: ${intervalTime[index + 1]}ms;`}
                        class:active={currentArticle === index + 1}
                    />
                {/each}
            </div>
            <div id="info">
                <img src="spotify2.png" alt="" />
                <div>
                    <button on:click={togglePlay}>
                        <img
                            src={isPlaying ? 'play.png' : 'pause.png'}
                            alt="play icon"
                        />
                    </button>
                    <button on:click={toggleMute}>
                        <img
                            src={isMuted ? 'mute.png' : 'sound.png'}
                            alt="sound icon"
                        />
                    </button>
                </div>
            </div>
        </header>

        {#if currentArticle === 1}
            <article id="intro" key="intro">
                <Rect />
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

        {#if currentArticle === 4}
            <article id="minutes" key="minutes">
                <Rect />
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
                    <h3>Time is a construct, but we kept track anyway</h3>
                </div>
                <div>
                    <h3>We listened for xxxxxxxx minutes.</h3>
                    <p>That's <strong>xxx</strong> days nonstop.</p>
                </div>
            </article>
        {/if}

        {#if currentArticle === 5}
            <article id="artists" key="artists">
                <span class="line2">
                    <svg viewBox="0 0 1695 593" fill="none">
                        <path
                            d="M15 15C172.333 39.3333 545 115.5 777 225.5C1067 363 1285 476.5 1144.5 563C1004 649.5 802.5 317 859 236C915.5 155 1144.5 224 1217.5 251.5C1290.5 279 1570 396 1462 479.5C1354 563 1083 311 1217.5 225.5C1352 140 1619.5 293 1680 358"
                            stroke="#7457FE"
                            stroke-width="30"
                            stroke-linecap="round"
                        />
                    </svg>
                </span>

                <h2>Our top artists</h2>
                <ol>
                    <li>
                        <h3>1</h3>
                        <img src="sza.png" alt="" />
                        <h4>SZA</h4>
                    </li>
                    <li>
                        <h3>2</h3>
                        <img src="sza.png" alt="" />
                        <h4>SZA</h4>
                    </li>
                    <li>
                        <h3>3</h3>
                        <img src="sza.png" alt="" />
                        <h4>SZA</h4>
                    </li>
                    <li>
                        <h3>4</h3>
                        <img src="sza.png" alt="" />
                        <h4>SZA</h4>
                    </li>
                    <li>
                        <h3>5</h3>
                        <img src="sza.png" alt="" />
                        <h4>SZA</h4>
                    </li>
                </ol>
            </article>
        {/if}

        {#if currentArticle === 6}
            <article id="waiting" key="waiting">
                <span class="color">
                    {#each Array(numberOfSpans) as _, index (index)}
                        <span
                            style={`--animation-time: ${2.5 - index * 0.05}s;`}
                        />
                    {/each}
                </span>

                <div>
                    <h3>One moment please</h3>
                    <p>We're turning off the lights.</p>
                </div>
            </article>
        {/if}

        {#if currentArticle === 7}
            <article id="hero" key="hero">
                <span class="line3">
                    <img src="line2.png" alt="">
                </span>
                <span class="rect" />
                <span class="star">
                    <svg viewBox="0 0 973 1118" fill="none">
                        <path
                            d="M242.5 1082.5L561 855.5L35 542L561 624L397 64L764 513L884.5 35L937.5 305"
                            stroke="white"
                            stroke-width="70"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>

                <div>
                    <h3>That's better</h3>
                </div>
                <div>
                    <h3>The way we listened this year makes us heroes</h3>
                    <p>Or maybe we should say... anti-heroes?</p>
                </div>
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
        flex-direction: column;
        gap: 0.8em;
        width: 100%;
        max-width: 430px;
        padding: 0.6em 1em 1em 1em;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        transform: translateX(-50%);
        z-index: 9999;
    }

    header #counter {
        display: flex;
        align-items: center;
        gap: 0.5em;
        width: 100%;
    }

    header #counter span {
        position: relative;
        width: 100%;
        height: 0.2em;
        border-radius: 0.25em;
        background-color: #ffffff3d;
    }
    header #counter span.active::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: var(--text-color-light);
        border-radius: 0.25em;
        animation: fillProgressBar var(--interval-time) linear infinite;
    }

    @keyframes fillProgressBar {
        to {
            width: 100%;
        }
    }

    header #info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    header #info > img {
        width: 6em;
    }

    header > #info > div {
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

    #clicker {
        position: fixed;
        inset: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        cursor: pointer;
        z-index: 999;
    }

    #clicker > div {
        width: 50%;
        height: 100%;
    }

    #wrapped {
        font-family: var(--font-family);
    }

    article {
        width: 100%;
        max-width: 430px;
        height: 100dvh;
        margin: 0 auto;
        overflow: hidden;
    }

    article > span {
        position: absolute;
    }

    #intro {
        position: relative;
        background-color: var(--color-intro);
    }

    /* line */
    .line {
        width: 25em;
    }
    #intro span:nth-of-type(2),
    #minutes span:nth-of-type(2) {
        left: -28%;
        bottom: -5%;
    }
    #intro span:nth-of-type(3),
    #minutes span:nth-of-type(3) {
        right: -8%;
        top: -4%;
        transform: rotate(208deg) scaleX(-1);
        width: 20em;
    }

    .line img {
        width: 100%;
    }

    .line2 {
        bottom: -6%;
        width: 22em;
    }

    .line2 svg path {
        stroke-dasharray: 6800;
        stroke-dashoffset: 0;

        animation-name: drawPathLine, removePathLine;
        animation-duration: 3s, 2s;
        animation-delay: 0s, 6.5s;
        animation-timing-function: forwards, forwards;
    }
    @keyframes drawPathLine {
        from {
            stroke-dashoffset: 6800;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
    @keyframes removePathLine {
        to {
            stroke-dashoffset: 6800;
        }
    }

    .line3 {
        top: -8%;
        left: -8%;
        opacity: 0.8;
        animation: line3 8.5s linear;
    }

    .line3 img {
        width: 16em;
    }

    @keyframes line3 {
        0%, 44% {
            opacity: 0;
        }
        50%, 92% {
            opacity: 0.8;
        }
        100% {
            opacity: 0;
        }
    }

    /* amoebe */
    .amoebe {
        top: -10%;
        left: 5%;
        width: 16em;
    }

    .amoebe img {
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
    .flower {
        right: -10%;
        bottom: -5%;
        width: 16em;
    }

    .flower svg path {
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

    .rect {
        position: absolute;
        top: 0;
        right: -50px;
        width: 50px;
        height: 150px;
        background: rgb(255, 255, 255);
        background: linear-gradient(
            227deg,
            #3048F9,
            #52FCCA,
            #D1F66B,
            #3048F9,
            #52FCCA,
            #D1F66B
        );
        background-size: 1000% 1000%;
        animation: gradient 4s linear;
    }
    #hero .rect {
        animation-delay: 3.6s;
    }
    @keyframes gradient {
        0% {
            right: -50px;
            background-position: 100% 50%;
        }
        5%,
        95% {
            top: 0;
            right: 0;
        }
        100% {
            top: -150px;
            right: 0;
            background-position: 0% 50%;
        }
    }

    .color {
        inset: 0;
        display: flex;
        flex-direction: column;
    }

    .color span {
        position: relative;
        left: -15%;
        display: inline-block;
        width: 0;
        height: 100%;
        background: linear-gradient(
            90deg,
            #d4d4d3 0%,
            #0afdfe 6.06%,
            #999b9f 11.95%,
            #cacacc 18.28%,
            #5d5c60 22.72%,
            #807f83 29.09%,
            #1b1a1c 35.94%,
            #d1f56d 42.06%,
            #d4d4d6 48.42%,
            #d1f56d 54.54%,
            #1b1a1c 60.9%,
            #807f83 67.76%,
            #5d5c60 73.88%,
            #cacacc 80.49%,
            #999b9f 86.85%,
            #0afdfe 93.95%,
            #d4d4d3 100%
        );
        animation: slide var(--animation-time) ease-in-out;
    }
    #waiting .color span {
        animation-delay: 4.3s;
    }

    @keyframes slide {
        0% {
            left: 100%;
            width: 0;
        }
        50% {
            width: 200%;
        }
        100% {
            left: -15%;
            width: 0;
        }
    }

    #intro div,
    #minutes div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* first text */
    #intro > div:nth-of-type(2) h2,
    #intro > div:nth-of-type(2) img,
    #intro > div:last-of-type h3,
    #intro > div:last-of-type p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
    }

    #intro h2 {
        top: 11%;
        font-size: 2.8em;
        white-space: nowrap;
        line-height: 12px;
        color: var(--text-color-dark);
        animation: slideIntroHeadingTwo 4s ease-in-out;
    }
    #intro h2 span {
        font-size: 1.2em;
    }

    #intro > div:nth-of-type(2) img {
        top: 25%;
        width: 8em;
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
            top: 11%;
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
            top: 25%;
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

    #minutes {
        position: relative;
        background-color: var(--color-minutes);
    }

    #minutes h3,
    #minutes > div:last-of-type p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
    }

    #minutes h3 {
        top: 16%;
        width: 300px;
        font-size: 1.8em;
        line-height: 1em;
        text-align: center;
    }

    #minutes > div:nth-of-type(2) h3 {
        width: 350px;
        animation: slideMinutesHeadingThree 3.5s ease-in-out;
    }

    #minutes > div:last-of-type h3 {
        animation: slideMinutesHeadingThree2 4.5s ease-in-out;
        animation-delay: 3.5s;
    }

    #minutes > div:last-of-type p {
        top: 20%;
        max-width: 225px;
        font-size: 1em;
        text-align: center;
        white-space: nowrap;
        animation: slideMinutesOther 3.5s ease-in-out;
        animation-delay: 4.5s;
    }
    #minutes > div:last-of-type p strong {
        letter-spacing: 1.2px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--text-color-dark);
    }

    @keyframes slideMinutesHeadingThree {
        0% {
            top: 70%;
            opacity: 0;
        }
        20%,
        80% {
            top: 45%;
            opacity: 1;
        }
        100% {
            top: 16%;
            opacity: 0;
        }
    }
    @keyframes slideMinutesHeadingThree2 {
        0% {
            top: 70%;
            opacity: 0;
        }
        20% {
            top: 50%;
            opacity: 1;
        }
        40%,
        80% {
            top: 43%;
            opacity: 1;
        }
        100% {
            top: 16%;
            opacity: 0;
        }
    }
    @keyframes slideMinutesOther {
        0% {
            top: 75%;
            opacity: 0;
        }
        20%,
        80% {
            top: 53%;
            opacity: 1;
        }
        100% {
            top: 25%;
            opacity: 0;
        }
    }

    #artists {
        position: relative;
        padding: 8em 1.5em;
        background-color: var(--color-artists);
    }

    #artists ol {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        margin-top: 1.4em;
    }

    #artists li {
        position: relative;
        width: 100%;
        height: 50px;
    }

    #artists ol li > * {
        position: absolute;
    }

    #artists h3,
    #artists h4 {
        top: 50%;
        transform: translateY(-50%);
    }

    #artists h3 {
        left: 0;
        font-size: 2.2em;
        animation: h3Slide 2s ease-in-out;
        opacity: 1;
    }
    #artists li:nth-of-type(2) h3 {
        animation: h3Slide 2.4s ease-in-out;
    }
    #artists li:nth-of-type(3) h3 {
        animation: h3Slide 2.8s ease-in-out;
    }
    #artists li:nth-of-type(4) h3 {
        animation: h3Slide 3.2s ease-in-out;
    }
    #artists li:nth-of-type(5) h3 {
        animation: h3Slide 3.6s ease-in-out;
    }
    @keyframes h3Slide {
        0%,
        60% {
            left: -20%;
            transform: translateY(-50%);
            opacity: 0;
        }
        80% {
            opacity: 0.2;
        }
        90%,
        100% {
            left: 0;
            transform: translateY(-50%);
            opacity: 1;
        }
    }

    #artists h4 {
        left: calc(3em + 50px);
        font-size: 1em;
        animation: h4Slide 2s ease-in-out;
        opacity: 1;
    }
    #artists li:nth-of-type(2) h4 {
        animation: h4Slide 2.4s ease-in-out;
    }
    #artists li:nth-of-type(3) h4 {
        animation: h4Slide 2.8s ease-in-out;
    }
    #artists li:nth-of-type(4) h4 {
        animation: h4Slide 3.2s ease-in-out;
    }
    #artists li:nth-of-type(5) h4 {
        animation: h4Slide 3.6s ease-in-out;
    }
    @keyframes h4Slide {
        0%,
        60% {
            left: 1em;
            transform: translateY(-50%);
            opacity: 0;
        }
        80% {
            opacity: 0.2;
        }
        90%,
        100% {
            left: calc(3em + 50px);
            transform: translateY(-50%);
            opacity: 1;
        }
    }

    #artists img {
        left: 4em;
        width: 50px;
        transform: translateX(-50%) scale(1);
        animation: imgSlide 2s ease-in-out;
        z-index: 7;
    }
    #artists li:nth-of-type(2) img {
        animation: imgSlide 2.4s ease-in-out;
    }
    #artists li:nth-of-type(3) img {
        animation: imgSlide 2.8s ease-in-out;
    }
    #artists li:nth-of-type(4) img {
        animation: imgSlide 3.2s ease-in-out;
    }
    #artists li:nth-of-type(5) img {
        animation: imgSlide 3.6s ease-in-out;
    }

    @keyframes imgSlide {
        0% {
            left: 50%;
            transform: translateX(-50%) scale(0);
        }
        40% {
            left: 50%;
            transform: translateX(-50%) scale(1);
        }
        100% {
            left: 4em;
            transform: translateX(-50%) scale(1);
        }
    }

    #waiting {
        position: relative;
        background: rgb(219, 182, 4);
        background: var(--color-waiting);
        background-size: 300%;
        animation: moveBg 2.9s ease-in-out;
        animation-delay: 4.3s;
    }
    @keyframes moveBg {
        0%,
        30% {
            background-position: left;
        }
        50% {
            background-position: center;
        }
        70%,
        100% {
            background-position: right;
        }
    }

    #waiting h3,
    #waiting p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
    }

    #waiting h3 {
        top: 16%;
        width: 300px;
        font-size: 1.8em;
        line-height: 1em;
        text-align: center;
        animation: slideWaitingHeadingThree 4.5s ease-in-out;
    }

    #waiting p {
        top: 20%;
        max-width: 225px;
        font-size: 1em;
        text-align: center;
        white-space: nowrap;
        animation: slideWaitingOther 3.5s ease-in-out;
        animation-delay: 1s;
    }

    @keyframes slideWaitingHeadingThree {
        0% {
            top: 70%;
            opacity: 0;
        }
        20% {
            top: 50%;
            opacity: 1;
        }
        40%,
        80% {
            top: 43%;
            opacity: 1;
        }
        100% {
            top: 16%;
            opacity: 0;
        }
    }
    @keyframes slideWaitingOther {
        0% {
            top: 75%;
            opacity: 0;
        }
        20%,
        80% {
            top: 50%;
            opacity: 1;
        }
        100% {
            top: 25%;
            opacity: 0;
        }
    }

    #hero {
        position: relative;
        background-color: var(--color-hero);
    }

    #hero h3,
    #hero > div:last-of-type p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        color: var(--text-color-light);
    }

    #hero h3 {
        top: 16%;
        width: 300px;
        font-size: 1.8em;
        line-height: 1em;
        text-align: center;
    }

    #hero > div:first-of-type h3 {
        width: 350px;
        animation: slideHeroHeadingThree 3.5s ease-in-out;
    }

    #hero > div:last-of-type h3 {
        animation: slideHeroHeadingThree2 4.5s ease-in-out;
        animation-delay: 3.3s;
    }

    #hero > div:last-of-type p {
        top: 20%;
        font-size: 1em;
        text-align: center;
        white-space: nowrap;
        animation: slideHeroOther 3.5s ease-in-out;
        animation-delay: 4.3s;
    }

    @keyframes slideHeroHeadingThree {
        0% {
            top: 70%;
            opacity: 0;
        }
        20%,
        80% {
            top: 45%;
            opacity: 1;
        }
        100% {
            top: 16%;
            opacity: 0;
        }
    }
    @keyframes slideHeroHeadingThree2 {
        0% {
            top: 70%;
            opacity: 0;
        }
        20% {
            top: 44%;
            opacity: 1;
        }
        40%,
        80% {
            top: 36%;
            opacity: 1;
        }
        100% {
            top: 16%;
            opacity: 0;
        }
    }
    @keyframes slideHeroOther {
        0% {
            top: 75%;
            opacity: 0;
        }
        20%,
        80% {
            top: 53%;
            opacity: 1;
        }
        100% {
            top: 25%;
            opacity: 0;
        }
    }

    .star {
        right: -3%;
        bottom: -3%;
    }

    .star svg {
        width: 12em;
    }

    .star svg path {
        stroke-dasharray: 6700;
        stroke-dashoffset: 0;

        animation-name: drawPathStar, removePathStar;
        animation-duration: 6s, 2s;
        animation-delay: 0s, 6.5s;
        animation-timing-function: forwards, forwards;
    }

    @keyframes drawPathStar {
        0%,
        60% {
            stroke-dashoffset: 6700;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
    @keyframes removePathStar {
        to {
            stroke-dashoffset: 6700;
        }
    }
</style>
