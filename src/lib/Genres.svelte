<script>
    import { onMount } from 'svelte';

    let outerDiv;

    onMount(() => {
        if (outerDiv) {
            outerDiv.style.display = 'none';
            setTimeout(() => {
                outerDiv.style.display = 'flex';
            }, 7000);
        }
    });
</script>

<div class="showGenres" bind:this={outerDiv}>
    <div>
        <h3>Our top genres</h3>
        <p>Delicious.</p>
    </div>
    <div>
        <img src="bread3.png" alt="" />
        <div class="layers">
            <span>
                <p>Genre</p>
                <svg class="lettuce" viewBox="0 0 1467 99" fill="none">
                    <path
                        d="M605.902 0C666.402 0 665.902 58 730.902 58V98.5H44.8984C33.7328 93.1667 10.5016 82 6.90159 80C2.40159 77.5 -10.0984 61.5 16.4016 51C42.9016 40.5 54.8984 4 100.902 4C175.902 4 156.902 61.5 225.402 61.5C293.902 61.5 296.402 0 356.402 0C416.402 0 407.402 58 479.902 61.5C552.402 65 545.402 0 605.902 0Z"
                        fill="url(#paint0_radial_669_28)"
                    />
                    <path
                        d="M1465.9 61C1468.7 72.6 1423.73 90.8333 1400.9 98.5H730.898V58C795.898 58 794.898 0 855.898 0C916.898 0 928.898 62 992.398 58C1055.9 54 1042.9 0 1108.9 0C1174.9 0 1179.9 61 1232.4 61C1284.9 61 1324.9 0 1361.9 0C1398.9 0 1407.4 15.5 1429.4 31.5C1451.4 47.5 1462.4 46.5 1465.9 61Z"
                        fill="url(#paint1_radial_669_28)"
                    />
                    <defs>
                        <radialGradient
                            id="paint0_radial_669_28"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(712.5 17.4998) rotate(149.688) scale(701.389 10439.1)"
                        >
                            <stop stop-color="#00B94A" />
                            <stop offset="0.173492" stop-color="#0C3523" />
                            <stop offset="0.339699" stop-color="#00A541" />
                            <stop offset="0.515129" stop-color="#0E3520" />
                            <stop offset="0.67921" stop-color="#00A03E" />
                            <stop offset="0.865397" stop-color="#102E22" />
                            <stop offset="0.997921" stop-color="#005F2F" />
                        </radialGradient>
                        <radialGradient
                            id="paint1_radial_669_28"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(712.5 17.5002) rotate(-153.815) scale(708.178 10540.2)"
                        >
                            <stop stop-color="#01B248" />
                            <stop offset="0.0444557" stop-color="#00B94A" />
                            <stop offset="0.173492" stop-color="#0C3523" />
                            <stop offset="0.339699" stop-color="#00A541" />
                            <stop offset="0.515129" stop-color="#0E3520" />
                            <stop offset="0.67921" stop-color="#00A03E" />
                            <stop offset="0.865397" stop-color="#102E22" />
                            <stop offset="0.997921" stop-color="#005F2F" />
                        </radialGradient>
                    </defs>
                </svg>
            </span>
            <span><p>Genre</p></span>
            <span>
                <p>Genre</p>
                <svg class="cheese" viewBox="0 0 1418 78" fill="none">
                    <path
                        d="M0 20L23.5 0H491.5L511.5 20C430.833 39.3333 267.3 78 258.5 78C249.7 78 82.5 39.3333 0 20Z"
                        fill="url(#paint0_radial_669_20)"
                    />
                    <path
                        d="M906 20L929.5 0H1397.5L1417.5 20C1336.83 39.3333 1173.3 78 1164.5 78C1155.7 78 988.5 39.3333 906 20Z"
                        fill="url(#paint1_radial_669_20)"
                    />
                    <path
                        d="M437 20L460.5 0H928.5L948.5 20C867.833 39.3333 704.3 78 695.5 78C686.7 78 519.5 39.3333 437 20Z"
                        fill="url(#paint2_radial_669_20)"
                    />
                    <defs>
                        <radialGradient
                            id="paint0_radial_669_20"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(255.75 39) rotate(64.8167) scale(213.271 1398.57)"
                        >
                            <stop stop-color="#FFA001" />
                            <stop offset="0.317707" stop-color="#FFDF16" />
                            <stop offset="0.598959" stop-color="#FFA402" />
                            <stop offset="1" stop-color="#FFDF16" />
                        </radialGradient>
                        <radialGradient
                            id="paint1_radial_669_20"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(1161.75 39) rotate(64.8167) scale(213.271 1398.57)"
                        >
                            <stop stop-color="#FFA001" />
                            <stop offset="0.317707" stop-color="#FFDF16" />
                            <stop offset="0.598959" stop-color="#FFA402" />
                            <stop offset="1" stop-color="#FFDF16" />
                        </radialGradient>
                        <radialGradient
                            id="paint2_radial_669_20"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(692.75 39) rotate(64.8167) scale(213.271 1398.57)"
                        >
                            <stop stop-color="#FFA001" />
                            <stop offset="0.317707" stop-color="#FFDF16" />
                            <stop offset="0.598959" stop-color="#FFA402" />
                            <stop offset="1" stop-color="#FFDF16" />
                        </radialGradient>
                    </defs>
                </svg>
            </span>
            <span>
                <p>Genre</p>
                <svg class="tomato" viewBox="0 0 1456 74" fill="none">
                    <path
                        d="M884 63V16C934.333 10.6667 1063.7 0 1178.5 0C1293.3 0 1411.33 10.6667 1456 16V63C1421 66 1316.5 72.2 1178.5 73C1040.5 73.8 924.667 66.6667 884 63Z"
                        fill="url(#paint0_radial_669_24)"
                    />
                    <path
                        d="M0 63V16C50.3333 10.6667 179.7 0 294.5 0C409.3 0 527.333 10.6667 572 16V63C537 66 432.5 72.2 294.5 73C156.5 73.8 40.6667 66.6667 0 63Z"
                        fill="url(#paint1_radial_669_24)"
                    />
                    <path
                        d="M433 63V16C483.333 10.6667 612.7 0 727.5 0C842.3 0 960.333 10.6667 1005 16V63C970 66 865.5 72.2 727.5 73C589.5 73.8 473.667 66.6667 433 63Z"
                        fill="url(#paint2_radial_669_24)"
                    />
                    <defs>
                        <radialGradient
                            id="paint0_radial_669_24"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(1170 36.5311) rotate(0.0894185) scale(300.5 2352.61)"
                        >
                            <stop stop-color="#DA0000" />
                            <stop offset="0.494792" stop-color="#FF857A" />
                            <stop offset="1" stop-color="#DA0000" />
                        </radialGradient>
                        <radialGradient
                            id="paint1_radial_669_24"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(286 36.5311) rotate(0.0894185) scale(300.5 2352.61)"
                        >
                            <stop stop-color="#DA0000" />
                            <stop offset="0.494792" stop-color="#FF857A" />
                            <stop offset="1" stop-color="#DA0000" />
                        </radialGradient>
                        <radialGradient
                            id="paint2_radial_669_24"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(719 36.5311) rotate(0.0894185) scale(300.5 2352.61)"
                        >
                            <stop stop-color="#DA0000" />
                            <stop offset="0.494792" stop-color="#FF857A" />
                            <stop offset="1" stop-color="#DA0000" />
                        </radialGradient>
                    </defs>
                </svg>
            </span>
            <span><p>Genre</p></span>
        </div>
        <img src="bread3.png" alt="" />
    </div>
</div>

<style>
    .showGenres {
        position: relative;
        height: 100%;
    }

    .showGenres,
    .showGenres .layers {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .showGenres {
        gap: 10%;
    }

    .showGenres > div > img {
        width: 18em;
        height: 2.13em;
        object-fit: cover;
        object-position: top;
    }
    .showGenres > div > img:first-of-type {
        margin-bottom: -0.22em;
    }
    .showGenres > div > img:last-of-type {
        object-position: bottom;
    }

    #genres .showGenres .layers > span {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17em;
    }
    #genres .showGenres .layers > span:first-of-type {
        --height: 4.6em;

        height: var(--height);
        background: linear-gradient(180deg, #f64b39 0%, #5707e2 100%);

        animation-name: openBread, heightSpan1;
        animation-duration: 1s, 4s;
        animation-delay: 0s, 1s;
        animation-timing-function: linear, linear;
    }
    @keyframes heightSpan1 {
        0%,
        100% {
            height: var(--height);
        }
        25% {
            height: 2em;
        }
        50% {
            height: 7em;
        }
        75% {
            height: 2em;
        }
    }

    #genres .showGenres .layers > span:nth-of-type(2) {
        --height: 4.2em;

        height: var(--height);
        background: linear-gradient(180deg, #2cd669 0%, #d0f46c 100%);

        animation-name: openBread, heightSpan2;
        animation-duration: 1s, 4s;
        animation-delay: 0s, 1s;
        animation-timing-function: linear, linear;
    }
    @keyframes heightSpan2 {
        0%,
        100% {
            height: var(--height);
        }
        25% {
            height: 7em;
        }
        50% {
            height: 5em;
        }
        75% {
            height: 2em;
        }
    }

    #genres .showGenres .layers > span:nth-of-type(3) {
        --height: 3.8em;

        height: var(--height);
        background: linear-gradient(180deg, #4122ec 0%, #11d1fe 100%);

        animation-name: openBread, heightSpan3;
        animation-duration: 1s, 4s;
        animation-delay: 0s, 1s;
        animation-timing-function: linear, linear;
    }
    @keyframes heightSpan3 {
        0%,
        100% {
            height: var(--height);
        }
        25% {
            height: 2em;
        }
        50% {
            height: 2em;
        }
        75% {
            height: 6em;
        }
    }

    #genres .showGenres .layers > span:nth-of-type(4) {
        --height: 3.4em;

        height: var(--height);
        background: linear-gradient(180deg, #ff9331 0%, #ff4b30 100%);

        animation-name: openBread, heightSpan4;
        animation-duration: 1s, 4s;
        animation-delay: 0s, 1s;
        animation-timing-function: linear, linear;
    }
    @keyframes heightSpan4 {
        0%,
        100% {
            height: var(--height);
        }
        25% {
            height: 5em;
        }
        50% {
            height: 2em;
        }
        75% {
            height: 3em;
        }
    }

    #genres .showGenres .layers > span:nth-of-type(5) {
        --height: 3em;

        height: var(--height);
        background: linear-gradient(180deg, #b08ce6 0%, #a92f86 100%);

        animation-name: openBread, heightSpan5;
        animation-duration: 1s, 4s;
        animation-delay: 0s, 1s;
        animation-timing-function: linear, linear;
    }
    @keyframes heightSpan5 {
        0%,
        100% {
            height: var(--height);
        }
        25% {
            height: 3em;
        }
        50% {
            height: 3em;
        }
        75% {
            height: 6em;
        }
    }

    @keyframes openBread {
        from {
            height: 0;
        }
        to {
            height: var(--height);
        }
    }

    #genres .showGenres .layers > span p {
        position: relative;
        top: 0;
        font-size: 1.4em;
        opacity: 1;
        animation: showText 6s linear;
    }
    @keyframes showText {
        0%,
        20%,
        40%,
        60%,
        80% {
            top: 30%;
            opacity: 0;
        }
        90% {
            top: 0;
        }
        100% {
            top: 0;
            opacity: 1;
        }
    }

    #genres .showGenres .layers > span svg {
        position: absolute;
        width: 18em;
        animation: showIngredients 0.6s linear;
    }
    #genres .showGenres .layers > span svg.lettuce {
        bottom: -0.1em;
    }
    #genres .showGenres .layers > span svg.cheese {
        top: 0;
    }
    #genres .showGenres .layers > span svg.tomato {
        top: -0.2em;
    }

    @keyframes showIngredients {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #genres .showGenres h3 {
        position: relative;
        margin-bottom: 0.5em;
        font-size: 1.8em;
        font-weight: 400;
        color: var(--text-color-light);
        opacity: 1;
        animation: showText 6s linear;
    }
    #genres .showGenres div > p {
        position: relative;
        font-size: 1.4em;
        text-align: center;
        color: var(--text-color-light);
        opacity: 1;
        animation: showText 6s linear;
    }
</style>
