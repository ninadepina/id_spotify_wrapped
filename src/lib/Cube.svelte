<script>
    export let numCubes = 5;
</script>

<span>
    <img src="bread.png" alt="" />
    {#each Array(numCubes) as _, i}
        <span class="scene" key={i}>
            <span class="cube">
                <span class="cube__face cube__face--front" />
                <span class="cube__face cube__face--right" />
            </span>
        </span>
    {/each}
    <img src="bread.png" alt="" />
</span>

<style>
    span.scene,
    img {
        position: absolute;
    }
    span.scene,
    .scene span {
        display: inline-block;
    }

    img {
        width: 18em;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 500px) {
        img {
            left: 51%;
        }
    }
    img:first-of-type {
        top: 48.6%;

        animation-name: img1, img1Move;
        animation-duration: 3s, 0.7s;
        animation-delay: 0s, 3s;
        animation-timing-function: linear, linear;
    }
    @keyframes img1 {
        0% {
            top: 109%;
            left: 70%;
            width: 8em;
        }
        20% {
            top: 109%;
            left: 70%;
            width: 8em;
        }
        70% {
            top: 60%;
            left: 42%;
            width: 14em;
        }
        100% {
            top: 48.6%;
            left: 51%;
            width: 18em;
        }
    }
    @keyframes img1Move {
        0% {
            top: 48.6%;
        }
        30% {
            top: 53%;
        }
        50% {
            top: 53%;
        }
        100% {
            top: 32%;
        }
    }

    img:last-of-type {
        top: 25.8%;

        animation-name: img2, img2Move;
        animation-duration: 3s, 0.7s;
        animation-delay: 0s, 3s;
        animation-timing-function: linear, linear;
    }
    @keyframes img2 {
        0% {
            top: -38%;
            left: 70%;
            width: 28em;
        }
        30% {
            top: -38%;
            left: 70%;
            width: 28em;
        }
        80% {
            top: 12%;
            left: 40%;
            width: 22em;
        }
        100% {
            top: 25.8%;
            left: 51%;
            width: 18em;
        }
    }
    @keyframes img2Move {
        0% {
            top: 25.8%;
        }
        30% {
            top: 22%;
        }
        50% {
            top: 22%;
        }
        100% {
            top: 32%;
        }
    }

    .scene {
        left: 50%;
        width: 200px;
        height: 50px;
        /* border: 1px solid #ccc; */
        perspective: 108px;
        transform: translateX(-50%) scale(1.5);
        /* animation: squish 1s infinite alternate; */
    }
    .scene:first-of-type {
        top: 52%;

        animation-name: scene1, scene1Move;
        animation-duration: 3s, 0.7s;
        animation-delay: 0s, 3s;
        animation-timing-function: linear, linear;
    }
    @keyframes scene1 {
        0% {
            top: 106%;
            left: 65%;
            transform: translateX(-50%) scale(1);
        }
        20% {
            top: 106%;
            left: 65%;
            transform: translateX(-50%) scale(1);
        }
        50% {
            top: 70%;
            left: 35%;
            transform: translateX(-50%) scale(1.2);
        }
        80% {
            top: 50%;
            left: 48%;
            transform: translateX(-50%) scale(1.5);
        }
        100% {
            top: 52%;
            transform: translateX(-50%) scale(1.5);
        }
    }
    @keyframes scene1Move {
        0% {
            top: 52%;
            height: 50px;
        }
        30% {
            top: 58%;
            height: 50px;
        }
        50% {
            top: 58%;
            height: 50px;
        }
        100% {
            top: 46%;
            height: 0px;
        }
    }

    .scene:nth-of-type(2) {
        top: 49%;

        animation-name: scene2, scene2Move;
        animation-duration: 2.5s, 0.7s;
        animation-delay: 0s, 3s;
        animation-timing-function: linear, linear;
    }
    @keyframes scene2 {
        0% {
            top: 106%;
            left: 65%;
            transform: translateX(-50%) scale(1);
        }
        5% {
            top: 106%;
            left: 65%;
            transform: translateX(-50%) scale(1);
        }
        40% {
            top: 70%;
            left: 35%;
            transform: translateX(-50%) scale(1.2);
        }
        80% {
            top: 47%;
            left: 48%;
            transform: translateX(-50%) scale(1.5);
        }
        100% {
            top: 49%;
            transform: translateX(-50%) scale(1.5);
        }
    }
    @keyframes scene2Move {
        0% {
            top: 49%;
            height: 50px;
        }
        30% {
            top: 53%;
            height: 50px;
        }
        50% {
            top: 53%;
            height: 50px;
        }
        100% {
            top: 46%;
            height: 0px;
        }
    }

    .scene:nth-of-type(3) {
        top: 46%;

        animation-name: scene3, scene3Move;
        animation-duration: 2s, 0.7s;
        animation-delay: 0s, 3s;
        animation-timing-function: linear, linear;
    }
    @keyframes scene3 {
        0% {
            top: 106%;
            left: 65%;
            transform: translateX(-50%) scale(1);
        }
        30% {
            top: 70%;
            left: 35%;
            transform: translateX(-50%) scale(1.2);
        }
        80% {
            top: 44%;
            left: 48%;
            transform: translateX(-50%) scale(1.5);
        }
        100% {
            top: 46%;
            transform: translateX(-50%) scale(1.5);
        }
    }
    @keyframes scene3Move {
        0% {
            top: 46%;
            height: 50px;
        }
        30% {
            top: 48%;
            height: 50px;
        }
        50% {
            top: 48%;
            height: 50px;
        }
        100% {
            top: 46%;
            height: 0px;
        }
    }

    .scene:nth-of-type(4) {
        top: 43%;

        animation-name: scene4, scene4Move;
        animation-duration: 2s, 0.7s;
        animation-delay: 0s, 3s;
        animation-timing-function: linear, linear;
    }
    @keyframes scene4 {
        0% {
            top: -21%;
            left: 62%;
            transform: translateX(-50%) scale(2.1);
        }
        30% {
            top: 4%;
            left: 30%;
            transform: translateX(-50%) scale(2.5);
        }
        80% {
            top: 36%;
            left: 42%;
            transform: translateX(-50%) scale(1.6);
        }
        100% {
            top: 43%;
            transform: translateX(-50%) scale(1.5);
        }
    }
    @keyframes scene4Move {
        0% {
            top: 43%;
            height: 50px;
        }
        30% {
            top: 43%;
            height: 50px;
        }
        50% {
            top: 43%;
            height: 50px;
        }
        100% {
            top: 46%;
            height: 0px;
        }
    }

    .scene:nth-of-type(5) {
        top: 40%;

        animation-name: scene5, scene5Move;
        animation-duration: 3s, 0.7s;
        animation-delay: 0s, 3s;
        animation-timing-function: linear, linear;
    }
    @keyframes scene5 {
        0% {
            top: -21%;
            left: 62%;
            transform: translateX(-50%) scale(2.1);
        }
        20% {
            top: -21%;
            left: 62%;
            transform: translateX(-50%) scale(2.1);
        }
        42% {
            top: 4%;
            left: 28%;
            transform: translateX(-50%) scale(2.5);
        }
        80% {
            top: 37%;
            left: 45%;
            transform: translateX(-50%) scale(1.6);
        }
        100% {
            top: 40%;
            transform: translateX(-50%) scale(1.5);
        }
    }
    @keyframes scene5Move {
        0% {
            top: 40%;
            height: 50px;
        }
        30% {
            top: 38%;
            height: 50px;
        }
        50% {
            top: 38%;
            height: 50px;
        }
        100% {
            top: 46%;
            height: 0px;
        }
    }

    .cube {
        width: 200px;
        height: 50px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 1s;
        transform: translateZ(-75px) rotateY(-45deg);
    }

    .cube__face {
        position: absolute;
        width: 200px;
        height: 50px;
        line-height: 200px;
        font-size: 40px;
        font-weight: bold;
        color: white;
        text-align: center;
        animation: heightChange 0.7s linear;
        animation-delay: 3s;
    }
    .scene:first-of-type .cube__face {
        background-color: #9f6fe0;
        border: 1px solid #9f6fe0;
    }
    .scene:nth-of-type(2) .cube__face {
        background-color: #ff7431;
        border: 1px solid #ff7431;
    }
    .scene:nth-of-type(3) .cube__face {
        background-color: #15b8fe;
        border: 1px solid #15b8fe;
    }
    .scene:nth-of-type(4) .cube__face {
        background-color: #c3f36a;
        border: 1px solid #c3f36a;
    }
    .scene:nth-of-type(5) .cube__face {
        background-color: #e83f4d;
        border: 1px solid #e83f4d;
    }

    .cube__face--front {
        transform: rotateY(0deg) translateZ(99.6px);
    }
    .cube__face--right {
        transform: rotateY(90deg) translateZ(100px);
    }

    @keyframes heightChange {
        0% {
            height: 50px;
        }
        30% {
            height: 50px;
        }
        50% {
            height: 50px;
        }
        100% {
            height: 0px;
        }
    }
</style>
