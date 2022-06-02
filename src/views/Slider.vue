<template>
  <div class="slider">
    <div class="item" v-for="(item, index) in img" :key="index">
      <img class="item" v-show="sliderIndex == index" :src="item.url" />
    </div>
    <a class="previous" @click="previousSlide()">&#10094;</a>
    <a class="next" @click="nextSlide()">&#10095;</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderIndex: 0,
      img: [
        {
          id: 0,
          url: "https://proumnyjdom.ru/wp-content/uploads/2019/06/1365401196_teplye-oboi-1-1024x557.jpeg",
        },
        {
          id: 1,
          url: "https://www.passion.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/03/24/16/5323877/30c1e09df2ea3734f0635eb503b486865d338c36.jpg",
        },
        {
          id: 2,
          url: "https://img3.akspic.ru/previews/1/0/5/6/6/166501/166501-mikael_gustafsson_malenkaya_pamyat-oblako-rastenie-atmosfera-voda-550x310.jpg",
        },
      ],
      showImg: true,
    };
  },
  watch: {},
  methods: {
    previousSlide() {
      if (this.sliderIndex == 0) {
        this.sliderIndex = 2;
      } else {
        this.sliderIndex -= 1;
      }
      console.log(this.sliderIndex);
    },
    nextSlide() {
      if (this.sliderIndex == 2) {
        this.sliderIndex = 0;
      } else {
        this.sliderIndex += 1;
      }

      console.log(this.sliderIndex);
    },
  },
};
</script>

  <style>
.slider {
  max-width: 90%;
  position: relative;
  margin: auto;
  height: 300px;
}

.slider .item img {
  object-fit: cover;
  width: 100%;
  height: 300px;
}

.slider .previous,
.slider .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  transition: 0.6s ease;
  /* Скругление границ: */
  border-radius: 0 3px 3px 0;
}
.slider .next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.slider .previous:hover,
.slider .next:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.slider .item {
  animation-name: fade;
  animation-duration: 1.5s;
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>