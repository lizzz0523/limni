<template>
  <div class="teacup-loading">20%</div>
</template>

<style>
@keyframes move1 {
  0% {
    left: 0;
  }
  100% {
    left: -80px;
  }
}
@keyframes move2 {
  0% {
    left: -20px;
  }
  100% {
    left: -100px;
  }
}
.teacup-loading {
  position: relative;
  display: flex;
  justify-content: center;
  border: 4px solid rgb(30, 29, 20);
  border-radius: 0 0 16px 16px;
  border-top-width: 0;
  width: 40px;
  height: 40px;
  background-color: #fff3da;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  overflow: hidden;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  color: rgb(30, 29, 20);
  transform: translateZ(0);
}
.teacup-loading::before,
.teacup-loading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 160px;
  height: 20px;
  clip-path: polygon(
    0% 20%,
    2% 18%,
    3% 16%,
    5% 14%,
    7% 13%,
    8% 11%,
    10% 10%,
    12% 10%,
    13% 10%,
    15% 10%,
    17% 11%,
    18% 13%,
    20% 14%,
    22% 16%,
    23% 18%,
    25% 20%,
    27% 22%,
    28% 24%,
    30% 26%,
    32% 27%,
    33% 29%,
    35% 30%,
    37% 30%,
    38% 30%,
    40% 30%,
    42% 29%,
    43% 27%,
    45% 26%,
    47% 24%,
    48% 22%,
    50% 20%,
    52% 18%,
    53% 16%,
    55% 14%,
    57% 13%,
    58% 11%,
    60% 10%,
    62% 10%,
    63% 10%,
    65% 10%,
    67% 11%,
    68% 13%,
    70% 14%,
    72% 16%,
    73% 18%,
    75% 20%,
    77% 22%,
    78% 24%,
    80% 26%,
    82% 27%,
    83% 29%,
    85% 30%,
    87% 30%,
    88% 30%,
    90% 30%,
    92% 29%,
    93% 27%,
    95% 26%,
    97% 24%,
    98% 22%,
    100% 20%,
    100% 100%,
    0% 100%
  );
}
.teacup-loading::before {
  background-color: rgb(255, 214, 125);
  animation: move1 infinite 6s linear;
}
.teacup-loading::after {
  background-color: rgb(255, 174, 0);
  animation: move2 infinite 2s linear;
}
</style>
