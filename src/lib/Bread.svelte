<script>
    import { onMount } from 'svelte';

    let outerDiv;

    onMount(() => {
        outerDiv.style.display = 'none';
        setTimeout(() => {
            outerDiv.style.display = 'flex';
        }, 3700);
        setTimeout(() => {
            outerDiv.style.display = 'none';
        }, 7000);
    });

    let images = [
        'bread2.png',
        'bread6.png',
        'bread3.png',
        'bread4.png',
        'bread5.png',
        'bread2.png',
        'bread6.png',
        'bread3.png',
        'bread4.png',
        'bread5.png',
        'bread3.png'
    ];

    $: animatedImages = images.map((image, index) => ({
        src: image,
        style: `animation-delay: ${index * 0.3}s`,
        key: `${image}-${index}`
    }));
</script>

<div class="slider" bind:this={outerDiv}>
    {#each animatedImages as { src, style, key }}
        <img {src} alt="" {style} {key} />
    {/each}
</div>

<style>
    .slider {
        position: relative;
        height: 100%;
    }

    .slider img {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 18em;
        animation: showBread 0.3s;
        opacity: 0;
    }
    @keyframes showBread {
        to {
            opacity: 1;
        }
    }
</style>
