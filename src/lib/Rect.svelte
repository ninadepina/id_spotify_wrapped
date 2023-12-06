
<div>
    <span class="rect" />
</div>

<style>
    div {
        position: relative;
    }

    .rect {
        position: absolute;
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
</style>
